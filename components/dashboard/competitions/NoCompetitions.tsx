import SubmitButton from "@/components/SharedComponents/SubmitButton";
import Image from "next/image";
import React from "react";

interface NoCompetitionsProps {
  message: string;
}

const NoCompetitions = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <div>
        <Image src={"/navIcons/award.svg"} alt="award" width={60} height={60} />
      </div>
      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <h3 className="text-[32px] font-semibold text-shadeBlack">
          ليس لديك اي مسابقات بعد!
        </h3>
        <p className="text-shadeGray text-base font-medium">
          قم بالبدء في انشاء مسابقاتك معنا و مشاركتها مع المتسابقين بطريقة سهله
          و بسيطة
        </p>
      </div>
      <SubmitButton
        rightIcon="/dashboard/competitions/add.svg"
        buttonText="إضافة مسابقة جديدة"
        classContainer="w-fit"
        onClick={() => {}}
      />
    </div>
  );
};

export default NoCompetitions;
