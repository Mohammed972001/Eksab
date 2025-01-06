"use client";
import React from "react";
import FilterButton from "@/components/SharedComponents/FilterButton";
import SearchBar from "@/components/SharedComponents/SearchBar";

interface TabsAndFilterProps {
  activeTab: string;
  switchTab: (tab: string) => void;
}

const TabsAndFilter: React.FC<TabsAndFilterProps> = ({ activeTab, switchTab }) => {
  return (
    <div className="mt-6 flex flex-col items-center justify-center gap-6">
      {/* Tabs */}
      <div className="grid grid-cols-1 md:grid-cols-3 w-full">
        {["active", "draft", "finished"].map((tab) => (
          <div
            key={tab}
            className="flex flex-col justify-center items-center gap-3 cursor-pointer"
            onClick={() => switchTab(tab)}
          >
            <p
              className={`${
                activeTab === tab ? "text-primary font-semibold" : "text-shadeGray"
              }`}
            >
              {tab === "active" && "المسابقات السارية"}
              {tab === "draft" && "المسودة"}
              {tab === "finished" && "المسابقات المنتهية"}
            </p>
            <div
              className={`w-full h-0.5 ${
                activeTab === tab ? "bg-primary" : "bg-[#E3E3E4]"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Filter and Search */}
      <div className="flex items-center gap-4 w-full">
        <div className="w-full">
          <SearchBar />
        </div>
        <div className="flex items-center gap-4">
          <FilterButton buttonText="ترتيب حسب" />
          <FilterButton buttonText="نوع المسابقة" />
          <FilterButton buttonText="كل الشركات" />
        </div>
      </div>
    </div>
  );
};

export default TabsAndFilter;
