import Image from "next/image";
import React from "react";

const JoinUs = () => {
  return (
    <div className="px-4 py-[64px] xl:py-[96px] xl:px-[122px] lg:py-0">
      <div className="flex flex-col items-start gap-16 lg:gap-0 lg:flex-row lg:items-center ">
        <div className="flex flex-col gap-16 px-4 xl:px-[104px]">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <Image
                  src={"/HomePage/Dot.svg"}
                  alt="dot"
                  width={6}
                  height={6}
                />
                <p className="text-[#3454B4] text-lg font-bold">
                  التحميل والتجربة
                </p>
              </div>
              <p className="text-shadeBlack font-bold text-[32px] lg:text-[48px] lg:text-nowrap">
                ابدأ الآن وانضم لعالم التحدي
              </p>
            </div>
            <div className="flex flex-col gap-2 text-shadeGray text-lg">
              <p>
                لا تفوّت الفرصة لإنشاء مسابقات شيقة! قم بتحميل التطبيق وابدأ
                مغامرتك الآن!
              </p>
              <p>انضم الآن إلى مجتمع المسابقات وكن جزءًا من المنافسة الشيقة!</p>
            </div>
          </div>
          {/* Stores Buttons */}
          <div className="flex items-center gap-4">
            <div className="cursor-pointer">
              <Image
                src={"/HomePage/googleStore.svg"}
                alt="googlestore"
                width={213.69}
                height={56}
                className="w-[200px] h-[56px]"
              />
            </div>
            <div className="cursor-pointer">
              <Image
                src={"/HomePage/appleStore.svg"}
                alt="applestore"
                width={213.69}
                height={56}
                className="w-[200px] h-[54px]"
              />
            </div>
          </div>
        </div>
        <div className="lg:-ms-40">
          <Image
            src={"/HomePage/JoinImg.svg"}
            alt="join"
            width={719}
            height={719}
          />
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
