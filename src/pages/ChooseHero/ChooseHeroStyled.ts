import styled from 'styled-components';

type CellProps = {
  isActive: boolean;
};

export const SectionHeader = styled.h2`
  margin: 0;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.text.large};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ChooseHeroContainer = styled.section`
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 15px;
  min-height: 500px;
  background-color: ${({ theme }) => theme.colors.background.secondary};
  box-shadow: -5px 5px 0px 0px
    ${({ theme }) => theme.colors.background.tertiary};
  letter-spacing: 4px;
  word-spacing: -8px;
`;

export const Field = styled.div`
  padding: 10px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const Cell = styled.div<CellProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme, isActive }) =>
    isActive && `0px 0px 0px 5px ${theme.colors.background.tertiary}`};
  box-shadow: ${({ theme, isActive }) =>
    isActive && `0px 0px 0px 5px ${theme.colors.background.tertiary}`};

  & img {
    width: 100px;
    height: 100px;
  }
`;
