import styled from 'styled-components';

interface Props {
	height: number;
}

export const Wrapper = styled.div<Props>`
	cursor: pointer;
	padding: 13px;
	height: ${(props) => props.height}%;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	max-width: 100%;

	&:hover {
		text-decoration: underline;
	}
`;
