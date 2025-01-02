"use client"
import Header from "@/components/AuthComponents/Header";
import HeaderIcon from "@/components/AuthComponents/HeaderIcon";
import LoginRedirect from "@/components/AuthComponents/LoginRedirect";
import SubmitButton from "@/components/AuthComponents/SubmitButton";
import Link from "next/link";
import React from "react";

const VerifyCode = () => {
  return (
    <form className="flex flex-col justify-center items-center w-full h-screen max-w-md mx-auto">
      <div className="flex flex-col justify-center items-center gap-3">
        <HeaderIcon imgSrc="/auth/key.svg" alt="key" />
        <Header
          title="أدخل رمز التحقق"
          subtitle="قم بإدخال رمز التحقق الذي قمنا بإرساله لك عبر البريد الألكتروني."
        />
      </div>

      <div className="flex flex-col justify-center items-center mt-8">
        <div>placeholder</div>
        <SubmitButton
          buttonText="تحقق"
          onClick={() => {
            console.log("aaaah");
          }}
        />
      </div>

      <div className="mt-8 flex justify-center items-center text-sm">
        <p>
          لم تستلم البريد الإلكتروني؟
          <Link href="/forgotpassword" className="text-primary ms-2">
            انقر لإعادة الإرسال
          </Link>
        </p>
      </div>

      <LoginRedirect/>
    </form>
  );
};

export default VerifyCode;
