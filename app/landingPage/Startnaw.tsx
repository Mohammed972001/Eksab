"use client";
import Image from "next/image";
import React from "react";

export default function Startnaw() {
  return (
    <main className="flex flex-row-reverse items-center justify-between py-20 px-10">
      {/* صورة الموبايل */}
      <figure className="w-1/2 flex justify-center">
        <Image
          src="/landingPage/Frame 169.png"
          alt="mobile"
          width={719}
          height={719}
          priority
        />
      </figure>

      {/* النص وزرار التحميل */}
      <article className="w-1/2 space-y-5  pr-28 flex flex-col items-start">
        {/* العنوان الفرعي مع الدائرة الصفراء */}
        <p className="flex items-center justify-end gap-2 text-2xl font-semibold text-[#3454B4]">
          <span className="inline-block w-3 h-3 rounded-full bg-yellow-400" />
          التحميل والتجربة
        </p>

        {/* عنوان رئيسي */}
        <h1 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
          ابدأ الآن وانضم لعالم التحدي
        </h1>

        {/* الوصف */}
        <p className="pt-4 text-gray-700 leading-relaxed text-xl">
          لا تفوت الفرصة لإنشاء مسابقات شيقة! قم بتحميل التطبيق وابدأ مغامرتك الآن!
          انضم الآن إلى مجتمع المسابقات وكن جزءًا من المنافسة الشريفة الشيقة!
        </p>

        <div className="flex justify-end  gap-5 pt-4">
          <Image
            src="/landingPage/Mobile app store badge.png"
            alt="app store"
            width={195}
            height={55}
          />
          <Image
            src="/landingPage/Mobile app store badge (1).png"
            alt="google play"
            width={195}
            height={55}
          />
        </div>
      </article>
    </main>
  );
}
