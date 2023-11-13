import styled from 'styled-components';

const Row = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  gap: 16px;
  margin-bottom: 80px;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitItem = styled.div`
  min-height: 320px;
  display: flex;
  gap: 32px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 40px;
  border-radius: 8px;
  background-color: #1F1C2D;

  > b {
    width: 200px;
    display: block;
    color: ${({ theme }) => theme.colors.tertiary};
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 27px;
    text-transform: uppercase;
  }

  > span {
    width: 200px;
    font-size: 16px;
    line-height: 27px;
  }
`;

const ImageWrapper = styled.div`
  height: 88px;
  display: flex;
  align-items: center;
`;

function Benefits() {
  return (
    <Row>
      <BenefitItem>
        <ImageWrapper>
          <img src="/images/icon-coins.svg" alt="Ícone" />
        </ImageWrapper>
        <b>Jogue com ou sem tips</b>
        <span>Jogue sem valer grana nos modos 1v1 e 2v2</span>
      </BenefitItem>
      <BenefitItem>
        <ImageWrapper>
          <img src="/images/icon-badge.svg" alt="Ícone" />
        </ImageWrapper>
        <b>Programação de ligas semanais</b>
        <span>Ligas com premiações de R$250 até R$500</span>
      </BenefitItem>
      <BenefitItem>
        <ImageWrapper>
          <img src="/images/icon-free.svg" alt="Ícone" />
        </ImageWrapper>
        <b>Jogue com ou sem tips</b>
        <span>Jogue sem valer grana nos modos 1v1 e 2v2</span>
      </BenefitItem>
    </Row>
  );
}

export { Benefits };
