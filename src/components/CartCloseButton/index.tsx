import { FC } from 'react';
import { TimesIcon } from './styles';

type CartCloseButtonProps = {
  onClick: any;
  size?: number;
  id?: string;
}

const CartCloseButton: FC<CartCloseButtonProps> = ({ onClick, size = 32 }) => (
  <TimesIcon style={{ width: size, height: size, borderRadius: size / 2, fontSize: size * .625 }} onClick={onClick} id={id} />
);

export default CartCloseButton;