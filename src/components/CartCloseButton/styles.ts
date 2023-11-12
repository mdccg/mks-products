import styled from 'styled-components';

export const TimesIcon = styled.span`
  cursor: pointer;

  background-color: ${({ theme }) => theme.palette.black};
  
  color: ${({ theme }) => theme.palette.whiteLight};
  font-size: 20px;

  justify-content: center;
  align-items: center;
  display: flex;

  &::before {
    content: 'X';
  }
`;