import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { UserContextProvider } from './context/UserContext';
import { FontStyles } from './stylesheets/font';
import { GlobalStyles } from './stylesheets/global';
import theme from './stylesheets/theme';

const queryClient = new QueryClient();
const rootHTMLElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootHTMLElement);

root.render(
  <>
    <ThemeProvider theme={theme}>
      <FontStyles />
      <GlobalStyles />

      <QueryClientProvider client={queryClient}>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </>
);