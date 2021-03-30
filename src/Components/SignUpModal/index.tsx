import React, { useRef, useState, FunctionComponent, useCallback, FormEventHandler } from 'react';

import { useSpring } from 'react-spring';
import TextField from '@material-ui/core/TextField';
import { ModalBodyWrapper, StyledModal, Wrapper, StyledButton } from './Wrapper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CountryType, countries } from 'country';

interface Props {
	should_open: boolean;
	set_should_open: Function;
}

export const SignUpModal: FunctionComponent<Props> = ({ should_open, set_should_open }) => {
	const spring_info = useSpring({
		opacity: 1,
		to: { opacity: should_open ? 1 : 0 },
	});

	const [first_name, set_first_name] = useState('');
	const [last_name, set_last_name] = useState('');
	const [id, set_id] = useState('');
	const [password, set_password] = useState('');
	const [email, set_email] = useState('');
	const [country_code, set_country_code] = useState('');

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
		const formData: any = new FormData(e.target);

		for (var [key, value] of formData.entries()) {
			console.log(key, value);
		}
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
							<TextField
								onChange={({ target: { value } }) => set_first_name(value)}
								label='First Name'
								name='First Name'
								type='text'
								id='First Name'
								error={first_name === ''}
								autoFocus
								required
							/>
							<TextField
								onChange={({ target: { value } }) => set_last_name(value)}
								label='Last Name'
								name='Last Name'
								id='Last Name'
								type='text'
								error={last_name === ''}
								required
							/>
						</div>
						<br />
						<TextField
							label='ID'
							name='ID'
							id='ID'
							type='text'
							required
							error={id === ''}
							onChange={({ target: { value } }) => set_id(value)}
						/>
						<br />
						<TextField
							label='Password (6 character or more)'
							type='password'
							id='password'
							name='password'
							autoComplete='current-password'
							error={password === ''}
							onChange={({ target: { value } }) => set_password(value)}
							required
						/>
						<br />
						<br />
						<TextField
							label='E-Mail'
							required
							type='email'
							id='E-Mail'
							name='E-Mail'
							error={email === ''}
							onChange={({ target: { value } }) => set_email(value)}
						/>
						<br />
						<br />
						<Autocomplete
							options={countries as CountryType[]}
							autoHighlight
							onChange={(e: any, { code }: any) => set_country_code(code)}
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
									id='coutnry'
									name='coutnry'
									required
									error={country_code === ''}
									// error={country_error}
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
