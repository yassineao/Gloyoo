export default function Navbar() {
  return (
    <div className="static inset-x-0 top-0 z-20 bg-background">
      <div className="container">
        <nav
          aria-label="Main"
          data-orientation="horizontal"
          dir="ltr"
          className="relative z-10 flex min-w-full max-w-max flex-1 items-center justify-center"
        >
          <div className="flex w-full items-center justify-between  py-4">
            <div>
              <a href="#">
                <img
                  src="/Logo.png"
                  alt="Gloyoo"
                  className="h-8 ml-70 w-auto"
                />
              </a>
            </div>

            <div className="relative">
              <ul
                data-orientation="horizontal"
                dir="ltr"
                className="group hidden flex-1 list-none items-center justify-center space-x-1 lg:flex"
              >
                <li>
                  <button
                    id="platform-trigger"
                    data-state="closed"
                    aria-expanded={false}
                    aria-controls="platform-content"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                   Projects
                   
                  </button>
                </li>

               <li>
                  <button
                    id="platform-trigger"
                    data-state="closed"
                    aria-expanded={false}
                    aria-controls="platform-content"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                   About us
                   
                  </button>
                </li>

              <li>
                  <button
                    id="platform-trigger"
                    data-state="closed"
                    aria-expanded={false}
                    aria-controls="platform-content"
                    className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                  >
                   Offers
                   
                  </button>
                </li>

              
              </ul>
            </div>

            <div className="hidden items-center gap-4 lg:flex">
              <button className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                En
              </button>

              <button className="inline-flex h-10 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background px-4 py-2 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Contact us
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
                  className="ml-2 size-4"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-4 lg:hidden">
              <button
                className="inline-flex h-10 w-10 items-center justify-center whitespace-nowrap rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                aria-label="Main Menu"
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
          </div>

          <div className="absolute left-0 top-full flex justify-center" />
        </nav>
      </div>
    </div>
  );
}