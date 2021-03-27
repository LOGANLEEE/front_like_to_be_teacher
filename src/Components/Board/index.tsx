import React, FunctionComponent, HTMLAttributes } from 'react';
import { Wrapper } from './Wrapper';

interface Props {
	// className: ?string;
}

export const Board: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => {
	return <Wrapper className={className}>board</Wrapper>;
};
