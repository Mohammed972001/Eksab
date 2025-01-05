import Image from "next/image";
import React from "react";

interface FileUploadProps {
  label: string;
}

export const FileUpload = ({ label }: FileUploadProps) => {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-[#E4E7EC] bg-white p-4 cursor-pointer">
      <div className="flex justify-center items-center size-10 border border-[#E4E7EC] rounded-lg shadow-icon-shadow">
        <Image
          src={"/auth/UploadIcon.svg"}
          alt="upload"
          width={20}
          height={20}
        />
      </div>

      <div className="flex flex-col justify-center items-start text-start">
        <p className="text-[12px] font-bold text-start">
          {label}
        </p>
        <div className="flex justify-center items-center gap-1">
          <button className="text-[#6941C6] font-semibold text-[12px]">
            انقر للتحميل
          </button>
          <p className="font-normal text-[#475467 text-[12px]">
            أو اسحب وأفلِت
          </p>
        </div>
      </div>
    </div>
  );
};
