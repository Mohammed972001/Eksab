import Image from "next/image";
import React from "react";

const ServiceSection = ({ 
  title,
  description,
  items,
  imageSrc,
  imagePosition = 'right' 
}: {
  title: string;
  description: string;
  items: string[];
  imageSrc: string;
  imagePosition?: 'left' | 'right';
}) => {
  return (
    <div className="w-full flex pt-20">
      {imagePosition === 'left' && (
        <ServiceImage imageSrc={imageSrc} />
      )}
      
      <ServiceContent 
        title={title}
        description={description}
        items={items}
      />

      {imagePosition === 'right' && (
        <ServiceImage imageSrc={imageSrc} />
      )}
    </div>
  );
};

const ServiceImage = ({ imageSrc }: { imageSrc: string }) => (
  <figure className="w-[50%] h-full">
    <Image
      src={imageSrc}
      alt="service feature"
      width={768}
      height={512}
      className="object-cover"
    />
  </figure>
);

const ServiceContent = ({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: string[];
}) => (
  <article className="w-[50%] h-full py-32 flex flex-col space-y-7 pr-24">
    <ServiceIcon />
    
    <h1 className="mt-4 text-2xl md:text-4xl font-bold text-gray-900">
      {title}
    </h1>
    
    <p className="text-lg text-[#434549] pl-20">{description}</p>
    
    <ul className="flex flex-col space-y-4 text-lg text-[#434549]">
      {items.map((item, index) => (
        <ServiceItem key={index} text={item} />
      ))}
    </ul>
  </article>
);

const ServiceIcon = () => (
  <div className="flex justify-center items-center w-14 h-14 bg-[#3454B4] rounded-lg shadow-sm">
    <svg
      width="26"
      height="26"
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 17.6666V12.9999M13 8.33325H13.0117M24.6667 12.9999C24.6667 19.4432 19.4434 24.6666 13 24.6666C6.55672 24.6666 1.33337 19.4432 1.33337 12.9999C1.33337 6.5566 6.55672 1.33325 13 1.33325C19.4434 1.33325 24.6667 6.5566 24.6667 12.9999Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const ServiceItem = ({ text }: { text: string }) => (
  <li>
    <p className="flex items-center gap-4">
      <CheckIcon />
      {text}
    </p>
  </li>
);

const CheckIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0_1_2874)">
      <path
        d="M8.75004 13.9999L12.25 17.4999L19.25 10.4999M25.6667 13.9999C25.6667 20.4432 20.4434 25.6666 14 25.6666C7.55672 25.6666 2.33337 20.4432 2.33337 13.9999C2.33337 7.5566 7.55672 2.33325 14 2.33325C20.4434 2.33325 25.6667 7.5566 25.6667 13.9999Z"
        stroke="#3454B4"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_1_2874">
        <path
          d="M0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14Z"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

const ApplicationServices = () => {
  return (
    <main className="w-full min-h-screen flex flex-col mt-20 space-y-0">
      <header className="w-full text-center mx-auto space-y-5">
        <SectionTitle />
        <h1 className="mt-4 text-3xl md:text-5xl font-bold text-gray-900">
          ما الذي نقدمه لأجلك؟
        </h1>
        <SectionDescription />
      </header>

      <ServiceSection
        title="إنشاء وأدارة المسابقات."
        description="مع منصتنا المتطورة، يمكنك إنشاء مسابقات تفاعلية بجميع الأنواع، سواء كانت تعليمية، ترفيهية، أو تسويقية، في دقائق معدودة. قم بتخصيص الأسئلة، ضبط القواعد، وإضافة وسائط متعددة لجذب المشاركين."
        items={[
          "تحكم كامل في اعدادت المسابقة،عدد المشاركين،ومدة التحديات.",
          "متابعة اداء المشاركين وقياس التفاعل بسهولة.",
          "نشر المسابقات عبر وسائل التواصل الاجتماعي وجذب جمهور أوسع"
        ]}
        imageSrc="/landingPage/Content.png"
      />

      <ServiceSection
        title="منصة السحب الذكي ."
        description="تقدم لك منصة السحب الذكي طريقة سهلة وعادلة لإجراء السحوبات الرقمية بكل شفافية. سواء كنت تنظم مسابقة، حملة تسويقية، أو توزيع جوائز، نوفر لك أدوات متقدمة لاختيار الفائزين تلقائيًا وفق معايير دقيقة تضمن العشوائية والنزاهة."
        items={[
          "سحب عشوائي عادل وموثوق.",
          "دعم لمختلف انواع المسابقات.",
          "تقارير مفصلة ونتائج فورية."
        ]}
        imageSrc="/landingPage/Content (1).png"
        imagePosition="left"
      />

      <ServiceSection
        title="تقارير وتحليلات متقدمة."
        description="احصل على تقارير دقيقة حول أداء المسابقات والمشاركين عبر لوحات تحكم ذكية. تابع عدد المشاركين، نسب الإجابات الصحيحة، ومستويات التفاعل بسهولة. استخدم البيانات لتحسين تجربة المسابقات واتخاذ قرارات أكثر فعالية."
        items={[
          "إحصائيات فورية عن المشاركين والادء،وتحليل دقيق للنتائج.",
          "تصدير البيانات للتقارير والمتابعة.",
          "تحسين استرايجياتك بناءً علي تحليلات متقدمة."
        ]}
        imageSrc="/landingPage/Content (2).png"
      />
    </main>
  );
};

const SectionTitle = () => (
  <p className="flex items-center justify-center gap-2 text-2xl font-semibold text-[#3454B4]">
    <span className="inline-block w-3 h-3 rounded-full bg-yellow-400" />
    خدمات التطبيق
  </p>
);

const SectionDescription = () => (
  <p className="pt-8 text-gray-700 leading-relaxed text-xl px-24">
    نوفر لك منصة متكاملة لإنشاء وإدارة المسابقات بسهولة، مع ميزات متقدمة مثل السحوبات الذكية،
    التقارير والتحليلات، ونظام الجوائز التفاعلي. كل ما تحتاجه لتعزيز التفاعل وتحقيق أهدافك بفعالية!
  </p>
);

export default ApplicationServices;