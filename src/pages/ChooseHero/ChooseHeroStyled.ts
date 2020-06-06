import styled from 'styled-components';

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
`;
