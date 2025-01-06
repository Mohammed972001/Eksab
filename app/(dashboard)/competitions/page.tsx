"use client";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import { ChevronLeftRounded } from "@mui/icons-material";
import Image from "next/image";
import React from "react";

const CompetitionsPage = () => {
  return (
    // page header
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
        <h2 className="font-semibold text-[30px] text-shadeBlack">مسابقاتي</h2>
        <SubmitButton
          rightIcon="/dashboard/competitions/add.svg"
          buttonText="إضافة مسابقة جديدة"
          classContainer="w-fit"
          onClick={() => {}}
        />
      </div>

      <hr />
    </div>
  );
};

export default CompetitionsPage;
