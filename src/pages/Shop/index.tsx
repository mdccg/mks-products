import axios, { AxiosResponse } from 'axios';
import { useQuery } from 'react-query';
import Product from '../../classes/Product';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import ProductDTO from '../../data-transports/ProductDTO';
import ProductResponseDTO from '../../data-transports/ProductResponseDTO';
import { ProductListContainer, ShopContainer } from './styles';

const { REACT_APP_API_BASE_URL, REACT_APP_API_PRODUCTS_ENDPOINT, REACT_APP_API_PRODUCTS_ENDPOINT_PER_PAGE, REACT_APP_API_PRODUCTS_ENDPOINT_SORT_BY, REACT_APP_API_PRODUCTS_ENDPOINT_ORDER_BY } = process.env;

const Shop = () => {
  const { data: products, isLoading, error } = useQuery('products', () => (
    axios.get(REACT_APP_API_BASE_URL + REACT_APP_API_PRODUCTS_ENDPOINT, {
      params: {
        page: 1,
        rows: REACT_APP_API_PRODUCTS_ENDPOINT_PER_PAGE,
        sortBy: REACT_APP_API_PRODUCTS_ENDPOINT_SORT_BY,
        orderBy: REACT_APP_API_PRODUCTS_ENDPOINT_ORDER_BY,
      }
    }).then((res: AxiosResponse<ProductResponseDTO>) => res.data.products.map((productDTO: ProductDTO) => new Product(productDTO)))
  ));

  if (isLoading) {
    // mostrar skeleton
    return <>Carregando</>;
  }

  if (error) {
    return <></>;
  }

  return (
    <ShopContainer>
      <ProductListContainer>
        {(products) && products.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
      </ProductListContainer>
    </ShopContainer>
  );
}

export default Shop;