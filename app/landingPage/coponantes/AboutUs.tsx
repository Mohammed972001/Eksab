import Image from "next/image";
import React from "react";

export default function AboutUs() {
  return (
    <main className="w-full min-h-screen flex flex-col items-start lg:p-32 ">
      <article className="w-auto self-start text-right lg:space-y-5 lg:ml-auto  py-10 px-8 ">
        <p className="flex items-center gap-2 text-xl font-semibold text-[#3454B4]">
          <span className="inline-block w-3 h-3 rounded-full bg-yellow-400" />
          من نحن
        </p>

        <h1 className="mt-4 text-3xl md:text-5xl font-bold text-[#0D152D]">
          اعرف المزيد عنا
        </h1>

        <p className="pt-12 w-[1,216px] text-shadeBlack leading-relaxed text-[22px]">
          نحن منصة حوكمة المسابقات التجارية، منصة رقمية مبتكرة تتيح للشركات و
          المؤسسات في القطاعين الخاص و العام تنظيم و أدارة المسابقات التجارية
          بكل سهولة و شفافية. هدفنا توحيد و تنظيم المسابقات التجارية في مكان
          واحد، مع تمكين الغرف التجارية من متابعة العمليات و ضمان الامتثال
          للمعايير.
        </p>

        <p className="pt-6 w-[1,216px] text-shadeBlack leading-relaxed text-[22px]">
          تقوم منصتنا على مبدأ تكافؤ الفرص، حيث يمكن للجميع المشاركة في
          المسابقات مجاناً، و لكن من يشتري منتجات العميل او يستوفي شروطه يحصل
          على فرص إضافية للفوز، مما يعزز التفاعل و يساعد الشركات على تحقيق
          أهدافها التسويقية.
        </p>
        <div className="w-full pt-16">
          <Image
            src={"/landingPage/Geometric shapes.svg"}
            alt="من نحن"
            width={1400}
            height={304}
            className="object-cover"
          />
        </div>
      </article>
    </main>
  );
}
