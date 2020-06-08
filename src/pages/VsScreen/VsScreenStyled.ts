import styled from 'styled-components';

type FightScreenContainerProps = {
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
  width: 100%;

  & img {
    height: 300px;
  }

  & img:last-of-type {
    transform: scaleX(-1);
  }
`;
