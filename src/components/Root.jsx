import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Features, Footer, Header, Home, Rooms, Support } from './index';
import { GlobalStyles } from '../config/GlobalStyles';

const Root = () => {
	return (
		<Router>
			<GlobalStyles />
			<Header />
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path='/rooms' exact element={<Rooms />} />
				<Route path='/reservation' exact element={<Features />} />
				<Route path='/contact' exact element={<Support />} />
			</Routes>
			<Footer />
		</Router>
	);
};

export default Root;
