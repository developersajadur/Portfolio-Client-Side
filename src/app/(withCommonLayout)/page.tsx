import About from "@/components/sections/About";
import Blogs from "@/components/sections/Blog";
import ContactPage from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import TechStack from "@/components/sections/TechStack";
import { getAllBlogs } from "@/services/BlogServices";
import { getAllProjects } from "@/services/PortfolioServices";

const HomePage = async () => {
  let projects = [];

  try {
    const { data } = await getAllProjects(undefined, "6");
    projects = data?.result || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
  }

  let blogs = [];

  try {
    const { data } = await getAllBlogs(undefined, "6");
    blogs = data?.result || [];
  } catch (error) {
    console.error("Error fetching projects:", error);
  }
  return (
    <section>
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects projects={projects} />
      <Blogs blogs={blogs} />
      <ContactPage />
    </section>
  );
};

export default HomePage;
