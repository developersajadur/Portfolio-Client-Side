"use client";

import {
  FaGithub,
  FaFacebook,
  FaLinkedin,
  FaDiscord,
  FaTelegram,
} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { IoIosMail } from "react-icons/io";
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
            link: "https://github.com/developersajadur",
          },
          {
            icon: <FaLinkedin className="w-8 h-8 text-blue-700" />,
            label: "LinkedIn",
            link: "https://www.linkedin.com/in/sajadurrahman/",
          },
          {
            icon: <IoIosMail className="w-8 h-8 text-pink-500" />,
            label: "Mail",
            link: "mailto:itzmesojib@gmail.com",
          },
          {
            icon: <IoLogoWhatsapp className="w-8 h-8 text-green-500" />,
            label: "WhatsApp",
            link: "https://wa.me/+8801787448412",
          },
          {
            icon: <FaDiscord className="w-8 h-8 text-blue-600" />,
            label: "Discord",
            link: "https://discord.com/users/developersajadur",
          },
          {
            icon: <FaTelegram className="w-8 h-8 text-blue-600" />,
            label: "Telegram",
            link: "https://t.me/developersajadur",
          },
          {
            icon: <FaFacebook className="w-8 h-8 text-blue-600" />,
            label: "Facebook",
            link: "https://web.facebook.com/sajadurrahman.dev",
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
