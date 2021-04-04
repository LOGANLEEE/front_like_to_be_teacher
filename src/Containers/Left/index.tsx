import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Navigation } from 'Components/Navigation';
import { Wrapper } from './Wrapper';

interface Props {}

export const Left: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => (
	<Wrapper className={className}>
		<Navigation />
	</Wrapper>
);
