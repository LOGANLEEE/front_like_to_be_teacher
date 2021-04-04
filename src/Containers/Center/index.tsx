import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Wrapper } from './Wrapper';

import { Board } from 'Components/Board';
import { useRecoilValue } from 'recoil';
import { menu_state } from 'globalState';
import { MainBoardList } from 'Components/MainBoardList';
import { menus } from 'globalState';

interface Props {}
export interface ListData {
	title: string;
}
const listData: ListData[] = [
	{
		title: 'Covid-19: France enters third national lockdown amid ICU surge',
	},
	{
		title: `France has entered its third national lockdown as it battles a surge in cases of Covid-19 that threatens to overwhelm the country's hospitals. France has entered its third national lockdown as it battles a surge in cases of Covid-19 that threatens to overwhelm the country's hospitals.`,
	},
	{
		title: `All schools and non-essential shops will shut for four weeks, and a curfew will be in place from 19:00 to 06:00.`,
	},
	{
		title: `On Friday, the number of seriously ill Covid patients in intensive care units (ICU) increased by 145 - the biggest jump in five months.`,
	},
	{ title: 'President Emmanuel Macron has promised more hospital beds for Covid patients' },
	{
		title:
			'France is currently battling a peak of about 5,000 Covid patients in ICUs. On Friday, the country recorded 46,677 new cases and 304 deaths.',
	},
];
export const Center: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => {
	const { selected } = useRecoilValue(menu_state);
	return (
		<Wrapper className={className}>
			<div className='guide'>{selected}</div>
			<div className='block1'>
				{menus.map((menu) => (
					<Board className='item' menu={menu}>
						{listData.map(({ title }) => (
							<MainBoardList title={title} height={100 / listData.length} />
						))}
					</Board>
				))}
			</div>
		</Wrapper>
	);
};
