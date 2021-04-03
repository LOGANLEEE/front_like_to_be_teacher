import React, { useState, FunctionComponent, useCallback } from 'react';

import TextField from '@material-ui/core/TextField';
import { ModalBodyWrapper, StyledModal, Wrapper } from './Wrapper';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { CountryType, countries } from 'country';
import { useHooks } from './useHooks';
import { StyledButton } from 'Components/StyledButton';

export interface Props {
	should_open: boolean;
	set_should_open: Function;
}

export const SignUpModal: FunctionComponent<Props> = ({ should_open, set_should_open }) => {
	const {
		password_err,
		first_name_err,
		email_err,
		id_err,
		last_name_err,
		spring_info,
		func: { countryToFlag, validation },
	} = useHooks({ set_should_open, should_open });

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
						<br />
						<br />
						<div className='item1'>
							<TextField
								label='First Name'
								error={first_name_err}
								helperText={first_name_err && 'name must be text'}
								name='first_name'
								type='text'
								autoFocus
								required
							/>
							<TextField
								label='Last Name'
								error={last_name_err}
								name='last_name'
								helperText={last_name_err && 'name must be text'}
								type='text'
								required
							/>
						</div>
						<br />
						<TextField label='ID' name='id' error={id_err} type='text' required />
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
						<TextField label='E-Mail' error={email_err} required type='email' name='email' />
						<br />
						<TextField label='Mobile' type='text' name='mobile' />
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
