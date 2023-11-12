import ProductDTO from './ProductDTO';

type ProductResponseDTO = {
  products: ProductDTO[];
  count: number;
}

export default ProductResponseDTO;