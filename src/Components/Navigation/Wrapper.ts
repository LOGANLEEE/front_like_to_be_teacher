import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 5px;

	height: 100%;
	width: 100%;

	.item {
		width: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		/* font-size: 1vw; */
	}

	.selected {
		background-color: #5469d4;
	}
`;
