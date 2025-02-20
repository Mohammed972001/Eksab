"use client";

import React, { useState } from "react";

const TopQuestions = () => {
  const faqs = [
    {
      question: " كيف يمكنني إنشاء مسابقة ؟",
      answer:
        "يمكنك إنشاء مسابقة بخطوات بسيطة داخل التطبيق عبر واجهة سهلة الاستخدام",
    },
    {
      question: "   هل هناك خطط مجانية ؟",
      answer: " يوجد الكثير من الخطط والباقات المناسبة",
    },
    {
      question:
        "هل يمكنني المشاركة والانضمام إلى كيف يمكن للمشاركين الانضمام الي المسابقات ؟",
      answer:
        "طبعًا! بعد ما تعمل حساب، هتلاقي قسم (المساعدات المتاحة). اختار المساعدة اللي تناسبك وقدّم طلب المشاركة.",
    },
    {
      question: "هل يمكنني تخصيص تصميم المسابقات ؟",
      answer:
        "آه، في إعدادات تقدر تتحكم فيها، زي إضافة لوجو أو تعديل الألوان والأسئلة. الموضوع سهل وبسيط من لوحة التحكم.",
    },
    {
      question: "هل يدعم التطبيق المسابقات الجماعية  ",
      answer:
        "نعم، تقدر تفعل ميزة الأتمتة عشان تبقى المساعدات بتمشي تلقائي من مرحلة لمرحلة حسب القواعد اللي انت محددها.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <main className="w-full min-h-screen flex flex-col mt-20 space-y-0">
      <header className="w-full text-center mx-auto space-y-5">
        <p className="flex items-center justify-center gap-2 text-2xl font-semibold text-[#3454B4]">
          <span className="inline-block w-3 h-3 rounded-full bg-yellow-400" />
          ابرز الاسئلة
        </p>
        <h1 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
          هل لديك استفسارات
        </h1>
        <p className="pt-8 text-gray-700 leading-relaxed text-xl px-4 md:px-72">
          نحن هنا لمساعدتك! تصفح قسم الأسئلة الشائعة للحصول على إجابات سريعة،
          أو تواصل معنا مباشرة عبر قنوات الدعم. فريقنا جاهز للإجابة على جميع
          استفساراتك!
        </p>
      </header>

      <section className="w-full max-w-4xl mx-auto pt-16 px-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 py-7">
            <button
              onClick={() => handleToggle(index)}
              className="flex items-center justify-between w-full text-left"
            >
              <span
                className={`text-2xl font-medium ${
                  openIndex === index ? "text-[#3454B4]" : "text-gray-900"
                }`}
              >
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-gray-600 transform transition-transform duration-300 ${
                  openIndex === index ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </button>

            {openIndex === index && (
              <p className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</p>
            )}
          </div>
        ))}
      </section>
    </main>
  );
};

export default TopQuestions;
