import React, { useRef, useState, FunctionComponent, useCallback, FormEventHandler } from 'react';

import { useSpring } from 'react-spring';
import TextField from '@material-ui/core/TextField';
import { ModalBodyWrapper, StyledModal, Wrapper, StyledButton } from './Wrapper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CountryType, countries } from 'country';
import { axios } from 'globalFunc';

interface Props {
	should_open: boolean;
	set_should_open: Function;
}

export const SignUpModal: FunctionComponent<Props> = ({ should_open, set_should_open }) => {
	const spring_info = useSpring({
		opacity: 1,
		to: { opacity: should_open ? 1 : 0 },
	});

	const [password_err, set_password_err] = useState(false);

	// ISO 3166-1 alpha-2
	// ⚠️ No support for IE 11
	const countryToFlag = useCallback((isoCode: string) => {
		return typeof String.fromCodePoint !== 'undefined'
			? isoCode.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
			: isoCode;
	}, []);

	// FormEventHandler<HTMLButtonElement>
	const validation = useCallback((e) => {
		e.preventDefault();
		const formData: FormData = new FormData(e.target);
		if ((formData.get('password') as string).length < 5) {
			set_password_err(true);
			return;
		}
		set_password_err(false);

		axios.post('/auth/signup', Object.fromEntries(formData));

		//todo alert about result. then alert it.
	}, []);

	return (
		<Wrapper style={spring_info}>
			<StyledModal
				className='login_modal'
				open={should_open}
				onClose={() => set_should_open(false)}
				aria-labelledby='simple-modal-title'
				aria-describedby='simple-modal-description'>
				<ModalBodyWrapper style={spring_info}>
					<form onSubmit={validation}>
						<div className='item1'>
							<TextField label='First Name' name='first_name' type='text' autoFocus required />
							<TextField label='Last Name' name='last_name' type='text' required />
						</div>
						<br />
						<TextField label='ID' name='id' type='text' required />
						<br />
						<TextField
							label='Password (6 character or more)'
							type='password'
							name='password'
							error={password_err}
							autoComplete='current-password'
							required
						/>
						<br />
						<br />
						<TextField label='E-Mail' required type='email' name='email' />
						<br />
						<TextField label='Mobile' required type='text' name='mobile' />
						<br />
						<Autocomplete
							options={countries as CountryType[]}
							autoHighlight
							getOptionLabel={(option) => option.label}
							renderOption={(option) => (
								<>
									<span>{countryToFlag(option.code)}</span>
									{option.label} ({option.code}) +{option.phone}
								</>
							)}
							renderInput={(params) => (
								<TextField
									{...params}
									label='Choose a country'
									name='country'
									required
									inputProps={{
										...params.inputProps,
										autoComplete: 'new-password', // disable autocomplete and autofill
									}}
								/>
							)}
						/>
						<br />
						<br />
						<StyledButton type='submit'>SIGN UP</StyledButton>
					</form>

					<br />
					<br />
					<br />
					<br />
					<StyledButton
						onClick={() => {
							set_should_open(false);
						}}>
						CLOSE
					</StyledButton>
				</ModalBodyWrapper>
			</StyledModal>
		</Wrapper>
	);
};
