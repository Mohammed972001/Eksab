'use client'
import React from "react";
import { useState } from "react";
import CompetitionReportform from "@/components/dashboard/Reports/CompetitionReportform";
import ParticipantReportsForm from "@/components/dashboard/Reports/ParticipantReportsForm";
import ReportsHeader from "@/components/dashboard/Reports/ReportsHeader";
import ReportsTabs from "@/components/dashboard/Reports/ReportsTabs";

const ReportsPage = () => {
  const [activeTab, setActiveTab] = useState<string>("info");

  return (
    <div className="w-full h-full pb-20">
      {/* Page Header */}
      <ReportsHeader />

      <ReportsTabs activeTab={activeTab} switchTab={setActiveTab} />

      {activeTab === "info" && <CompetitionReportform />}
      {activeTab === "draft" && <ParticipantReportsForm />}
    </div>
  );
};

export default ReportsPage;


