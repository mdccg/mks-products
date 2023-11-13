import { FC } from 'react';
import { CartProductCardQuantifier, CartProductCardQuantifierCounter, CartProductCardQuantifierCounterContainer, CartProductCardQuantifierLabel, CartProductCardQuantifierMinusButton, CartProductCardQuantifierPlusButton, CartProductCardQuantifierWrapper, VerticalRule } from './styles';

type QuantifierProps = {
  displayLabel?: boolean;
  decreaseCount: () => void;
  count: number;
  increaseCount: () => void;
  id: number;
  style?: any;
  size?: number;
  fontSize?: number;
}

const Quantifier: FC<QuantifierProps> = ({ displayLabel = false, decreaseCount, count, increaseCount, id, style, size = 14, fontSize = 10 }) => (
  <CartProductCardQuantifierWrapper style={style}>
    <div>
      {(displayLabel) && <CartProductCardQuantifierLabel style={{ fontSize: fontSize / 2 }}>Qtd:</CartProductCardQuantifierLabel>}
      
      <CartProductCardQuantifier>
        <CartProductCardQuantifierMinusButton style={{ width: size, height: size, fontSize }} onClick={decreaseCount} id={`minus-button-${id}`} />
        
        <VerticalRule />

        <CartProductCardQuantifierCounterContainer style={{ width: size, height: size }}>
          <CartProductCardQuantifierCounter style={{ fontSize }}>{count}</CartProductCardQuantifierCounter>  
        </CartProductCardQuantifierCounterContainer>

        <VerticalRule />

        <CartProductCardQuantifierPlusButton style={{ width: size, height: size, fontSize }} onClick={increaseCount} id={`plus-button-${id}`} />
      </CartProductCardQuantifier>
    </div>
  </CartProductCardQuantifierWrapper>
);

export default Quantifier;