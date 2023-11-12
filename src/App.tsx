import { Drawer } from '@mui/material';
import { useContext } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import { UserContext } from './context/UserContext';
import Shop from './pages/Shop';
import theme from './stylesheets/theme';

const App = () => {
  const { isCartOpen, setIsCartOpen } = useContext(UserContext);

  /**
   * @linkcode https://mui.com/material-ui/react-drawer/
   */
  const toggleDrawer = (
    (open: boolean) => (
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setIsCartOpen(open);
      }
    )
  );

  return (
    <>
      <Drawer
        anchor="right"
        open={isCartOpen}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            backgroundColor: theme.palette.foreground,
            boxShadow: '-5px 0 6px rgba(0, 0, 0, .13)',
          },
          elevation: 0,
        }}
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: 'transparent',
            },
          },
        }}>
        <Cart />
      </Drawer>

      <Header />
      <Shop />
      <Footer />

      <ToastContainer />
    </>
  );
}

export default App;