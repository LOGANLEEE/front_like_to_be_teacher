import React, { FunctionComponent } from 'react';
import { Wrapper } from './Wrapper';
import { StyledButton } from 'Components/StyledButton';
import { menu_state } from 'globalState';
import { useRecoilState } from 'recoil';
import { menus } from 'globalState';

interface Props {}

export const Navigation: FunctionComponent = ({}: Props) => {
	const [{ selected }, set_menu] = useRecoilState(menu_state);

	return (
		<Wrapper>
			{menus.map((text) => {
				return (
					<StyledButton
						key={text}
						className={`item ${selected === text ? 'selected' : ''}`}
						text={text}
						onClick={() => set_menu({ selected: text })}
					/>
				);
			})}
		</Wrapper>
	);
};
