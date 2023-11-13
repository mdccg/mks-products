import styled from 'styled-components';

export const ShopContainer = styled.main`
  background-color: ${({ theme }) => theme.palette.background};
  flex: 1;
`;

export const ProductListContainer = styled.div`
  padding: 90px 200px;
  
  flex-wrap: wrap;
  display: flex;

  @media only screen and (max-width: 768px) {
    padding: 20px;
  }
`;