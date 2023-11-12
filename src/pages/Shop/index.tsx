import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import Product from '../../classes/Product';
import ProductCard from '../../components/ProductCard';
import ProductCardSkeleton from '../../components/ProductCardSkeleton';
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
  ), { retry: 3 });

  useEffect(() => {
    if (error) {
      toast.error('Não foi possível buscar os produtos.');
    }
  }, [error]);

  return (
    <ShopContainer>
      <ProductListContainer>
        {(isLoading) && Array(8).fill({}).map((_, index) => <ProductCardSkeleton key={index} />)}

        {(products) && products.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}

        {/* 
        {(products) && products.map((product, index) => (index % 2 === 0) ? (
          <ProductCard key={product.id} product={product} index={index} />
        ): (
          <ProductCardSkeleton />
        ))}
        */}
      </ProductListContainer>
    </ShopContainer>
  );
}

export default Shop;