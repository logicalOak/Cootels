import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from './data';
import { Button, Container } from '../../utils/Utils';

const Header = () => {
	return (
		<Wrapper>
			<Container as='nav'>
				<Link to='/'>
					<Logo>Cotels</Logo>
				</Link>
				<Menu>
					{data.menu.map((i, idx) => (
						<li key={idx}>
							<Link to={i.href}>{i.label}</Link>
						</li>
					))}
				</Menu>
				<Button as='a' href={data.btn.href}>
					{data.btn.label}
				</Button>
			</Container>
		</Wrapper>
	);
};

// 🐱‍👤 Styled Components
const Wrapper = styled.header`
	padding-top: 15px;
	padding-bottom: 15px;

	@media (min-width: 992px) {
		padding-top: 35px;
		padding-bottom: 35px;
	}

	${Container} {
		align-items: center;
		gap: 10px;

		@media (min-width: 576px) {
			flex-direction: row;
			justify-content: space-between;
		}
	}
`;

const Logo = styled.h2`
	font-weight: 600;
	font-size: 20px;
	line-height: 1.2;
	color: var(--base-color-1);

	@media (min-width: 992px) {
		font-size: 32px;
		line-height: 39px;
	}
`;

const Menu = styled.ul`
	display: flex;
	align-items: center;
	flex-direction: columns;
	gap: 10px;

	@media (min-width: 576px) {
		flex-direction: row;
		gap: 32px;
	}

	a {
		color: var(--base-color-1);
		transition: color 0.3s

		&:hover,
		&:focus {
			color: #144392
		}
	}
`;

export default Header;
