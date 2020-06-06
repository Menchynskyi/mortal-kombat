import styled from 'styled-components';

export const MainContainer = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 30vh;

  & ::selection {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.background.primary};
    text-shadow: none;
  }
  & ::-moz-selection {
    background-color: ${({ theme }) => theme.colors.background.secondary};
    color: ${({ theme }) => theme.colors.background.primary};
    text-shadow: none;
  }
`;
