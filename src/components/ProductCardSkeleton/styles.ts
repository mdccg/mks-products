import { Skeleton } from '@mui/material';
import styled from 'styled-components';
import ShoppingBagIconSource from '../../assets/icons/shopping-bag.svg';

const gutter = 20;

export const ProductCardSkeletonContainer = styled.div`
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  
  flex: calc(100% / 4 - ${gutter}px);
  margin: 20px ${gutter / 2}px;
  
  box-shadow: 0 2px 8px rgba(0, 0, 0, .1352);

  background-color: ${({ theme }) => theme.palette.productCard};
  border-radius: 8px;

  @media only screen and (max-width: 768px) {
    flex: 1;
  }
`;

export const ProductCardSkeletonPhoto = styled(Skeleton)``;

export const ProductInformation = styled.div`
  padding: 15px;
`;

export const ProductCardSkeletonHeader = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  display: flex;

  margin: 10px 0;
`;

export const ProductCardSkeletonName = styled(Skeleton)`
  color: ${({ theme }) => theme.palette.text};
  font-size: 14px;
  margin-right: 10px;
  margin-bottom: 2px;
`;

export const ProductCardSkeletonPriceContainer = styled(Skeleton)`
  background-color: ${({ theme }) => theme.palette.priceCard};
  border-radius: 5px;
  padding: 2.5px 8px;
`;

export const ProductCardSkeletonDescription = styled(Skeleton)`
  color: ${({ theme }) => theme.palette.text};
  font-size: 10px;
  font-weight: 300;
  
  line-height: 15px;
  display: block;
`;

export const BuyButton = styled.div`
  background-color: ${({ theme }) => theme.palette.foreground};
  cursor: pointer;

  justify-content: center;
  align-items: center;
  display: flex;
  height: 30px;

  border-bottom-left-radius:  8px;
  border-bottom-right-radius: 8px;
`;

export const ShoppingBagIcon = styled.img`
  width:  12px;
  height: 13.5px;

  margin-right: 15px;
`;

ShoppingBagIcon.defaultProps = { src: ShoppingBagIconSource, alt: 'Ícone de uma sacola de compras' };

export const BuyButtonLabel = styled.div`
  color: ${({ theme }) => theme.palette.whiteLight};
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;