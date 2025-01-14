"use client";
import CompetitionDetailsHeader from "@/components/dashboard/competitions/competitionDetails/CompetitionDetailsHeader";
import CompetitionDetailsPrizesTable from "@/components/dashboard/competitions/competitionDetails/CompetitionDetailsPrizesTable";
import CompetitionDetailsWithdrawalTable from "@/components/dashboard/competitions/competitionDetails/CompetitionDetailsWithdrawalTable";
import DetailsTermsAndConditions from "@/components/dashboard/competitions/competitionDetails/DetailsTermsAndConditions";
import ParticipationWay from "@/components/dashboard/competitions/competitionDetails/ParticipationWay";
import TabSwitch from "@/components/SharedComponents/TabSwitch";
import Image from "next/image";
import React, { useState } from "react";

const HomePage = () => {
  // COMPETITION DETAILS DESIGN
  const tabs = ["الجوائز", "السحوبات", "طريقة المشاركة", "الشروط و الأحكام"];
  const mockPrizes = [
    {
      prizeName: "ايفون 16",
      prizeDescription: "رام 16 قيقا, الذاكرة 256 قيقا , لون الخلفية ذهبي",
      quantity: "2",
    },
    {
      prizeName: "ايفون 16",
      prizeDescription: "رام 16 قيقا, الذاكرة 256 قيقا , لون الخلفية ذهبي",
      quantity: "2",
    },
    {
      prizeName: "ايفون 16",
      prizeDescription: "رام 16 قيقا, الذاكرة 256 قيقا , لون الخلفية ذهبي",
      quantity: "2",
    },
  ];
  const mockWithdrawals = [
    {
      date: "16/12/2024",
      name: "ايفون 16",
      quantity: "2",
    },
    {
      date: "16/12/2024",
      name: "ايفون 16",
      quantity: "2",
    },
    {
      date: "16/12/2024",
      name: "ايفون 16",
      quantity: "2",
    },
  ];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="w-full h-full pb-20">
      <CompetitionDetailsHeader />
      <div className="mt-8 flex gap-6">
        <div className="flex flex-col gap-4">
          {/* TOP CARD */}
          <div className="flex gap-6 p-6 bg-white border border-[#C6C7CA] rounded-lg shadow-card-shadow">
            {/* MAIN IMAGE SECTION */}
            <div className="flex justify-center items-center w-[184px] h-[168px] rounded-[10px] border-[2px] border-[#C6C7CA]">
              <Image
                src={"/dashboard/competitions/placeholderImg.svg"}
                alt="placeholder"
                width={74}
                height={68}
              />
            </div>
            {/* DETAILS CARD CONTENT */}
            <div className="flex flex-col gap-6 w-full">
              <div className="flex flex-col items-start gap-6 w-full">
                <div className="flex flex-col items-start gap-2">
                  <div className="px-2 py-[2px] bg-[#FFE8D9] text-[#331C0D] rounded-lg">
                    بانتظار عملية الدفع
                  </div>
                  <div className="text-shadeBlack text-2xl font-semibold">
                    شارك وأربح معنا في مسابقة العام الجديد من شركة قوافل وادخل
                    السحب على جوائز قيمة
                  </div>
                </div>
                {/* DETAILS GRID */}
                <div className="flex justify-between w-full">
                  {/* DETAILS ITEM */}
                  <div className="flex flex-col">
                    <div className="flex gap-2">
                      <div className="flex items-start">
                        <Image
                          src={"/dashboard/competitions/calendar.svg"}
                          alt="calendar"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="flex-flex-col gap-1">
                        <p className="text-shadeGray text-[12px] font-medium">
                          من تاريخ
                        </p>
                        <p className="text-sm text-[#243757] font-medium">
                          هـ 09/04 - م 12/10
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* DETAILS ITEM */}
                  <div className="flex flex-col">
                    <div className="flex gap-2">
                      <div className="flex items-start">
                        <Image
                          src={"/dashboard/competitions/calendar.svg"}
                          alt="calendar"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="flex-flex-col gap-1">
                        <p className="text-shadeGray text-[12px] font-medium">
                          الي تاريخ
                        </p>
                        <p className="text-sm text-[#243757] font-medium">
                          هـ 09/04 - م 12/10
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* DETAILS ITEM */}
                  <div className="flex flex-col">
                    <div className="flex gap-2">
                      <div className="flex items-start">
                        <Image
                          src={"/dashboard/competitions/clock.svg"}
                          alt="clock"
                          width={20}
                          height={20}
                        />
                      </div>
                      <div className="flex-flex-col gap-1">
                        <p className="text-shadeGray text-[12px] font-medium">
                          مدة المسابقة
                        </p>
                        <p className="text-sm text-[#243757] font-medium">
                          60 يوما
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* MORE DETAILS */}
                <div className="flex flex-col gap-2 w-full">
                  <div className="flex justify-between items-center w-full cursor-pointer">
                    <p className="text-[#0080CC] font-semibold">
                      المزيد من التفاصيل
                    </p>
                    <Image
                      src={"/blue-chevron-down.svg"}
                      alt="chevron"
                      width={24}
                      height={24}
                    />
                  </div>
                  <hr />
                </div>
              </div>
            </div>
          </div>
          {/* Tabs Switcher */}
          <div>
            <TabSwitch
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          </div>
          {/* CONDITIONALLY RENDER COMPONENTS BASED ON ACTIVE TAB */}
          {/* Prizes Table */}
          {activeTab === 0 && (
            <div className="bg-white p-6 border border-[#C6C7CA] rounded-lg shadow-card-shadow">
              <CompetitionDetailsPrizesTable prizes={mockPrizes} />
            </div>
          )}
          {/* Withdrawal Table */}
          {activeTab === 1 && (
            <div className="bg-white p-6 border border-[#C6C7CA] rounded-lg shadow-card-shadow">
              <CompetitionDetailsWithdrawalTable
                withdrawals={mockWithdrawals}
              />
            </div>
          )}
          {/* Participation Way */}
          {activeTab === 2 && (
            <div className="bg-white p-6 border border-[#C6C7CA] rounded-lg shadow-card-shadow">
              <ParticipationWay />
            </div>
          )}
          {/* Terms & Conditions */}
          {activeTab === 3 && (
            <div className="bg-white p-6 border border-[#C6C7CA] rounded-lg shadow-card-shadow">
              <DetailsTermsAndConditions />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
