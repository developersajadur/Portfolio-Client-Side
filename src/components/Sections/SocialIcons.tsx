"use client";

import {
  FaGithub,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function SocialIcons() {
  return (
    <TooltipProvider>
      <div className="flex gap-3 mt-3 justify-start items-center w-full">
        {[
          {
            icon: <FaGithub className="w-8 h-8 text-white" />,
            label: "GitHub",
            link: "https://github.com",
          },
          {
            icon: <FaFacebook className="w-8 h-8 text-blue-600" />,
            label: "Facebook",
            link: "https://facebook.com",
          },
          {
            icon: <FaInstagram className="w-8 h-8 text-pink-500" />,
            label: "Instagram",
            link: "https://instagram.com",
          },
          {
            icon: <FaLinkedin className="w-8 h-8 text-blue-700" />,
            label: "LinkedIn",
            link: "https://linkedin.com",
          },
          {
            icon: <FaTwitter className="w-8 h-8 text-blue-400" />,
            label: "Twitter",
            link: "https://twitter.com",
          },
        ].map((social, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <a
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                {social.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent>{social.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
}
