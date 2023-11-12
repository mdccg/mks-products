import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { CartCount, CartIcon, HeaderContainer, Heading, HeadingPrefix, HeadingSuffix, ShoppingCartButton } from './styles';

const Header = () => {
  const { cart, setIsCartOpen } = useContext(UserContext);
  const [cartCount, setCartCount] = useState<number>(0);

  const open = () => setIsCartOpen(true);

  useEffect(() => {
    setCartCount(cart.reduce((previousValue, { count }) => count + previousValue, 0));
  }, [cart]);

  return (
    <HeaderContainer>
      <Heading id="heading">
        <HeadingPrefix>MKS</HeadingPrefix>
        <HeadingSuffix>Sistemas</HeadingSuffix>
      </Heading>

      <ShoppingCartButton onClick={open} id="shopping-cart-button">
        <CartIcon />
        <CartCount id="cart-count">{cartCount}</CartCount>
      </ShoppingCartButton>
    </HeaderContainer>
  );
}

export default Header;