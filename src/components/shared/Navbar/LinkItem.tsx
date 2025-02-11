import { INavbarOptions } from "@/Types/interface";
import Link from "next/link";

const LinkItem = ({ path, label }: INavbarOptions) => {
  return (
    <Link
      href={path}
      className="link-hover flex items-center text-sm font-medium text-muted-foreground hover:text-[#A8A29E]"
    >
      {label}
    </Link>
  );
};

export default LinkItem;
