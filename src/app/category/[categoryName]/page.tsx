'use client'

import { ChangeEvent, Suspense } from "react";
import CustomSection from "@/components/CustomSection";
import FilteredProducts from "@/components/FilteredProducts";
import ProductsSectionSekeleton from "@/components/skeletons/ProductsSectionSkeleton";
import { useSearchParams } from "next/navigation";



export default function Category({ params }: { params: { categoryName: string } }) {
  const { categoryName } = params

  const searchParams = useSearchParams()
  const brand = searchParams.get('brand')

  const handleSelect = (e: ChangeEvent) => {
    const value = (e.target as HTMLSelectElement).value
    console.log(value)
  }

  return (
    <main>
      <section className="h-[280px] object-center w-full object-cover bg-gradient-to-b from-[#333] to-[#111]">
        <div className="max-w-screen-xl p-6 mx-auto pt-36">
          <h1 className="text-3xl font-semibold text-white">Your are looking for <span className="capitalize text-rose-500">{categoryName}</span></h1>
        </div>
      </section>

      <CustomSection className="flex justify-between">
        <select onChange={handleSelect} className="border rounded-lg border-neutral-700 focus:border-rose-700 bg-transparent">
          <option value="order" defaultChecked>Order</option>
          <option value="price">Price</option>
          <option value="rating">Rating</option>
          <option value="discount">Discount</option>
        </select>

        <div className="flex gap-4">
          <span>Items per page</span>
          <select className="border rounded-lg border-neutral-700 focus:border-rose-700 bg-transparent">
            <option value={12}>12</option>
            <option value={24}>24</option>
            <option value={48}>48</option>
          </select>
        </div>
      </CustomSection>

      <CustomSection>
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 md:gap-8 md:grid-cols-3">
          <Suspense fallback={<ProductsSectionSekeleton />}>
            <FilteredProducts category={categoryName} brand={brand} />
          </Suspense>
        </div>
      </CustomSection>
    </main>
  );
}
