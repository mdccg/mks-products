import { FC, useContext, useEffect, useState } from 'react';
import CartProductType from '../../types/CartProductType';
import { toBRL } from '../../utils/formatting_utils';
import { CartProductCardWrapper, CartProductCardName, CartProductCardPhoto, CartProductCardPrice, CartProductCardQuantifier, CartProductCardQuantifierCounterContainer, CartProductCardQuantifierCounter, CartProductCardQuantifierLabel, CartProductCardQuantifierMinusButton, CartProductCardQuantifierPlusButton, VerticalRule, CartProductCardQuantifierWrapper, TimesWrapper, TimesContainer, CartProductCardContainer } from './styles';
import CartCloseButton from '../CartCloseButton';
import { UserContext } from '../../context/UserContext';

type CartProductCardProps = {
  cartProduct: CartProductType;
}

const CartProductCard: FC<CartProductCardProps> = ({ cartProduct: { product, count } }) => {
  const { setCart } = useContext(UserContext);
  const [formattedName, setFormattedName] = useState<string>('');

  const deleteFromCart = () => {
    setCart((cart) => cart.filter(({ product: currentProduct }) => currentProduct.id !== product.id));
  }

  const decreaseCount = () => {
    if (count === 1) {
      deleteFromCart();
    } else {
      setCart((cart) => (
        cart.map((cartProduct) => {
          if (cartProduct.product.id === product.id) {
            --cartProduct.count;
          }

          return cartProduct;
        })
      ));
    }
  }

  const increaseCount = () => {
    setCart((cart) => (
      cart.map((cartProduct) => {
        if (cartProduct.product.id === product.id) {
          ++cartProduct.count;
        }

        return cartProduct;
      })
    ));
  }

  useEffect(() => {
    setFormattedName(product.brand + ' ' + product.name);
  }, [product.brand, product.name]);

  return (
    <div>
      <CartProductCardWrapper>
        <TimesWrapper>
          <TimesContainer>
            <CartCloseButton size={18} onClick={deleteFromCart} />
          </TimesContainer>
        </TimesWrapper>

        <CartProductCardContainer>
          <CartProductCardPhoto src={product.photo} alt={`Foto de ${formattedName}`} />
          <CartProductCardName>{formattedName}</CartProductCardName>

          <CartProductCardQuantifierWrapper>
            <div>
              <CartProductCardQuantifierLabel>Qtd:</CartProductCardQuantifierLabel>
              
              <CartProductCardQuantifier>
                <CartProductCardQuantifierMinusButton onClick={decreaseCount} />
                
                <VerticalRule />

                <CartProductCardQuantifierCounterContainer>
                  <CartProductCardQuantifierCounter>{count}</CartProductCardQuantifierCounter>  
                </CartProductCardQuantifierCounterContainer>

                <VerticalRule />

                <CartProductCardQuantifierPlusButton onClick={increaseCount} />
              </CartProductCardQuantifier>
            </div>
          </CartProductCardQuantifierWrapper>

          <CartProductCardPrice>{toBRL(product.price * count)}</CartProductCardPrice>
        </CartProductCardContainer>
      </CartProductCardWrapper>
    </div>
  );
}

export default CartProductCard;