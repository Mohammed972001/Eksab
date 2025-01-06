"use client";
import FilterButton from "@/components/SharedComponents/FilterButton";
import SearchBar from "@/components/SharedComponents/SearchBar";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import { ChevronLeftRounded } from "@mui/icons-material";
import Image from "next/image";
import React from "react";
import { BiChevronDown } from "react-icons/bi";

const CompetitionsPage = () => {
  return (
    <div>
      {/* // page header */}
      <div className="flex flex-col gap-[20px] w-full">
        {/* breadcrumbs section with icon and tabs */}
        <div className="flex items-center gap-2">
          <div className="size-7 flex justify-center items-center">
            <Image
              src={"/dashboard/competitions/homeIcon.svg"}
              alt="home"
              width={15}
              height={15}
            />
          </div>
          <ChevronLeftRounded className="text-[#E3E3E4]" />
          <div className="bg-[#F4F4F4] flex justify-center items-center px-2 py-1 rounded-md">
            <p className="text-shadeGray font-semibold text-sm">مسابقاتي</p>
          </div>
        </div>

        {/* content and action button */}
        <div className="flex justify-between items-center w-full">
          <h2 className="font-semibold text-[30px] text-shadeBlack">
            مسابقاتي
          </h2>
          <SubmitButton
            rightIcon="/dashboard/competitions/add.svg"
            buttonText="إضافة مسابقة جديدة"
            classContainer="w-fit"
            onClick={() => {}}
          />
        </div>

        <hr />
      </div>

      {/* tabs and filter */}
      <div className="mt-6 flex flex-col items-center justify-center gap-6">
        {/* tabs section */}
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <div className="flex flex-col justify-center items-center gap-3">
            <p>المسابقات السارية</p>
            <div className="w-full h-0.5 bg-primary" />
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <p>المسودة</p>
            <div className="w-full h-0.5 bg-[#E3E3E4]" />
          </div>
          <div className="flex flex-col justify-center items-center gap-3">
            <p>المسابقات المنتهية</p>
            <div className="w-full h-0.5 bg-[#E3E3E4]" />
          </div>
        </div>

        {/* filter section */}
        <div className="flex items-center gap-4 w-full">
          <div className="w-full">
            <SearchBar />
          </div>
          <div className="flex items-center gap-4">
            <FilterButton buttonText="ترتيب حسب" />
            <FilterButton buttonText="نوع المسابقة" />
            <FilterButton buttonText="كل الشركات" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionsPage;
