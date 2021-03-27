import styled from 'styled-components';

export const Wrapper = styled.div`
	min-height: 100vh;
	min-width: 100vw;
	background-color: #222528;

	display: flex;
	flex-direction: row;

	.app-block1 {
		width: 10%;
		cursor: pointer;
		/* padding: 1% 0.5% 1% 1% ; */
		padding: 1%;
		font-size: 5vw;
		color: white;
		font-weight: bold;
		background-color: #133f4c59;
	}

	.app-block2 {
		width: 90%;

		.header {
			background-color: #132f4c59;
			padding: 1% 0% 1% 0%;
			height: 6%;
		}
		.body {
			height: 90%;
		}
		.footer {
			height: 2%;
			background-color: #131f4c59;
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
