import Link from "next/link";
import LinkItem from "./LinkItem";
import { RxBackpack } from "react-icons/rx";
import { NavOptions } from "./NavOptions";
import { TNavbarOptions } from "@/types";

const NavItems = () => {
  return (
    <div className="flex gap-4 items-center">
      <Link href="/">
        <RxBackpack className="w-7 h-7 mr-3" />
      </Link>
      <nav className="hidden md:flex items-center gap-6">
        {NavOptions?.map((item: TNavbarOptions) => (
          <LinkItem key={item.id} {...item} />
        ))}
      </nav>
    </div>
  );
};

export default NavItems;
