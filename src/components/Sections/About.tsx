const About = () => {
  return (
    <section id="about" className="pt-20">
      <div className="group flex flex-col mx-auto">
        <h1 className=" text-white text-center text-4xl mb-2">About Me</h1>
        <div className="h-0.5 border-b border-[#292524] my-5"></div>

        <p className="text-muted-foreground sm:text-base leading-relaxed">
          Sajadur Rahman is a highly skilled Full-Stack Web Developer and
          Software Engineer with a strong foundation in modern web technologies
          and software development. With over two years of experience, he has
          built and optimized dynamic, high-performance web applications using
          React, Next.js, Node.js, and Express.js.
        </p>

        <p className="text-muted-foreground sm:text-base leading-relaxed mt-4">
          Sajadur has successfully developed and deployed various projects,
          including an online contest management platform with real-time
          updates, Firebase Authentication, and Stripe integration. His
          expertise extends to crafting seamless user experiences with Tailwind
          CSS, integrating secure payment gateways, and leveraging cloud-based
          solutions for scalable applications.
        </p>

        <p className="text-muted-foreground sm:text-base leading-relaxed mt-4">
          A dedicated educator, Sajadur mentors aspiring developers while
          continuously refining his skills to stay ahead of industry trends. His
          commitment to innovation and excellence drives him to create impactful
          digital solutions that enhance user engagement and business growth.
        </p>
      </div>
    </section>
  );
};

export default About;
