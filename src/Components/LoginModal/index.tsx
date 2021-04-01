import React, { useState, FunctionComponent, useCallback } from 'react';
import { useSpring } from 'react-spring';
import TextField from '@material-ui/core/TextField';
import { SignUpModal } from 'Components/SignUpModal';
import { ModalBodyWrapper, StyledModal, Wrapper, StyledButton } from './Wrapper';
import { axios } from 'globalFunc';
import { useSetRecoilState } from 'recoil';
import { user_info_state } from 'globalState';

interface Props {
	should_open: boolean;
	set_should_open: Function;
}

export const LoginModal: FunctionComponent<Props> = ({ should_open, set_should_open }) => {
	const spring_info = useSpring({
		opacity: 1,
		to: { opacity: should_open ? 1 : 0 },
	});

	const [should_open_sign_modal, set_should_open_sign_modal] = useState(false);
	const [password_err, set_password_err] = useState(false);
	const set_user_info = useSetRecoilState(user_info_state);

	const doLogin = useCallback((e) => {
		e.preventDefault();
		const formData: FormData = new FormData(e.target);
		// todo name validation, phone number auto insert - and validation
		if ((formData.get('password') as string).length < 5) set_password_err(true);
		else set_password_err(false);

		axios
			.post('/auth/login', Object.fromEntries(formData))
			.then(({ data }) => {
				if (!data?.reason) {
					set_user_info(data);
					set_should_open(false);
				}
				alert(data?.reason);
			})
			.catch(() => {
				// todo receive error meesage
			});
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
					<form onSubmit={doLogin}>
						<TextField label='ID' name='id' type='text' required />
						<br />
						<TextField
							label='Password (6 character or more)'
							name='password'
							type='password'
							helperText={password_err ? 'more than 6 digit' : null}
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
			<SignUpModal set_should_open={set_should_open_sign_modal} should_open={should_open_sign_modal} />
		</Wrapper>
	);
};
