import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 10px;
	height: 100%;

	.guide {
		height: 5%;
	}
	.block1 {
		width: 100%;
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: 10px;
		height: 95%;
		justify-content: center;

		.item {
			width: calc(95% / 2);
			height: 100%;
		}
	}
`;
