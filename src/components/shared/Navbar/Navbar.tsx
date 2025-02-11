"use client";
import { Button } from "@/components/ui/button";
import { RxMoon } from "react-icons/rx";
// import { useDispatch, useSelector } from "react-redux";
// import { RootState, themeSwitch } from "@/store";
import { useEffect } from "react";
import NavItems from "./NavItems";
import MobileSideBar from "./MobileSideBar";

const Navbar = () => {
//   const dispatch = useDispatch();
//   const theme = useSelector((state: RootState) => state.system.mode);

//   useEffect(() => {
//     document.documentElement.classList.toggle(
//       ThemeTypesEnum.DARK,
//       theme === ThemeTypesEnum.DARK
//     );
//   }, [theme]);

//   const handleChangeTheme = () =>
//     dispatch(
//       themeSwitch(
//         theme === ThemeTypesEnum.LIGHT
//           ? ThemeTypesEnum.DARK
//           : ThemeTypesEnum.LIGHT
//       )
//     );

  return (
    <header className="fixed top-0 z-40 w-full border-b-[0.5px] border-[#292524] bg-headerBg backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl flex py-4  px-5 lg:px-0 justify-between items-center">
        <NavItems />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" size="icon">
              <RxMoon className="w-6 h-6" />
            </Button>
            <div className="block xs:hidden">
              {/* mobile menu option */}
              <MobileSideBar />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
