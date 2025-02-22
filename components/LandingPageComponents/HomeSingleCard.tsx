import Image from "next/image";
import React from "react";

interface HomeSingleCard {
  imgSrc: string;
  imgAlt: string;
  title: string;
  subtitle: string;
  comingSoon?: boolean;
}

const HomeSingleCard = ({
  imgSrc,
  imgAlt,
  title,
  subtitle,
  comingSoon
}: HomeSingleCard) => {
  return (
    <div className="flex flex-col gap-16 lg:max-w-[480px] xl:max-w-[576px]">
      <div className="bg-white py-8 px-6 lg:py-10 lg:px-8 rounded-[16px]">
        <div className="flex flex-col gap-[20px]">
          <div className="bg-[#3454B4] size-[48px] lg:size-[56px] flex justify-center items-center border-2 border-[#FFFFFF1F] shadow-card-shadow rounded-[12px]">
            <Image src={imgSrc} alt={imgAlt} width={28} height={28} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-6">
              <p className="text-shadeBlack font-bold text-[22px] lg:text-[32px]">{title}</p>
              {comingSoon && (
                <div className="bg-[#FCD5D4] rounded-lg border-[1.5px] border-[#C2222129] h-8 px-4 flex items-center justify-center">
                  <p className="text-[#C22221] text-sm font-bold">قريبـاً</p>
                </div>
              )}
            </div>
            <p className="text-shadeGray text-base lg:text-lg">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSingleCard;
