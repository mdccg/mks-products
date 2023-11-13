import styled from 'styled-components';
import ShoppingBagIconSource from '../../assets/icons/shopping-bag.svg';

const gutter = 20;

export const ProductCardContainer = styled.div`
  justify-content: space-between;
  flex-direction: column;
  display: flex;
  
  flex: calc(100% / 4 - ${gutter}px);
  margin: 20px ${gutter / 2}px;
  
  box-shadow: 0 2px 8px rgba(0, 0, 0, .1352);

  background-color: ${({ theme }) => theme.palette.productCard};
  border-radius: 8px;

  @media only screen and (max-width: 768px) {
    margin: 20px;
    flex: 1;
  }
`;

export const ProductCardPhoto = styled.img`
  box-sizing: border-box;
  padding: 10px 0;

  height: 150px;

  border-top-left-radius:  8px;
  border-top-right-radius: 8px;

  object-fit: contain;
  width: 100%;
`;

export const ProductInformation = styled.div`
  padding: 15px;
`;

export const ProductCardHeader = styled.div`
  justify-content: space-between;
  align-items: flex-start;
  display: flex;

  margin-bottom: 10px;
`;

export const ProductCardName = styled.span`
  color: ${({ theme }) => theme.palette.text};
  font-size: 14px;
  margin-right: 10px;
`;

export const ProductCardPriceContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.priceCard};
  border-radius: 5px;
  padding: 2.5px 8px;
`;

export const ProductCardPrice = styled.span`
  color: ${({ theme }) => theme.palette.whiteLight};
  font-size: 14px;
  font-weight: 700;
`;

export const ProductCardDescription = styled.span`
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

export const BuyButtonLabel = styled.span`
  color: ${({ theme }) => theme.palette.whiteLight};
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
`;