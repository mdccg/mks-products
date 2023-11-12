import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import CartProductType from '../types/CartProductType';

type UserContextType = {
  cart: CartProductType[];
  isCartOpen: boolean;
  setCart: Dispatch<SetStateAction<CartProductType[]>>;
  setIsCartOpen: Dispatch<SetStateAction<boolean>>;
}

const initialValue: UserContextType = {
  cart: [],
  isCartOpen: false,
  setCart: () => {},
  setIsCartOpen: () => {},
}

export const UserContext = createContext<UserContextType>(initialValue);

type UserContextProps = {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [cart, setCart] = useState<CartProductType[]>(initialValue.cart);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(initialValue.isCartOpen);

  return (
    <UserContext.Provider value={{ cart, isCartOpen, setCart, setIsCartOpen }}>
      {children}
    </UserContext.Provider>
  );
}