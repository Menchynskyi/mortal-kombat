import styled from 'styled-components';

export const MainContainer = styled.main`
  max-width: 980px;
  margin: 0 auto;
  padding-top: 15vh;

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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 10px 0;
`;
