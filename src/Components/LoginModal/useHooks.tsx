import { useCallback, useState } from 'react';
import { useSpring } from 'react-spring';
import { useSetRecoilState } from 'recoil';
import { user_info_state, alert_state } from 'globalState';
import { axios } from 'globalFunc';
import { Props } from './index';

export const useHooks = ({ should_open, set_should_open }: Props) => {
	const [should_open_sign_modal, set_should_open_sign_modal] = useState(false);
	const [password_err, set_password_err] = useState(false);
	const [id_err, set_id_err] = useState(false);
	const set_user_info = useSetRecoilState(user_info_state);
	const set_alert_state = useSetRecoilState(alert_state);

	const spring_info = useSpring({
		opacity: 1,
		to: { opacity: should_open ? 1 : 0 },
	});

	const doLogin = useCallback((e) => {
		e.preventDefault();
		set_password_err(false);
		set_id_err(false);

		const formData: FormData = new FormData(e.target);

		// todo name validation, phone number auto insert - and validation
		if ((formData.get('password') as string).length < 5) {
			set_password_err(true);
			return;
		} else {
			axios
				.post('/auth/login', Object.fromEntries(formData))
				.then(({ data }) => {
					if (data?.message) {
						if ('id'.match(data?.message)) {
							set_alert_state({
								visible: true,
								message: 'no matched id',
								severity: 'error',
							});
							set_id_err(true);
							return;
						}
						if ('password'.match(data?.message)) {
							set_alert_state({
								visible: true,
								message: 'incorrect password',
								severity: 'error',
							});
							set_password_err(true);
							return;
						}
						set_alert_state({
							visible: true,
							message: data?.message,
							severity: 'error',
						});
						return;
					}
					set_user_info(data);
					set_alert_state({
						visible: true,
						message: 'Welcome!',
						severity: 'success',
					});
					set_should_open(false);
					//todo save loggin info to localstorage to manage
					return;
				})
				.catch(() => {
					// todo receive error meesage
					return;
				});
		}
	}, []);

	return {
		spring_info,
		should_open_sign_modal,
		password_err,
		id_err,
		func: {
			doLogin,
			set_should_open_sign_modal,
		},
	};
};
