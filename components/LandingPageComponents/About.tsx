import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="mx-4 lg:mx-[112px] py-[64px] lg:py-[96px] flex-col text-shadeBlack">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Image src={"/HomePage/Dot.svg"} alt="dot" width={6} height={6} />
          <p className="text-[#3454B4] text-lg font-bold">من نحن؟</p>
        </div>
        <p className="text-[#0D152D] font-bold text-[32px] lg:text-[48px]">اعرف المزيد عنا</p>
      </div>
      <div className="pt-8 lg:pt-[64px] pb-[64px] lg:pb-[96px] flex flex-col gap-6 text-[22px]">
        <p>
          نحن منصة حوكمة المسابقات التجارية، منصة رقمية مبتكرة تتيح للشركات و
          المؤسسات في القطاعين الخاص و العام تنظيم و أدارة المسابقات التجارية
          بكل سهولة و شفافية. هدفنا توحيد و تنظيم المسابقات التجارية في مكان
          واحد، مع تمكين الغرف التجارية من متابعة العمليات و ضمان الامتثال
          للمعايير.
        </p>
        <p>
          تقوم منصتنا على مبدأ تكافؤ الفرص، حيث يمكن للجميع المشاركة في
          المسابقات مجاناً، و لكن من يشتري منتجات العميل او يستوفي شروطه يحصل
          على فرص إضافية للفوز، مما يعزز التفاعل و يساعد الشركات على تحقيق
          أهدافها التسويقية.
        </p>
      </div>
      <div className="w-full hidden md:block">
        <Image
          src={"/HomePage/AboutImg.svg"}
          alt="about"
          width={1216}
          height={304}
          loading="lazy"
          className="w-full"
        />
      </div>
      <div className="w-full block md:hidden">
        <Image
          src={"/HomePage/AboutImgSm.svg"}
          alt="about"
          width={380}
          height={304}
          loading="lazy"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default About;
