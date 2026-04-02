"use client";
import Hero from "./components/Hero";
import Services from "./components/Services";
import ScrollVelocity from "./components/ScrollVelocity";
import AboutUs from "./components/AboutUs";
import Advantages from "./components/Advantages";
import Background from "./components/Background";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-1 flex-col items-center justify-center overflow-hidden bg-zinc-50 font-sans dark:bg-slate-950">
        <Hero />
      </div>

      <Advantages />

      <Background>
          <div className="  mt-10">
            <ScrollVelocity
              texts={["React Bits", "Scroll Down"]}
              velocity={100}
              className="custom-scroll-text text-3xl font-bold text-brand-teal sm:text-4xl lg:text-6xl xl:text-7xl"
            />
          </div>
          <Services />
      </Background>

      <AboutUs />
    </div>
  );
}
