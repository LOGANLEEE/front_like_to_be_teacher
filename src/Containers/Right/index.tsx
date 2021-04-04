import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Wrapper } from './Wrapper';

interface Props {}

export const Right: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => (
	<Wrapper className={className}>Right</Wrapper>
);
