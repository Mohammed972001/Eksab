"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import NewCompetitionHeader from "@/components/dashboard/competitions/newCompetition/NewCompetitionHeader";
import NewCompetitionMainInfo from "@/components/dashboard/competitions/newCompetition/NewCompetitionMainInfo";
import NewCompetitionOpportunities from "@/components/dashboard/competitions/newCompetition/NewCompetitionOpportunities";
import NewCompetitionPeriod from "@/components/dashboard/competitions/newCompetition/NewCompetitionPeriod";
import NewCompetitionProgress from "@/components/dashboard/competitions/newCompetition/NewCompetitionProgress";
import NewCompetitionSelectedServices from "@/components/dashboard/competitions/newCompetition/NewCompetitionSelectedServices";
import CancelButton from "@/components/SharedComponents/CancelButton";
import SubmitButton from "@/components/SharedComponents/SubmitButton";

interface SelectedServices {
  dataUpload: boolean;
  invoiceVerification: boolean;
  unlimitedChances: boolean;
}

const CompetitionDetailPage = () => {
  const params = useParams();
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

      {/* Action buttons */}
      <div className="mt-8 flex flex-col gap-6 w-full">
        <hr />
        <div className="flex w-full items-center gap-4 justify-end">
          <CancelButton
            buttonText="الغاء"
            onClick={() => {}}
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
  );
};

export default CompetitionDetailPage;
