"use client";

import { ChevronLeftRounded } from "@mui/icons-material";
import { FormControlLabel, Radio, RadioGroup, Typography } from "@mui/material";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useState } from "react";

const CompetitionDetailPage = () => {
  const params = useParams();
  const competitionId = params.id; // Extract competition ID

  const [selectedOption, setSelectedOption] = useState("platform");

  const handleChange = (e: any) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="h-full w-full">
      {/* page header */}
      <div className="flex flex-col gap-[20px] w-full">
        <div className="flex items-center gap-2">
          <div className="size-7 flex justify-center items-center">
            <Image
              src={"/dashboard/competitions/homeIcon.svg"}
              alt="home"
              width={15}
              height={15}
            />
          </div>
          <ChevronLeftRounded className="text-[#E3E3E4]" />
          <div className="bg-[#F4F4F4] flex justify-center items-center px-2 py-1 rounded-md">
            <p className="text-shadeGray font-semibold text-sm">مسابقاتي</p>
          </div>
          <ChevronLeftRounded className="text-[#E3E3E4]" />
          <div className="bg-[#EEEEEF] flex justify-center items-center px-2 py-1 rounded-md">
            <p className="text-shadeGray font-semibold text-sm">
              إنشاء مسابقة جديدة
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center w-full">
          <h2 className="font-semibold text-[30px] text-shadeBlack">
            إنشاء مسابقة جديدة (مسابقتك الخاصة)
          </h2>
        </div>
      </div>
      <hr className="mt-5" />

      {/* competition form progress steps */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 py-6 gap-4">
        <div className="flex flex-col items-start justify-center gap-3">
          <div className="border-t-[4px] border-primary w-full" />
          <div className="text-sm font-semibold text-primary">
            البيانات الأساسية
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-3">
          <div className="border-t-[4px] border-[#C6C7CA] w-full" />
          <div className="text-sm font-semibold text-shadeGray">
            طريقة المشاركة
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-3">
          <div className="border-t-[4px] border-[#C6C7CA] w-full" />
          <div className="text-sm font-semibold text-shadeGray">
            جوائز المسابقة
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-3">
          <div className="border-t-[4px] border-[#C6C7CA] w-full" />
          <div className="text-sm font-semibold text-shadeGray">
            تحديد السحوبات
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-3">
          <div className="border-t-[4px] border-[#C6C7CA] w-full" />
          <div className="text-sm font-semibold text-shadeGray">
            الشروط والأحكام
          </div>
        </div>

        <div className="flex flex-col items-start justify-center gap-3">
          <div className="border-t-[4px] border-[#C6C7CA] w-full" />
          <div className="text-sm font-semibold text-shadeGray">الدفع</div>
        </div>
      </div>

      {/* main information */}
      <form className="mt-4 flex flex-col justify-center items-start gap-6">
        {/* Form title header */}
        <div className="flex flex-col items-start justify-center gap-4 w-full">
          <h2 className="text-2xl font-semibold text-shadeBlack ">
            البيانات الرئيسية
          </h2>
          <hr className="w-full" />
        </div>

        <div className="flex flex-col items-start justify-center w-full">
          <p className="text-base font-semibold text-shadeBlack mb-3">
            قم بتحديد مكان انشاء المسابقة:
          </p>
          <RadioGroup
            value={selectedOption}
            onChange={handleChange}
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "16px",
              width: "100%",
            }} // Horizontal layout
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                padding: "16px",
                border:
                  selectedOption === "platform"
                    ? "2px solid #3454B4"
                    : "1px solid #C6C7CA ",
                borderRadius: "8px",
                backgroundColor:
                  selectedOption === "platform" ? "#D9E1F9" : "#ffffff",
                boxShadow:
                  selectedOption === "platform"
                    ? "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814" // shadows when selected
                    : "0px 1px 2px 0px #1018280D", // Lighter shadow when not selected
                width: "calc(50% - 8px)", // Ensure equal width for both options
              }}
            >
              <FormControlLabel
                value="platform"
                control={<Radio />}
                label={
                  <Typography
                    style={{
                      fontSize: "22px",
                      fontWeight: "medium",
                      color:
                        selectedOption === "platform" ? "#0D152D" : "#434549",
                    }}
                  >
                    منصة أكسب
                  </Typography>
                }
                style={{ margin: 0 }}
              />
              <Typography
                variant="body2"
                style={{
                  color: "#434549",
                  paddingInline: "16px",
                  paddingBottom: "16px",
                  fontSize: "14px",
                }}
              >
                نص مؤقت يوضح أن المستخدم سيقوم باختيار الاشتراك عن طريق منصة
                أكسب.
              </Typography>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "8px",
                padding: "8px",
                border:
                  selectedOption === "external"
                    ? "2px solid #3454B4"
                    : "1px solid #C6C7CA ",
                borderRadius: "8px",
                backgroundColor:
                  selectedOption === "external" ? "#D9E1F9" : "#ffffff",
                boxShadow:
                  selectedOption === "external"
                    ? "0px 4px 6px -2px #10182808, 0px 12px 16px -4px #10182814" //  shadows when selected
                    : "0px 1px 2px 0px #1018280D", // Lighter shadow when not selected
                width: "calc(50% - 8px)", // Ensure equal width for both options
              }}
            >
              <FormControlLabel
                value="external"
                control={<Radio />}
                label={
                  <Typography
                    style={{
                      fontSize: "22px",
                      fontWeight: "medium",
                      color:
                        selectedOption === "external" ? "#0D152D" : "#434549",
                    }}
                  >
                    منصة خارجية
                  </Typography>
                }
                style={{ margin: 0 }}
              />
              <Typography
                variant="body2"
                style={{
                  color: "#434549",
                  paddingInline: "16px",
                  paddingBottom: "16px",
                  fontSize: "14px",
                }}
              >
                نص مؤقت يوضح أن المستخدم سيقوم باختيار الاشتراك عن طريق منصة
                خارجية.
              </Typography>
            </div>
          </RadioGroup>
        </div>
      </form>
    </div>
  );
};

export default CompetitionDetailPage;
