import styled from 'styled-components';
import Link from 'next/link';
import { Logo } from '../shared/Logo';

const FooterStyles = styled.div`
`;

const FirstRow = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  column-gap: 140px;
  padding: 48px 0;

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
    row-gap: 32px;
  }
`;

const SecondRow = styled.div`
  border-top: 1px solid #1F1C40;

  > div {
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    font-family: Arial;
    font-size: 13px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    padding: 30px 0;

    @media (max-width: 1280px) {
      flex-direction: column;
      align-items: center;
      gap: 32px;
      text-align: center;
    }
  }
`;

const LogoStyles = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

const Nav = styled.div`
  display: flex;
  gap: 48px;

  @media (max-width: 1280px) {
    text-align: center;
  }
`;

const Links = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;

  > li {
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    text-transform: uppercase;
  }
`;

const Badges = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Badge18Plus = styled.div`
  display: flex;
  align-items: center;
  width: 260px;
  background: #1F1C40;
  border-radius: 8px;
  padding: 8px;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14.5px;

  > span {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    width: 48px;
    height: 48px;
    margin-right: 16px;
    background: #4C4B76;
    border-radius: 4px;
    font-size: 23px;
    font-style: normal;
    font-weight: 700;
    line-height: 28.75px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 16px;
`;

export function Footer() {
  return (
    <FooterStyles>
      <FirstRow>
        <LogoStyles>
          <Logo />
        </LogoStyles>
        <Nav>
          {/* <Links>
            <li>
              <Link href="/sobre">Sobre nós</Link>
            </li>
            <li>
              <Link href="/afiliados">Afiliados</Link>
            </li>
          </Links> */}
          <Links>
            <li>
              <Link href="https://blog.tipspace.gg/wp-content/uploads/2023/07/TipSpace-Termos-de-Uso-12.07.2023.pdf">Termos de uso</Link>
            </li>
            <li>
              <Link href="https://blog.tipspace.gg/wp-content/uploads/2023/02/TipSpace-Aviso-de-Privacidade-19.12.2022.pdf">Política de privacidade</Link>
            </li>
          </Links>
        </Nav>
        <Badges>
          <Badge18Plus>
            <span>18+</span>
            Comprovação da identidade exigida pela plataforma
          </Badge18Plus>
          <img src="/images/windows-badge.png" alt="Disponível para Windows" />
        </Badges>
      </FirstRow>
      <SecondRow>
        <div>
          Tipspace® - Tips Group LTDA - R. Card Arcoverde, 2365,
          Conj 33 - Parte. Pinheiros/ SP - CPNJ: 48.440/476/0001-70. Todos os direitos reservados.
          <SocialLinks>
            <Link target="blank" href="https://www.twitch.tv/tipspace">
              <img src="/images/icon-social-twitch.svg" alt="Twitch da Tipspace" />
            </Link>
            <Link target="blank" href="https://discord.gg/tipspace">
              <img src="/images/icon-social-discord.svg" alt="Discord da Tipspace" />
            </Link>
            <Link target="blank" href="https://instagram.com/tipspacebr">
              <img src="/images/icon-social-instagram.svg" alt="Instagram da Tipspace" />
            </Link>
            <Link target="blank" href="https://twitter.com/tipspacebr">
              <img src="/images/icon-social-twitter.svg" alt="Twitter da Tipspace" />
            </Link>
            <Link target="blank" href="https://www.youtube.com/channel/UC_V_ujeANFG3LjtHQZF9lLw">
              <img src="/images/icon-social-youtube.svg" alt="Youtube da Tipspace" />
            </Link>
            <Link target="blank" href="https://www.tiktok.com/@tipspacebr/">
              <img src="/images/icon-social-tiktok.svg" alt="Tiktok da Tipspace" />
            </Link>
          </SocialLinks>
        </div>
      </SecondRow>
    </FooterStyles>
  );
}
