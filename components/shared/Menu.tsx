import styled, { css } from 'styled-components';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Button } from './Button';
import { Logo } from './Logo';

const MenuStyles = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9;
  background-color: ${({ theme }) => theme.colors.navy};
`;

const MenuContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;

  @media (max-width: 1280px) {
    flex-direction: column;
    row-gap: 16px;
  }
`;

const LogoStyles = styled.div`
  color: #fff;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const MenuListOpen = css`
  max-height: 0px;
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1);
`;

const MenuList = styled.ul<{ active?: boolean; }>`
  display: flex;
  align-items: center;
  column-gap: 32px;
  list-style: none;
  text-transform: uppercase;

  @media (max-width: 1280px) {
    flex-direction: column;
    row-gap: 16px;
    overflow: hidden;
    max-height: 1000px;
    transition: max-height 1s ease-in-out;

    ${({ active }) => (!active ? MenuListOpen : '')}
  }
`;

const MenuButton = styled.button<{ active?: boolean; }>`
  display: none;
  position: absolute;
  right: 16px;
  top: 16px;  
  background: none;
  border: 0;
  outline: 0;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  @media (max-width: 1280px) {
    display: block;
  }

  > svg {
    width: 32px;
    height: 32px;
  }
`;

export function Menu() {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = () => {
    setIsShowing(!isShowing);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsShowing(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <MenuStyles>
      <MenuContainer>
        <LogoStyles>
          <Logo />
        </LogoStyles>
        <MenuList active={isShowing}>
          <li>
            <Link href="/como-funciona">Como funciona</Link>
          </li>
          <li><Link href="/ligas">Ligas</Link></li>
          <li><Link href="/assinatura">Assinatura</Link></li>
          <li><Link href="/#video" scroll={false}>De Tip em Tip</Link></li>
          <li><Link href="/faq">FAQ</Link></li>
        </MenuList>
        <ButtonGroup>
          <Button href="/download">Download</Button>
          <Button href="https://app.tipspace.gg/cadastro" primary>Criar conta</Button>
        </ButtonGroup>
        <MenuButton type="button" onClick={toggle}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z" fill="currentColor" />
          </svg>
        </MenuButton>
      </MenuContainer>
    </MenuStyles>
  );
}
