import { FC, useEffect, useState } from 'react';
import Product from '../../classes/Product';
import { toBRL } from '../../utils/formatting_utils';
import { BuyButton, BuyButtonLabel, ProductCardContainer, ProductCardDescription, ProductCardHeader, ProductCardName, ProductCardPhoto, ProductCardPrice, ProductCardPriceContainer, ProductInformation, ShoppingBagIcon } from './styles';

type ProductCardProps = {
  product: Product;
  index: number;
}

const ProductCard: FC<ProductCardProps> = ({ product: { brand, description, name, photo, price }, index }) => {
  const [formattedName, setFormattedName] = useState<string>('');
  
  useEffect(() => {
    setFormattedName(brand + ' ' + name);
  }, [brand, name]);

  return (
    <ProductCardContainer>
      <ProductCardPhoto src={photo} alt={`Foto de ${name}`} />
      
      <ProductInformation>
        <ProductCardHeader>
          <ProductCardName title={formattedName} tabIndex={3 + index}>{formattedName}</ProductCardName>

          <ProductCardPriceContainer>
            <ProductCardPrice tabIndex={4 + index}>{toBRL(price)}</ProductCardPrice>
          </ProductCardPriceContainer>
        </ProductCardHeader>

        <ProductCardDescription>{description}</ProductCardDescription>
      </ProductInformation>

      <BuyButton>
        <ShoppingBagIcon />
        <BuyButtonLabel>Comprar</BuyButtonLabel>
      </BuyButton>
    </ProductCardContainer>
  );
}

export default ProductCard;