import React, { FunctionComponent, MouseEventHandler } from 'react';
import { StyledButton as Button } from './Wrapper';

interface Props {
	text?: string;

	type?: 'submit' | 'reset' | 'button';
	onClick?: MouseEventHandler<HTMLButtonElement>;
	className?: string;
}

export const StyledButton: FunctionComponent<Props> = ({ className, onClick, type, text, children }) => (
	<Button onClick={onClick} className={className} type={type}>
		{text}
		{children}
	</Button>
);
