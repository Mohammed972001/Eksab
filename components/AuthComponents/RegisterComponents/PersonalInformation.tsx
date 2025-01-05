import PhoneInput from "@/components/SharedComponents/PhoneInput";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import TextInput from "@/components/SharedComponents/TextInput";
import React from "react";

// Interface for PersonalInformation props
interface PersonalInformationProps {
  phone: string;
  setPhone: (value: string) => void;
  countryCode: string;
  setCountryCode: (value: string) => void;
  email: string;
  setEmail: (value: string) => void;
  showPassword: boolean;
  password: string;
  setPassword: (value: string) => void;
  handleClickShowPassword: () => void;
  isNextButtonDisabled: boolean;
  setIsFirstSectionCompleted: (value: boolean) => void;
  setCurrentStep: (step: number) => void;
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({
  phone,
  setPhone,
  countryCode,
  setCountryCode,
  email,
  setEmail,
  showPassword,
  password,
  setPassword,
  handleClickShowPassword,
  isNextButtonDisabled,
  setIsFirstSectionCompleted,
  setCurrentStep,
}) => {
  return (
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
          setCurrentStep(2); // Move to step 2 when the first section is completed
        }}
        buttonText="التالي"
      />
    </div>
  );
};

export default PersonalInformation;
