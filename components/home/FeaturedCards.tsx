import styled from 'styled-components';
import { FeaturedCard } from './FeaturedCard';

const FeaturedCardsStyles = styled.div`
  width: 100%;
  margin-top: 160px;
  padding-bottom: 132px;

  @media (max-width: 1280px) {
    margin-top: 32px;
    padding-bottom: 48px;
  }
`;

const Label = styled.div`
  display: inline-block;
  background: ${({ theme }) => theme.colors.quaternary};
  color: ${({ theme }) => theme.colors.navy};
  font-size: 12px;
  border-radius: 8px;
  padding: 7px 10px;
  margin-bottom: 36px;
  font-weight: bold;
  line-height: 142%;
  text-transform: uppercase;
`;

const Title = styled.h2`
  width: 280px;
  margin-bottom: 32px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 118%;
`;

const List = styled.ul`
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 142%;
  letter-spacing: 0.28px;

  > li {
    margin-bottom: 12px;
    display: flex;
  }
`;

const IconWrapper = styled.div`
  display: inline-flex;
  width: 16px;
  height: 16px;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
`;

export function FeaturedCards() {
  return (
    <FeaturedCardsStyles>
      <FeaturedCard src="/images/featured-image-1.png" alt="100% de bônus">
        <Label>Crie sua conta e jogue agora!</Label>
        <Title>100% de bônus em depósitos até R$500</Title>
        <List>
          <li>
            <IconWrapper>
              <img src="/images/icon-small-league.svg" alt="Ícone" />
            </IconWrapper>
            Acompanhe o rollover na carteira
          </li>
          <li>
            <IconWrapper>
              <img src="/images/icon-small-dollar.svg" alt="Ícone" />
            </IconWrapper>
            Use seu bônus para fazer uma grana real!
          </li>
          <li>
            <IconWrapper>
              <img src="/images/icon-small-pix.svg" alt="Ícone" />
            </IconWrapper>
            Simples e seguro, tudo via PIX
          </li>
        </List>
      </FeaturedCard>
      <FeaturedCard src="/images/featured-image-2.png" alt="Ligas Tipspace" align="right">
        <Label>Entre nas ligas tipspace!</Label>
        <Title>Ligas Tipspace: Desafios com premiação em dinheiro!</Title>
        <List>
          <li>
            <IconWrapper>
              <img src="/images/icon-small-thunder.svg" alt="Ícone" />
            </IconWrapper>
            Jogue suas partidas e pontue nas ligas
          </li>
          <li>
            <IconWrapper>
              <img src="/images/icon-small-league.svg" alt="Ícone" />
            </IconWrapper>
            Participe de ligas semanais com desafios exclusivos
          </li>
          <li>
            <IconWrapper>
              <img src="/images/icon-small-dollar.svg" alt="Ícone" />
            </IconWrapper>
            Premiação distribuidas para vários jogadores!
          </li>
        </List>
      </FeaturedCard>
      <FeaturedCard src="/images/featured-image-3.png" alt="Jogue sem limites">
        <Label>Assine e curta até 07 dias grátis!</Label>
        <Title>Curta a experiência completa da Tipspace!</Title>
        <List>
          <li>
            <IconWrapper>
              <img src="/images/icon-small-thunder.svg" alt="Ícone" />
            </IconWrapper>
            Jogue com ou sem tips nos modos 1v1 e 2v2
          </li>
          <li>
            <IconWrapper>
              <img src="/images/icon-small-league.svg" alt="Ícone" />
            </IconWrapper>
            Participe das ligas exclusivas!
          </li>
          <li>
            <IconWrapper>
              <img src="/images/icon-small-league.svg" alt="Ícone" />
            </IconWrapper>
            Entrada free em todas as ligas
          </li>
        </List>
      </FeaturedCard>
    </FeaturedCardsStyles>
  );
}
