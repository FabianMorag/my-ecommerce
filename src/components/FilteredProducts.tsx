'use client'

import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { getProductsByCategory } from "@/services/products";
import { Response, Product } from "@/types/products";

export default function FilteredProducts({ category, brand }: { category: string, brand: string | null }) {
  const [products, setProducts] = useState([] as Product[])

  useEffect(() => {
    (async () => {
      const res = await getProductsByCategory(category)
      const json: Response = await res.json()
      const products = json.data.productsByCategory
        .filter((product) => brand ? product.brand.toLowerCase() === brand : product)
      setProducts(products)
    })()
  }, [category, brand])

  return (
    products.map((item, index) => (
      <ProductCard item={item} key={index} />
    ))
  )
};
