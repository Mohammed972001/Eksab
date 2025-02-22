"use client";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const LandingNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed inset-0 flex flex-col justify-center px-4 md:px-[112px] w-full h-[80px] bg-[#F9F9FA] shadow-navbar-shadow z-10">
      {/* Main Navbar */}
      <div className="flex items-center justify-between w-full">
        <Image src={"/Logomark.svg"} alt="logo" width={104} height={48} />
        {/* Large screens Navbar */}
        <div className="hidden lg:flex items-center text-shadeGray">
          <button className="px-3 h-10">الرئيسية</button>
          <button className="px-3 h-10">ما هو تطبيقنا؟</button>
          <button className="px-3 h-10">خدماتنا</button>
          <button className="px-3 h-10">انواع المسابقات</button>
          <button className="px-3 h-10">الاستفسارات</button>
        </div>
        <div className="hidden lg:flex">
          <SubmitButton
            buttonText="تواصل معنا"
            fullWidth={false}
            classContainer="mt-0 !w-[128px] !py-2 !h-[40px]"
          />
        </div>
        {/* Small screens Navbar Toggle Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="outline-none mobile-menu-button"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6 main-theme-color inline-block"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute md:px-[112px] top-full left-0 w-full bg-[#F9F9FA] shadow-navbar-shadow transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <ul className="flex flex-col">
          <li>
            <Link href="/" className={`block px-4 py-3 font-semibold`}>
              الرئيسية
            </Link>
          </li>
          <li>
            <Link href="/" className={`block px-4 py-3 font-semibold`}>
              ما هو تطبيقنا؟
            </Link>
          </li>
          <li>
            <Link href="/" className={`block px-4 py-3 font-semibold`}>
              خدماتنا
            </Link>
          </li>
          <li>
            <Link href="/" className={`block px-4 py-3 font-semibold`}>
              انواع المسابقات
            </Link>
          </li>
          <li>
            <Link href="/" className={`block px-4 py-3 font-semibold`}>
              الاستفسارات
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LandingNav;