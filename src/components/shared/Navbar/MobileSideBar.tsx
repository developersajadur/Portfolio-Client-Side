import React from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import LinkItem from "./LinkItem";
import { RxHamburgerMenu, RxBackpack } from "react-icons/rx";
import { NavOptions } from "./NavOptions";
import { INavbarOptions } from "@/Types/interface";

const MobileSideBar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="flex md:hidden">
          <RxHamburgerMenu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader className="pt-4">
          <SheetTitle className="flex justify-center pb-6">
            <RxBackpack className="w-8 h-8" />
          </SheetTitle>
          {/* <SheetDescription>
            Make changes to your profile here. Click save when done.
          </SheetDescription> */}

          <div className="flex gap-3 flex-col items-center">
            {NavOptions?.map((item: INavbarOptions) => (
              <LinkItem key={item?.id} {...item} />
            ))}
          </div>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            {/* <Button type="submit">Save changes</Button> */}
            {/* <div className="grid grid-cols-4 items-center gap-4">

          <Input id="name" value="Pedro Duarte" className="col-span-3" />
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input id="username" value="@peduarte" className="col-span-3" />
        </div> */}
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSideBar;
