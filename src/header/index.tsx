import React from 'react';
import { Wrapper } from './Wrapper';
import { Navigation } from 'Components/Navigation';
import { Login } from 'Components/Login';
import { ThemeToggle } from 'Components/ThemeToggle';

export const Header = ({}) => {
	return (
		<Wrapper>
			<div className='header-block1'>
				<Navigation />
			</div>
			<div className='header-block2'>
				<div className='header-block3'>
					<Login />
					<ThemeToggle />
				</div>
				<div className='header-block4'>user info after logging in</div>
			</div>
		</Wrapper>
	);
};
