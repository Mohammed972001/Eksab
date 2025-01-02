"use client";
import HeaderIcon from "@/components/AuthComponents/HeaderIcon";
import Header from "@/components/AuthComponents/Header";
import SubmitButton from "@/components/AuthComponents/SubmitButton";
import TextInput from "@/components/AuthComponents/TextInput";
import Link from "next/link";
import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { useRouter } from "next/navigation";
import LoginRedirect from "@/components/AuthComponents/LoginRedirect";

const ForgotPassword = () => {
  const [email, setEmail] = useState(""); // State for email input
  const router = useRouter();

  const isButtonDisabled = !email;

  const handleSubmitButtonClick = () => {
    router.push("/otp");
  };

  return (
    <form className="flex flex-col justify-center items-center w-full h-screen max-w-md mx-auto">
      <div className="flex flex-col justify-center items-center gap-3">
        <HeaderIcon imgSrc="/auth/key.svg" alt="key" />
        <Header
          title="نسيت كلمة السر؟"
          subtitle="لا تقلق، سنرسل لك تعليمات إعادة الضبط."
        />
      </div>

      <div className="w-full mt-8">
        {/* Email Input */}
        <TextInput
          label="البريد الالكتروني"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update state on change
        />
      </div>

      {/* Submit Button */}
      <SubmitButton
        disabled={isButtonDisabled}
        onClick={handleSubmitButtonClick}
        buttonText="إعادة تعيين كلمة المرور"
      />

      <LoginRedirect />
    </form>
  );
};

export default ForgotPassword;
