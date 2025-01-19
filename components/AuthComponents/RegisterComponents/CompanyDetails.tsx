import React, { useState } from "react";
import TextInput from "@/components/SharedComponents/TextInput";
import { FileUpload } from "./FileUpload";
import SubmitButton from "@/components/SharedComponents/SubmitButton";

interface CompanyDetailsProps {
  tabSpecificLabels: {
    [key: string]: {
      companyNameArabic: string;
      companyNameEnglish: string;
      commercialRegistration: string;
      commercialFileUpload: string;
      vatCertificate: string;
      vatFileUpload: string;
    };
  };
  activeTab: number;
  companyNameArabic: string;
  setCompanyNameArabic: React.Dispatch<React.SetStateAction<string>>;
  companyNameEnglish: string;
  setCompanyNameEnglish: React.Dispatch<React.SetStateAction<string>>;
  commercialRegistration: string;
  setCommercialRegistration: React.Dispatch<React.SetStateAction<string>>;
  vatCertificate: string;
  setVatCertificate: React.Dispatch<React.SetStateAction<string>>;
  isSubmitButtonDisabled: boolean;
  handleSubmitButton: () => void;
}

const CompanyDetails = ({
  tabSpecificLabels,
  activeTab,
  companyNameArabic,
  setCompanyNameArabic,
  companyNameEnglish,
  setCompanyNameEnglish,
  commercialRegistration,
  setCommercialRegistration,
  vatCertificate,
  setVatCertificate,
  isSubmitButtonDisabled,
  handleSubmitButton,
}: CompanyDetailsProps) => {
  const [errors, setErrors] = useState({
    companyNameArabic: "",
    companyNameEnglish: "",
    commercialRegistration: "",
    vatCertificate: "",
  });

  const validateFields = () => {
    const newErrors = { ...errors };
    let valid = true;

    if (!companyNameArabic.trim()) {
      newErrors.companyNameArabic = "الاسم بالعربية مطلوب.";
      valid = false;
    } else {
      newErrors.companyNameArabic = "";
    }

    if (!companyNameEnglish.trim()) {
      newErrors.companyNameEnglish = "الاسم بالإنجليزية مطلوب.";
      valid = false;
    } else {
      newErrors.companyNameEnglish = "";
    }

    if (!commercialRegistration.trim()) {
      newErrors.commercialRegistration = "رقم السجل التجاري مطلوب.";
      valid = false;
    } else {
      newErrors.commercialRegistration = "";
    }

    if (!vatCertificate.trim()) {
      newErrors.vatCertificate = "شهادة ضريبة القيمة المضافة مطلوبة.";
      valid = false;
    } else {
      newErrors.vatCertificate = "";
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      handleSubmitButton();  // Proceed to submit the form
    }
  };

  return (
    <div className="flex flex-col w-full gap-4 mt-8">
      {/* Company Name in Arabic */}
      <TextInput
        label={tabSpecificLabels[activeTab].companyNameArabic}
        type="text"
        value={companyNameArabic}
        onChange={(e) => setCompanyNameArabic(e.target.value)}
        errorMessage={errors.companyNameArabic}
        required
      />

      {/* Company Name in English */}
      <TextInput
        label={tabSpecificLabels[activeTab].companyNameEnglish}
        type="text"
        value={companyNameEnglish}
        onChange={(e) => setCompanyNameEnglish(e.target.value)}
        errorMessage={errors.companyNameEnglish}
        required
      />

      {/* Commercial Registration */}
      <TextInput
        label={tabSpecificLabels[activeTab].commercialRegistration}
        type="text"
        value={commercialRegistration}
        onChange={(e) => setCommercialRegistration(e.target.value)}
        errorMessage={errors.commercialRegistration}
        required
      />

      {/* Upload Commercial Registration File */}
      <FileUpload
        label={tabSpecificLabels[activeTab].commercialFileUpload}
        onFileUpload={(file) => console.log("Uploaded file:", file)}
      />

      {/* VAT Certificate */}
      <TextInput
        label={tabSpecificLabels[activeTab].vatCertificate}
        type="text"
        value={vatCertificate}
        onChange={(e) => setVatCertificate(e.target.value)}
        errorMessage={errors.vatCertificate}
        required
      />

      {/* Upload VAT Certificate File */}
      <FileUpload
        label={tabSpecificLabels[activeTab].vatFileUpload}
        onFileUpload={(file) => console.log("Uploaded VAT file:", file)}
      />

      {/* Submit Button */}
      <SubmitButton
        disabled={isSubmitButtonDisabled}
        onClick={handleSubmit}
        buttonText="تسجيل حساب جديد"
      />
    </div>
  );
};

export default CompanyDetails;
