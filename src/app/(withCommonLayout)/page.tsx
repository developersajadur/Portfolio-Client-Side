import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";

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
