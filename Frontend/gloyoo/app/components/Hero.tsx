import Samsung from "./Samsung";

export default function Hero() {
    return (
        <section className="py-32">
            <div className="container">
                <div className="grid items-center gap-8 lg:grid-cols-2">
                    <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                       
                        <h1 className="my-6 text-pretty text-3xl font-semibold lg:text-5xl">A Universal Hero Section</h1>
                        <p className="mb-8 max-w-xl text-zinc-600 lg:text-lg">
                            Universal design in UI aims to create interfaces that are accessible and usable for users of all abilities. It
                            involves designing with flexibility, providing alternative input methods, and ensuring compatibility with
                            assistive technologies.
                        </p>
                        <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
                            <button
                                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-zinc-900 text-white hover:bg-zinc-900/90 h-10 px-4 py-2 w-full sm:w-auto">
                                Get Started</button><button
                                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-zinc-200 hover:bg-zinc-100 hover:text-zinc-800 h-10 px-4 py-2 w-full sm:w-auto">
                                Read The Docs<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide lucide-arrow-down-right ml-2 size-4">
                                    <path d="m7 7 10 10"></path>
                                    <path d="M17 7v10H7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
               
                
                <div className="relative flex justify-center">
                    <div className="z-10">  <Samsung media="/intro.mp4" mediaType="video" width={250} /></div>

                    <div className="absolute top-20 right-0 scale-95 opacity-90">
                       <Samsung media="/intro.png" mediaType="image" width={250} />
                    
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
}