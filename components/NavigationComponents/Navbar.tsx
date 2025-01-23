"use client";
import React from "react";
import EksabLogo from "../SharedComponents/EksabLogo";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import SubmitButton from "../SharedComponents/SubmitButton";

const Navbar = () => {
  const { data: session } = useSession(); // Get the session

  const handleSignOut = () => {
    signOut({ callbackUrl: "/login" }); // Sign out and redirect to the login page
  };

  return (
    <nav className="fixed top-0 left-0 w-full h-20 max-w-screen-2xl flex justify-between items-center px-8 bg-white shadow-navbar-shadow z-50">
      <div className="flex items-center gap-4">
        <EksabLogo />
        {/* Conditionally render the sign-out button */}
        {session && (
          <SubmitButton
            buttonText="تسجيل الخروج"
            rightIcon="/logout.svg"
            onClick={handleSignOut}
            fullWidth={false}
            classContainer="hover:bg-red-600 !mt-0"
          />
        )}
      </div>
      <div className="size-12 p-1">
        <div className="size-10 flex justify-center items-center">
          <Image
            src={"/navIcons/globe.svg"}
            alt="globe"
            width={24}
            height={24}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
