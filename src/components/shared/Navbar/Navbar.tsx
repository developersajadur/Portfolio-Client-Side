"use client";
import { Button } from "@/components/ui/button";
import { BiDownload } from "react-icons/bi";
import NavItems from "./NavItems";
import MobileSideBar from "./MobileSideBar";

const Navbar = () => {
  const resumeLink = "https://drive.google.com/uc?export=download&id=YOUR_FILE_ID"; // Replace with your Google Drive file ID

  return (
    <header className="fixed top-0 z-40 w-full border-b-[0.5px] border-[#292524] bg-headerBg backdrop-blur-sm">
      <div className="container mx-auto max-w-5xl flex py-4 px-5 lg:px-0 justify-between items-center">
        <NavItems />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <a href={resumeLink} download>
              <Button className="w-fit rounded-[8px]" variant="ghost" size="icon">
                <BiDownload className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </a>
            <div className="block xs:hidden">
              <MobileSideBar />
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
