import styled from 'styled-components';

const HighlightsStyles = styled.div`
  display: flex;
  flex-direction: column;
  gap: 96px;
  margin: 0 auto 160px;
`;

const Highlight = styled.div<{ color?: string }>`
  color: ${({ theme, color }) => theme.colors[color]};
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  text-transform: uppercase;
  
  > h2 {
    color: ${({ theme }) => theme.colors.white};
    font-family: ${({ theme }) => theme.fonts.fkscreamer.upright};
    font-size: 65px;
    line-height: 65px;
    margin-top: 10px;
  }
`;

export function Highlights() {
  return (
    <HighlightsStyles>
      <Highlight color="primary">
        <div>Faça grana no League of Legends</div>
        <h2>Sua rankeada no LOL valendo grana!</h2>
      </Highlight>
      <Highlight color="yellow">
        <div>Modos exclusivos</div>
        <h2>Jogue os exclusivos 1v1 e 2v2</h2>
      </Highlight>
      <Highlight color="tertiary">
        <div>Ranking com premiação todo trimestre</div>
        <h2>Rewards: R$ 3.0000 dividods para os top 5!</h2>
      </Highlight>
    </HighlightsStyles>
  );
}
