"use client";
import React from "react";
import SubmitButton from "../SharedComponents/SubmitButton";
import CancelButton from "../SharedComponents/CancelButton";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="min-h-screen bg-HeroBg bg-cover bg-no-repeat text-shadeBlack">
      <div className="min-h-screen w-full flex flex-col lg:flex-row justify-between items-center">
        <div className="flex flex-col gap-8 lg:max-w-[476px] xl:max-w-[576px] mt-[76px] lg:mt-0 xl:ms-[112px] lg:ms-[20px]">
          <h1 className="text-center text-[38px] xl:text-[60px] lg:text-start font-bold">
            أنشئ مسابقاتك الآن بسهولة وابدأ التحدي!
          </h1>
          <p className="text-shadeGray text-base md:text-lg text-center lg:text-start">
            قم بإنشاء مسابقات تفاعلية بجميع الأنواع، سواء كانت تعليمية، ترفيهية
            أو تنافسية، واستمتع بتجربة فريدة في عالم التحديات! انضم إلى الآلاف
            من المستخدمين الذين يستمتعون بصنع مسابقات إبداعية وجذابة.
          </p>
          <div className="hidden lg:flex items-center justify-center lg:justify-start gap-4">
            <SubmitButton
              buttonText="ابدأ الآن"
              fullWidth={false}
              classContainer="!w-[176px] mt-0"
            />
            <CancelButton
              buttonText="تحميل التطبيق"
              onClick={() => {}}
              classContainer="mt-0"
            />
          </div>
        </div>
        <div className="w-full lg:w-fit">
          <Image
            src={"/HomePage/HeroImg.svg"}
            alt="HeroImg"
            width={688}
            height={770}
            className="lg:max-h-[770px] w-full xl:w-[688px] lg:w-[500px] lg:mt-[112px]"
            loading="lazy"
          />
        </div>
        <div className="flex lg:hidden items-center justify-center lg:justify-start gap-4 px-4 mb-8">
            <SubmitButton
              buttonText="ابدأ الآن"
              fullWidth={false}
              classContainer="!p-0 mt-0 w-[182px] h-[40px]"
            />
            <CancelButton
              buttonText="تحميل التطبيق"
              onClick={() => {}}
              classContainer="!p-0 mt-0 w-[182px] h-[40px]"
            />
          </div>
      </div>
    </div>
  );
};

export default Hero;