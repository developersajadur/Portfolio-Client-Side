import About from "@/components/Sections/About";
import Experience from "@/components/Sections/Experience";
import Hero from "@/components/Sections/Hero";
import TechStack from "@/components/Sections/TechStack";

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
