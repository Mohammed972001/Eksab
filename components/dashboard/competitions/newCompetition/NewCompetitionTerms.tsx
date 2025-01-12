import TabSwitch from "@/components/SharedComponents/TabSwitch";
import React, { useState } from "react";

const NewCompetitionTerms = () => {
  const arabicTerms = [
    "لا يشترط الشراء للدخول في المسابقة.",
    "تخضع شروط المسابقة للقوانين والأنظمة الجارية في المملكة العربية السعودية.",
    "لا يحق لموظفي الغرف التجارية وعائلاتهم من الدرجة الاولي المشاركة في المسابقات.",
    "لا يحق لموظفي الشركة المشغلة للنظام وعائلاتهم من الدرجة الاولي المشاركة في المسابقات.",
    "لا يحق لموظفي وكالة الاعلان والدعاية وعائلاتهم من الدرجة الاولي المشاركة في المسابقات.",
    "لا يحق لموظفي الشركة صاحبة المسابقة وعائلاتهم من الدرجة الاولي المشاركة في المسابقة الخاصة بها.",
    "لا يحق لموظفي المراكز التجارية المشاركة وعائلاتهم من الدرجة الاولي المشاركة في المسابقة الخاصة بها",
    "يجب ان يكون الاسم مطابق للهوية النظامية المعمول بها في المملكة العربية السعودية.",
    "في حال تبين أكثر من حساب لشخص واحد فسوف يتم الغاء جميع الحسابات بلا استثناء بما فيها الحساب الرئيسي وذلك لبيان تحايله علي الأنظمة وسيحرم من جميع الجوائز التي ربحها تحت هذه الحسابات",
    "للمقيمين في المملكة العربية السعودية كتابة الاسم بالكامل باللغة العربية كما هو موجود في الهوية النظامية (الهوية الوطنية, الهويةالخليجية, هوية مقيم, هوية زائر, جواز السفر).",
    "للمقيمين في المملكة العربية السعودية كتابة الاسم بالكامل باللغة العربية كما هو موجود في الهوية النظامية (الهوية الوطنية, الهويةالخليجية, هوية مقيم, هوية زائر, جواز السفر).",
  ];

  const englishTerms = [
    "Purchase is not required to enter the competition.",
    "The competition terms are subject to the laws and regulations currently in force in the Kingdom of Saudi Arabia.",
    "Employees of the Chambers of Commerce and their immediate family members are not eligible to participate in the competition.",
    "Employees of the system-operating company and their immediate family members are not eligible to participate in the competition.",
    "Employees of the advertising agency and their immediate family members are not eligible to participate in the competition.",
    "Employees of the company hosting the competition and their immediate family members are not eligible to participate in its competition.",
    "Employees of commercial centers and their immediate family members are not eligible to participate in the competition of the center.",
    "The name must match the official identity document used in the Kingdom of Saudi Arabia.",
    "If more than one account is found for an individual, all accounts will be canceled without exception, including the primary account, due to an attempt to bypass the system, and they will be disqualified from all prizes won through these accounts.",
    "Residents of Saudi Arabia must write their full name in Arabic as shown in the official identity document (National ID, Gulf ID, Resident ID, Visitor ID, or Passport).",
    "Residents of Saudi Arabia must write their full name in Arabic as shown in the official identity document (National ID, Gulf ID, Resident ID, Visitor ID, or Passport).",
  ];

  const tabs = ["العربية", "English"];
  // State for active tab
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Terms Header */}
      <div className="flex flex-col items-start gap-4 mb-6">
        <h2 className="text-2xl font-semibold text-shadeBlack">
          الشروط والأحكام الخاصة بالمسابقة
        </h2>
        <hr className="w-full border-gray-300" />
      </div>
      {/* Term and Conditions container */}
      <div className="p-6 bg-[#F4F4F4] rounded-lg">
        <div className="p-6 bg-[#F9F9FA] rounded-2xl w-full max-h-[383px] shadow-navbar-shadow overflow-y-scroll scrollbar-hide">
          <TabSwitch
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
          {/* Terms List */}
          <div>
            <ol
              className={`${
                activeTab === 0 ? "text-right" : "text-left"
              } space-y-1 text-shadeGray font-medium list-decimal px-4`}
              style={
                activeTab === 1
                  ? { direction: "ltr", listStylePosition: "inside" }
                  : {}
              }
            >
              {(activeTab === 0 ? arabicTerms : englishTerms).map(
                (term, index) => (
                  <li key={index} className="leading-6">
                    {term}
                  </li>
                )
              )}
            </ol>
          </div>
        </div>
        {/* Accept Terms Checkbox */}
        <div className="mt-6 flex items-center gap-2">
          <input
            type="checkbox"
            id="acceptTerms"
            className="w-4 h-4 border-shadeGray rounded-md"
          />
          <label htmlFor="acceptTerms" className="text-shadeGray text-sm">
            أوافق على كافة الشروط و الأحكام.
          </label>
        </div>
      </div>
    </div>
  );
};

export default NewCompetitionTerms;
