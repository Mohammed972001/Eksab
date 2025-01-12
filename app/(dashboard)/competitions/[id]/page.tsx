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
import NewCompetitionWithdrawal from "@/components/dashboard/competitions/newCompetition/NewCompetitionWithdrawal";
import NewCompetitionTerms from "@/components/dashboard/competitions/newCompetition/NewCompetitionTerms";
import NewCompetitionPayment from "@/components/dashboard/competitions/newCompetition/NewCompetitionPayment";
import SuccessfulCreation from "@/components/dashboard/competitions/newCompetition/SuccessfulCreation";

interface SelectedServices {
  dataUpload: boolean;
  invoiceVerification: boolean;
  unlimitedChances: boolean;
}

const CompetitionDetailPage = () => {
  const params = useParams();
  const router = useRouter();

  const steps = [
    "البيانات الأساسية",
    "طريقة المشاركة",
    "جوائز المسابقة",
    "تحديد السحوبات",
    "الشروط والأحكام",
    "الدفع",
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [progressVisible, setProgressVisible] = useState(true); // Manage progress visibility
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false); // Manage payment success component visibility
  const [selectedOption, setSelectedOption] = useState("platform");
  const [room, setRoom] = useState("");
  const [city, setCity] = useState("");
  const [competitionNameEn, setCompetitionNameEn] = useState("");
  const [competitionNameAr, setCompetitionNameAr] = useState("");
  const roomOptions = ["Room 1", "Room 2", "Room 3"];
  const cityOptions = ["City 1", "City 2", "City 3"];
  const [selectedServices, setSelectedServices] = useState<SelectedServices>({
    dataUpload: false,
    invoiceVerification: false,
    unlimitedChances: false,
  });
  const [opportunities, setOpportunities] = useState("");

  const handleCheckboxChange = (service: keyof SelectedServices) => {
    setSelectedServices((prev) => ({ ...prev, [service]: !prev[service] }));
  };

  const isInputDisabled = Object.values(selectedServices).some(
    (value) => value === true
  );

  const handleNextStep = () => {
    if (activeStep < steps.length - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleCancelClick = () => {
    router.push("/competitions");
  };

  const handlePaymentSubmit = () => {
    setProgressVisible(false); // Hide the progress steps
    setShowPaymentSuccess(true); // Show the payment success component
  };

  return (
    <div className="h-full w-full pb-20">
      <NewCompetitionHeader />

      {progressVisible && (
        <NewCompetitionProgress steps={steps} activeStep={activeStep} />
      )}

      {!showPaymentSuccess ? (
        <>
          <form
            className={`${
              activeStep === 0 && "mt-4"
            } flex flex-col justify-center items-start gap-6`}
          >
            {activeStep === 0 && (
              <>
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
                <NewCompetitionSelectedServices
                  selectedServices={selectedServices}
                  onCheckboxChange={handleCheckboxChange}
                />
                <NewCompetitionOpportunities
                  opportunities={opportunities}
                  setOpportunities={setOpportunities}
                  isInputDisabled={isInputDisabled}
                />
                <NewCompetitionPeriod />
              </>
            )}
          </form>
          <form
            className={`${
              activeStep == 1 && "mt-4"
            } flex flex-col justify-center items-start gap-8`}
          >
            {activeStep === 1 && (
              <>
                <NewCompetitionParticipationMethods
                  label="خطوات او طريقة المشاركة في المسابقة (باللغة العربية)"
                  placeholder="قم بكتابة خطوات المشاركة.."
                  dir="rtl"
                />
                <NewCompetitionParticipationMethods
                  label="خطوات او طريقة المشاركة في المسابقة (باللغة الإنجليزية)"
                  placeholder="Write the participation steps.."
                  dir="ltr"
                />
              </>
            )}
          </form>
          <div
            className={`${
              activeStep == 2 && "mt-4"
            } flex flex-col justify-center items-start gap-8`}
          >
            {activeStep === 2 && (
              <div className="w-full">
                <NewCompetitionPrizes />
              </div>
            )}
          </div>
          <div
            className={`${
              activeStep == 3 && "mt-4"
            } flex flex-col justify-center items-start gap-8`}
          >
            {activeStep === 3 && (
              <div className="w-full">
                <NewCompetitionWithdrawal />
              </div>
            )}
          </div>
          <div
            className={`${
              activeStep == 4 && "mt-4"
            } flex flex-col justify-center items-start gap-8`}
          >
            {activeStep === 4 && (
              <div className="w-full">
                <NewCompetitionTerms />
              </div>
            )}
          </div>
          <div
            className={`${
              activeStep == 5 && "mt-4"
            } flex flex-col justify-center items-start gap-8`}
          >
            {activeStep === 5 && (
              <div className="w-full">
                <NewCompetitionPayment />
              </div>
            )}
          </div>
          <div className="mt-8 flex flex-col gap-6 w-full">
            <hr />
            <div className="flex justify-between items-center w-full">
              <div className="w-full">
                {activeStep > 0 && activeStep !== 5 && (
                  <SubmitButton
                    buttonText="الخطوة السابقة"
                    onClick={handlePreviousStep}
                    fullWidth={false}
                    classContainer="bg-white text-shadeBlack border"
                  />
                )}
                {activeStep === 5 && (
                  <SubmitButton
                    buttonText="التعديل علي المسابقة"
                    onClick={() => {
                      setActiveStep(0);
                    }}
                    fullWidth={false}
                    classContainer="bg-white text-shadeBlack border"
                  />
                )}
              </div>
              <div className="flex w-full items-center gap-4 justify-end">
                {activeStep !== 5 && (
                  <CancelButton
                    buttonText={activeStep === 0 ? "الغاء" : "حفظ كمسودة"}
                    onClick={
                      activeStep === 0 ? handleCancelClick : handlePreviousStep
                    }
                    fullWidth={false}
                  />
                )}
                <SubmitButton
                  buttonText={
                    activeStep === steps.length - 1 ? "ادفع" : "الخطوة التالية"
                  }
                  onClick={
                    activeStep === steps.length - 1
                      ? handlePaymentSubmit
                      : handleNextStep
                  }
                  fullWidth={false}
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <SuccessfulCreation />
      )}
    </div>
  );
};

export default CompetitionDetailPage;
