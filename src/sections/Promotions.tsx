
import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react"
import Link from "next/link"

export default async function Promotions() {
  return (
    <div className="grid grid-cols-12 grid-rows-2 gap-2">
      <Card className="col-span-12 sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="font-bold uppercase text-white/60 text-tiny">The essence of nature</p>
          <h4 className="font-medium text-white text-large">Chose your essence</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 object-cover w-full h-full"
          src="perfum.webp"
          loading="lazy"
        />
      </Card>

      <Card className="col-span-12 hidden sm:flex sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="font-bold uppercase text-tiny text-white/60">We are engaged with environment</p>
          <h4 className="font-medium text-white text-large">Contribute to the planet</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 object-cover w-full h-full"
          src="tree.webp"
          loading="lazy"
        />
      </Card>

      <Card className="col-span-12 hidden sm:flex sm:col-span-4 h-[300px]">
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="font-bold uppercase text-tiny text-white/60">Beauty & Design</p>
          <h4 className="font-medium text-white text-large">Creates like a beast</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 object-cover w-full h-full"
          src="coffe.webp"
          loading="lazy"
        />
      </Card>

      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
        <CardHeader className="absolute z-10 flex-col items-start top-1">
          <p className="font-bold uppercase text-tiny text-white/60">New stuff</p>
          <h4 className="text-2xl font-medium text-black">For podcast</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card example background"
          className="z-0 object-cover w-full h-full scale-125 -translate-y-6"
          src="podcast.webp"
          loading="lazy"
        />
        <CardFooter className="absolute bottom-0 z-10 justify-between bg-white/30 border-t-1 border-zinc-100/50">
          <div>
            <p className="text-black text-tiny">Available soon.</p>
            <p className="text-black text-tiny">Get notified.</p>
          </div>
          <Link className="px-3 py-2 text-white text-tiny rounded-2xl bg-rose-700 hover:bg-rose-600" href="#form">Notify me</Link>
        </CardFooter>
      </Card>

      <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
        <CardHeader className="absolute z-10 flex-col items-start top-1">
          <p className="font-bold uppercase text-tiny text-white/60">Your day your way</p>
          <h4 className="text-xl font-medium text-white/90">Premium products</h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Relaxing app background"
          className="z-0 object-cover w-full h-full"
          src="tech.webp"
          loading="lazy"
        />
        <CardFooter className="absolute bottom-0 z-10 bg-black/40 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex items-center flex-grow gap-2">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">For your routine</p>
              <p className="text-tiny text-white/60">Get a fresh new look.</p>
            </div>
          </div>
          <Link className="px-3 py-2 text-white bg-blue-600 text-tiny rounded-2xl hover:bg-blue-500" href="#form">See category</Link>
        </CardFooter>
      </Card>
    </div>
  )
};





