import ProductDTO from '../data-transports/ProductDTO';

class Product {
  public brand: string;
  public description: string;
  public id: number;
  public name: string;
  public photo: string;
  public price: number;

  constructor(productDTO: ProductDTO) {
    this.brand = productDTO.brand;
    this.description = productDTO.description;
    this.id = productDTO.id;
    this.name = productDTO.name;
    this.photo = productDTO.photo;
    this.price = Number(productDTO.price);
  }
}

export default Product;