import styled from 'styled-components';
import { animated } from 'react-spring';
import { Modal } from '@material-ui/core';

export const Wrapper = styled(animated.div)``;

export const ModalBodyWrapper = styled(animated.div)`
	transform: translate(-50%, -50%);
	text-align: center;
	width: 30%;
	height: 70%;
	overflow-y: scroll;
	padding: 2%;
	background-color: ${({ theme: { is_dark, dark_back_ground, white_back_ground } }) =>
		is_dark ? dark_back_ground : white_back_ground};
	border: 1px solid silver;
	display: flex;
	flex-direction: column;
	justify-content: center;
	outline: none;

	form {
		display: contents;
	}
	.find_password {
		cursor: pointer;
	}
`;

export const StyledModal = styled(Modal)`
	top: 50% !important;
	left: 50% !important;
	width: 100%;
	height: 100%;
`;
