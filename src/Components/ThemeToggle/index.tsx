import React, { FunctionComponent } from 'react';
import { useRecoilState } from 'recoil';
import { theme_info_state } from 'globalState';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import { StyledButton } from 'Components/StyledButton';

import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}
export const ThemeToggle: FunctionComponent<Props> = (props) => {
	const [{ is_dark, dark_back_ground, white_back_ground }, set_theme_info] = useRecoilState(theme_info_state);
	return (
		<Wrapper {...props}>
			<StyledButton>
				<DarkModeSwitch
					className='toggle'
					checked={is_dark}
					onChange={() => {
						set_theme_info({ is_dark: !is_dark, dark_back_ground, white_back_ground });
					}}
				/>
			</StyledButton>
		</Wrapper>
	);
};
