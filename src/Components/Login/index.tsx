import React from 'react';
import { Wrapper } from './Wrapper';
import airplanemode_inactive from 'asset/airplanemode_inactive-white-18dp.svg';
import airplanemode_active from 'asset/airplanemode_active-white-18dp.svg';

export const Login = () => (
	<Wrapper>
		<img src={airplanemode_active} alt='login' />
		<img src={airplanemode_inactive} alt='log out' />
	</Wrapper>
);
