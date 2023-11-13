import { FC } from 'react';
import { Columns, FormattedName, MobileCartProductCardContainer, Price, PriceContainer, ProductPhoto, QuantifierContainer, Times, TimesArea } from './styles';
import CartProductType from '../../types/CartProductType';
import Quantifier from '../Quantifier';
import { toBRL } from '../../utils/formatting_utils';

type MobileCartProductCardProps = {
  cartProduct: CartProductType;
  formattedName: string;
  deleteFromCart: () => void;
  decreaseCount: () => void;
  increaseCount: () => void;
}

const MobileCartProductCard: FC<MobileCartProductCardProps> = ({ cartProduct: { product, count }, formattedName, deleteFromCart, decreaseCount, increaseCount }) => {
  return (
    <MobileCartProductCardContainer>
      <TimesArea>
        <Times onClick={deleteFromCart} />
      </TimesArea>

      <ProductPhoto src={product.photo} alt={`Foto de ${formattedName}`} />

      <FormattedName>{formattedName}</FormattedName>

      <Columns>
        <QuantifierContainer>
          <Quantifier
            decreaseCount={decreaseCount}
            count={count}
            increaseCount={increaseCount}
            id={product.id}
            size={30}
            fontSize={20} />
        </QuantifierContainer>

        <PriceContainer>
          <Price>{toBRL(product.price * count)}</Price>
        </PriceContainer>
      </Columns>
    </MobileCartProductCardContainer>
  );
}

export default MobileCartProductCard;