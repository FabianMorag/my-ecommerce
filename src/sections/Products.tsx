
import { getAllProductsResume } from "@/services/products";
import { Response } from "@/types/products";
import ProductCard from "@/components/ProductCard";

export default async function Products() {

  const res = await getAllProductsResume()
  const json: Response = await res.json()
  const products = json.data.products.splice(0, 12)

  return (
    products.map((item, index) => (
      <ProductCard item={item} key={index} />
    ))
  )
};
