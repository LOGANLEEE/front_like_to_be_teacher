import React, { FunctionComponent } from 'react';
import { Wrapper } from './Wrapper';

interface Props {}

export const Footer: FunctionComponent<Props> = ({}) => {
	return (
		<Wrapper>
			<div>Copyright (c) example.com All Right Reserved.</div>
			<div>Contact us, logan_lee@kakao.com</div>
		</Wrapper>
	);
};
