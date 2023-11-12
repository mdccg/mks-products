import styled, { css } from 'styled-components';

const margin = css`
  box-sizing: border-box;
  padding: 20px 45px;
`;

export const CartContainer = styled.aside`
  width:  33vw;
  height: 100%;
  
  flex-direction: column;
  display: flex;

  color: ${({ theme }) => theme.palette.whiteLight};
`;

export const TimesContainer = styled.div`
  position: absolute;
  right: 25px;
  top:   35px;
`;

export const CartHeader = styled.div`
  ${margin};

  justify-content: space-between;
  align-items: flex-start;
  display: flex;
`;

export const CartHeading = styled.h2`
  color: ${({ theme }) => theme.palette.whiteLight};
  font-size: 25px;
  font-weight: 700;
`;

export const CartProductList = styled.div`
  ${margin};
  flex: 1;
`;

export const TotalContainer = styled.div`
  ${margin};

  justify-content: space-between;
  align-items: center;
  display: flex;
`;

export const TotalLabel = styled.span`
  font-size: 25px;
  font-weight: 700;
`;

export const FinishPurchaseButton = styled.div`
  cursor: pointer;
  
  box-sizing: border-box;
  padding: 30px 45px;

  background-color: ${({ theme }) => theme.palette.black};

  justify-content: center;
  align-items: center;
  display: flex;
`;

export const FinishPurchaseButtonLabel = styled.span`
  color: ${({ theme }) => theme.palette.whiteLight};
  font-size: 25px;
  font-weight: 700;
`;