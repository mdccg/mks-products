import styled from 'styled-components';

export const ShopContainer = styled.main`
  background-color: ${({ theme }) => theme.palette.background};
`;

export const ProductListContainer = styled.div`
  padding: 90px 200px;
  
  flex-wrap: wrap;
  display: flex;
`;