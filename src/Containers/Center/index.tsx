import React, { FunctionComponent, HTMLAttributes } from 'react';
import { Wrapper } from './Wrapper';

import { Board } from 'Components/Board';
import { useRecoilValue } from 'recoil';
import { menu_state, detail_info_state } from 'globalState';
import { MainBoardList } from 'Components/MainBoardList';
import { Detail } from 'Components/Detail';
import { menus } from 'globalState';
import { useSetRecoilState } from 'recoil';
import { useRecoilState } from 'recoil';

interface Props {}

interface comment {
	content: string;
	autor: string;
	reg_date: string;
}
export interface ListData {
	title: string;
	content: string;
	comment?: comment[];
	reg_date?: string;
}

export const Center: FunctionComponent<Props & HTMLAttributes<HTMLDivElement>> = ({ className }) => {
	const { selected } = useRecoilValue(menu_state);
	const set_menu = useSetRecoilState(menu_state);
	const [detail_info, set_detail_info] = useRecoilState(detail_info_state);
	return (
		<Wrapper className={className}>
			{selected === 'Main' ? null : (
				<div className='guide'>
					Main {'>'} {selected}
				</div>
			)}
			<div className='block1'>
				{selected === 'Academy' ? (
					<Board className='board'>
						{listData.map((data) => (
							<MainBoardList
								key={data?.title}
								data={data}
								height={100 / listData.length}
								onClick={() => {
									set_detail_info(data);
									set_menu({ selected: 'Detail' });
								}}
							/>
						))}
					</Board>
				) : null}
				{selected === 'News' ? (
					<Board className='board'>
						{listData.map((data) => (
							<MainBoardList
								key={data?.title}
								data={data}
								height={100 / listData.length}
								onClick={() => {
									set_detail_info(data);
									set_menu({ selected: 'Detail' });
								}}
							/>
						))}
					</Board>
				) : null}
				{selected === 'Community' ? (
					<Board className='board'>
						{listData.map((data) => (
							<MainBoardList
								key={data?.title}
								data={data}
								height={100 / listData.length}
								onClick={() => {
									set_detail_info(data);
									set_menu({ selected: 'Detail' });
								}}
							/>
						))}
					</Board>
				) : null}
				{selected === 'Q&A' ? (
					<Board className='board'>
						{listData.map((data) => (
							<MainBoardList
								key={data?.title}
								data={data}
								height={100 / listData.length}
								onClick={() => {
									set_detail_info(data);
									set_menu({ selected: 'Detail' });
								}}
							/>
						))}
					</Board>
				) : null}
				{selected === 'Main'
					? menus.map((menu) => (
							<Board key={menu} className='main_board' menu={menu}>
								{listData.map((data) => (
									<MainBoardList
										key={data?.title}
										data={data}
										height={100 / listData.length}
										onClick={() => {
											set_detail_info(data);
											set_menu({ selected: 'Detail' });
										}}
									/>
								))}
							</Board>
					  ))
					: null}
				{selected === 'Detail' ? <Detail data={detail_info} /> : ''}
			</div>
		</Wrapper>
	);
};

const listData: ListData[] = [
	{
		title: 'Covid-19: France enters third national lockdown amid ICU surge',
		content:
			'Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge',
		comment: [{ autor: 'test_autor', content: 'test content', reg_date: 'reg_date' }],
		reg_date: new Date().toISOString(),
	},
	{
		title: `France has entered its third national lockdown as it battles a surge in cases of Covid-19 that threatens to overwhelm the country's hospitals. France has entered its third national lockdown as it battles a surge in cases of Covid-19 that threatens to overwhelm the country's hospitals.`,
		content:
			'Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge',
	},
	{
		title: `All schools and non-essential shops will shut for four weeks, and a curfew will be in place from 19:00 to 06:00.`,
		content:
			'Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge',
	},
	{
		title: `On Friday, the number of seriously ill Covid patients in intensive care units (ICU) increased by 145 - the biggest jump in five months.`,
		content:
			'Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge',
	},
	{
		title: 'President Emmanuel Macron has promised more hospital beds for Covid patients',
		content:
			'Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge',
	},
	{
		title:
			'France is currently battling a peak of about 5,000 Covid patients in ICUs. On Friday, the country recorded 46,677 new cases and 304 deaths.',
		content:
			'Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge Covid-19: France enters third national lockdown amid ICU surge',
	},
];
