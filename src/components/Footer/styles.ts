import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.palette.footer};
  
  justify-content: center;
  align-items: center;
  display: flex;

  height: 30px;
`;

export const Copyright = styled.small`
  font-size: 12px;
`;