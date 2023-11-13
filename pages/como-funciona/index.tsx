import styled from 'styled-components';
import { Section, WithBackground } from '../../components/sharedstyles';
import { Highlights } from '../../components/how-it-works/Highlights';
import { Screens } from '../../components/how-it-works/Screens';
import { SignCard } from '../../components/how-it-works/SignCard';

const FirstRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 590px;
  grid-template-rows: 1fr;
  column-gap: 150px;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-auto-flow: dense;
    row-gap: 16px;
    margin-bottom: 32px;
    text-align: center;

    > img {
      order: -1;
      max-width: 100%;
    }
  }
`;

const SecondRow = styled.div`
  @media (max-width: 1280px) {
    display: none;
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.fkscreamer.backslanted};
  font-size: 258px;
  font-weight: 900;
  line-height: 208px;
  text-transform: uppercase;
  transform: translateX(-200px);
  margin-top: -160px;

  > span {
    display: block;
    font-family: ${({ theme }) => theme.fonts.fkscreamer.slanted};
    transform: translateX(480px);
  }
`;

const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: 700;
  line-height: 27px;
  margin-top: 100px;
  margin-bottom: 24px;

  @media (max-width: 1280px) {
    margin-top: 16px;
  }
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 27px;
  margin-bottom: 24px;
`;

const ThirdRow = styled.div`
  display: grid;
  grid-template-columns: 590px 1fr;
  grid-template-rows: 1fr;
  gap: 64px;
  margin-top: -72px;
  margin-bottom: 200px;
  z-index: 1;

  > div {
    margin-top: 120px;
  }

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    row-gap: 32px;
    margin-top: 0;
    margin-bottom: 64px;
    text-align: center;

    > img {
      max-width: 100%;
    }

    > div {
      margin-top: 0;
    }
  }
`;

export default function FAQPage() {
  return (
    <>
      <Section>
        <FirstRow>
          <div>
            <SubTitle>Tips = Jogue valendo!</SubTitle>
            <Text>
              Chegou sua vez de jogar seus games favoritos valendo uma grana!
              Use suas habilidades e garanta sua vitória no jogo para sua partida valer muito mais!
            </Text>
            <Text>
              Simples assim: Entre na partida, faça sua tip depois não tem segredo:
              Vitória no jogo? Grana no bolso!
            </Text>
          </div>
          <img src="/images/como-funciona-1.png" alt="Imagem ilustrativa" />
        </FirstRow>
        <SecondRow>
          <Title>
            Quem vence
            <span>bota no bolso!</span>
          </Title>
        </SecondRow>
        <ThirdRow>
          <img src="/images/como-funciona-2.png" alt="Imagem ilustrativa" />
          <div>
            <SubTitle>Simples, seguro e com grana real!</SubTitle>
            <Text>
              Tudo fácil e muito intuitivo para você só se preocupar em aproveitar e jogar:
              deposite e resgate seu saldo no pix, com grana de verdade.
            </Text>
          </div>
        </ThirdRow>

        <Highlights />
      </Section>

      <WithBackground color="#1F1C2D">
        <Section>
          <Screens />
        </Section>
      </WithBackground>

      <Section>
        <SignCard />
      </Section>
    </>
  );
}
