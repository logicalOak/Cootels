import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer, Header, Home } from './index';
import { GlobalStyles } from '../config/GlobalStyles';

const Root = () => {
	return (
		<Router>
			<GlobalStyles />
			<Header />
			<Routes>
				<Route path='/' exact element={<Home />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default Root;
