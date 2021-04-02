import { useCallback, useState } from 'react';
import { useSpring } from 'react-spring';

import { axios } from 'globalFunc';
import { Props } from './index';
import { alert_state } from 'globalState';
import { useSetRecoilState } from 'recoil';

export const useHooks = ({ set_should_open, should_open }: Props) => {
	const [password_err, set_password_err] = useState(false);
	const [first_name_err, set_first_name_err] = useState(false);
	const [last_name_err, set_last_name_err] = useState(false);
	const [id_err, set_id_err] = useState(false);
	const [email_err, set_email_err] = useState(false);

	const spring_info = useSpring({
		opacity: 1,
		to: { opacity: should_open ? 1 : 0 },
	});

	const set_alert_state = useSetRecoilState(alert_state);

	// ISO 3166-1 alpha-2
	// ⚠️ No support for IE 11
	const countryToFlag = useCallback((isoCode: string) => {
		return typeof String.fromCodePoint !== 'undefined'
			? isoCode.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
			: isoCode;
	}, []);
	const validation = useCallback((e) => {
		e.preventDefault();
		set_password_err(false);
		set_last_name_err(false);
		set_first_name_err(false);
		set_id_err(false);
		set_email_err(false);

		const formData: FormData = new FormData(e.target);
		if ((formData.get('password') as string).length < 5) {
			set_password_err(true);
			return;
		}

		if (!/^[a-zA-Z]+$/.test(formData.get('first_name') as string)) {
			set_first_name_err(true);
			return;
		}

		if (!/^[a-zA-Z]+$/.test(formData.get('last_name') as string)) {
			set_last_name_err(true);
			return;
		}

		axios.post('/auth/signup', Object.fromEntries(formData)).then(({ data }) => {
			if (data?.message) {
				if ('id'.match(data?.message)) {
					set_alert_state({
						message: 'duplicated id',
						severity: 'error',
						visible: true,
					});
					set_id_err(true);
					return;
				}

				if ('email'.match(data?.message)) {
					set_alert_state({
						message: 'duplicated email',
						severity: 'error',
						visible: true,
					});
					set_email_err(true);
					return;
				}
			}
			set_alert_state({
				message: 'Sign Up complete!',
				severity: 'success',
				visible: true,
			});
			set_should_open(false);
		});

		//todo alert about result. then alert it.
	}, []);

	return {
		password_err,
		first_name_err,
		last_name_err,
		spring_info,
		email_err,
		id_err,
		func: { validation, countryToFlag },
	};
};
