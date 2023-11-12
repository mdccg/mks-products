import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { toBRL } from '../../utils/formatting_utils';
import CartCloseButton from '../CartCloseButton';
import CartProductCard from '../CartProductCard';
import { CartContainer, CartHeader, CartHeading, CartProductList, FinishPurchaseButton, FinishPurchaseButtonLabel, TimesContainer, TotalContainer, TotalLabel } from './styles';

const Cart = () => {
  const { cart, setIsCartOpen } = useContext(UserContext);
  const [sum, setSum] = useState<number>(0);

  const close = () => setIsCartOpen(false);

  const finishPurchase = () => setIsCartOpen(false);

  useEffect(() => {
    setSum(cart.reduce((previousValue, { count, product: { price } }) => count * price + previousValue, 0));
  }, [cart]);

  return (
    <>
      <CartContainer>
        <CartHeader>
          <CartHeading>
            Carrinho<br /> de compras
          </CartHeading>

          <TimesContainer>
            <CartCloseButton onClick={close} id="close-drawer-button" />
          </TimesContainer>
        </CartHeader>

        <CartProductList>
          {(cart.length === 0) && <span>Uau, que vazio.</span>}
          {cart.map((cartProduct, index) => <CartProductCard key={index} cartProduct={cartProduct} />)}
        </CartProductList>

        <TotalContainer>
          <TotalLabel>Total:</TotalLabel>
          <TotalLabel id="total">{toBRL(sum)}</TotalLabel>
        </TotalContainer>

        <FinishPurchaseButton onClick={finishPurchase}>
          <FinishPurchaseButtonLabel>Finalizar Compra</FinishPurchaseButtonLabel>
        </FinishPurchaseButton>
      </CartContainer>
    </>
  );
}

export default Cart;