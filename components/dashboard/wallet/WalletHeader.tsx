import { ChevronLeftRounded } from "@mui/icons-material";
import { Card } from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const WalletHeader = () => {
  return (
    // Page Header
    <div className="flex flex-col gap-[20px] w-full">
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
      <p className="text-[#475467] font-medium text-sm">محفظة الفرص</p>
    </div>
  
    <div className="flex flex-col md:flex-row justify-between items-center gap-2">
      <h2 className="font-semibold text-[30px] text-shadeBlack">
        محفظة الفرص
      </h2>
  
      <Link href="/Opportunity">
        <Card
          title="عدد الفرص المتبقية"
          className="bg-[#EEEEEF] w-[240px] h-[76px] rounded-[10px] shadow-xl shadow-[#1018280F] border border-[#C6C7CA] px-[12px] py-1 cursor-pointer"
        >
          <div className="flex items-center justify-between p-1">
            <div className="flex gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.9998 10L4.99984 10M18.9998 10L20.864 13.1069C21.2818 13.8032 21.4907 14.1514 21.5992 14.5262C21.6953 14.8582 21.7333 15.2045 21.7115 15.5495C21.6869 15.9389 21.5585 16.324 21.3017 17.0944L21.0939 17.7179C20.7005 18.8981 20.5038 19.4882 20.1389 19.9245C19.8167 20.3098 19.403 20.608 18.9356 20.7918C18.4063 21 17.7843 21 16.5402 21L7.45949 21C6.21542 21 5.59338 21 5.0641 20.7918C4.59672 20.608 4.18296 20.3098 3.86078 19.9245C3.49592 19.4882 3.29922 18.8981 2.90581 17.7179L2.69798 17.0944C2.44119 16.324 2.3128 15.9389 2.2882 15.5495C2.2664 15.2044 2.3044 14.8582 2.40053 14.5261C2.50902 14.1514 2.71791 13.8032 3.13569 13.1069L4.99984 10M18.9998 10L19.4171 8.53955C19.6149 7.84717 19.7139 7.50097 19.6362 7.22708C19.5681 6.98715 19.4128 6.78132 19.2008 6.64996C18.9588 6.5 18.5988 6.5 17.8787 6.5L6.12101 6.5C5.40092 6.5 5.04087 6.5 4.79886 6.64996C4.58686 6.78132 4.4316 6.98715 4.36354 7.22708C4.28584 7.50097 4.38475 7.84717 4.58257 8.53955L4.99984 10M11.9998 6.5H8.46413C7.94317 6.5 7.44355 6.28929 7.07517 5.91421C6.70679 5.53914 6.49984 5.03043 6.49984 4.5C6.49984 3.96957 6.70679 3.46086 7.07517 3.08579C7.44355 2.71071 7.94317 2.5 8.46413 2.5C11.2141 2.5 11.9998 6.5 11.9998 6.5ZM11.9998 6.5H15.5356C16.0565 6.5 16.5561 6.28929 16.9245 5.91421C17.2929 5.53914 17.4998 5.03043 17.4998 4.5C17.4998 3.96957 17.2929 3.46086 16.9245 3.08579C16.5561 2.71071 16.0565 2.5 15.5356 2.5C12.7856 2.5 11.9998 6.5 11.9998 6.5Z"
                  stroke="#434549"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="space-y-1">
                <p>محفظة فرصك</p>
                <h1 className="text-[#171718] font-bold text-xl">150,500</h1>
              </div>
            </div>
            <button
              className="self-start text-gray-500 text-2xl hover:text-gray-700"
              style={{ writingMode: "vertical-lr" }}
            >
              ...
            </button>
          </div>
        </Card>
      </Link>
    </div>
  
    <hr />
  </div>
  
  );
};

export default WalletHeader;
