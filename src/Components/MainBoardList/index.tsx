import React, { FunctionComponent, MouseEventHandler } from 'react';
import { Wrapper } from './Wrapper';
import { ListData } from 'Containers/Center';
interface Props {
	className?: string;
	data: ListData;
	height: number;
	onClick?: MouseEventHandler<HTMLDivElement>;
}

// TODO clicked list change colour for user
export const MainBoardList: FunctionComponent<Props> = ({ className, onClick, data, height }) => (
	
	<Wrapper height={height} className={className} onClick={onClick}>
		{data?.title}
	</Wrapper>
);
