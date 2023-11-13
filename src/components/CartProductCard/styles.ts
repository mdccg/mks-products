import styled, { css } from 'styled-components';

export const CartProductCardWrapper = styled.div`
  flex-direction: column;
  align-items: flex-end;
  display: none;

  @media only screen and (min-width: 1000px) {
    display: flex;
  }
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

export const CartProductCardPrice = styled.span`
  font-size: 12.5px;
  font-weight: 700;
  text-align: center;
`;

export const MobileDesign = styled.div`
  display: none;

  @media only screen and (max-width: 1000px) {
    display: flex;
  }
`;