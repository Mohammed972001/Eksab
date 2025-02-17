import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CompetitionServiceCardProps {
  imageSrc: string;
  bgColor: string;
  title: string;
  description: React.ReactNode;
  competitionId: string;
  isActive: boolean;
  competitionType: string; // استقبال النوع
}

const CompetitionServiceCard = ({
  imageSrc,
  bgColor,
  title,
  description,
  competitionId,
  competitionType,
  isActive,
}: CompetitionServiceCardProps) => {
  const router = useRouter();

  const handleCardClick = () => {
    // بنوجه للمسابقة وبنبعت العنوان والنوع ك query params
    router.push(
      `/competitions/${competitionId}?title=${encodeURIComponent(
        title
      )}&contentType=${encodeURIComponent(competitionType)}`
    );
  };

  return (
    <div
      className={`p-4 border rounded-2xl gap-4 bg-[#F9F9FA] flex flex-col items-start cursor-pointer ${
        isActive ? "" : "opacity-50"
      }`}
      onClick={isActive ? handleCardClick : () => {}}
    >
      <div
        className={`size-12 ${bgColor} flex justify-center items-center rounded-lg`}
      >
        <Image src={imageSrc} alt={title} width={24} height={24} />
      </div>
      <div className="flex flex-col justify-center gap-1 items-start">
        <p className="text-shadeBlack text-[22px] font-semibold">{title}</p>
        <p className="text-shadeGray text-sm font-normal">{description}</p>
      </div>
    </div>
  );
};

export default CompetitionServiceCard;
