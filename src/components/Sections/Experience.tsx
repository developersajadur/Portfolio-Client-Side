'use client';

import { Experiences } from '@/lib/experience.utils';
import { HiBriefcase } from "react-icons/hi2";
import { HiExternalLink } from "react-icons/hi";

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
