import React, { useState, FunctionComponent } from 'react';

import { useSpring } from 'react-spring';
import TextField from '@material-ui/core/TextField';
import { SignUpModal } from 'Components/SignUpModal';
import close_white from 'asset/close-white-18dp.svg';
import account_circle from 'asset/account_circle-24px.svg';
import { ModalBodyWrapper, StyledModal, Wrapper, StyledButton } from './Wrapper';

interface Props {
	should_open: boolean;
	set_should_open: Function;
}
export const LoginModal: FunctionComponent<Props> = ({ should_open, set_should_open }) => {
	const spring_info = useSpring({
		opacity: 1,
		to: { opacity: should_open ? 1 : 0 },
	});

	const [should_open_sign_modal, set_should_open_sign_modal] = useState(true);
	return (
		<Wrapper style={spring_info}>
			<StyledModal
				className='login_modal'
				open={should_open}
				onClose={() => set_should_open(false)}
				aria-labelledby='simple-modal-title'
				aria-describedby='simple-modal-description'>
				<ModalBodyWrapper style={spring_info}>
					<TextField id='input-with-icon-grid' label='ID' required />
					<br />
					<TextField id='input-with-icon-grid' label='Password' required />
					<br />
					<StyledButton>Login</StyledButton>
					<br />
					or
					<br />
					<br />
					<StyledButton onClick={() => set_should_open_sign_modal(true)}>Sign UP</StyledButton>
					<br />
					<span>Find Password</span>
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
