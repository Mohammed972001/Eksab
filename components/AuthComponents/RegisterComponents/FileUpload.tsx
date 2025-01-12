import React, { useRef, useState } from "react";
import Image from "next/image";

interface FileUploadProps {
  label: string;
  onFileUpload?: (file: File) => void; // Callback when a file is uploaded
  classContainer?: string;
  textClass?: string;
}

export const FileUpload = ({
  label,
  onFileUpload,
  classContainer,
  textClass,
}: FileUploadProps) => {
  const [fileName, setFileName] = useState<string | null>(null); // State to track uploaded file name
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Ref for the hidden file input

  const handleFileSelect = (files: FileList | null) => {
    if (files && files[0]) {
      const file = files[0];
      setFileName(file.name);
      if (onFileUpload) {
        onFileUpload(file); // Trigger the callback with the selected file
      }
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault(); // Prevent the browser's default handling of the file
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const files = event.dataTransfer.files; // Access files from drag-and-drop event
    handleFileSelect(files);
  };

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the hidden file input on click
    }
  };

  return (
    <div
      className={`flex items-center gap-4 rounded-xl border border-[#E4E7EC] bg-white p-4 cursor-pointer ${classContainer}`}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center size-10 border border-[#E4E7EC] rounded-lg shadow-icon-shadow">
        <Image
          src={"/auth/UploadIcon.svg"}
          alt="upload"
          width={20}
          height={20}
        />
      </div>

      <div
        className={`flex flex-col justify-center items-start text-start ${textClass}`}
      >
        <p className="text-[12px] font-bold text-start">{label}</p>
        <div className="flex justify-center items-center gap-1">
          <p className="text-[#6941C6] font-semibold text-[12px]">
            انقر للتحميل
          </p>
          <p className="font-normal text-[#475467] text-[12px]">
            أو اسحب وأفلِت
          </p>
        </div>
        {fileName && (
          <p className="text-[10px] text-green-500 mt-2">
            Uploaded: {fileName}
          </p>
        )}
        <p className="text-[#70737A] text-[12px]">
          SVG, PNG, JPG or GIF (max. 800x400px)
        </p>
      </div>

      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={(e) => handleFileSelect(e.target.files)}
      />
    </div>
  );
};
