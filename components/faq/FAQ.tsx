import styled from 'styled-components';
import faqData from './data/faq.json';
import { FAQAccordion } from './FAQAccordion';

const FAQtyles = styled.div`
  width: 100%;

  > h2 {
    text-transform: uppercase;
    font-family: ${({ theme }) => theme.fonts.fkscreamer.upright};
    font-size: 72px;
    font-style: normal;
    font-weight: 900;
    line-height: 68px;
    margin-bottom: 64px;
  }
`;

export function FAQ() {
  return (
    <FAQtyles>
      <h2>Dúvidas Frequentes</h2>
      {
        faqData.map(({ title, content }, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <FAQAccordion key={index} title={title} content={content} open={index === 0} />
        ))
      }
    </FAQtyles>
  );
}
