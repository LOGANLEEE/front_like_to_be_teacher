import React from 'react';
import { Wrapper } from './Wrapper.js';
import { Header } from './header';
import { Body } from './body';
import { Footer } from './footer';

function App() {
	document.title = 'Get infomation of how to be teacher in korea!';
	return (
		<Wrapper>
			<div className='header'>
				<Header />
			</div>
			<div className='body'>
				<Body />
			</div>
			<div className='footer'>
				<Footer />
			</div>
		</Wrapper>
	);
}

export default App;
