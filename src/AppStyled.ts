import styled from 'styled-components';

export const MainContainer = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding-top: 20vh;

  & ::selection {
    background-color: ${({ theme }) => theme.colors.text.primary};
    color: ${({ theme }) => theme.colors.background.tertiary};
    text-shadow: none;
  }
  & ::-moz-selection {
    background-color: ${({ theme }) => theme.colors.text.primary};
    color: ${({ theme }) => theme.colors.background.tertiary};
    text-shadow: none;
  }
`;
