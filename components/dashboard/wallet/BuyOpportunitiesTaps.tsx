"use client";
import React from "react";

interface TabsAndFilterProps {
  activeTab: string;
  switchTab: (tab: string) => void;
}

const BuyOpportunitiesTaps: React.FC<TabsAndFilterProps> = ({ activeTab, switchTab }) => {
  const tabs = [
    { key: "info", label: " البياانات الاساسية " },
    { key: "pay", label: " الدفع" },
  ];

  return (
    <div className="mt-6 flex flex-col items-center justify-center gap-6 mb-8">
      <div className="grid grid-cols-2 w-full">
        {tabs.map((tab) => (
          <div
            key={tab.key}
            className="flex flex-col justify-center  gap-3 cursor-pointer"
            onClick={() => switchTab(tab.key)}
            role="button"
            tabIndex={0}
            aria-label={tab.label}
          >
              <div
              className={`w-full h-0.5 ${
                activeTab === tab.key ? "bg-primary" : "bg-[#E3E3E4]"
              }`}
            />
            <p
              className={`text-[12px] text-nowrap md:text-base ${
                activeTab === tab.key ? "text-primary font-semibold" : "text-shadeGray"
              }`}
            >
              {tab.label}
            </p>
          
          </div>
        ))}
      </div>

   
    </div>
  );
};

export default BuyOpportunitiesTaps;