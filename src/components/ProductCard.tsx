import Star from "@/components/icons/Star";
import Link from "next/link";
import { Product } from "@/types/products";

export default function ProductCard({ item }: { item: Product }) {

  return (
    <Link className="flex flex-col bg-white shadow-sm rounded-xl" href={`/product/${item.id}`} >
      <img className="object-cover w-full shadow-md rounded-xl h-44" src={item.thumbnail} alt={item.title} />
      <div className="p-2 overflow-hidden">
        <h3 className="w-full overflow-hidden font-medium text-ellipsis text-nowrap">{item.title}</h3>
        <div className="flex items-center gap-1 text-gray-400">
          <Star size={22} /><small>{item.rating}</small>
        </div>
        <div>
          <b className="text-default-700">${item.price.priceWithDiscount.toFixed(2)}</b> <span className="text-sm font-semibold text-rose-700">{item.price.discountPercentage}% OFF</span>
        </div>
      </div>
    </Link>
  )
};
