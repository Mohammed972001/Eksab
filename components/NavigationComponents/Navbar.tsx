import React from "react";
import EksabLogo from "../SharedComponents/EksabLogo";
import Image from "next/image";

const Navbar = () => {
  return <nav className="fixed top-0 left-0 w-full h-20 max-w-screen-2xl flex justify-between items-center px-8 bg-white shadow-navbar-shadow z-50">
    <EksabLogo/>
    <div className="size-12 p-1">
        <div className="size-10 flex justify-center items-center">
            <Image src={"/navIcons/globe.svg"} alt="globe" width={24} height={24}/>
        </div>
    </div>
  </nav>;
};

export default Navbar;
