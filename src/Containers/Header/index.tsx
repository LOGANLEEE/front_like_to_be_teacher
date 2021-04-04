import React, { FunctionComponent } from 'react';
import { Wrapper } from './Wrapper';

import { Login } from 'Components/Login';
import { ThemeToggle } from 'Components/ThemeToggle';
import { useRecoilValue } from 'recoil';
import { user_info_state } from 'globalState';
import { Profile } from 'Components/Profile';

interface Props {}

export const Header: FunctionComponent<Props> = () => {
	const { is_login } = useRecoilValue(user_info_state);
	return (
		<Wrapper>
			<div className='header-block1'>
				<span className='title' onClick={() => window.location.reload()}>
					Like To Be Teacher
				</span>
			</div>
			{/* <div className='brick' /> */}

			<div className='header-block2'>
				{is_login ? <Profile className='item1' /> : null}
				<Login className='item2' />
				<ThemeToggle className='item3' />
			</div>
		</Wrapper>
	);
};
