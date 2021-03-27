import React, { useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';

import { Wrapper } from './Wrapper';

export const DarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(() => false);
	return (
		<Wrapper>
			<DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={60} speed={4} />
		</Wrapper>
	);
};
