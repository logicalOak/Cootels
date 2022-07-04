import React from 'react';
import data from './data';
import { Container } from '../../utils/Utils';
import styled from 'styled-components';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
	return (
		<Wrapper>
			<Container>
				<Social>
					<Logo as='a' href='#'>
						Cootels
					</Logo>
					<p>{data.desc}</p>
					<ul>
						{Array.from(Array(3).keys()).map((i, idx) => (
							<li key={idx}>
								<a href='#'>
									{idx === 0 && <FaTwitter />}
									{idx === 1 && <FaInstagram />}
									{idx === 2 && <FaFacebookF />}
								</a>
							</li>
						))}
					</ul>
				</Social>
				<Nav>
					{data.menu.map((menu, mid) => (
						<Menu key={mid}>
							<h3>{menu.title}</h3>
							<ul>
								{menu.ul.map((i, idx) => (
									<li key={idx}>
										<a href='#'>{i}</a>
									</li>
								))}
							</ul>
						</Menu>
					))}
				</Nav>
			</Container>
		</Wrapper>
	);
};

// 🐱‍👤 Styled Components
const Wrapper = styled.footer`
	padding-top: 80px;
	padding-bottom: 80px;
	background-color: #0b265a;
	color: #d9dbde;

	@media (min-width: 992px) {
		padding-top: 120px;
		padding-bottom: 120px;
	}

	${Container} {
		gap: 24px;
		@media (min-width: 768px) {
			display: grid;
			grid-template-columns: minmax(180px, 190px) 551px;
			justify-content: space-between;
		}
	}
`;

const Social = styled.div`
	p {
		margin-bottom: 30px;
	}

	ul {
		display: flex;
		align-items: center;
		gap: 10px;

		li {
			display: flex;
		}

		a {
			font-size: 20px;

			@media (min-width: 992px) {
				font-size: 30px;
			}
		}
	}
`;
const Nav = styled.div`
	display: grid;
	gap: 24px;
	max-width: 551px;
	width: 100%;

	@media (min-width: 576px) {
		grid-template-columns: repeat(3, 1fr);
		gap: 100px;
	}
`;
const Logo = styled.div`
	display: inline-flex;
	font-weight: 600;
	font-size: 20px;
	line-height: 1.2;
	color: #ffffff;
	margin-bottom: 13px;

	@media (min-width: 992px) {
		font-size: 32px;
		line-height: 39px;
	}
`;
const Menu = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 14px;

	ul {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 14px;
	}

	h3 {
		font-weight: 700;
		font-size: 16px;
		line-height: 19px;
		letter-spacing: 0.01em;
		color: #ffffff;
	}

	a {
		font-size: 16px;
		line-height: 19px;
	}
`;

export default Footer;
