"use client";

import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Typography,
  TextField,
  Button,
  Checkbox,
  IconButton,
  InputAdornment,
} from "@mui/material";
import Link from "next/link";
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
    <form className="flex flex-col justify-center items-center w-full h-screen max-w-md mx-auto ">
      <div className="flex flex-col justify-center items-center gap-3">
        {/* LogoMark */}
        <div className="bg-miniGrid size-12 rounded-xl shadow-icon-shadow">
          <div className="size-12 border-[0.3px] border-[#D0D5DD] rounded-xl flex justify-center items-center mb-3 shadow-icon-shadow relative">
            <div className="size-6 rounded-full bg-violet-gradient shadow-icon-shadow" />
            {/* Adjusted absolute div to cover bottom half */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 rounded-b-xl bg-[#FFFFFF33] backdrop-blur-[7.5px] shadow-icon-shadow" />
          </div>
        </div>

        {/* Header */}
        <Typography
          variant="h4"
          component="h1"
          align="center"
          className="text-[#171718]"
          fontWeight={700}
        >
          تسجيل الدخول
        </Typography>

        {/* Subheader */}
        <Typography
          variant="body1"
          component="p"
          align="center"
          className="text-[#434549] font-normal"
        >
          مرحبًا بك مرة أخرى! الرجاء إدخال تفاصيلك.
        </Typography>
      </div>

      {/* Inputs for email and password */}
      <div className="flex flex-col w-full gap-4 mt-8">
        {/* Email Input */}
        <TextField
          label="البريد الالكتروني"
          type="email"
          variant="outlined"
          fullWidth
          onChange={(e) => setEmail(e.target.value)} // Update state on change
          sx={{
            "& label": {
              left: "unset",
              right: "1.75rem",
              transformOrigin: "right",
            },
            "& legend": {
              textAlign: "right",
            },
            "& .MuiInputBase-input": {
              textAlign: "left", // Align the input text to the right for RTL
            },
          }}
        />

        {/* Password Input */}
        <TextField
          label="كلمة السر"
          fullWidth
          type={showPassword ? "text" : "password"}
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)} // Update state on change
          sx={{
            "& label": {
              left: "unset",
              right: "1.75rem",
              transformOrigin: "right",
            },
            "& legend": {
              textAlign: "right",
            },
          }}
          slotProps={{
            input: {
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            },
          }}
        />

        {/* Remember Me and Forgot Password */}
        <div className="mt-2 flex justify-between items-center">
          <div className="flex items-center">
            <Checkbox />
            <Typography
              variant="body2"
              component="p"
              className="text-[#434549]"
            >
              تذكر لمدة 30 يوما
            </Typography>
          </div>
          <Link href="/forgotpassword" className="text-primary">
            نسيت كلمة السر
          </Link>
        </div>
      </div>

      {/* Submit Button */}
      <Button
        variant="contained"
        color="primary"
        fullWidth
        disabled={isButtonDisabled} // Disable the button if inputs are empty
        className={`rounded-[100px] text-xl font-medium h-12 mt-6 bg-primary`}
      >
        تسجيل الدخول
      </Button>

      <div className="mt-8 flex justify-center items-center">
        <p>
          ليس لديك حساب؟{" "}
          <Link href={"/register"} className="text-primary">
            تسجيل حساب جديد
          </Link>
        </p>
      </div>
    </form>
  );
}
