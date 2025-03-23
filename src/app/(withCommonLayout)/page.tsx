import About from "@/components/sections/About";
import ContactPage from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import { getAllProjects } from "@/services/PortfolioServices";

const HomePage = async() => {
    let projects = [];
      
        try {
          const {data} = await getAllProjects();
          projects = data?.result || [];
        } catch (error) {
          console.error("Error fetching projects:", error);
        }
  return (
    <section>
        <Hero />
        <About />
        <TechStack />
        <Experience/>
        <Projects projects={projects}/>
        <ContactPage/>
    </section>
  );
};

export default HomePage;
