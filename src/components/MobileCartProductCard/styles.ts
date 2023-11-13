import styled from 'styled-components';

export const MobileCartProductCardContainer = styled.div`
  background-color: ${({ theme }) => theme.palette.whiteLight};
  border-radius: 8px;
  flex: 1;

  flex-direction: column;
  align-items: center;
  display: flex;

  margin-bottom: 15px;
`;

export const TimesArea = styled.div`
  justify-content: flex-end;
  align-self: flex-end;
  display: flex;

  z-index: 2;
`;

export const Times = styled.div`
  cursor: pointer;

  color: ${({ theme }) => theme.palette.black};
  font-size: 30px;

  padding: 4px;

  width:  32px;
  height: 32px;

  justify-content: center;
  align-items: center;
  display: flex;

  &::before {
    content: 'X';
  }
`;

export const ProductPhoto = styled.img`
  z-index: 1;

  top: -32px;
  width: 100%;
  height: 150px;
  position: relative;

  box-sizing: border-box;
  object-fit: contain;
  padding: 0 50px;
`;

export const FormattedName = styled.span`
  color: ${({ theme }) => theme.palette.text};
  text-align: justify;
  padding: 0 20px;
`;

export const Columns = styled.div`
  align-items: stretch;
  display: flex;
  width: 100%;
  flex: 1;

  padding: 20px;
`;

export const QuantifierContainer = styled.div`
  color: ${({ theme }) => theme.palette.black};
  
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
`;

export const PriceContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex: 1;
`;

export const Price = styled.span`
  background-color: ${({ theme }) => theme.palette.priceCard};
  color: ${({ theme }) => theme.palette.whiteLight};
  font-weight: 700;
  padding: 8px 12px;
  border-radius: 4px;
`;