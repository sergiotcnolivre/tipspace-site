import styled from 'styled-components';

const ScreensStyles = styled.div`
  margin-bottom: 64px;

  > h2 {
    color: ${({ theme }) => theme.colors.yellow};
    font-size: 30px;
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 30px;
    margin-top: 24px;
    text-align: center;
  }
`;

const HandIcon = styled.img`
  margin: -112px auto 32px;
  width: 81px;
  display: block;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 1fr;
  gap: 16px;

  @media (max-width: 1280px) {
    scroll-padding: 0 50%;
    scroll-snap-type: x mandatory;
    max-width: 100vw;
    overflow-x: auto;
    margin-left: -16px;
    padding-right: 16px;
    padding-left: 16px;
  }
`;

const Column = styled.div`
  scroll-snap-align: center;
`;

const ScreenDescription = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-bottom: 32px;
`;

const NumberIndicator = styled.div`
  color: #1F1C2D;
  font-size: 174px;
  font-family: ${({ theme }) => theme.fonts.fkscreamer.slanted};
  font-weight: 900;
  text-shadow:
    -1px 0px 0px ${({ theme }) => theme.colors.primary},
    1px 0px 0px ${({ theme }) => theme.colors.primary},
    0px -1px 0px ${({ theme }) => theme.colors.primary},
    0px 1px 0px ${({ theme }) => theme.colors.primary};
`;

const ScreenText = styled.div`
  font-size: 14px;
  font-weight: 700;
  max-width: 150px;
  margin-top: 24px;
  margin-left: 8px;
`;

const ScreenImage = styled.img`
  width: 296px;
  height: auto;
`;

export function Screens() {
  return (
    <ScreensStyles>
      <HandIcon src="/images/icon-pointing-hand.svg" alt="Ícone" />

      <h2>Você a poucos passos de jogar, valendo grana!</h2>

      <Row>
        <Column>
          <ScreenDescription>
            <NumberIndicator>01</NumberIndicator>
            <ScreenText>
              Crie sua conta, faça o download e adicione saldo para jogar!
            </ScreenText>
          </ScreenDescription>
          <ScreenImage src="/images/como-funciona-screen-2.png" alt="Tela de Tip" />
        </Column>
        <Column>
          <ScreenDescription>
            <NumberIndicator>02</NumberIndicator>
            <ScreenText>
              Vincule sua conta, escolha seu modo de jogo e defina sua tip
            </ScreenText>
          </ScreenDescription>
          <ScreenImage src="/images/como-funciona-screen-1.png" alt="Tela de login" />
        </Column>
        <Column>
          <ScreenDescription>
            <NumberIndicator>03</NumberIndicator>
            <ScreenText>
              Encontre sua partida e use suas habilidades!
              <br />
              Vai com tudo!
            </ScreenText>
          </ScreenDescription>
          <ScreenImage src="/images/como-funciona-screen-3.png" alt="Tela de partida em andamento" />
        </Column>
        <Column>
          <ScreenDescription>
            <NumberIndicator>04</NumberIndicator>
            <ScreenText>
              Vitória no jogo,
              {' '}
              <br />
              dinheiro no bolso!
            </ScreenText>
          </ScreenDescription>
          <ScreenImage src="/images/como-funciona-screen-4.png" alt="Tela de resultado de partida" />
        </Column>
      </Row>
    </ScreensStyles>
  );
}
