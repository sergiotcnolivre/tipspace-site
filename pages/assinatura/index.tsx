import styled from 'styled-components';
import { Section } from '../../components/sharedstyles';
import { Button } from '../../components/shared/Button';
import { Plans } from '../../components/subscription/Plans';
import { Benefits } from '../../components/subscription/Benefits';

const MainImage = styled.img`
  margin-bottom: 48px;

  @media (max-width: 1280px) {
    display: none;
  }
`;

const FirstRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;
  gap: 64px;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 31px;
  margin-bottom: 100px;

  @media (max-width: 1280px) {
    grid-template-columns: 1fr;
    gap: 32px;
    margin-bottom: 80px;
  }

  > h2 {
    font-family: ${({ theme }) => theme.fonts.fkscreamer.upright};
    font-size: 65px;
    font-style: normal;
    line-height: 65px;
    text-transform: uppercase;
  }

  > p {
    font-size: 18px;
    font-style: normal;
    margin-top: 16px;
    line-height: 27px;

    @media (max-width: 1280px) {
      text-align: center;
    }
  }
`;

const ThirdRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 1280px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SubscriptionInfos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;


  @media (max-width: 1280px) {
    gap: 32px;
    margin-bottom: 32px;
    text-align: center;
  }

  > p {
    width: 100%;
    max-width: 460px;
    font-size: 30px;
    line-height: 40px; 
  }

  > div {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.24px;
    text-transform: uppercase;

    > img {
      display: block;
      margin: 12px auto 0;
    }
  }
`;

export default function SubscriptionPage() {
  return (
    <Section>
      <MainImage src="/images/assinatura-1.png" alt="Jogue sem limites!" />

      <FirstRow>
        <h2>Ligas, premiações e muito mais. Assine Tipspace!</h2>
        <p>
          Escolha entre a assinatura mensal, semestral ou anual e venha jogar!
          Tenha uma experiência nova com seus games favoritos por um preço que cabe no seu bolso!
        </p>
      </FirstRow>

      <Benefits />

      <ThirdRow>
        <SubscriptionInfos>
          <p>Uma experiência completa por menos de R$ 0,50 por dia no plano anual. Assine agora!</p>
          <div>
            Formas de pagamento
            <img src="/images/payment-methods.png" alt="Visa, Mastercard e PIX" />
          </div>
        </SubscriptionInfos>
        <div>
          <Plans />
          <Button href="https://app.tipspace.gg/cadastro" primary block>Crie sua conta / Assine tipspace</Button>
        </div>
      </ThirdRow>
    </Section>
  );
}
