import TextInput from "@/components/SharedComponents/TextInput";
import React from "react";
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
  return (
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
        onFileUpload={(file) => console.log("Uploaded file:", file)}
      />

      {/* VAT Certificate */}
      <TextInput
        label={tabSpecificLabels[activeTab].vatCertificate}
        type="text"
        value={vatCertificate}
        onChange={(e) => setVatCertificate(e.target.value)}
      />

      {/* Upload VAT Certificate File */}
      <FileUpload
        label={tabSpecificLabels[activeTab].vatFileUpload}
        onFileUpload={(file) => console.log("Uploaded VAT file:", file)}
      />

      {/* Register Account Button */}
      <SubmitButton
        disabled={isSubmitButtonDisabled}
        onClick={handleSubmitButton}
        buttonText="تسجيل حساب جديد"
      />
    </div>
  );
};

export default CompanyDetails;
