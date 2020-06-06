import styled from 'styled-components';

export const VolumeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  font-size: ${({ theme }) => theme.fontSize.heading.small};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;

  &:hover {
    cursor: pointer;
  }
`;
