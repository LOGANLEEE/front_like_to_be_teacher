import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useRecoilValue } from 'recoil';

import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';
import { theme_info_state } from 'globalState';
import { useSpring } from 'react-spring';

import { Wrapper } from './Wrapper';
import { StylesProvider } from '@material-ui/core/styles';

const App = () => {
	document.title = 'Get infomation of how to be teacher in korea!';
	// const isDark = useRecoilValue(isDarkTheme);
	const spring_info = useSpring({ opacity: 1, from: { opacity: 0 } });

	return (
		<StylesProvider injectFirst>
			<ThemeProvider theme={useRecoilValue(theme_info_state)}>
				<Wrapper style={spring_info}>
					<div className='app-block1' onClick={() => window.location.reload()}>
						Like <br />
						To <br />
						Be <br />
						Tea- <br />
						cher
					</div>

					<div className='app-block2'>
						<div className='header'>
							<Header />
						</div>
						<div className='body'>
							<Body />
						</div>
						<div className='footer'>
							<Footer />
						</div>
					</div>
				</Wrapper>
			</ThemeProvider>
		</StylesProvider>
	);
};

export default App;
