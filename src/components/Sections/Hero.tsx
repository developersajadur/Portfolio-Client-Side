import Image from "next/image";
import SocialIcons from "./SocialIcons";

const Hero = () => {
  return (
    <section
      id="home"
      className="flex items-center justify-between gap-4 flex-col md:flex-row relative"
    >
      {/* Left Side Content */}
      <div className="mb-2 flex flex-col items-start">
        <h2 className="gradient-text text-3xl sm:text-3xl md:text-3xl xl:text-4xl 2xl:text-4xl my-2 font-bold">
          Web Developer & Software Engineer
        </h2>
        <p className="text-2xl text-muted-foreground font-semibold mb-2">
          Md. Sajadur Rahman
        </p>

        {/* Social Icons (Left Side) */}
        <div className="hidden md:block">
          <SocialIcons />
        </div>
      </div>

      {/* Right Side (Image) */}
      <div className="relative">
        <Image
          width={1000}
          height={1000}
          className="h-[450px] w-[400px] object-cover rounded-xl object-center"
          src="https://res.cloudinary.com/devsajadurrahman/image/upload/v1738846791/e1jgd7aaedoef6yvdkkx.jpg"
          alt=""
        />
      </div>

      {/* Social Icons (For Smaller Screens, Placed at the Bottom) */}
      <div className="block md:hidden w-full">
        <SocialIcons />
      </div>
    </section>
  );
};

export default Hero;
