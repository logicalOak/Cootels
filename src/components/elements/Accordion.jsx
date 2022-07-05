import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';
import { IoIosArrowUp } from 'react-icons/io';

const Accordion = ({ title, text, id, expanded, setExpanded }) => {
	const isOpen = id === expanded;

	return (
		<Item>
			<ItemHeader
				onClick={() => setExpanded(isOpen ? false : id)}
				className={`${isOpen ? 'is-open' : ''}`}>
				<h3>
					{id + 1}. {title}
				</h3>
				<div className={`${isOpen ? 'is-open' : ''} icon`}>
					<IoIosArrowUp size={25} />
				</div>
			</ItemHeader>
			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						initial='collapsed'
						animate='open'
						exit='collapsed'
						variants={{
							open: { opacity: 1, height: 'auto' },
							collapsed: { opacity: 0, height: 0 },
						}}
						transition={{ duration: 0.2 }}
						className='content'>
						{text}
					</motion.div>
				)}
			</AnimatePresence>
		</Item>
	);
};

// 🐱‍👤 Styled Components
const Item = styled.div`
	padding: 15px;
	background-color: #fff;
	border-radius: 4px;
	filter: drop-shadow(0px 4px 30px rgba(0, 0, 0, 0.07));

	@media (min-width: 992px) {
		padding: 30px 36px;
	}
`;
const ItemHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 20px;
	cursor: pointer;
	transition: all 0.3s ease;

	&.is-open {
		padding-bottom: 20px;
	}

	h3 {
		font-weight: 600;
		color: #424f7b;
		font-size: 18px;
		line-height: 1;
		@media (min-width: 992px) {
			font-size: 24px;
			line-height: 36px;
		}
	}

	.icon {
		flex-shrink: 0;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: #ffece2;
		color: #ff620a;
		transition: all 0.3s ease;
		display: flex;
		justify-content: center;
		align-items: center;
		transform: rotate(180deg);

		@media (min-width: 992px) {
			width: 40px;
			height: 40px;
		}

		&.is-open {
			color: #ffffff;
			background-color: #ff620a;
			transform: rotate(0deg);
		}
	}
`;

export default Accordion;
