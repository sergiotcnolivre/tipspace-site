import styled from 'styled-components';

const HomeBoxesStyles = styled.div`
  display: flex;
  gap: 12px;
  margin: -96px auto 128px;

  @media (max-width: 1280px) {
    width: 100%;
    max-width: 70vw;
    flex-wrap: wrap;
    justify-content: center;
  }

  > img {
    align-self: center;

    @media (max-width: 1280px) {
      width: 45%;
      max-width: 291px;
    }
  }
`;

export function HomeBoxes() {
  return (
    <HomeBoxesStyles>
      <img src="/images/box-1.png" alt="100% Skill based" />
      <img src="/images/box-2.png" alt="Modos 1v1 e 2v2" />
      <img src="/images/box-3.png" alt="CPF + ID Check" />
      <img src="/images/box-4.png" alt="Resgate de forma simples" />
    </HomeBoxesStyles>
  );
}
