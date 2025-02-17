"use client";
import React, { Suspense, useEffect, useState } from "react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
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
import LoadingSpinner from "@/components/SharedComponents/LoadingSpinner";
import { validCompetitionIds } from "@/utils/validCompetitionIds";
import { useSession } from "next-auth/react";
import { v4 as uuidv4 } from "uuid";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const CompetitionDetailPage = () => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [competitionTitle, setCompetitionTitle] = useState(
    "إنشاء مسابقة جديدة (مسابقتك الخاصة)"
  );
  // state لاستقبال قيمة competitionType من query string
  const [competitionType, setCompetitionType] = useState("");

  const steps = [
    "البيانات الأساسية",
    "طريقة المشاركة",
    "جوائز المسابقة",
    "تحديد السحوبات",
    "الشروط والأحكام",
    "الدفع",
  ];

  const [activeStep, setActiveStep] = useState(0);
  const [progressVisible, setProgressVisible] = useState(true);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [selectedOption, setSelectedOption] = useState("platform");
  const [room, setRoom] = useState("");
  const [city, setCity] = useState("");
  const [competitionNameEn, setCompetitionNameEn] = useState("");
  const [competitionNameAr, setCompetitionNameAr] = useState("");
  const [chamberOptions, setChamberOptions] = useState<
    { id: number; name: string }[]
  >([]);
  const [cityOptions, setCityOptions] = useState<
    { id: number; name: string }[]
  >([]);

  const [selectedServices, setSelectedServices] = useState({
    dataUpload: false,
    invoiceVerification: false,
    unlimitedChances: false,
  });
  const [opportunities, setOpportunities] = useState("");
  const [participationStepsAr, setParticipationStepsAr] = useState("");
  const [participationStepsEn, setParticipationStepsEn] = useState("");
  const [competitionId, setCompetitionId] = useState(null);

  const { data: session } = useSession();

  const handleCheckboxChange = (service) => {
    setSelectedServices((prev) => ({ ...prev, [service]: !prev[service] }));
  };

  const isInputDisabled = Object.values(selectedServices).some(
    (value) => value === true
  );

  // نستخدم الدالة دي عشان ناخد قيمة contentType من ال query string ونحطها في state
  useEffect(() => {
    const title = searchParams.get("title");
    if (title) {
      setCompetitionTitle(decodeURIComponent(title));
    }
    const typeFromQuery = searchParams.get("contentType");
    if (typeFromQuery) {
      setCompetitionType(typeFromQuery);
    }
  }, [searchParams]);

  // لو الـ id مش من القيم المسموحة، نوجه للصفحة مش موجودة
  useEffect(() => {
    if (!validCompetitionIds.includes(id)) {
      router.push("/notfound");
    }
  }, [id, router]);

  // الدالة دي هتستخدم للانتقال للخطوة اللي بعدها
  // لو في الخطوة الأولى ومفيش draft اتعمل قبل كده، هنبعت الداتا للسيرفر ونعمل إنشاء للـ draft
  const handleNextStepWithDraft = async (e) => {
    e.preventDefault();
    if (activeStep === 0 && !competitionId) {
      // الداتا من الصفحة الأولى لإنشاء draft
      const draftData = {
        id: 0,
        // هنا بنستخدم competitionType المستلمة من ال query string
        competitionType: competitionType,
        participationType: "OnlyApp",
        logoId: 8,
        chamberId:
          chamberOptions.indexOf(room) !== -1
            ? chamberOptions.indexOf(room)
            : 0,
        cityId:
          cityOptions.indexOf(city) !== -1 ? cityOptions.indexOf(city) : 0,
        name: competitionNameAr,
        nameEn: competitionNameEn,
        numberOpportunities: Number(opportunities),
        fromDate: new Date().toISOString(),
        toDate: new Date().toISOString(),
      };

      try {
        const response = await axios.post(
          `${apiUrl}/Competitions/CreateCompetitionDraft`,
          draftData,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${session.accessToken}`,
            },
          }
        );
        const compId = response.data.id;
        console.log("Draft created with ID:", compId);
        setCompetitionId(compId);
        setActiveStep(activeStep + 1);
      } catch (error) {
        console.error("Error creating competition draft:", error);
      }
    } else {
      // في باقي الخطوات أو لو draft موجود، ببساطة بينتقل للخطوة اللي بعدها
      setActiveStep(activeStep + 1);
    }
  };
  const handleNextStep = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePreviousStep = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  const handleCancelClick = () => {
    router.push("/competitions");
  };

  const handleUpdateDraft = async (e) => {
    e.preventDefault();
    if (!competitionId) {
      console.error("No competition draft id available");
      return;
    }

    const fullData = {
      id: competitionId,
      competitionType: competitionType,
      participationType: "OnlyApp",
      logoId: 0,
      chamberId:
        chamberOptions.indexOf(room) !== -1 ? chamberOptions.indexOf(room) : 0,
      cityId: cityOptions.indexOf(city) !== -1 ? cityOptions.indexOf(city) : 0,
      name: competitionNameAr,
      nameEn: competitionNameEn,
      numberOpportunities: Number(opportunities),
      fromDate: new Date().toISOString(),
      toDate: new Date().toISOString(),
      howToParticipate: participationStepsAr,
      howToParticipateEn: participationStepsEn,
      // وهنا ممكن تضيف باقي الداتا زي prizes, draws, questions...
    };

    try {
      const response = await axios.put(
        `${apiUrl}/Competitions/UpdateCompetitionDraft/${competitionId}`,
        fullData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.accessToken}`,
          },
        }
      );
      console.log("Draft updated:", response.data);
    } catch (error) {
      console.error("Error updating competition draft:", error);
    }
  };

  const getAllChambers = async () => {
    try {
      const response = await axios.get(`${apiUrl}/Lookups/GetAllChambers`);
      const chamberNames = response.data.map((chamber) => chamber.name);
      setChamberOptions(chamberNames);
    } catch (error) {
      console.error(error);
    }
  };

  const getAllCities = async () => {
    try {
      const response = await axios.get(`${apiUrl}/Lookups/GetAllCities`);
      const cityNames = response.data.map((city) => city.name);
      setCityOptions(cityNames);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAllChambers();
  }, []);

  useEffect(() => {
    getAllCities();
  }, []);

  if (!validCompetitionIds.includes(id)) {
    return null;
  }

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <div className="h-full w-full pb-20">
        <NewCompetitionHeader
          title={`انشاء مسابقة جديدة (${competitionTitle})`}
        />

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
                    chamberOptions={chamberOptions}
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
                activeStep === 1 && "mt-4"
              } flex flex-col justify-center items-start gap-8`}
            >
              {activeStep === 1 && (
                <>
                  <NewCompetitionParticipationMethods
                    label="خطوات او طريقة المشاركة في المسابقة (باللغة العربية)"
                    placeholder="قم بكتابة خطوات المشاركة.."
                    dir="rtl"
                    onChange={(value) => setParticipationStepsAr(value)}
                  />
                  <NewCompetitionParticipationMethods
                    label="Participation Steps (بالإنجليزية)"
                    placeholder="Write the participation steps..."
                    dir="ltr"
                    onChange={(value) => setParticipationStepsEn(value)}
                  />
                </>
              )}
            </form>

            <div
              className={`${activeStep === 2 && "mt-4"} flex flex-col gap-8`}
            >
              {activeStep === 2 && <NewCompetitionPrizes />}
            </div>
            <div
              className={`${activeStep === 3 && "mt-4"} flex flex-col gap-8`}
            >
              {activeStep === 3 && <NewCompetitionWithdrawal />}
            </div>
            <div
              className={`${activeStep === 4 && "mt-4"} flex flex-col gap-8`}
            >
              {activeStep === 4 && <NewCompetitionTerms />}
            </div>
            <div
              className={`${activeStep === 5 && "mt-4"} flex flex-col gap-8`}
            >
              {activeStep === 5 && <NewCompetitionPayment />}
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
                      onClick={() => setActiveStep(0)}
                      fullWidth={false}
                      classContainer="bg-white text-shadeBlack border"
                    />
                  )}
                </div>
                <div className="flex w-full items-center gap-2 justify-end">
                  {activeStep !== 5 && (
                    <CancelButton
                      buttonText={activeStep === 0 ? "الغاء" : "حفظ كمسودة"}
                      onClick={
                        activeStep === 0
                          ? handleCancelClick
                          : handlePreviousStep
                      }
                      fullWidth={false}
                    />
                  )}
                  <SubmitButton
                    buttonText={
                      activeStep === steps.length - 1
                        ? "ادفع"
                        : "الخطوة التالية"
                    }
                    onClick={
                      activeStep === 0
                        ? handleNextStep
                        : activeStep === steps.length - 1
                        ? handleUpdateDraft
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
    </Suspense>
  );
};

export default CompetitionDetailPage;
