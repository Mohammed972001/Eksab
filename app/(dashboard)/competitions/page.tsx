"use client";
import React, { useState } from "react";
import CompetitionCard from "@/components/dashboard/competitions/CompetitionCard";
import CompetitionsHeader from "@/components/dashboard/competitions/CompetitionsHeader";
import NoCompetitions from "@/components/dashboard/competitions/NoCompetitions";
import TabsAndFilter from "@/components/dashboard/competitions/TabsAndFilter";

const CompetitionsPage = () => {
  const [activeTab, setActiveTab] = useState<string>("active");

  const switchTab = (tab: string) => {
    setActiveTab(tab);
  };

  // Competition data for each tab
  const competitionsData: Record<string, any[]> = {
    active: [
      {
        status: "بانتظار عملية الدفع",
        statusColor: "bg-[#FFE8D9]",
        title:
          "شارك وأربح معنا في مسابقة العام الجديد من شركة قوافل وادخل السحب على جوائز قيمة",
        location: "فرع الرياض",
        competitors: 246,
        timeLeft: 60,
        dateRange: "12/11/2024 - 12/09/2024",
        imageSrc: "/dashboard/competitions/placeholderImg.svg",
      },
      {
        status: "مسابقة سارية",
        statusColor: "bg-[#D6F5D6]",
        title:
          "شارك وأربح معنا في مسابقة العام الجديد من شركة قوافل وادخل السحب على جوائز قيمة",
        location: "فرع الشرقية",
        competitors: 246,
        timeLeft: 60,
        dateRange: "12/11/2024 - 12/09/2024",
        imageSrc: "/dashboard/competitions/placeholderImg.svg",
      },
      {
        status: "بانتظار خطاب التفعيل",
        statusColor: "bg-[#FFE8D9]",
        title:
          "شارك وأربح معنا في مسابقة العام الجديد من شركة قوافل وادخل السحب على جوائز قيمة",
        location: "فرع جدة",
        competitors: 264,
        timeLeft: 60,
        dateRange: "12/11/2024 - 12/09/2024",
        imageSrc: "/dashboard/competitions/placeholderImg.svg",
      },
    ],
    draft: [
      {
        status: "مسودة",
        statusColor: "bg-[#E3E3E4]",
        title:
          "شارك وأربح معنا في مسابقة العام الجديد من شركة قوافل وادخل السحب على جوائز قيمة",
        location: "فرع الرياض",
        competitors: 246,
        timeLeft: 60,
        dateRange: "12/11/2024 - 12/09/2024",
        imageSrc: "/dashboard/competitions/placeholderImg.svg",
      },
      {
        status: "مسودة",
        statusColor: "bg-[#E3E3E4]",
        title:
          "شارك وأربح معنا في مسابقة العام الجديد من شركة قوافل وادخل السحب على جوائز قيمة",
        location: "فرع الشرقية",
        competitors: 246,
        timeLeft: 60,
        dateRange: "12/11/2024 - 12/09/2024",
        imageSrc: "/dashboard/competitions/placeholderImg.svg",
      },
      {
        status: "مسودة",
        statusColor: "bg-[#E3E3E4]",
        title:
          "شارك وأربح معنا في مسابقة العام الجديد من شركة قوافل وادخل السحب على جوائز قيمة",
        location: "فرع جدة",
        competitors: 246,
        timeLeft: 60,
        dateRange: "12/11/2024 - 12/09/2024",
        imageSrc: "/dashboard/competitions/placeholderImg.svg",
      },
    ],
    finished: [],
  };

  return (
    <div className="w-full h-full pb-20">
      {/* Page header */}
      <CompetitionsHeader />

      {/* Tabs and Filter */}
      <TabsAndFilter activeTab={activeTab} switchTab={switchTab} />

      {/* Competitions cards */}
      <div className="mt-10 w-full h-full">
        {competitionsData[activeTab]?.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competitionsData[activeTab].map((competition, index) => (
              <CompetitionCard key={index} {...competition} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center h-[50%]">
            <NoCompetitions />
          </div>
        )}
      </div>
    </div>
  );
};

export default CompetitionsPage;
