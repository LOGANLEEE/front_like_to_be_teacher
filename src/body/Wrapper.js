import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	height: 100%;

	.board-block1 {
		height: 50%;
		/* width: 100%; */
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}

	.board-block2 {
		height: 50%;
		/* width: 100%; */
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
	}
	.item {
		width: calc(100% / 2);
	}
`;
