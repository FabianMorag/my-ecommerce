
import { getCategories } from "@/services/products";
import { ScrollShadow } from "@nextui-org/react";
import Link from "next/link";
import { Response } from "@/types/products";

export default async function Categories() {
  const res = await getCategories()
  const data: Response = await res.json()
  const categories = data.data.categories

  const mainCategories = ["smartphones", "laptops", "skincare", "fragrances"]

  return (
    <>
      <ScrollShadow
        className="md:hidden"
        hideScrollBar
        offset={50}
        orientation="horizontal"
      >
        <div className="flex w-full gap-2">
          {
            categories.map((categoryName, index) => (
              <Link className="px-4 py-2 bg-gradient-to-b from-[#333] to-[#111] font-medium text-white capitalize border rounded-full text-nowrap" href={`/category/${categoryName}`} key={index}>{categoryName}</Link>
            ))
          }
        </div>
      </ScrollShadow>

      <div className="hidden md:block">
        <h2 className="mb-2 text-xl font-semibold">Main Categories</h2>
        <div className="flex gap-2">
          {
            mainCategories.map((categoryName, index) => (
              <Link className="flex-1 px-4 py-2 font-medium text-center text-white capitalize border rounded-full bg-neutral-900 text-nowrap basis-0 transition-background hover:bg-rose-700" href={`/category/${categoryName}`} key={index}>{categoryName}</Link>
            ))
          }
        </div>
      </div>
    </>
  )
};


