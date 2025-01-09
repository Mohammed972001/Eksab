"use client";
import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import NewCompetitionHeader from "@/components/dashboard/competitions/newCompetition/NewCompetitionHeader";
import NewCompetitionMainInfo from "@/components/dashboard/competitions/newCompetition/NewCompetitionMainInfo";
import NewCompetitionOpportunities from "@/components/dashboard/competitions/newCompetition/NewCompetitionOpportunities";
import NewCompetitionPeriod from "@/components/dashboard/competitions/newCompetition/NewCompetitionPeriod";
import NewCompetitionProgress from "@/components/dashboard/competitions/newCompetition/NewCompetitionProgress";
import NewCompetitionSelectedServices from "@/components/dashboard/competitions/newCompetition/NewCompetitionSelectedServices";
import CancelButton from "@/components/SharedComponents/CancelButton";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import NewCompetitionParticipationMethods from "@/components/dashboard/competitions/newCompetition/NewCompetitionParticipationMethods";
import NewCompetitionPrizes from "@/components/dashboard/competitions/newCompetition/NewCompetitionPrizes";

interface SelectedServices {
  dataUpload: boolean;
  invoiceVerification: boolean;
  unlimitedChances: boolean;
}

const CompetitionDetailPage = () => {
  const params = useParams();
  const router = useRouter();
  const competitionId = params.id; // Extract competition ID

  const steps = [
    "البيانات الأساسية",
    "طريقة المشاركة",
    "جوائز المسابقة",
    "تحديد السحوبات",
    "الشروط والأحكام",
    "الدفع",
  ];

  // State for active step
  const [activeStep, setActiveStep] = useState(0);

  // State for form inputs
  const [selectedOption, setSelectedOption] = useState("platform");
  const [room, setRoom] = useState(""); // For room selection
  const [city, setCity] = useState(""); // For city selection
  const [competitionNameEn, setCompetitionNameEn] = useState(""); // For competition name in English
  const [competitionNameAr, setCompetitionNameAr] = useState(""); // For competition name in Arabic

  // Options for dropdowns
  const roomOptions = ["Room 1", "Room 2", "Room 3"];
  const cityOptions = ["City 1", "City 2", "City 3"];

  // State for selected services
  const [selectedServices, setSelectedServices] = useState<SelectedServices>({
    dataUpload: false,
    invoiceVerification: false,
    unlimitedChances: false,
  });

  // Handle checkbox changes to toggle selected services
  const handleCheckboxChange = (service: keyof SelectedServices) => {
    setSelectedServices((prev) => ({ ...prev, [service]: !prev[service] }));
  };

  const [opportunities, setOpportunities] = useState("");

  // Check if any service is selected
  const isInputDisabled = Object.values(selectedServices).some(
    (value) => value === true
  );

  // Handle Next Step Click
  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  // Handle Previous Step Click
  const handlePreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  // Handle Cancel Button Click
  const handleCancelClick = () => {
    router.push("/competitions");
  };

  return (
    <div className="h-full w-full pb-20">
      {/* Page header */}
      <NewCompetitionHeader />

      {/* Competition form progress steps */}
      <NewCompetitionProgress steps={steps} activeStep={activeStep} />

      {/* NEW COMPETITION FORM */}
      <form className="mt-4 flex flex-col justify-center items-start gap-6">
        {activeStep === 0 && (
          <>
            {/* Form main info */}
            <NewCompetitionMainInfo
              roomOptions={roomOptions}
              cityOptions={cityOptions}
              selectedOption={selectedOption}
              room={room}
              city={city}
              competitionNameEn={competitionNameEn}
              competitionNameAr={competitionNameAr}
              onSelectedOptionChange={setSelectedOption}
              onRoomChange={setRoom}
              onCityChange={setCity}
              onCompetitionNameEnChange={setCompetitionNameEn}
              onCompetitionNameArChange={setCompetitionNameAr}
            />

            {/* Form contest services */}
            <NewCompetitionSelectedServices
              selectedServices={selectedServices}
              onCheckboxChange={handleCheckboxChange}
            />

            {/* Competition opportunities section */}
            <NewCompetitionOpportunities
              opportunities={opportunities}
              setOpportunities={setOpportunities}
              isInputDisabled={isInputDisabled}
            />

            {/* Competition period section */}
            <NewCompetitionPeriod />
          </>
        )}
      </form>

      {/* COMPETITION METHOD FORM */}
      <form className="mt-4 flex flex-col justify-center items-start gap-8">
        {activeStep === 1 && (
          <>
            {/* Arabic Section */}
            <NewCompetitionParticipationMethods
              label="خطوات او طريقة المشاركة في المسابقة (باللغة العربية)"
              placeholder="قم بكتابة خطوات المشاركة.."
              dir="rtl"
            />

            {/* English Section */}
            <NewCompetitionParticipationMethods
              label="خطوات او طريقة المشاركة في المسابقة (باللغة الإنجليزية)"
              placeholder="Write the participation steps.."
              dir="ltr"
            />
          </>
        )}
      </form>

      {/* COMPETITION PRIZES TABLE */}
      <div className="mt-4 flex flex-col justify-center items-start gap-8">
        {activeStep === 2 && (
          <>
            <div className="w-full">
              <NewCompetitionPrizes />
            </div>
          </>
        )}
      </div>

      {/* Action buttons */}
      <div className="mt-8 flex flex-col gap-6 w-full">
        <hr />
        <div className="flex justify-between items-center w-full">
          <div className="w-full">
            {activeStep > 0 && (
              <SubmitButton
                buttonText="الخطوة السابقة"
                onClick={handlePreviousStep}
                fullWidth={false}
                classContainer="bg-white text-shadeBlack border"
              />
            )}
          </div>
          <div className="flex w-full items-center gap-4 justify-end">
            <CancelButton
              buttonText={activeStep === 0 ? "الغاء" : "حفظ كمسودة"} // Change text based on step
              onClick={
                activeStep === 0 ? handleCancelClick : handlePreviousStep
              } // Change functionality based on step
              fullWidth={false}
            />
            <SubmitButton
              buttonText={
                activeStep === steps.length - 1 ? "ادفع" : "الخطوة التالية"
              }
              onClick={handleNextStep} // Navigate to the next step
              fullWidth={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionDetailPage;
