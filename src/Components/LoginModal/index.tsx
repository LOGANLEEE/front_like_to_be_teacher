import React, { FunctionComponent } from 'react';

import TextField from '@material-ui/core/TextField';
import { SignUpModal } from 'Components/SignUpModal';
import { ModalBodyWrapper, StyledModal, Wrapper, StyledButton } from './Wrapper';
import { useHooks } from './useHooks';

export interface Props {
	should_open: boolean;
	set_should_open: Function;
}

// export const LoginModal: FunctionComponent<Props> = ({ should_open, set_should_open }) => {
export const LoginModal: FunctionComponent<Props> = ({ should_open, set_should_open }) => {
	const {
		password_err,
		should_open_sign_modal,
		id_err,
		spring_info,
		func: { doLogin, set_should_open_sign_modal },
	} = useHooks({ should_open, set_should_open });

	return (
		<Wrapper style={spring_info}>
			<StyledModal
				className='login_modal'
				open={should_open}
				onClose={() => set_should_open(false)}
				aria-labelledby='simple-modal-title'
				aria-describedby='simple-modal-description'>
				<ModalBodyWrapper style={spring_info}>
					<form onSubmit={doLogin}>
						<TextField label='ID' name='id' type='text' error={id_err} required />
						<br />
						<TextField
							label='Password (6 character or more)'
							name='password'
							type='password'
							// helperText={password_err ? 'more than 6 digit' : null}
							required
							error={password_err}
						/>
						<br />
						<StyledButton type='submit'>Login</StyledButton>
						<br />
						or
						<br />
						<br />
						<StyledButton onClick={() => set_should_open_sign_modal(true)}>Sign UP</StyledButton>
					</form>
					<br />
					//TODO imple function
					<span className='find_password'>Find Password</span>
					<br />
					<br />
					<br />
					<br />
					<StyledButton
						onClick={() => {
							set_should_open(false);
						}}>
						{/* <img src={close_white} alt='modal close' /> */}
						CLOSE
					</StyledButton>
				</ModalBodyWrapper>
			</StyledModal>
			{should_open_sign_modal ? (
				<SignUpModal set_should_open={set_should_open_sign_modal} should_open={should_open_sign_modal} />
			) : (
				''
			)}
		</Wrapper>
	);
};
