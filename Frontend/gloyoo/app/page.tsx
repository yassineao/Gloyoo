"use client";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ScrollVelocity from "./components/ScrollVelocity";
import AboutUs from "./components/AboutUs";
import Advantages from "./components/Advantages";
import Background from "./components/Background";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-slate-950 overflow-hidden">
        <Hero />
      </div>
      <Advantages />

          <Background>
        <div className=" py-16 "> <ScrollVelocity
        texts={['React Bits', 'Scroll Down']}
        velocity={100}
        className="custom-scroll-text text-4xl font-bold text-brand-teal sm:text-5xl lg:text-6xl xl:text-7xl"
      />
      
      <Services />
    </div>
    </Background>
      <AboutUs />
    </div>
  );
}
