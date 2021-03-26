import React, { FunctionComponent } from 'react';
import { Wrapper } from './Wrapper';

import { Board } from 'Components/Board';

interface Props {}

export const Body: FunctionComponent<Props> = ({}) => {
	return (
		<Wrapper>
			<div className='board-block1'>
				<Board className='item' />
				<Board className='item' />
			</div>
			<div className='board-block2'>
				<Board className='item' />
				<Board className='item' />
			</div>
		</Wrapper>
	);
};
