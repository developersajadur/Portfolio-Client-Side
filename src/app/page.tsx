import About from "@/components/Sections/About";
import Experience from "@/components/Sections/Experience";
import Hero from "@/components/Sections/Hero";
import TechStack from "@/components/Sections/TechStack";
import React from "react";

const HomePage = () => {
  return (
    <section>
        <Hero />
        <About />
        <TechStack />
        <Experience/>
    </section>
  );
};

export default HomePage;
