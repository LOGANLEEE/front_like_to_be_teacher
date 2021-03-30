import React, { FunctionComponent, useState } from 'react';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useRecoilState } from 'recoil';
import { theme_info_state } from 'globalState';

import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}
export const ThemeToggle: FunctionComponent<Props> = (props) => {
	const [theme_info, set_theme_info] = useRecoilState(theme_info_state);

	return (
		<Wrapper {...props}>
			<DarkModeToggle
				onChange={() => set_theme_info({ ...theme_info, is_dark: !theme_info.is_dark })}
				checked={theme_info.is_dark}
				size={60}
				speed={4}
			/>
		</Wrapper>
	);
};
