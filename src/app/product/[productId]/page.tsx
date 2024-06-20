import { Suspense } from "react";
import Products from "@/sections/Products";
import Categories from "@/sections/Categories";
import Promotions from "@/sections/Promotions";
import CustomSection from "@/components/CustomSection";
import ProductsSectionSekeleton from "@/components/skeletons/ProductsSectionSkeleton";

export default function Category({ params }: { params: { productId: string } }) {
  const { productId } = params

  return (
    <main>
      <section>
        <img src="/hero.webp" alt="A woman working on her computer" className="h-[540px] w-full object-cover" />
      </section>

      <CustomSection className="relative !p-0 !m-auto flex">
        <div className="absolute w-full max-w-screen-xl px-6 -top-14">
          <div className="px-6 py-3 bg-[rgb(var(--my-bg-color))] rounded-t-xl">
            <h1 className="text-2xl font-semibold">{productId}</h1>
          </div>
        </div>
      </CustomSection>

      <CustomSection>
        <Categories />
      </CustomSection>

      <CustomSection>
        <div className="grid grid-cols-2 gap-x-2 gap-y-6 md:gap-8 md:grid-cols-3">
          <Suspense fallback={<ProductsSectionSekeleton />}>
            <Products />
          </Suspense>
        </div>
      </CustomSection>

      <CustomSection className="bg-gradient-to-b from-[#333] to-[#111] !max-w-[none] !px-0 py-16">
        <div className="max-w-screen-xl px-6 m-auto">
          <Promotions />
        </div>
      </CustomSection>

      <CustomSection className="flex flex-col gap-4 md:gap-8 md:flex-row-reverse">
        <img className="object-cover object-center h-[480px] rounded-xl md:w-1/2" src="/microphone.webp" alt="A white microphone" />
        <div className="flex flex-col justify-between gap-6">
          <div>
            <small className="text-gray-600">NEW ARRIVAL</small>
            <h2 className="mb-4 text-xl font-bold text-gray-900">Microphone MK-II</h2>
            <p className="text-gray-500">Experience unparalleled clarity and crispness with the MK-II microphone. Engineered for professionals, its advanced noise-canceling technology ensures studio-quality audio every time. Make a statement with sleek design and superior performance. Elevate your voice with the MK-II microphone.</p>
          </div>
          <ul>
            <li className="flex items-center gap-3 mb-8 font-semibold text-gray-700">
              <span className="p-4 rounded-full bg-neutral-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M15 8a5 5 0 0 1 0 8" /><path d="M17.7 5a9 9 0 0 1 0 14" /><path d="M6 15h-2a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h2l3.5 -4.5a.8 .8 0 0 1 1.5 .5v14a.8 .8 0 0 1 -1.5 .5l-3.5 -4.5" /></svg>
              </span>
              <div className="flex flex-col gap-2">
                <span>Premium sound</span>
                <span className="text-sm text-gray-400">Your voice becomes your most powerful tool</span>
              </div>
            </li>
            <li className="flex items-center gap-3 font-semibold text-gray-700">
              <span className="p-4 rounded-full bg-neutral-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M16 18a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm0 -12a2 2 0 0 1 2 2a2 2 0 0 1 2 -2a2 2 0 0 1 -2 -2a2 2 0 0 1 -2 2zm-7 12a6 6 0 0 1 6 -6a6 6 0 0 1 -6 -6a6 6 0 0 1 -6 6a6 6 0 0 1 6 6z" /></svg>              </span>
              <div className="flex flex-col gap-2">
                <span>Clean design</span>
                <span className="text-sm text-gray-400">Combines performance with style</span>
              </div>
            </li>
          </ul>
        </div>
      </CustomSection>

      <CustomSection id="form">
        <div className="flex flex-col gap-4 bg-gradient-to-b from-[#333] to-[#111] rounded-xl text-white p-3 md:p-4 md:flex-row md:justify-between md:items-end">
          <div className="w-full max-w-96">
            <h1 className="mb-3 text-xl font-semibold">
              Get notified of our <br /> offers and new products
            </h1>

            <form className="flex items-center w-full gap-2 p-1 bg-white rounded-2xl">
              <label htmlFor="email" className="w-2/3 p-1 text-gray-950">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full focus:outline-none"
                />
              </label>
              <button className="w-1/3 p-1 bg-black rounded-2xl" type="submit">
                Send
              </button>
            </form>
          </div>

          <div className="max-w-96">
            <h2 className="font-semibold">
              All technologies available
            </h2>
            <p className="text-gray-400">Discover all available technologies to enhance your projects and personal endeavors</p>
          </div>
        </div>
      </CustomSection>
    </main>
  );
}
