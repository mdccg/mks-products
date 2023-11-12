import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { CartCount, CartIcon, HeaderContainer, Heading, HeadingPrefix, HeadingSuffix, ShoppingCartButton } from './styles';

const Header = () => {
  const { cartCount } = useContext(UserContext);

  return (
    <HeaderContainer>
      <Heading tabIndex={1}>
        <HeadingPrefix>MKS</HeadingPrefix>
        <HeadingSuffix>Sistemas</HeadingSuffix>
      </Heading>

      <ShoppingCartButton tabIndex={2}>
        <CartIcon />
        <CartCount>{cartCount}</CartCount>
      </ShoppingCartButton>
    </HeaderContainer>
  );
}

export default Header;