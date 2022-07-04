import React from 'react';
import styled from 'styled-components';
import data from './data';
import { Container, Button, SectionWrapper, Title } from '../../utils/Utils';

const Hero = () => {
	return (
		<Wrapper>
			<Container>
				<Content>
					<Title as='h1' type='h1'>
						{data.title}
					</Title>
					<p>{data.text}</p>
					<Button as='a' href='#'>
						Reservation
					</Button>
				</Content>
				<Images>
					{data.images.map((i, idx) => (
						<div key={idx}>
							<img src={i} alt='image' />
						</div>
					))}
				</Images>
			</Container>
		</Wrapper>
	);
};

// 🐱‍👤 Styled Components
const Wrapper = styled(SectionWrapper)`
	${Container} {
		gap: 24px;
		align-items: center;

		@media (min-width: 992px) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			align-items: center;
		}
	}
`;

const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	p {
		margin-bottom: 22px;

		@media (min-width: 992px) {
			margin-bottom: 32px;
		}
	}
`;

const Images = styled.div`
	display: flex;
	gap: 14px;

	div {
		&:nth-child(2) {
			@media (min-width: 992px) {
				position: relative;
				transform: translateY(80px);
			}
		}
	}
`;

export default Hero;
