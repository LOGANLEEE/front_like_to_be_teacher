import React from 'react';
import { Wrapper } from './Wrapper.js';
import { Header } from './Header';
import { Body } from './Body';
import { Footer } from './Footer';

function App() {
	document.title = 'Get infomation of how to be teacher in korea!';
	return (
		<Wrapper>
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
	);
}

export default App;
