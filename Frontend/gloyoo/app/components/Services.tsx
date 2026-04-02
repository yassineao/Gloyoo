"use client";

import Grainient from "./Grainient";

export default function Services() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center  overflow-hidden">

            <section className="py-32">
                <div className="container">
                    <div className="mx-auto flex flex-col items-center gap-6 text-center">
                        <div
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground">
                            Features
                        </div>
                        <h2 className="text-4xl font-medium">Various integrations to help you grow your business</h2>
                        <p className="text-lg text-zinc-600">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente sunt deleniti aliquid
                            voluptates, nihil culpa enim.
                        </p>
                    </div>
                    <div className="mt-20 grid gap-10 lg:grid-cols-3 xl:gap-20 h-full">
                        <div className="flex flex-col lg:block h-full">
                            <div className="">
                                <Grainient />
                            </div>
                            <div className="p-6">
                                <div className="mb-1 font-semibold">Copy paste components</div>
                                <p className="text-zinc-600">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi laboriosam voluptatibus
                                    temporibus doloremque laudantium.
                                </p>
                                <a href="#" className="mt-4 flex items-center gap-2 font-medium">Learn more<svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right w-4">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg></a>
                            </div>
                        </div>
                        <div className="flex flex-col lg:block">
                            <div className="">
                                <Grainient />
                            </div>
                            <div className="p-6">
                                <p className="mb-1 flex items-center gap-2 font-semibold">100% customizable</p>
                                <p className="text-zinc-600">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi laboriosam voluptatibus
                                    temporibus doloremque laudantium.
                                </p>
                                <a href="#" className="mt-4 flex items-center gap-2 font-medium">Learn more<svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right w-4">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg></a>
                            </div>
                        </div>
                        <div className="flex flex-col lg:block">
                            <div className="">
                                <Grainient />
                            </div>
                            <div className="p-6">
                                <p className="mb-1 flex items-center gap-2 font-semibold">24/7 support</p>
                                <p className="text-zinc-600">
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi laboriosam voluptatibus
                                    temporibus doloremque laudantium.
                                </p>
                                <a href="#" className="mt-4 flex items-center gap-2 font-medium">Learn more<svg xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-chevron-right w-4">
                                    <path d="m9 18 6-6-6-6"></path>
                                </svg></a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>

    );
}

