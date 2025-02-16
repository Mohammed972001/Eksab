"use client";
import Dashboard from "@/components/dashboard/Home/Dashboard";
import PageHeader from "@/components/SharedComponents/PageHeader";

import React from "react";
import MapComponent from "@/components/dashboard/Home/MapComponent";
const HomePage = () => {
  return (
    <div className="w-full h-full pb-20">
    {/* Page Header */}
    <PageHeader
    mainTitle="الرئيسية"
  />
  <Dashboard/>

 <MapComponent/>
  </div>
  );
};

export default HomePage;
