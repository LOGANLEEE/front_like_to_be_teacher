import React, { useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useRecoilState } from 'recoil';
import { isDarkTheme } from 'globalState';

import { Wrapper } from './Wrapper';

export const ThemeToggle = () => {
	const [darkTheme, setIsDarkTheme] = useRecoilState(isDarkTheme);

	return (
		<Wrapper>
			<DarkModeToggle onChange={() => setIsDarkTheme(!darkTheme)} checked={darkTheme} size={60} speed={4} />
		</Wrapper>
	);
};
