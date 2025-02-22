import Image from "next/image";
import React from "react";
import FAQItem from "./FAQItem";

const faqData = [
  {
    question: "كيف يمكنني إنشاء مسابقة؟",
    answer:
      "يمكنك إنشاء مسابقة بخطوات بسيطة داخل التطبيق عبر واجهة سهلة الاستخدام.",
  },
  {
    question: "هل هناك خطط مجانية؟",
    answer: "نعم، هناك خطط مجانية متاحة للمستخدمين.",
  },
  {
    question: "كيف يمكن للمشاركين الانضمام إلى المسابقات؟",
    answer:
      "يمكن للمشاركين الانضمام إلى المسابقات عن طريق رمز الدعوة أو الرابط المباشر.",
  },
  {
    question: "هل يمكنني تخصيص تصميم المسابقات؟",
    answer: "نعم، يمكنك تخصيص تصميم المسابقات وفقًا لاحتياجاتك.",
  },
  {
    question: "هل يدعم التطبيق المسابقات الجماعية؟",
    answer: "نعم، التطبيق يدعم المسابقات الجماعية.",
  },
];

const FAQ = () => {
  return (
    <div className="px-4 py-[64px] lg:py-[96px] xl:px-[122px]">
      {/* FAQ Section */}
      <div className="flex flex-col justify-center items-center gap-16">
        {/* Section Header */}
        <div className="flex justify-center items-center flex-col gap-8">
          <div className="flex justify-center items-center flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image src={"/HomePage/Dot.svg"} alt="dot" width={6} height={6} />
              <p className="text-[#3454B4] text-lg font-bold">أبرز الأسئلة </p>
            </div>
            <p className="text-shadeBlack font-bold text-[32px] text-center lg:text-[48px] text-nowrap">
              هل لديك استفسارات؟
            </p>
          </div>
          <div className="flex text-shadeGray text-lg text-center lg:max-w-[800px]">
            <p>
              نحن هنا لمساعدتك! تصفح قسم الأسئلة الشائعة للحصول على إجابات
              سريعة، أو تواصل معنا مباشرة عبر قنوات الدعم. فريقنا جاهز للإجابة
              على جميع استفساراتك!
            </p>
          </div>
        </div>
        {/* Section Questions */}
        <div className="flex flex-col justify-center items-center gap-8 max-w-3xl w-full">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
