"use client";
import React from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navItems = [
   
    
    { label: "Vorteile", href: "#advantages" },
     { label: "Leistungen", href: "#services" },
    { label: "Über uns", href: "#about-us" },
  ];

  return (
    <header className="fixed top-0 z-20 min-w-full border-b border-brand-charcoal bg-transparent px-4 text-slate-50 shadow-brand-soft backdrop-blur-sm dark:bg-transparent sm:border-transparent sm:px-6 lg:px-27">
      <div className="container flex h-16 items-center justify-between px-0 sm:px-0">
        <nav
          aria-label="Main"
          className="grid w-full grid-cols-2 items-center justify-between py-2 shadow-brand-soft lg:grid-cols-4 lg:gap-4"
        >
          <a href="#home" className="col-span-1 shrink-0">
            <img
              src="/Logo.png"
              alt="Gloyoo"
              className="ml-0 h-8 w-auto sm:h-9 lg:ml-30"
            />
          </a>

          <div className="hidden lg:block lg:justify-self-center lg:col-span-2 ">
            <ul className="flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-brand-teal hover:text-white focus:outline-none"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden items-center gap-2 lg:flex xl:gap-4 lg:col-span-1 lg:justify-end text-right">
            <button className="inline-flex h-10 items-center justify-center rounded-md  px-4 py-2 text-sm font-medium text-brand-slate transition-colors  hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-charcoal focus-visible:ring-offset-2">
              En
            </button>

            <a
              href="#about-us"
              className="relative overflow-hidden rounded-xl border border-brand-teal px-6 py-3 text-sm font-semibold text-brand-teal transition-all duration-300 hover:text-white sm:text-base"
            >
              <span className="relative z-10">Contact us</span>
              <span className="absolute inset-0 origin-left scale-x-0 bg-brand-teal transition-transform duration-300 hover:scale-x-100"></span>
            </a>
          </div>

          <div className="flex items-center justify-self-end lg:hidden">
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
        <div className="absolute left-0 top-full w-full rounded-b-lg bg-transparent px-4 shadow-lg sm:px-6">
          <ul className="space-y-3 rounded-lg bg-white/80 px-4 pb-4 text-brand-steel backdrop-blur-sm dark:bg-slate-950/80 dark:text-white">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="block py-2 hover:text-amber-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#about-us"
                className="block py-2 hover:text-amber-600"
                onClick={() => setIsOpen(false)}
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
