import { FC, useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import CartProductType from '../../types/CartProductType';
import { toBRL } from '../../utils/formatting_utils';
import CartCloseButton from '../CartCloseButton';
import MobileCartProductCard from '../MobileCartProductCard';
import Quantifier from '../Quantifier';
import { CartProductCardContainer, CartProductCardName, CartProductCardPhoto, CartProductCardPrice, CartProductCardWrapper, MobileDesign, TimesContainer, TimesWrapper } from './styles';

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
      <CartProductCardWrapper className="cart-product-card">
        <TimesWrapper>
          <TimesContainer>
            <CartCloseButton size={18} onClick={deleteFromCart} />
          </TimesContainer>
        </TimesWrapper>

        <CartProductCardContainer>
          <CartProductCardPhoto src={product.photo} alt={`Foto de ${formattedName}`} />
          <CartProductCardName>{formattedName}</CartProductCardName>

          <Quantifier
            displayLabel
            decreaseCount={decreaseCount}
            count={count}
            increaseCount={increaseCount}
            id={product.id}
            style={{ top: '-10px' }} />

          <CartProductCardPrice id={`cart-product-card-price-${product.id}`}>{toBRL(product.price * count)}</CartProductCardPrice>
        </CartProductCardContainer>
      </CartProductCardWrapper>

      <MobileDesign>
        <MobileCartProductCard
          cartProduct={{ product, count }}
          formattedName={formattedName}
          deleteFromCart={deleteFromCart}
          decreaseCount={decreaseCount}
          increaseCount={increaseCount}
        />
      </MobileDesign>
    </div>
  );
}

export default CartProductCard;