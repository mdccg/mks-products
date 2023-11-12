import { BuyButton, BuyButtonLabel, ProductCardSkeletonContainer, ProductCardSkeletonDescription, ProductCardSkeletonHeader, ProductCardSkeletonName, ProductCardSkeletonPhoto, ProductCardSkeletonPriceContainer, ProductInformation, ShoppingBagIcon } from './styles';

const ProductCardSkeleton = () => {
  return (
    <ProductCardSkeletonContainer>
      <ProductInformation>
        <ProductCardSkeletonPhoto height={140} variant="rectangular" />
      
        <ProductCardSkeletonHeader>
          <div>
            <ProductCardSkeletonName width={100} variant="rectangular" />
            <ProductCardSkeletonName width={50} variant="rectangular" />
          </div>

          <ProductCardSkeletonPriceContainer width={50} variant="rectangular" />
        </ProductCardSkeletonHeader>

        <ProductCardSkeletonDescription height={60} variant="rectangular" />
      </ProductInformation>

      <BuyButton>
        <ShoppingBagIcon />
        <BuyButtonLabel>Comprar</BuyButtonLabel>
      </BuyButton>
    </ProductCardSkeletonContainer>
  );
}

export default ProductCardSkeleton;