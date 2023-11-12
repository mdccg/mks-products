import styled, { css } from 'styled-components';

export const CartProductCardWrapper = styled.div`
  flex-direction: column;
  align-items: flex-end;
  display: flex;
`;

export const TimesWrapper = styled.div`
  position: absolute;
`;

export const TimesContainer = styled.div`
  position: relative;
  right: -4px;
  top:   -4px;
`;

export const CartProductCardContainer = styled.div`
  padding: 20px 0;

  justify-content: space-between;
  align-items: center;
  display: flex;

  background-color: ${({ theme }) => theme.palette.whiteLight};
  color: ${({ theme }) => theme.palette.black};
  border-radius: 8px;

  width: 100%;
  height: 50px;
  margin-bottom: 30px;
  
  & > * {
    flex: 1;
  }
`;

export const CartProductCardPhoto = styled.img`
  width:  60px;
  height: 60px;

  object-fit: contain;
`;

export const CartProductCardName = styled.span`
  color: ${({ theme }) => theme.palette.text};
  font-size: 13px;
  margin-right: 10px;
`;

export const CartProductCardQuantifierWrapper = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;

  position: relative;
  top: -10px;
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

export const CartProductCardPrice = styled.span`
  font-size: 12.5px;
  font-weight: 700;
  text-align: center;
`;