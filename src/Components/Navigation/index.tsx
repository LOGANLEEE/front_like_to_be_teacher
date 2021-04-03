import React, { FunctionComponent } from 'react';
import { Wrapper } from './Wrapper';
import { StyledButton } from 'Components/StyledButton';

interface Props {}

export const Navigation: FunctionComponent = ({}: Props) => {
	return (
		<Wrapper>
			<StyledButton className='item' text='Academy' />
			<StyledButton className='item' text='News' />
			<StyledButton className='item' text='Community' />
			<StyledButton className='item' text='Q&A' />
		</Wrapper>
	);
};
