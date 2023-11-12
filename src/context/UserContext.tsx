import { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react';

type UserContextType = {
  cartCount: number;
  setCartCount: Dispatch<SetStateAction<number>>;
}

const initialValue: UserContextType = {
  cartCount: 0,
  setCartCount: () => {},
}

export const UserContext = createContext<UserContextType>(initialValue);

type UserContextProps = {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [cartCount, setCartCount] = useState<number>(initialValue.cartCount);
  
  return (
    <UserContext.Provider value={{ cartCount, setCartCount }}>
      {children}
    </UserContext.Provider>
  );
}