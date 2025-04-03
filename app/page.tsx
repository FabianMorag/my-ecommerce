import SearchProducts from "@/components/SearchProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Ecommerce",
  description: "Descripcion del sitio",
};

export default function Home() {
  return (
    <main className="flex-grow">
      <section className="p-4 min-h-[280px] md:min-h-[720px] content-center bg-cover bg-[left_top_40%] bg-[linear-gradient(rgb(0,0,0,0.5),rgb(0,0,0,0.5)),url(/smilling-woman-with-laptop.webp)]">
        <div className="m-auto max-w-7xl">
          <h1 className="text-5xl font-black text-white md:text-9xl">
            Come and get everything you need
          </h1>
        </div>
      </section>
      <SearchProducts />
    </main>
  );
}
