import styled from 'styled-components';
import { Section } from '../../components/sharedstyles';

const Center = styled.div`
  margin: 0 auto 32px;
`;

const FirstRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 32px;
  margin: 0 auto 32px;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.fkscreamer.backslanted};
  font-size: 145px;
  font-weight: 900;
  line-height: 137px; 
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 40px;

  > div {
    font-family: ${({ theme }) => theme.fonts.fkscreamer.slanted};
  }
`;

const Subtitle = styled.p`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
  max-width: 480px;
  margin: auto;
`;

const SecondRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2, h3 {
    font-family: ${({ theme }) => theme.fonts.fkscreamer.upright};
    font-size: 65px;
    font-weight: 900;
    line-height: 94px;
    text-transform: uppercase;
    margin-bottom: 32px;
  }

  p {
    max-width: 300px;
    margin: auto;
    font-size: 16px;
    line-height: 27px;
  }
`;

const GrayBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  gap: 16px;
  background: #4C4B76;
  border-radius: 24px;
  padding: 32px;
`;

export default function FAQPage() {
  return (
    <Section>
      <Center>
        <img src="/images/ligas-tipspace.png" alt="Ligas Tipspace" />
      </Center>
      <FirstRow>
        <img src="/images/ligas-1.png" alt="Imagem ilustrativa" />
        <div>
          <Title>
            Competição
            <div>Diversão &</div>
            Premiação!
          </Title>
          <Subtitle>
            Participe de ligas exclusivas com programação semanal,
            onde você pontua a cada partida e divide a premiação entre os melhores colocados.
          </Subtitle>
        </div>
      </FirstRow>
      <SecondRow>
        <h2>
          Por que jogar nossas ligas?
        </h2>
        <GrayBox>
          <div>
            <h3>Duração</h3>
            <p>
              Diferente de torneios que levam dias, as nossas ligas são diárias,
              e duram de 2 a 4 horas, em média.
            </p>
          </div>
          <div>
            <h3>Pontuação</h3>
            <p>
              Não é mata-mata! Nossas ligas são por pontos obtidos,
              onde vence quem tiver a maior pontuação no fim da duração.
            </p>
          </div>
          <div>
            <h3>Premiação</h3>
            <p>
              Todos que ficam no topo da tabela levam uma parte do prêmio!
              São premiações que tem em média R$250 a R$500!
            </p>
          </div>
        </GrayBox>
      </SecondRow>
    </Section>
  );
}
