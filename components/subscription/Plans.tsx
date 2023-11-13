import styled from 'styled-components';

const PlansStyles = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 80px;
`;

const Plan = styled.div`
  background: ${({ theme }) => theme.colors.white};
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.navy};
  padding: 12px 16px;
`;

const PlanPeriod = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 142%;
  text-transform: uppercase;
`;

const PlanPrice = styled.div`
  font-size: 30px;
  font-style: normal;
  font-weight: 700;

  > span {
    font-size: 20px;
  }
`;

function Plans() {
  return (
    <PlansStyles>
      <Plan>
        <PlanPeriod>12 meses</PlanPeriod>
        <PlanPrice>
          R$ 9,90
          <span>/mês</span>
        </PlanPrice>
      </Plan>
      <Plan>
        <PlanPeriod>6 meses</PlanPeriod>
        <PlanPrice>
          R$ 10,90
          <span>/mês</span>
        </PlanPrice>
      </Plan>
      <Plan>
        <PlanPeriod>1 mês</PlanPeriod>
        <PlanPrice>
          R$ 12,90
          <span>/mês</span>
        </PlanPrice>
      </Plan>
    </PlansStyles>
  );
}

export { Plans };
