import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	height: 100%;
	background-color: #21343e;
	padding-top: 0.5%;
	padding-bottom: 0.5%;

	.header-block1 {
		width: 30%;
		height: 100%;
		place-items: flex-start;

		.title {
			cursor: pointer;
			font-weight: bold;
			font-family: fantasy;
			font-size: 150%;
			overflow-x: hidden;
		}
	}
	/* .brick {
		width: 40%;
		height: 100%;
	} */

	.header-block2 {
		width: 70%;
		height: 100%;
		flex-direction: row;
		justify-content: flex-end;
		display: flex;
		align-items: flex-end;
		gap: 10px;
	}
`;
