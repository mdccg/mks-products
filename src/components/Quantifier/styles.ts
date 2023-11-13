import styled, { css } from 'styled-components';

export const CartProductCardQuantifierWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;

  max-width: 100%;

  position: relative;
`;

export const CartProductCardQuantifierLabel = styled.span`
  font-size: 5px;
`;

export const CartProductCardQuantifier = styled.div`
  align-items: center;
  display: flex;

  border: 0.3px solid ${({ theme }) => theme.palette.quantifierBorder};
  border-radius: 4px;
`;

const cartProductCardQuantifierButtonStyles = css`
  width:  14px;
  height: 14px;

  justify-content: center;
  align-items: center;
  display: flex;

  font-size: 10px;

  cursor: pointer;
`;

export const CartProductCardQuantifierMinusButton = styled.span`
  ${cartProductCardQuantifierButtonStyles};

  &::before {
    content: '-';
  }
`;

export const CartProductCardQuantifierCounterContainer = styled.div`
  ${cartProductCardQuantifierButtonStyles};

  cursor: normal;
`;

export const CartProductCardQuantifierCounter = styled.span`
  font-size: 10px;
`;

export const CartProductCardQuantifierPlusButton = styled.span`
  ${cartProductCardQuantifierButtonStyles};

  &::before {
    content: '+';
  }
`;

export const VerticalRule = styled.div`
  width: 0.2px;
  height: 8px;

  background-color: ${({ theme }) => theme.palette.quantifierBorder};
`;