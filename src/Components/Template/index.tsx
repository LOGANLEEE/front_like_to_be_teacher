import React, { FunctionComponent } from 'react';
import { Wrapper } from './Wrapper';

interface Props {
	className?: string;
}

export const template: FunctionComponent<Props> = ({ className }) => <Wrapper className={className}>template</Wrapper>;
