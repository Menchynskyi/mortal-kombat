import styled from 'styled-components';

export const MessageContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 100px auto;
  font-size: ${({ theme }) => theme.fontSize.heading.large};
  text-align: center;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;

  &:hover {
    cursor: pointer;
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;
