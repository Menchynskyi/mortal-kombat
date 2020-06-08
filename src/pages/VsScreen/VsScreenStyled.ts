import styled from 'styled-components';

type FightScreenContainerProps = {
  backgroundUrl: string;
};

type AbilityItemProps = {
  backgroundUrl: string;
};

export const FightScreenContainer = styled.section<FightScreenContainerProps>`
  position: relative;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  min-height: 520px;
  background: ${({ backgroundUrl }) => `url(${backgroundUrl})`} no-repeat center
    center fixed;
  background-size: 980px 600px;
  box-shadow: -5px 5px 0px 0px
    ${({ theme }) => theme.colors.background.tertiary};
  letter-spacing: 4px;
  word-spacing: -8px;
`;

export const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const VsStyled = styled.div`
  position: absolute;
  top: 15px;
  left: ${({ theme }) => `calc(50% -  ${theme.fontSize.heading.large})`};
  font-size: ${({ theme }) => theme.fontSize.heading.large};

  & div {
    text-align: center;

    &:last-of-type {
      margin-top: 5px;
    }
  }
`;

export const FightersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 90%;

  & img {
    height: 300px;
  }

  & img:last-of-type {
    transform: scaleX(-1);
  }
`;

export const AbilityList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.background.primary};
`;

export const AbilityItem = styled.li<AbilityItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 54px;
  height: 54px;
  background-image: ${({ backgroundUrl }) => `url(${backgroundUrl})`};
  background-repeat: no-repeat;
  list-style: none;
  border: 2px solid ${({ theme }) => theme.colors.background.yellow};
  color: ${({ theme }) => theme.colors.text.primary};
  font-size: ${({ theme }) => theme.fontSize.heading.large};
`;
