"use client";
import React, { useState } from "react";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import { ChevronLeftRounded } from "@mui/icons-material";
import Image from "next/image";

const CompetitionsHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
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
        <div className="bg-[#F4F4F4] flex justify-center items-center px-2 py-1 rounded-md">
          <p className="text-shadeGray font-semibold text-sm">مسابقاتي</p>
        </div>
      </div>

      <div className="flex justify-between items-center w-full">
        <h2 className="font-semibold text-[30px] text-shadeBlack">مسابقاتي</h2>
        <SubmitButton
          rightIcon="/dashboard/competitions/add.svg"
          buttonText="إضافة مسابقة جديدة"
          classContainer="w-fit"
          onClick={handleOpenModal}
        />
      </div>
      <hr />

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 backdrop-blur-sm">
          <div className="bg-white w-[90%] min-w-[280px] max-w-[560px] p-6 rounded-3xl">
            <div className="flex flex-col gap-4 justify-start items-start mb-4">
              <p className="font-semibold text-lg text-shadeBlack text-center">
                استكمال انشاء مسابقة
              </p>
              <p className="text-sm text-shadeGray font-normal">
                لقد قمت بالتوقف عن انشاء مسابقة في جزئية تحديد السحوبات هل تريد
                استكمال ما بدأت فيه ؟
              </p>
            </div>

            <hr />

            <div className="flex justify-between items-center mt-2">
              {/* Delete */}
              <button
                className="text-red-500 text-sm font-medium hover:underline"
                onClick={handleCloseModal}
              >
                حذف المسابقة
              </button>

              {/* Action Buttons */}
              <div className="flex gap-2 mt-2">
                <button
                  className="px-4 py-2 bg-white text-shadeBlack rounded-[100px] border border-shadeGray font-medium hover:bg-gray-100"
                  onClick={handleCloseModal}
                >
                  الغاء
                </button>
                <button
                  className="px-4 py-2 bg-primary text-white rounded-[100px] font-medium"
                  onClick={() => {
                    console.log("Continue creating competition");
                    handleCloseModal();
                  }}
                >
                  استكمال إنشاء المسابقة
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompetitionsHeader;
