import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { toBRL } from '../../utils/formatting_utils';
import CartCloseButton from '../CartCloseButton';
import CartProductCard from '../CartProductCard';
import { CartContainer, CartHeader, CartHeading, CartProductList, FinishBuyingButton, FinishBuyingButtonLabel, TimesContainer, TotalContainer, TotalLabel } from './styles';

const Cart = () => {
  const { cart, setIsCartOpen } = useContext(UserContext);
  const [sum, setSum] = useState<number>(0);

  const finishBuying = () => {
    setIsCartOpen(false);
  }

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
            <CartCloseButton onClick={() => setIsCartOpen(false)} />
          </TimesContainer>
        </CartHeader>

        <CartProductList>
          {(cart.length === 0) && <span>Uau, que vazio.</span>}
          {cart.map((cartProduct, index) => <CartProductCard key={index} cartProduct={cartProduct} />)}
        </CartProductList>

        <TotalContainer>
          <TotalLabel>Total:</TotalLabel>
          <TotalLabel>{toBRL(sum)}</TotalLabel>
        </TotalContainer>

        <FinishBuyingButton onClick={finishBuying}>
          <FinishBuyingButtonLabel>Finalizar Compra</FinishBuyingButtonLabel>
        </FinishBuyingButton>
      </CartContainer>
    </>
  );
}

export default Cart;