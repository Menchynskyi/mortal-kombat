import styled from 'styled-components';

export const FormStyled = styled.form`
  display: flex;
  flex-flow: column wrap;
  margin-top: 120px;
  font-size: ${({ theme }) => theme.fontSize.heading.large};
`;

export const InputStyled = styled.input`
  border: none;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  color: ${({ theme }) => theme.colors.text.primary};
  text-align: center;
`;

export const SubmitButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background.tertiary};
  color: ${({ theme }) => theme.colors.text.primary};
  border: none;

  &:hover {
    cursor: pointer;
    opacity: ${({ theme }) => theme.hoverOpacity};
  }
`;
