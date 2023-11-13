import { useState } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const AccordionStyles = styled.div``;

const AccordionHeader = styled.button<{ active?: boolean }>`
	width: 100%;
	background: none;
	outline: 0;
	border: 0;
	cursor: pointer;

	h2 {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 16px;
		color: ${({ theme }) => theme.colors.primary};
		font-size: 30px;
		font-style: normal;
		font-weight: 500;
		line-height: 35px;
		text-transform: uppercase;
		margin-bottom: 32px;
		text-align: left;
	}
`;

const AccordionContentOpen = css`
	max-height: 0px;
	transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
`;

const AccordionContent = styled.div<{ active?: boolean }>`
	width: 100%;
	max-width: 920px;
	margin: auto;
	color: #fff;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: 35px;

	overflow: hidden;
	max-height: 1000px;
	transition: max-height 1s ease-in-out;

	${({ active }) => (!active ? AccordionContentOpen : '')}

	> div {
		padding-bottom: 64px;
	}
`;

const Chevron = styled.img<{ active?: boolean }>`
	align-self: center;
	transform: rotateX(${({ active }) => (active ? '0' : '180deg')});
`;

function FAQAccordion({ title, content, open = false }) {
	const [isShowing, setIsShowing] = useState(open);

	const toggle = () => {
		setIsShowing(!isShowing);
	};

	return (
		<AccordionStyles>
			<AccordionHeader onClick={toggle} active={isShowing} type='button'>
				<h2>
					{title}
					<Chevron
						src='/images/chevron.svg'
						alt='Ícone'
						active={isShowing}
					/>
				</h2>
			</AccordionHeader>
			<AccordionContent active={isShowing} aria-expanded={isShowing}>
				<div
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			</AccordionContent>
		</AccordionStyles>
	);
}

FAQAccordion.defaultProps = {
	open: false,
};

FAQAccordion.propTypes = {
	title: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	open: PropTypes.bool,
};

export { FAQAccordion };
