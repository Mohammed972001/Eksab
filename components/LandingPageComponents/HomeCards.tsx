import Image from "next/image";
import React from "react";
import HomeSingleCard from "./HomeSingleCard";

const HomeCards = () => {
  return (
    <div className="px-4 xl:px-[112px] py-[64px] lg:py-[96px] bg-[#0D152D] flex flex-col gap-[96px]">
      {/* Section Header */}
      <div className="flex flex-col gap-8 lg:max-w-[700px]">
        <div className="flex flex-col gap-2 text-white">
          <div className="flex items-center gap-2">
            <Image src={"/HomePage/Dot.svg"} alt="dot" width={6} height={6} />
            <p className="text-[#3454B4] text-lg font-bold">
              أنواع المسابقات المتاحة
            </p>
          </div>
          <p className="font-bold text-[32px] lg:text-[48px]">
            تنوع يناسب جميع الاحتياجات
          </p>
        </div>
        <p className="text-lg text-[#EEEEEF]">
          نوفر مجموعة متنوعة من المسابقات التي تناسب جميع الاحتياجات، سواء كانت
          تعليمية، ترفيهية، أو تسويقية. صمم مسابقاتك بسهولة وفقًا لأهدافك، مع
          خيارات تخصيص مرنة. اجعل التجربة ممتعة وتفاعلية لجميع المشاركين!
        </p>
      </div>
      {/* Cards */}
      <div className=" w-full flex flex-col lg:flex-row justify-between gap-[32px] lg:gap-0">
        {/* Right side cards */}
        <div className="flex flex-col gap-[32px] lg:gap-[64px]">
          <HomeSingleCard
            imgSrc="/HomePage/barcode.svg"
            imgAlt="barcode"
            title="الباركود التفاعلي عبر التطبيق"
            subtitle="يتم توجيه العملاء إلى تطبيق الشركة لمسح الباركود للدخول في المسابقة والحصول على فرص للفوز"
          />
          <HomeSingleCard
            imgSrc="/HomePage/markerPin.svg"
            imgAlt="pin"
            title="الحضور أو المشاركة الفعلية"
            subtitle="تطلب الشركات من الجمهور الحضور إلى حدث أو فعالية محددة للفوز بالجوائز او المشاركة في المسابقات."
          />
          <HomeSingleCard
            imgSrc="/HomePage/uploader.svg"
            imgAlt="uploader"
            title="رفع ملف او صورة"
            subtitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليـد هذا النص من مولد النص العربي."
          />
          <HomeSingleCard
            imgSrc="/HomePage/dataflow.svg"
            imgAlt="dataflow"
            title="ربط بمنصتك الخاصة"
            subtitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليـد هذا النص من مولد النص العربي."
            comingSoon
          />
        </div>
        {/* Left Side cards */}
        <div className="flex flex-col gap-[32px] lg:gap-[64px] lg:mt-8">
          <HomeSingleCard
            imgSrc="/HomePage/reader.svg"
            imgAlt="barcodereader"
            title="التحقق من الفاتورة"
            subtitle="بمجرد شراء المنتج ومسح الباركود، يتم تسجيل العميل تلقائيًا في السحب الشهري على جوائز"
          />
          <HomeSingleCard
            imgSrc="/HomePage/helpcircle.svg"
            imgAlt="helpcircle"
            title="سؤال وجواب"
            subtitle="عبارة عن سؤال او مجموعة أسئلة تجاوب عليها من اجل الدخول على السحب."
          />
          <HomeSingleCard
            imgSrc="/HomePage/share.svg"
            imgAlt="share"
            title="المشاركة عبر منصات التواصل"
            subtitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليـد هذا النص من مولد النص العربي."
            comingSoon
          />
          <HomeSingleCard
            imgSrc="/HomePage/gamingPad.svg"
            imgAlt="gamingpad"
            title="مسابقة العاب تفاعلية"
            subtitle="هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليـد هذا النص من مولد النص العربي."
            comingSoon
          />
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
