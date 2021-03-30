import styled from 'styled-components';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	height: 100%;

	.header-block1 {
		width: 80%;
	}
	.header-block2 {
		width: 20%;
		display: flex;
		flex-direction: column;

		.header-block3 {
			width: 100%;
			display: flex;
			flex-direction: row;
			height: 60%;
			/* justify-content: space-evenly; */

			.header-block3-item1 {
				width: 50%;
			}
			.header-block3-item2 {
				width: 50%;
			}
		}
		.header-block4 {
		}
	}
`;
