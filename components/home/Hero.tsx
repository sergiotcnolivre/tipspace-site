import styled from 'styled-components';

const HeroStyles = styled.div`
  margin: auto;
`;

const FirstRow = styled.div`
  width: 1400px;
  margin-left: -60px;
  margin-right: -140px;
  display: flex;
  align-items: center;
  margin-bottom: 100px;

  @media (max-width: 1280px) {
    flex-direction: column;
    width: 100%;
    margin: 0 0 64px;
  }

  > img {
    @media (max-width: 1280px) {
      max-width: 100%;
    }
  }
`;

const SecondRow = styled.div`
  font-size: 22px;
  line-height: 27px;
  text-align: center;
  max-width: 720px;
  width: 100%;
  margin: 0 auto 72px;

  @media (max-width: 1280px) {
    margin-bottom: 64px;
  }
`;

const ThirdRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
  margin-top: -96px;
  transform: translateY(96px);

  @media (max-width: 1280px) {
    flex-direction: column;
    transform: translateY(0);
    margin-top: 0px;
  }

  > div {
    margin-top: 24px;
    width: 100%;

    @media (max-width: 1280px) {
      order: 1;
    }
  }

  > img {
    @media (max-width: 1280px) {
      order: 0;
      margin-bottom: 64px;
    }
  }
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-family: ${({ theme }) => theme.fonts.fkscreamer.backslanted};
  font-size: 210px;
  font-style: normal;
  font-weight: 900;
  line-height: 169.507px;
  margin-bottom: 0;
  text-transform: uppercase;
  z-index: 1;

  @media (max-width: 1280px) {
    font-size: 128px;
    line-height: 100px;
    margin-bottom: 64px;
  }

  > span {
    display: block;
    font-family: ${({ theme }) => theme.fonts.fkscreamer.slanted};
  }
`;

const HeroVideo = styled.video`
  align-self: center;
  max-width: 100%;
  border-radius: 20px;
`;

const HeroItem = styled.div<{ textRight?: boolean; }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 240px;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  text-align: ${({ textRight }) => (textRight ? 'right' : 'left')};
  text-transform: uppercase;
  margin: 0 64px 100px;

  @media (max-width: 1280px) {
    text-align: center;
    margin: 0 auto 32px;
  }

  > div {
    margin-bottom: 12px;
  }
`;

export function Hero() {
  return (
    <HeroStyles>
      <FirstRow>
        <Title>
          Jogue
          {' '}
          <span>valendo!</span>
        </Title>
        <HeroVideo src="/videos/hero-main.webm" playsInline autoPlay muted loop />
      </FirstRow>
      <SecondRow>
        A plataforma onde cada vitória nos jogos se transforma em grana real no bolso!
        {' '}
        <b>Jogue valendo nas ranqueadas ou nos modos exclusivos</b>
        , e torne suas partidas muito mais emocionantes e desafiadoras!
      </SecondRow>
      <ThirdRow>
        <div>
          <HeroItem textRight>
            <div>
              <img src="/images/icon-trophy.svg" alt="Ícone de troféu" />
            </div>
            Suas rankeadas valendo muito mais!
          </HeroItem>
          <HeroItem textRight>
            <div>
              <img src="/images/icon-joystick.svg" alt="Ícone de controle de videogame" />
            </div>
            Conheça todos os
            modos e jogue valendo!
          </HeroItem>
        </div>
        <HeroVideo src="/videos/hero-screens.webm" playsInline autoPlay muted loop />
        <div>
          <HeroItem>
            <div>
              <img src="/images/icon-dollar.svg" alt="Ícone de dinheiro" />
            </div>
            Ganhe grana
            a cada vitória
          </HeroItem>
          <HeroItem>
            <div>
              <img src="/images/icon-smile.svg" alt="Ícone de carinha feliz" />
            </div>
            Partidas com muito mais emoção
          </HeroItem>
        </div>
      </ThirdRow>
    </HeroStyles>
  );
}
