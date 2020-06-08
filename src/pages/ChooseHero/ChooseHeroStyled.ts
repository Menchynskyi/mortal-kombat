import styled from 'styled-components';

type CellProps = {
  isActive: boolean;
  player: number;
};

type SelectedCharacterProps = {
  player: number;
};

export const SectionHeader = styled.h2`
  margin: 0;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.fontSize.text.large};
  color: ${({ theme }) => theme.colors.text.primary};
`;

export const ChooseHeroContainer = styled.section`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  padding: 15px;
  min-height: 520px;
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
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: ${({ theme, isActive }) =>
    isActive && `${theme.colors.background.yellow}`};
  box-shadow: ${({ theme, isActive }) =>
    isActive && `0px 0px 0px 5px ${theme.colors.background.yellow}`};

  & img {
    width: 100px;
    height: 100px;
  }

  &::after {
    display: ${({ isActive }) => (isActive ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    color: ${({ theme }) => theme.colors.background.yellow};
    font-size: ${({ theme }) => theme.fontSize.heading.large};
    ${({ player }) => (player === 1 ? `content: '1'` : `content: '2'`)};
  }

  &:hover {
    cursor: pointer;
  }
`;

export const SelectedCharacter = styled.div<SelectedCharacterProps>`
  position: absolute;
  bottom: 10px;
  ${({ player }) =>
    player === 1 ? 'left: 15px;' : 'right: 15px; transform: scaleX(-1)'};
  ${({ player }) =>
    player === 2 &&
    `
    & div {
      transform: scaleX(-1)
    }
  `}

  & img {
    height: 350px;
  }
`;

export const CharacterName = styled.div`
  margin-top: 10px;
  text-align: center;
  text-transform: capitalize;
`;
