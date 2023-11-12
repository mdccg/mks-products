import styled from 'styled-components';
import CartIconSource from '../../assets/icons/cart.svg';

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme.palette.foreground};

  justify-content: space-between;
  align-items: center;
  display: flex;

  height: 60px;
  padding: 20px 50px;
  padding-right: 80px;
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.palette.whiteLight};
`;

export const HeadingPrefix = styled.span`
  font-size: 40px;
  font-weight: 600;

  margin-right: 8px;
`;

export const HeadingSuffix = styled.span`
  font-size: 20px;
  font-weight: 300;

  position: relative;
  top: -4px;
`;

export const ShoppingCartButton = styled.div`
  cursor: pointer;

  justify-content: space-between;
  align-items: center;
  display: flex;

  background-color: ${({ theme }) => theme.palette.whiteLight};
  border-radius: 8px;
  padding: 4px 12px;
  height: 35px;
`;

export const CartIcon = styled.img`
  width:  19px;
  height: 18px;

  fill: ${({ theme }) => theme.palette.black};
`;

CartIcon.defaultProps = { src: CartIconSource, alt: 'Ícone de um carrinho de compras' };

export const CartCount = styled.span`
  font-size: 18px;
  font-weight: 700;

  padding: 0 15px;
`;