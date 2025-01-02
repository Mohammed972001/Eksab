"use client";

import Header from "@/components/AuthComponents/Header";
import LoginLogo from "@/components/AuthComponents/LoginComponents/LoginLogo";
import RegisterRedirect from "@/components/AuthComponents/LoginComponents/RegisterRedirect";
import RememberMe from "@/components/AuthComponents/LoginComponents/RememberMe";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import TextInput from "@/components/SharedComponents/TextInput";
import { useState } from "react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input

  // Toggle visibility for the password field
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  // Check if both inputs have values
  const isButtonDisabled = !email || !password;

  return (
    <form className="flex flex-col justify-center items-center w-full h-screen max-w-md mx-auto">
      <div className="flex flex-col justify-center items-center gap-3">
        {/* LogoMark */}
        <LoginLogo />

        <Header
          title="تسجيل الدخول"
          subtitle="مرحبًا بك مرة أخرى! الرجاء إدخال تفاصيلك."
        />
      </div>

      {/* Inputs for email and password */}
      <div className="flex flex-col w-full gap-4 mt-8">
        {/* Email Input */}
        <TextInput
          label="البريد الالكتروني"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update state on change
        />

        {/* Password Input */}
        <TextInput
          label="كلمة السر"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update state on change
          showPassword={showPassword}
          onTogglePassword={handleClickShowPassword}
        />

        {/* Remember Me and Forgot Password */}
        <RememberMe />
      </div>

      {/* Submit Button */}
      <SubmitButton
        disabled={isButtonDisabled}
        onClick={() => console.log("Login clicked")}
        buttonText="تسجيل الدخول"
      />

      <RegisterRedirect />
    </form>
  );
}
