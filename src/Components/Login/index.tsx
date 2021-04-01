import React, { useState, FunctionComponent } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { user_info_state } from 'globalState';
import airplanemode_active from 'asset/airplanemode_active-white-18dp.svg';
import airplanemode_inactive from 'asset/airplanemode_inactive-white-18dp.svg';
import { Wrapper, StyledButton } from './Wrapper';

import { LoginModal } from 'Components/LoginModal';

interface Props {
	className?: string;
}

export const Login: FunctionComponent<Props> = (props) => {
	const [should_open, set_should_open] = useState(true);
	const { is_login } = useRecoilValue(user_info_state);

	// ! logout function
	const reset_user_info = useResetRecoilState(user_info_state);

	return (
		<Wrapper {...props}>
			<StyledButton onClick={() => (is_login ? reset_user_info() : set_should_open(true))}>
				{is_login ? (
					<>
						LogOut
						<img src={airplanemode_inactive} alt='login' />
					</>
				) : (
					<>
						Login
						<img src={airplanemode_active} alt='log_out' />
					</>
				)}
			</StyledButton>
			{is_login ? '' : <LoginModal should_open={should_open} set_should_open={set_should_open} />}
		</Wrapper>
	);
};
