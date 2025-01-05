"use client";
import React, { useState } from "react";
import PhoneInput from "@/components/SharedComponents/PhoneInput";
import TextInput from "@/components/SharedComponents/TextInput";
import Header from "@/components/AuthComponents/Header";
import CustomTabs from "@/components/AuthComponents/RegisterComponents/CustomTabs";
import EksabLogo from "@/components/SharedComponents/EksabLogo";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import Link from "next/link";
import { FileUpload } from "@/components/AuthComponents/RegisterComponents/FileUpload";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface TabSpecificLabels {
  companyNameArabic: string;
  companyNameEnglish: string;
  commercialRegistration: string;
  vatCertificate: string;
  commercialFileUpload: string;
  vatFileUpload: string;
}

const Register = () => {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+966");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [companyNameArabic, setCompanyNameArabic] = useState("");
  const [companyNameEnglish, setCompanyNameEnglish] = useState("");
  const [commercialRegistration, setCommercialRegistration] = useState("");
  const [vatCertificate, setVatCertificate] = useState("");
  const [activeTab, setActiveTab] = useState(0); // Manage active tab state
  const [isFirstSectionCompleted, setIsFirstSectionCompleted] = useState(false); // To track if the first section is completed
  const [currentStep, setCurrentStep] = useState(1); // Track the current step

  const handleSubmitButton = () => {
    router.push("/");
  };

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const isNextButtonDisabled = !phone || !email || !password;

  const isSubmitButtonDisabled =
    !companyNameArabic ||
    !companyNameEnglish ||
    !commercialRegistration ||
    !vatCertificate;

  const tabSpecificLabels: Record<number, TabSpecificLabels> = {
    0: {
      companyNameArabic: "اسم الشركة (عربي)",
      companyNameEnglish: "اسم الشركة (انجليزي)",
      commercialRegistration: "رقم السجل التجاري",
      vatCertificate: "رقم شهادة ضريبة القيمة المضافة",
      commercialFileUpload: "أرفق ملف السجل التجاري",
      vatFileUpload: "أرفق ملف شهادة ضريبة القيمة المضافة",
    },
    1: {
      companyNameArabic: "اسم الوكالة (عربي)",
      companyNameEnglish: "اسم الوكالة (انجليزي)",
      commercialRegistration: "رقم تسجيل الوكالة",
      vatCertificate: "رقم شهادة ضريبة القيمة المضافة للوكالة",
      commercialFileUpload: "أرفق ملف تسجيل الوكالة",
      vatFileUpload: "أرفق ملف شهادة الضريبة للوكالة",
    },
  };

  return (
    <form className="flex flex-col justify-center items-center w-full max-w-md mx-auto p-4 mt-32">
      {/* Logo and Header */}
      <div className="flex flex-col justify-center items-center gap-3">
        <EksabLogo />
        <Header
          title="تسجيل حساب جديد"
          subtitle="سعيدين جداً بانضمامك لنا! الرجاء إدخال تفاصيلك."
        />
      </div>

      <div className="flex justify-between items-center mt-8 w-[70%] relative">
        {/* Line connecting the steps */}
        <div className="absolute top-[10px] left-[15%] w-[60%] sm:w-[65%] rounded-sm h-0.5 bg-[#C6C7CA] overflow-hidden">
          {/* Progress bar */}
          <div
            className={`h-0.5 bg-primary transition-all duration-300`}
            style={{ width: currentStep === 1 ? "0%" : "100%" }}
          />
        </div>

        {[1, 2].map((step) => (
          <div
            key={step}
            className="flex flex-col items-center gap-2 cursor-pointer relative z-10"
            onClick={() => setCurrentStep(step)} // Add click to change the active step
          >
            <div
              className={`w-6 h-6 flex items-center justify-center rounded-full border ${
                step === currentStep
                  ? "bg-primary text-white ring-2 ring-[#9E77ED] ring-offset-2" // Active step with a custom focus ring color
                  : step < currentStep
                  ? "bg-primary text-white" // Completed step stays primary color
                  : "bg-white border-gray-300 text-gray-500" // Inactive step with gray dot
              }`}
            >
              {step < currentStep ? (
                <Image
                  src={"/auth/Tick.svg"}
                  alt="tick"
                  width={12}
                  height={12}
                />
              ) : (
                <div
                  className={`w-2 h-2 rounded-full ${
                    step === currentStep ? "bg-white" : "bg-gray-300"
                  }`}
                />
              )}
            </div>
            {/* Text under each step */}
            <span className="text-sm font-medium text-center">
              {step === 1 ? "المعلومات الشخصية" : "بيانات الشركة"}
            </span>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <CustomTabs onTabChange={setActiveTab} />

      {/* Conditional rendering of the form based on active step */}
      {currentStep === 1 ? (
        // Personal Information Section
        <div className="flex-col w-full gap-4 mt-8 flex">
          {/* Phone Input */}
          <PhoneInput
            label="رقم الهاتف"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            countryCode={countryCode}
            onCountryCodeChange={setCountryCode}
          />

          {/* Email Input */}
          <TextInput
            label="البريد الالكتروني"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password Input */}
          <TextInput
            label="كلمة السر"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            showPassword={showPassword}
            onTogglePassword={handleClickShowPassword}
            required
          />

          {/* Next Button */}
          <SubmitButton
            disabled={isNextButtonDisabled}
            onClick={() => {
              setIsFirstSectionCompleted(true);
              setCurrentStep(2); // Move to step 2 when first section is completed
            }}
            buttonText="التالي"
          />
        </div>
      ) : (
        // Company/Agency Details Section (Visible after Next button is clicked)
        <div className="flex flex-col w-full gap-4 mt-8">
          {/* Company/Agency Name in Arabic */}
          <TextInput
            label={tabSpecificLabels[activeTab].companyNameArabic}
            type="text"
            value={companyNameArabic}
            onChange={(e) => setCompanyNameArabic(e.target.value)}
          />

          {/* Company/Agency Name in English */}
          <TextInput
            label={tabSpecificLabels[activeTab].companyNameEnglish}
            type="text"
            value={companyNameEnglish}
            onChange={(e) => setCompanyNameEnglish(e.target.value)}
          />

          {/* Commercial Registration */}
          <TextInput
            label={tabSpecificLabels[activeTab].commercialRegistration}
            type="text"
            value={commercialRegistration}
            onChange={(e) => setCommercialRegistration(e.target.value)}
          />

          {/* Upload Commercial Registration File */}
          <FileUpload
            label={tabSpecificLabels[activeTab].commercialFileUpload}
          />

          {/* VAT Certificate */}
          <TextInput
            label={tabSpecificLabels[activeTab].vatCertificate}
            type="text"
            value={vatCertificate}
            onChange={(e) => setVatCertificate(e.target.value)}
          />

          {/* Upload VAT Certificate File */}
          <FileUpload label={tabSpecificLabels[activeTab].vatFileUpload} />

          {/* Register Account Button */}
          <SubmitButton
            disabled={isSubmitButtonDisabled}
            onClick={handleSubmitButton}
            buttonText="تسجيل حساب جديد"
          />
        </div>
      )}

      {/* Already Registered Section */}
      <div className="flex items-center justify-center gap-2 mt-8 text-sm font-medium">
        <p className="text-shadeGray">لديك حساب بالفعل؟</p>
        <Link href={"/login"} className="text-primary">
          تسجيل دخول
        </Link>
      </div>

      {/* Terms & Privacy */}
      <div className="mt-8 text-center flex flex-col justify-center items-center text-sm font-medium">
        <p className="text-shadeGray">
          عند استخدامك لتطبيق (اسم التطبيق)، فأنت بذلك توافق على
        </p>
        <div className="flex justify-center items-center gap-2">
          <Link href={"/"} className="text-primary">
            سياسة الخصوصية
          </Link>
          <span>&</span>
          <Link href={"/"} className="text-primary">
            شروط الاستخدام
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Register;
