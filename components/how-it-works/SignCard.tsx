import styled from 'styled-components';

const SignCardStyles = styled.div`
  display: flex;
  flex-direction: row;
  column-gap: 60px;
  margin: 64px auto 64px;
  border-radius: 16px;
  background: white;
  color: ${({ theme }) => theme.colors.navy};
  overflow: hidden;
  max-width: 100%;


  @media (max-width: 1280px) {
    flex-direction: column;
  }

  > img {
    object-fit: cover;
  }

  > div {
    padding: 40px;
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
  max-width: 350px;
  margin-bottom: 32px;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 118%;
`;

const Text = styled.p`
  font-size: 18px;
  line-height: 27px; 
`;

function SignCard() {
  return (
    <SignCardStyles>
      <img src="/images/featured-image-3.png" alt="Jogue sem limites" />
      <div>
        <Label>Assine e curta até 07 dias grátis!</Label>
        <Title>Curta a experiência completa: Assine Tipspace!</Title>
        <Text>
          Assine para participar de ligas exclusivas e
          também poder jogar os modos exclusivos sem fazer tips.
        </Text>
      </div>
    </SignCardStyles>
  );
}

export { SignCard };
