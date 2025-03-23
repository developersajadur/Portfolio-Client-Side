'use client';

import { HiBriefcase } from "react-icons/hi2";
import { HiExternalLink } from "react-icons/hi";

 const Experiences = [
  {
    company: "Velocity Digital Inc.",
    logo: "/coderockers-logo.png", // Replace with actual logo path
    role: "Web Developer (Remote)",
    startDate: "10 Feb, 2025",
    endDate: "Present",
    description: [
      "Develop and maintain responsive and visually appealing websites and web applications.",
      "Collaborate with cross-functional teams to gather requirements and implement design solutions.",
      "Optimise websites for maximum speed and scalability."
    ],
    link: "https://kodestorm.com"
  },
  {
    company: "IT Vanilla",
    logo: "https://res.cloudinary.com/devsajadurrahman/image/upload/v1739280246/itvzoczhbilrxz6big8f.jpg",
    role: "Junior Web Developer (On-Site)",
    startDate: "02 Feb, 2024",
    endDate: "03 Apr, 2024",
    description: [
      "Designed and developed responsive websites for various clients using WordPress.",
      "Provided ongoing maintenance and updates for client websites.",
      "Teach web development and WordPress, guiding students in practical projects."
    ],
    link: "https://www.itvanilla.com"
  },
];


const Experience = () => {
  return (
    <section id="experience" className="pt-20 text-white mb-20">
      <h1 className="text-center text-4xl mb-4">Experience</h1>
      <div className="h-0.5 border-b border-[#292524] my-5"></div>

      <div className="space-y-8">
        {Experiences.map((exp, index) => (
          <div key={index} className="flex items-start gap-4">
            {/* Icon & Logo */}
            <div className="flex-shrink-0">
              <HiBriefcase className="w-8 h-8 text-muted-foreground" />
            </div>

            {/* Details */}
            <div>
              <div className="flex items-center gap-2">
                {/* {exp.logo && (
                  <Image src={exp.logo} alt={exp.company} width={24} height={24} className="rounded-full" />
                )} */}
                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 font-bold text-lg hover:underline">
                  {exp.company} <HiExternalLink className="w-5 h-5" />
                </a>
              </div>
              <h2 className="text-lg text-muted-foreground font-medium mt-1">{exp.role}</h2>
              <p className="text-muted-foreground text-sm">{exp.startDate} - {exp.endDate}</p>
              <ul className="mt-2 space-y-1 text-muted-foreground text-sm">
                {exp.description.map((desc, i) => (
                  <li key={i}>• {desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
