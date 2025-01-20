"use client";

import Header from "@/components/AuthComponents/Header";
import EksabLogo from "@/components/SharedComponents/EksabLogo";
import RegisterRedirect from "@/components/AuthComponents/LoginComponents/RegisterRedirect";
import RememberMe from "@/components/AuthComponents/LoginComponents/RememberMe";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import TextInput from "@/components/SharedComponents/TextInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState(""); // State for email input
  const [password, setPassword] = useState(""); // State for password input
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      email: email || "",
      password: password || "",
    },
  });

  // Toggle visibility for the password field
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  // Check if both inputs have values
  const isButtonDisabled = !email || !password;

  const onSubmit = async (data: any) => {
    try {
      const payload = {
        email: data.email,
        password: data.password,
      };
  
      console.log(payload);
      const response = await axios.post(
        "https://mohasel.net/api/Client/Auth/Login",
        payload
      );
  
      if (response.status === 200) {
        const {
          isEmailVerified,
          token,
          tokenExpiryTime,
          refreshToken,
          refreshTokenExpiryTime,
          user,
          organization,
        } = response.data;
  
        console.log("Login Successful!");
        console.log("Email Verified:", isEmailVerified);
        console.log("Token:", token);
        console.log("Token Expiry Time:", tokenExpiryTime);
        console.log("Refresh Token:", refreshToken);
        console.log("Refresh Token Expiry Time:", refreshTokenExpiryTime);
        console.log("User:", user);
        console.log("Organization:", organization);
  
        router.push("/"); // Redirect to another page (dashboard)
      }
    } catch (error: any) {
      console.log("Login Failed");
      console.log("Error:", error);
      const errorMessage =
        error.response?.data?.message || "Something went wrong.";
      alert(errorMessage); // Show error message
    }
  };
  

  return (
    <form
      onSubmit={handleSubmit(onSubmit)} // React Hook Form manages form submission
      className="flex flex-col justify-center items-center w-full max-w-md mx-auto"
    >
      <div className="flex flex-col justify-center items-center gap-3">
        {/* LogoMark */}
        <EksabLogo />

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
          {...register("email", {
            required: "البريد الإلكتروني مطلوب",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "أدخل بريدًا إلكترونيًا صحيحًا",
            },
          })}
          onChange={(e) => {
            setEmail(e.target.value);
            setValue("email", e.target.value); // Update react-hook-form's state
          }}
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        {/* Password Input */}
        <TextInput
          label="كلمة السر"
          type={showPassword ? "text" : "password"}
          value={password}
          {...register("password", {
            required: "كلمة السر مطلوبة",
            minLength: {
              value: 6,
              message: "يجب أن تكون كلمة السر مكونة من 6 أحرف على الأقل",
            },
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z\d])(?=.*[0-9]).{6,}$/,
              message:
                "يجب أن تحتوي كلمة السر على حرف كبير وحرف صغير وحرف خاص ورقم",
            },
          })}
          onChange={(e) => {
            setPassword(e.target.value);
            setValue("password", e.target.value); // Update react-hook-form's state
          }}
          showPassword={showPassword}
          onTogglePassword={handleClickShowPassword}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password.message}</p>
        )}

        {/* Remember Me and Forgot Password */}
        <RememberMe />
      </div>

      {/* Submit Button */}
      <SubmitButton
        disabled={isButtonDisabled}
        onClick={() => handleSubmit(onSubmit)()} // Explicitly invoking onSubmit with handleSubmit
        buttonText="تسجيل الدخول"
      />

      <RegisterRedirect />
    </form>
  );
}
