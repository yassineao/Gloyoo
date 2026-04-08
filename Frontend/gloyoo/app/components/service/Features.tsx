import type { LocaleDictionary } from "../../lib/i18n";
import Image from "next/image";
type GraphsProps = {
  content: LocaleDictionary["servicePage"]["features"];
};
export default function Features() {
    return (
        <section className="py-32">
  <div className="container">
    <div className="mx-auto flex max-w-screen-md flex-col items-center gap-6">
      <div
        className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
        Overview
      </div>
      <h2 className="mb-2 text-center text-3xl font-semibold lg:text-4xl">
        Built awesome websites with our blocks
      </h2>
      <p className="text-center text-zinc-600 lg:text-lg">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit dolores itaque.
      </p>
    </div>
    <div className="flex flex-col items-center justify-center">
      <div className="w-full max-w-96 lg:max-w-none">
        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] my-16 w-full"></div>
        <div className="mx-auto inline-block w-full gap-x-10 lg:grid lg:grid-cols-4">
          <h3 className="mb-4 text-2xl font-semibold lg:text-3xl">Manage your projects</h3>
          <ul className="col-span-3 grid gap-x-10 gap-y-4 lg:grid-cols-3">
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Lorem ipsum dolor sit
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Amet consectetur adipisicing elit
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Dolores itaque modi quos
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Hic placeat laudantium inventore
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Odio dignissimos quibusdam
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Autem quae eveniet voluptatibus
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Similique illum. Iure perspiciatis
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Impedit culpa error earum in quas
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Nisi inventore minus voluptatem
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-96 lg:max-w-none">
        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] my-16 w-full"></div>
        <div className="mx-auto inline-block w-full gap-x-10 lg:grid lg:grid-cols-4">
          <h3 className="mb-4 text-2xl font-semibold lg:text-3xl">Customize your website easily</h3>
          <ul className="col-span-3 grid gap-x-10 gap-y-4 lg:grid-cols-3">
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Lorem ipsum dolor sit
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Amet consectetur adipisicing elit
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Dolores itaque modi quos
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Hic placeat laudantium inventore
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Odio dignissimos quibusdam
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Autem quae eveniet voluptatibus
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Similique illum. Iure perspiciatis
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Impedit culpa error earum in quas
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Nisi inventore minus voluptatem
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-96 lg:max-w-none">
        <div data-orientation="horizontal" role="none" className="shrink-0 bg-border h-[1px] my-16 w-full"></div>
        <div className="mx-auto inline-block w-full gap-x-10 lg:grid lg:grid-cols-4">
          <h3 className="mb-4 text-2xl font-semibold lg:text-3xl">Style your components</h3>
          <ul className="col-span-3 grid gap-x-10 gap-y-4 lg:grid-cols-3">
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Lorem ipsum dolor sit
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Amet consectetur adipisicing elit
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Dolores itaque modi quos
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Hic placeat laudantium inventore
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Odio dignissimos quibusdam
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Autem quae eveniet voluptatibus
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Similique illum. Iure perspiciatis
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Impedit culpa error earum in quas
            </li>
            <li className="flex gap-1 text-zinc-600">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-check mr-2 inline-block w-4">
                <path d="M20 6 9 17l-5-5"></path>
              </svg>Nisi inventore minus voluptatem
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
    );
}
