import { render, waitFor } from '@testing-library/react';
import { FC } from 'react';
import { QueryClient, QueryClientProvider, useQueryClient } from 'react-query';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { UserContextProvider } from './context/UserContext';
import { FontStyles } from './stylesheets/font';
import { GlobalStyles } from './stylesheets/global';
import theme from './stylesheets/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const wrapper: FC<any> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <FontStyles />
      <GlobalStyles />

      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          {children}
        </UserContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

const timeout = 3000;

describe('Tests over product purchase flow', () => {
  it('ensure jest selectors are working properly', async () => {
    render(<App />, { wrapper });

    const heading = document.querySelector('#heading') as HTMLElement;
    expect(heading).toHaveTextContent('MKS');
    expect(heading).not.toHaveTextContent('Matheus');
  });

  it('ensures all products have been rendered', async () => {
    render(<App />, { wrapper });

    // Aguarda a requisição de GET /products
    setTimeout(() => {
      const products = document.querySelectorAll('.product');
      expect(products.length).toBe(8);
    }, timeout);
  });

  it('should add a product to the cart before clicking its button', async () => {
    render(<App />, { wrapper });

    setTimeout(() => {
      const buyButton = document.querySelector('#buy-button-1') as HTMLElement;
      buyButton.click();
  
      const closeDrawerButton = document.querySelector('#close-drawer-button') as HTMLElement;
      closeDrawerButton.click();
  
      const cartCount = document.querySelector('#cart-count') as HTMLElement;
      expect(cartCount).toHaveTextContent('1');
  
      const shoppingCartButton = document.querySelector('#shopping-cart-button') as HTMLElement;
      shoppingCartButton.click();
  
      const cartProductCard = document.querySelector('.cart-product-card');
      expect(cartProductCard).toHaveTextContent('Apple Iphone 11 128 GB');
    }, timeout);
  });

  it('should increase a product\'s quantity by clicking in designed buttons', async () => {
    render(<App />, { wrapper });

    setTimeout(() => {
      const buyButton = document.querySelector('#buy-button-1') as HTMLElement;
      buyButton.click();
  
      const plusButton = document.querySelector('#plus-button-1') as HTMLElement;
      const minusButton = document.querySelector('#minus-button-1') as HTMLElement;
  
      for (let i = 0; i < 10; ++i) {
        plusButton.click();
      }
  
      const price = document.querySelector('#cart-product-card-price-1') as HTMLElement;
      expect(price).toHaveTextContent('R$50.000');
  
      minusButton.click();
      expect(price).toHaveTextContent('R$45.000');
  
      const closeDrawerButton = document.querySelector('#close-drawer-button') as HTMLElement;
      closeDrawerButton.click();
  
      const cartCount = document.querySelector('#cart-count') as HTMLElement;
      expect(cartCount).toHaveTextContent('9');
    }, timeout);
  });

  it('should sum properly considering product\'s price and quantity', async () => {
    render(<App />, { wrapper });

    setTimeout(() => {
      const buyButton = document.querySelector('#buy-button-2') as HTMLElement;
      buyButton.click();

      const total = document.querySelector('#total') as HTMLElement;
      expect(total).toHaveTextContent('R$52.800');

      const plusButton = document.querySelector('#plus-button-2') as HTMLElement;

      for (let i = 0; i < 5; ++i) {
        plusButton.click();
      }

      expect(total.innerText).toBe('R$51.000');
    }, timeout);
  });
});