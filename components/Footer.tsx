import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-4 p-6 border-t border-gray-300">
      <div className="w-full max-w-screen-xl mx-auto md:flex md:justify-between md:items-end">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="mb-2 text-xl font-bold">About</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link className="hover:underline" href="#">
                  Blog
                </Link>
              </li>
              <li className="mb-2">
                <Link className="hover:underline" href="#">
                  Meet the team
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-2 text-xl font-bold">Support</h3>
            <ul className="text-gray-400">
              <li className="mb-2">
                <Link className="hover:underline" href="#">
                  Contact Us
                </Link>
              </li>
              <li className="mb-2">
                <Link className="hover:underline" href="#">
                  Shipping
                </Link>
              </li>
              <li className="mb-2">
                <Link className="hover:underline" href="#">
                  Returns
                </Link>
              </li>
              <li>
                <Link className="hover:underline" href="#">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h4 className="mb-2 text-gray-500">Social media</h4>
          <div className="flex gap-4 *:bg-neutral-900 text-white *:p-3 *:rounded-full">
            <Link className="hover:bg-neutral-700" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z" />
                <path d="M10 9l5 3l-5 3z" />
              </svg>
            </Link>
            <Link className="hover:bg-neutral-700" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                <path d="M16.5 7.5l0 .01" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full max-w-screen-xl gap-2 py-4 mx-auto border-t border-t-gray-300">
        <span className="text-gray-400">
          Inspired in{" "}
          <Link
            className="text-rose-700 hover:text-rose-500 hover:underline"
            href="https://dribbble.com/shots/23601018-Stuffsus-Home-Stuff-E-Commmerce-Responsive"
            target="_blank"
          >
            BimGraph design
          </Link>
        </span>
        <div className="flex justify-around w-full text-gray-600">
          <Link className="hover:underline" href="#">
            Terms of service
          </Link>
          <Link className="hover:underline" href="#">
            Privacy police
          </Link>
        </div>
      </div>
    </footer>
  );
}
