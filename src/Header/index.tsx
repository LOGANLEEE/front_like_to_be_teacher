import React, { FunctionComponent } from 'react';
import { Wrapper } from './Wrapper';
import { Navigation } from 'Components/Navigation';
import { Login } from 'Components/Login';
import { ThemeToggle } from 'Components/ThemeToggle';
import { useRecoilValue } from 'recoil';
import { user_info_state } from 'globalState';

interface Props {}

export const Header: FunctionComponent<Props> = () => {
	const user_info = useRecoilValue(user_info_state);
	return (
		<Wrapper>
			<div className='header-block1'>
				<Navigation />
			</div>
			<div className='header-block2'>
				<div className='header-block3'>
					<Login className='header-block3-item1' />
					<ThemeToggle className='header-block3-item2' />
				</div>
				<div className='header-block4'>
					{user_info.is_login ? `Wellcome back, ${user_info?.first_name}! ` : 'user info after logging in'}
				</div>
			</div>
		</Wrapper>
	);
};
