import Image from "next/image";
import Link from "next/link";
import React from "react";
import SubmitButton from "../SharedComponents/SubmitButton";

const LandingFooter = () => {
  return (
    <footer className="pt-16 pb-12 bg-[#171718] flex flex-col gap-16">
      <div className="px-8 flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-12 mx-4 lg:gap-0 lg:flex-row xl:mx-8">
          <div className="flex flex-col gap-8">
            <Image src={"/Logomark.svg"} alt="logo" width={104} height={48} />
            <div className="flex flex-wrap gap-8 md:flex-nowrap lg:gap-2 xl:gap-8">
              <Link href={"/"} className="text-white font-medium">
                الرئيسية
              </Link>
              <Link href={"/"} className="text-white font-medium">
                ما هو تطبيقنا؟
              </Link>
              <Link href={"/"} className="text-white font-medium">
                خدماتنا
              </Link>
              <Link href={"/"} className="text-white font-medium">
                أنواع المسابقات
              </Link>
              <Link href={"/"} className="text-white font-medium">
                الاستفسارات
              </Link>
              <Link href={"/"} className="text-white font-medium">
                تواصل معنا
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-white">ابقى على اطلاع</p>
            <div className="flex items-center gap-4">
              <input
                type="email"
                className="w-[252px] h-[44px] border border-[#D9E1F9] rounded-lg px-[14px] py-[10px]"
                placeholder="ادخل البريد الالكتروني"
              />
              <SubmitButton
                buttonText="اشتراك"
                classContainer="mt-0 !w-[128px] !h-[44px]"
                fullWidth={false}
              />
            </div>
          </div>
        </div>
        <div className="mx-4 flex flex-col gap-8 xl:mx-8">
          <hr />
          <div className="flex flex-col justify-center items-center gap-4 md:justify-between md:gap-0 md:flex-row">
            <p className="text-white order-2 md:order-1">© 2025 جميع الحقوق محفوظة لـمنصة أكسب.</p>
            <div className="flex gap-4 text-white">
              <Link href={"/"}>الشروط والأحكام</Link>
              <Link href={"/"}>سياسة الخصوصية</Link>
              <Link href={"/"}>كوكيز</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
