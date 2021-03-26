import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	height: 100%;

	.item {
		font-size: 1vw;
		font-weight: bold;
		/* overflow: auto; */
		margin: 0% 1% 0% 1%;
		cursor: pointer;
		text-align: center;
		height: 100%;
		width: calc(100% / 5);
		padding-left: 5px;
		padding-right: 5px;
	}
`;
