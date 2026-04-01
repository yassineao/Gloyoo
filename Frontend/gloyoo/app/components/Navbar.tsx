"use client";
import React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="fixed top-0 z-20 min-w-full border-b border-brand-charcoal bg-transparent text-slate-50 shadow-brand-soft backdrop-blur-sm dark:bg-transparent sm:border-transparent">
      <div className="container px-4 sm:px-6 justify-between items-center flex h-16">
        <nav  
          aria-label="Main"
          className="grid w-full grid-cols-2 items-center justify-between py-2 shadow-brand-soft lg:grid-cols-4 lg:gap-4"
        >
          <a href="#" className="shrink-0 col-span-1">
            <img
              src="/Logo.png"
              alt="Gloyoo"
              className="h-8 w-auto sm:h-9 ml-30"
            />
          </a>

          <div className="hidden lg:block lg:justify-self-center lg:col-span-2 ">
            <ul className="flex items-center gap-1 xl:gap-2">
              <li>
                <button className="inline-flex h-10 items-center justify-center rounded-md  px-4 py-2 text-sm font-medium  transition-colors hover:bg-brand-teal hover:text-white focus:outline-none">  
                  Projects
                </button>
              </li>

              <li>
                <button className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium  transition-colors hover:bg-brand-teal hover:text-white focus:outline-none">
                  About us
                </button>
              </li>

              <li>
                <button className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium  transition-colors hover:bg-brand-teal hover:text-white focus:outline-none">
                  Offers
                </button>
              </li>
            </ul>
          </div>

          <div className="hidden items-center gap-2 lg:flex xl:gap-4 lg:col-span-1 lg:justify-end text-right">
            <button className="inline-flex h-10 items-center justify-center rounded-md  px-4 py-2 text-sm font-medium text-brand-gold transition-colors  hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:ring-offset-2">
              En
            </button>

           <button className="relative overflow-hidden rounded-xl border border-brand-teal px-6 py-3 text-sm font-semibold text-brand-teal transition-all duration-300 hover:text-white sm:text-base">
  <span className="relative z-10">Contact us</span>
  <span className="absolute inset-0 origin-left scale-x-0 bg-brand-teal transition-transform duration-300 hover:scale-x-100"></span>
</button>
          </div>

          <div className="flex items-center lg:hidden">
            <button
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-input bg-background text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label="Main Menu"
              onClick={() => setIsOpen(!isOpen)}
            >

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
                className="size-4"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            </button>
        
          </div>

        </nav>
      </div>
          <div
              className={`lg:hidden transition-all duration-300 overflow-hidden 
                    ${isOpen ? "max-h-96 opacity-100 " : "max-h-0 opacity-0"}`}
            >
              <div className="bg-transparent absolute top-full left-0 w-full rounded-b-lg shadow-lg">
               <ul className="flex flex-col px-4 pb-4 space-y-3 text-white bg-transparent bg-blur-sm  bg-white/80 dark:bg-slate-950/80 rounded-lg">
                <li><a href="#" className="block py-2 hover:text-amber-600">Projects</a></li>
                <li> <a className="block py-2 hover:text-amber-600" href="#about-us">
                  About us
                </a></li>
                <li><a className="block py-2 hover:text-amber-600"  href="#packs">Preis</a></li>
                <li>
                  <a
                    href="#contact"
                    className="block py-2 hover:text-amber-600"
                  >

                    Contact us
                  </a>
                </li>
              </ul>
              </div>
              
            </div>
    </header>
  );
}
