import About from "@/components/Sections/About";
import Hero from "@/components/Sections/Hero";
import TechStack from "@/components/Sections/TechStack";
import Navbar from "@/components/shared/Navbar/Navbar";
import React from "react";

const HomePage = () => {
  return (
    <>
      <header className="">
        <Navbar />
      </header>
      <main className="container mx-auto max-w-5xl mt-10 pt-16 px-5 lg:px-0">
        <Hero/>
        <About/>
        <TechStack/>
      </main>
    </>
  );
};

export default HomePage;
