import React, { FunctionComponent } from 'react';
import { Wrapper } from './Wrapper';

import { Button } from '@material-ui/core';

interface Props {}

export const Navigation: FunctionComponent = ({}: Props) => {
	return (
		<Wrapper>
			<Button className='item' variant='contained' color='primary'>
				Academy
			</Button>
			<Button size='large' className='item' variant='contained' color='secondary'>
				News
			</Button>
			<Button className='item' variant='contained' color='default'>
				Community
			</Button>
			<Button className='item' variant='contained' color='primary' href='#contained-buttons'>
				Q&A
			</Button>
		</Wrapper>
	);
};
