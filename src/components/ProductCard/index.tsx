import { FC, useContext, useEffect, useState } from 'react';
import Product from '../../classes/Product';
import { toBRL } from '../../utils/formatting_utils';
import { BuyButton, BuyButtonLabel, ProductCardContainer, ProductCardDescription, ProductCardHeader, ProductCardName, ProductCardPhoto, ProductCardPrice, ProductCardPriceContainer, ProductInformation, ShoppingBagIcon } from './styles';
import { UserContext } from '../../context/UserContext';
import CartProductType from '../../types/CartProductType';

type ProductCardProps = {
  product: Product;
  index: number;
}

const ProductCard: FC<ProductCardProps> = ({ product: { brand, description, id, name, photo, price }, index }) => {
  const { cart, setCart, setIsCartOpen } = useContext(UserContext);
  const [formattedName, setFormattedName] = useState<string>('');
  
  const addToCart = () => {
    const existingCartProduct = cart.find(({ product }) => product.id === id);
    if (existingCartProduct) {
      setCart((cart) => {
        const newCart = cart.map((cartProduct) => {
          const newCartProduct = { ...cartProduct };
          
          if (cartProduct.product.id === id) {
            ++newCartProduct.count;
          }

          return newCartProduct;
        });
        
        return newCart;
      });

    } else {
      const product: Product = { brand, description, id, name, photo, price };
      const cartProduct: CartProductType = { product, count: 1 };
      setCart((cart) => [...cart, cartProduct]);
    }

    setIsCartOpen(true);
  }

  useEffect(() => {
    setFormattedName(brand + ' ' + name);
  }, [brand, name]);

  return (
    <ProductCardContainer className="product">
      <ProductCardPhoto src={photo} alt={`Foto de ${name}`} />
      
      <ProductInformation>
        <ProductCardHeader>
          <ProductCardName title={formattedName}>{formattedName}</ProductCardName>

          <ProductCardPriceContainer>
            <ProductCardPrice>{toBRL(price)}</ProductCardPrice>
          </ProductCardPriceContainer>
        </ProductCardHeader>

        <ProductCardDescription>{description}</ProductCardDescription>
      </ProductInformation>

      <BuyButton onClick={addToCart} id={`buy-button-${id}`}>
        <ShoppingBagIcon />
        <BuyButtonLabel>Comprar</BuyButtonLabel>
      </BuyButton>
    </ProductCardContainer>
  );
}

export default ProductCard;