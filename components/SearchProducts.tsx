"use client";

import {
  Input,
  Tabs,
  Tab,
  Card,
  CardBody,
  Image,
  CardFooter,
  Button,
  ScrollShadow,
  Pagination,
} from "@heroui/react";
import { SearchIcon } from "@/components/SearchIcon";
import { ProductsResponse } from "@/types/products";
import { fetcher } from "@/lib/fetcher";
import useSWR from "swr";
import { CategoriesResponse } from "@/types/categories";
import Link from "next/link";

export default function SearchProducts() {
  const LIMIT = 12;

  const {
    data: dataProducts,
    error: errorProducts,
    isLoading: isLoadingProducts,
  } = useSWR<ProductsResponse>(
    `https://dummyjson.com/products?limit=${LIMIT}`,
    fetcher
  );
  const { products, total } = dataProducts ?? {};

  const {
    data: dataCategories,
    error: errorCategories,
    isLoading: isLoadingCategories,
  } = useSWR<CategoriesResponse>(
    "https://dummyjson.com/products/categories",
    fetcher
  );

  return (
    <>
      <section className="p-4 pb-0 -mt-12 md:-mt-20">
        <div className="flex justify-center p-4 m-auto mx-auto text-3xl font-semibold bg-white rounded-t-3xl max-w-7xl">
          <Input
            classNames={{
              base: "w-full h-10",
              mainWrapper: "h-full",
              input: "text-small",
              inputWrapper:
                "h-full font-normal text-default-500 bg-default-400/20",
            }}
            placeholder="Type to search..."
            size="md"
            startContent={<SearchIcon size={18} />}
            type="search"
            isClearable
          />
        </div>
      </section>

      <section className="p-4 md:px-24">
        <div className="flex justify-between gap-8 mb-8">
          <Tabs
            className="overflow-hidden"
            color="danger"
            variant="underlined"
            size={"lg"}
          >
            {/* <ScrollShadow > */}
            {dataCategories?.map(({ name, slug }) => (
              <Tab key={slug} title={name} />
            ))}
            {/* </ScrollShadow> */}
          </Tabs>

          <div>
            <Button variant="flat" size="lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 10a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M6 4v4" />
                <path d="M6 12v8" />
                <path d="M10 16a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M12 4v10" />
                <path d="M12 18v2" />
                <path d="M16 7a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
                <path d="M18 4v1" />
                <path d="M18 9v11" />
              </svg>
              Filters
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-8 justify-items-center sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-6">
          {products?.map(({ id, title, thumbnail, price, rating }) => (
            <Card
              key={id}
              className="w-full border-none outline-none"
              shadow="none"
              onPress={() => console.log("item pressed")}
            >
              <CardBody className="p-0 overflow-visible ">
                <Link href="#" className="w-full">
                  <Image
                    alt={title}
                    className="object-cover w-full bg-gray-100 aspect-square"
                    radius="lg"
                    src={thumbnail}
                    width="100%"
                  />
                </Link>
              </CardBody>
              <CardFooter className="flex flex-col items-start gap-2 text-md">
                <b>{title}</b>
                <div className="flex items-center justify-between w-full gap-2">
                  <div className="flex items-center gap-1 text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="icon icon-tabler icons-tabler-outline icon-tabler-star"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                    <span className="text-sm">{rating}</span>
                  </div>
                  <b>${price}</b>
                </div>
                <div className="flex w-full gap-1">
                  <Button
                    className="w-full bg-gray-50"
                    variant="bordered"
                    radius="full"
                  >
                    Add to cart
                  </Button>
                  <Button className="w-full text-white bg-black" radius="full">
                    Buy now
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mb-8">
          <Pagination showControls initialPage={1} total={10} />
        </div>
      </section>
    </>
  );
}
