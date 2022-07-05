import React from 'react';
import { Customers, Features, Hero, Rooms, Support } from '../index';

const Home = () => {
	return (
		<>
			<Hero />
			<Features />
			<Rooms />
			<Support />
			<Customers />
		</>
	);
};

export default Home;
