import styled from 'styled-components';

export const Wrapper = styled.div`
	min-height: 100vh;
	min-width: 100vw;

	display: flex;
	flex-direction: row;

	background-color: ${({ isDark }) => (isDark ? `#132f4c59` : `#6b636a`)};

	.app-block1 {
		width: 10%;
		cursor: pointer;
		padding: 1%;
		/* color: ${({ isDark }) => (isDark ? `white` : `black`)}; */
		font-size: 5vw;
		font-family: fantasy;
		font-weight: bold;
		/* background-color: ${({ isDark }) => (isDark ? `#132f4c59` : `#ac65b1`)}; */
	}

	.app-block2 {
		width: 90%;

		.header {
			/* background-color: ${({ isDark }) => (isDark ? `#132f4c59` : `#e289c7`)}; */
			padding: 1% 0% 1% 0%;
			height: 6%;
		}
		.body {
			height: 90%;
		}
		.footer {
			height: 2%;
			/* background-color: #131f4c59; */
		}
	}

	/* @media only screen and (max-width: 600px) {
		.header {
			height: 20vh;
		}
		.body {
			height: 70vh;
		}
		.footer {
			height: 10vh;
		} */
	/* } */
`;
