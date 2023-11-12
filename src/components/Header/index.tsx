import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import { CartCount, CartIcon, HeaderContainer, Heading, HeadingPrefix, HeadingSuffix, ShoppingCartButton } from './styles';

const Header = () => {
  const { cart, setIsCartOpen } = useContext(UserContext);
  const [cartCount, setCartCount] = useState<number>(0);

  useEffect(() => {
    setCartCount(cart.reduce((previousValue, { count }) => count + previousValue, 0));
  }, [cart]);

  return (
    <HeaderContainer>
      <Heading tabIndex={1}>
        <HeadingPrefix>MKS</HeadingPrefix>
        <HeadingSuffix>Sistemas</HeadingSuffix>
      </Heading>

      <ShoppingCartButton onClick={() => setIsCartOpen(true)} tabIndex={2}>
        <CartIcon />
        <CartCount>{cartCount}</CartCount>
      </ShoppingCartButton>
    </HeaderContainer>
  );
}

export default Header;