import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 75px;
  overflow: hidden;

  @media (max-width: 1280px) {
    padding-top: 140px;
  }
`;

export const Section = styled.section`
  width: 100%;
  max-width: 1200px;
  margin: auto;
  padding: 48px 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  @media (max-width: 1280px) {
    padding: 48px 16px;
  }
`;

export const WithBackground = styled.div<{ color: string; }>`
  background-color: ${({ color }) => color};
  width: 100%;
`;
