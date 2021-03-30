import styled from 'styled-components';
import { Button, ButtonTypeMap, ExtendButtonBase } from '@material-ui/core';

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

export const StyledButton = styled(Button)`
	background-color: #1e2638;
	color: #fff;
	&:hover {
		background-color: #5469d4;
	}
`;

// export const StyledButton: ExtendButtonBase<ButtonTypeMap<{}, 'button'>> = styled(Button)`
// 	background-color: yellow;
// `;
