'use client'
import PageHeader from "@/components/SharedComponents/PageHeader";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import TextInput from "@/components/SharedComponents/TextInput";
import React, { useState } from "react";

const SupportPage = () => {
  return (
    <div className="w-full h-full pb-20">
      {/* Page Header */}
      <PageHeader
        breadcrumbTitle="الدعم"
        mainTitle="الدعم"
      />
      <form className="w-full mx-auto p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
          <TextInput
            type="text"
            options={["الكل", "نوع 1", "نوع 2"]}
            label="نوع المشكلة"
          />
          <textarea
            dir={"rtl"}
            placeholder={"تفاصيل المشكلة.."}
            className={`w-full border border-gray-300 rounded px-4 py-2 text-shadeGray`}
            rows={3}
          ></textarea>
        </div>
        <div className="flex flex-col md:flex-row justify-end pb-5">
          <SubmitButton
            buttonText=" ارسال"
            type="submit"
            classContainer="w-[240px]"
          />
        </div>
        <hr className="font-bold trxe-[10px]" />
      </form>

      {/* Contact Information Section */}
      <div className=" text-right text-gray-500">
        <p className="font-semibold text-[20px] text-shadeBlack">للتواصل و مزيد من المعلومات</p>
        <p className="text-[12px] text-[#434549]">
          يرجى التواصل معنا عبر البريد الإلكتروني أو رقم الجوال الموضح بالأسفل
        </p>
        <p className="mt-1 text-[#434549] ">البريد الإلكتروني: <a href="mailto:Eksab@info.com" className="text-blue-500">Eksab@info.com</a></p>
        <p className="mt-1 text-[#434549]">رقم الجوال: <a href="tel:+966534663364" className="text-blue-500">+966 53 466 3364</a></p>
      </div>
    </div>
  );
};

export default SupportPage;
