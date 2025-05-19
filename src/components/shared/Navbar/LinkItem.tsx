"use client";

import { useRouter, usePathname } from "next/navigation";
import { TNavbarOptions } from "@/types";

const LinkItem = ({ label, path }: TNavbarOptions) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = () => {
    if (path.startsWith("#")) {
      if (pathname !== "/") {
        router.push(`/${path}`);
      } else {
        const element = document.querySelector(path);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    } else {
      router.push(path);
    }
  };

  return (
    <button onClick={handleClick}  className="link-hover flex items-center text-sm font-medium text-muted-foreground hover:text-[#A8A29E]">
      {label}
    </button>
  );
};

export default LinkItem;
