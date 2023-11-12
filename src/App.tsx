import Footer from './components/Footer';
import Header from './components/Header';
import Shop from './pages/Shop';

const App = () => {
  const routes = <Shop />;
  return (
    <>
      <Header />
      {routes}
      <Footer />
    </>
  );
}

export default App;