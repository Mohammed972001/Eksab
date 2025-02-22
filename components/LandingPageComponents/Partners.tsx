import Image from "next/image";
import React from "react";

const Partners = () => {
  return (
    <div>
      <div className="px-4 py-[64px] xl:py-[96px] xl:px-[122px] bg-partnersBg bg-cover bg-no-repeat">
        <div className="flex flex-col gap-16 ">
          {/* Section Header */}
          <div className="flex flex-col gap-8 px-4 xl:px-[104px]">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src={"/HomePage/Dot.svg"}
                  alt="dot"
                  width={6}
                  height={6}
                />
                <p className="text-[#3454B4] text-lg font-bold">شركاءنا </p>
              </div>
              <p className="text-shadeBlack font-bold text-[32px] lg:text-[48px]">
                شركاء النجاح المميزين
              </p>
            </div>
            <p className="text-shadeGray text-lg">
              على مر السنين، نفخر بالشراكة مع المنظمات الرائدة في صناعاتها، بما
              في ذلك التمويل والرعاية الصحية والتجارة الإلكترونية والتكنولوجيا.
            </p>
          </div>
          {/* Partners Grid */}
          <div className="px-4 xl:px-[104px] grid grid-cols-2 md:grid-cols-4 gap-[20px]">
            <Image
              src={"/HomePage/Partner1.svg"}
              alt="partner"
              width={200}
              height={140}
            />
            <Image
              src={"/HomePage/Partner2.svg"}
              alt="partner"
              width={200}
              height={140}
            />
            <Image
              src={"/HomePage/Partner3.svg"}
              alt="partner"
              width={200}
              height={140}
            />
            <Image
              src={"/HomePage/Partner4.svg"}
              alt="partner"
              width={200}
              height={140}
            />
            <Image
              src={"/HomePage/Partner5.svg"}
              alt="partner"
              width={200}
              height={140}
            />
            <Image
              src={"/HomePage/Partner6.svg"}
              alt="partner"
              width={200}
              height={140}
            />
            <Image
              src={"/HomePage/Partner7.svg"}
              alt="partner"
              width={200}
              height={140}
            />
            <Image
              src={"/HomePage/Partner8.svg"}
              alt="partner"
              width={200}
              height={140}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
