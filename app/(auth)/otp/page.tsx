"use client"
import Header from "@/components/AuthComponents/Header";
import HeaderIcon from "@/components/AuthComponents/HeaderIcon";
import SubmitButton from "@/components/AuthComponents/SubmitButton";
import { useRouter } from "next/navigation";
import React from "react";

const OTP = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push("/login");
  };
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen max-w-md mx-auto">
      <div className="flex flex-col justify-center items-center gap-6">
        <HeaderIcon imgSrc="/auth/mail.svg" alt="mail" />
        <div className="flex flex-col justify-center items-center gap-3">
          <Header title="تحقق من بريدك الإلكتروني" />
          <p className="text-shadeGray text-center">
            لقد أرسلنا رابط التحقق إلى <br />{" "}
            <span className="font-semibold">olivia@untitledui.com</span>
          </p>
        </div>
      </div>
      <SubmitButton
        buttonText="العودة الى صفحة تسجيل الدخول"
        onClick={handleButtonClick}
      />
    </div>
  );
};

export default OTP;
