import React, { useState, FunctionComponent, useCallback } from 'react';

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

	const [form_info, set_form_info] = useState({
		first_name: '',
		last_name: '',
		id: '',
		password: '',
		email: '',
		country_code: '',
	});
	const [form_error, set_form_error] = useState({
		first_name_error: false,
		last_name_error: false,
		id_error: false,
		password_error: false,
		email_error: false,
		country_code_error: false,
	});

	// ISO 3166-1 alpha-2
	// ⚠️ No support for IE 11

	const countryToFlag = useCallback((isoCode: string) => {
		return typeof String.fromCodePoint !== 'undefined'
			? isoCode.toUpperCase().replace(/./g, (char) => String.fromCodePoint(char.charCodeAt(0) + 127397))
			: isoCode;
	}, []);

	const validate = useCallback(() => {}, []);

	const { first_name } = form_info;
	const {
		country_code_error: country_error,
		email_error,
		first_name_error,
		id_error,
		last_name_error,
		password_error,
	} = form_error;
	return (
		<Wrapper style={spring_info}>
			<StyledModal
				className='login_modal'
				open={should_open}
				onClose={() => set_should_open(false)}
				aria-labelledby='simple-modal-title'
				aria-describedby='simple-modal-description'>
				<ModalBodyWrapper style={spring_info}>
					<div className='item1'>
						<TextField
							onChange={({ target: { value } }) => {
								if (value.length > 1) {
									set_form_info({ ...form_info, first_name: value });
									set_form_error({ ...form_error, first_name_error: false });
								} else {
									set_form_error({ ...form_error, first_name_error: true });
								}
							}}
							label='First Name'
							error={first_name_error}
							required
						/>
						<TextField
							onChange={({ target: { value } }) => {
								if (value.length > 1) {
									set_form_info({ ...form_info, last_name: value });
									set_form_error({ ...form_error, last_name_error: false });
								} else {
									set_form_error({ ...form_error, last_name_error: true });
								}
							}}
							label='Last Name'
							error={last_name_error}
							required
						/>
					</div>
					<br />
					<TextField
						label='ID'
						required
						error={id_error}
						onChange={({ target: { value } }) => {
							if (value.length > 1) {
								set_form_info({ ...form_info, id: value });
								set_form_error({ ...form_error, id_error: false });
							} else {
								set_form_error({ ...form_error, id_error: true });
							}
						}}
					/>
					<br />
					<TextField
						label='Password (6 character or more)'
						type='password'
						autoComplete='current-password'
						error={password_error}
						onChange={({ target: { value } }) => {
							if (value.length > 5) {
								set_form_info({ ...form_info, password: value });
								set_form_error({ ...form_error, password_error: false });
							} else {
								set_form_error({ ...form_error, password_error: true });
							}
						}}
						required
					/>
					<br />
					<br />
					<TextField
						label='E-Mail'
						required
						error={email_error}
						onChange={({ target: { value } }) => {
							if (value.length > 5) {
								set_form_info({ ...form_info, email: value });
								set_form_error({ ...form_error, email_error: false });
							} else {
								set_form_error({ ...form_error, email_error: true });
							}
						}}
					/>
					<br />
					<br />
					<Autocomplete
						options={countries as CountryType[]}
						autoHighlight
						onChange={(e: any, { code }: any) => {
							set_form_info({ ...form_info, country_code: code });
						}}
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
								required
								error={country_error}
								inputProps={{
									...params.inputProps,
									autoComplete: 'new-password', // disable autocomplete and autofill
								}}
							/>
						)}
					/>
					<br />
					<br />
					<StyledButton onClick={() => validate()}>SIGN UP</StyledButton>

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
