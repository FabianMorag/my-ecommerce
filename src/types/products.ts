export type Response = {
  data: Data;
}

export type Data = {
  products: Product[];
  categories: string[];
  productsByCategory: Product[];
}

export type Product = {
  id: string;
  title: string;
  description: string;
  price: Price;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export type Price = {
  fullPrice: number;
  discountPercentage: number;
  priceWithDiscount: number;
}
