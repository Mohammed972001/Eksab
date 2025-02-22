import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <div className="py-[64px] lg:py-[96px] bg-[#EEEEEF] text-shadeBlack flex flex-col justify-center items-center gap-[64px] lg:gap-[96px]">
      {/* Section Header */}
      <div className="w-full flex flex-col justify-center items-center gap-8 px-4 lg:px-[112px]">
        <div className="flex flex-col gap-2">
          <div className="flex justify-center items-center gap-2">
            <Image src={"/HomePage/Dot.svg"} alt="dot" width={6} height={6} />
            <p className="text-[#3454B4] text-lg font-bold">خدمات التطبيق</p>
          </div>
          <p className="text-[#0D152D] font-bold text-nowrap text-[32px] lg:text-[48px]">
            ما الذي نقدمه لأجلك؟
          </p>
        </div>
        <p className="text-lg text-center">
          نوفر لك منصة متكاملة لإنشاء وإدارة المسابقات بسهولة، مع ميزات متقدمة
          مثل السحوبات الذكية، التقارير والتحليلات، ونظام الجوائز التفاعلي. كل
          ما تحتاجه لتعزيز التفاعل وتحقيق أهدافك بفعالية!
        </p>
      </div>
      {/* First Section */}
      <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-0 items-center justify-between lg:min-h-[512px] ps-4 lg:ps-[20px] xl:ps-[60px] 2xl:ps-[112px]">
        <div className="flex flex-col gap-8 lg:max-w-[500px] xl:max-w-[560px]">
          <div className="flex flex-col gap-[20px]">
            <div className="size-[56px] flex items-center justify-center bg-[#3454B4] border-2 border-[#FFFFFF1F] shadow-icon-shadow rounded-[12px]">
              <Image
                src={"/HomePage/info.svg"}
                alt="info"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[24px] lg:text-[32px] font-bold">
                إنشاء و أدارة المسابقات.
              </p>
              <p className="text-shadeGray text-base lg:text-lg">
                مع منصتنا المتطورة، يمكنك إنشاء مسابقات تفاعلية بجميع الأنواع،
                سواء كانت تعليمية، ترفيهية، أو تسويقية، في دقائق معدودة. قم
                بتخصيص الأسئلة، ضبط القواعد، وإضافة وسائط متعددة لجذب المشاركين.
              </p>
            </div>
          </div>
          <div className="ps-4 flex flex-col gap-4 text-shadeGray text-base lg:text-lg">
            <div className="flex items-center gap-3">
              <Image
                src={"/HomePage/check.svg"}
                alt="check"
                width={28}
                height={28}
              />
              <p>
                تحكم كامل في إعدادات المسابقة، عدد المشاركين، ومدة التحديات.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/HomePage/check.svg"}
                alt="check"
                width={28}
                height={28}
              />
              <p>متابعة أداء المشتركين وقياس التفاعل بسهولة.</p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/HomePage/check.svg"}
                alt="check"
                width={28}
                height={28}
              />
              <p>نشر المسابقات عبر وسائل التواصل الاجتماعي وجذب جمهور أوسع.</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/HomePage/eksabForm.svg"}
            alt="eksab"
            width={768}
            height={512}
            className="border-4 rounded-[10px] border-[#101828] border-l-0 rounded-l-none"
          />
        </div>
      </div>
      {/* Second Section */}
      <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-0 items-center justify-between lg:min-h-[512px] pe-4 lg:pe-[20px] xl:pe-[60px] 2xl:pe-[112px]">
        <div className="order-2 lg:order-1">
          <Image
            src={"/HomePage/services2.svg"}
            alt="eksab"
            width={768}
            height={512}
            className="border-4 rounded-[10px] border-[#101828] border-r-0 rounded-r-none"
          />
        </div>
        <div className="flex flex-col gap-8 lg:max-w-[500px] xl:max-w-[560px] ps-4 order-1 lg:order-2">
          <div className="flex flex-col gap-[20px]">
            <div className="size-[56px] flex items-center justify-center bg-[#3454B4] border-2 border-[#FFFFFF1F] shadow-icon-shadow rounded-[12px]">
              <Image
                src={"/HomePage/info.svg"}
                alt="info"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[24px] lg:text-[32px] font-bold">
                منصة السحب الذكي.
              </p>
              <p className="text-shadeGray text-base lg:text-lg">
                تقدم لك منصة السحب الذكي طريقة سهلة وعادلة لإجراء السحوبات
                الرقمية بكل شفافية. سواء كنت تنظم مسابقة، حملة تسويقية، أو توزيع
                جوائز، نوفر لك أدوات متقدمة لاختيار الفائزين تلقائيًا وفق معايير
                دقيقة تضمن العشوائية والنزاهة.
              </p>
            </div>
          </div>
          <div className="ps-4 flex flex-col gap-4 text-shadeGray text-base lg:text-lg">
            <div className="flex items-center gap-3">
              <Image
                src={"/HomePage/check.svg"}
                alt="check"
                width={28}
                height={28}
              />
              <p>سحب عشوائي عادل وموثوق.</p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/HomePage/check.svg"}
                alt="check"
                width={28}
                height={28}
              />
              <p>دعم لمختلف أنواع المسابقات والسحوبات.</p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/HomePage/check.svg"}
                alt="check"
                width={28}
                height={28}
              />
              <p>تقارير مفصلة ونتائج فورية.</p>
            </div>
          </div>
        </div>
      </div>
      {/* Third Section */}
      <div className="w-full flex flex-col lg:flex-row gap-16 lg:gap-0 items-center justify-between lg:min-h-[512px] ps-4 lg:ps-[20px] xl:ps-[60px] 2xl:ps-[112px]">
        <div className="flex flex-col gap-8 lg:max-w-[500px] xl:max-w-[560px]">
          <div className="flex flex-col gap-[20px]">
            <div className="size-[56px] flex items-center justify-center bg-[#3454B4] border-2 border-[#FFFFFF1F] shadow-icon-shadow rounded-[12px]">
              <Image
                src={"/HomePage/info.svg"}
                alt="info"
                width={24}
                height={24}
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[24px] lg:text-[32px] font-bold">
                تقارير و تحليلات متقدمة.
              </p>
              <p className="text-shadeGray text-base lg:text-lg">
                احصل على تقارير دقيقة حول أداء المسابقات والمشاركين عبر لوحات
                تحكم ذكية. تابع عدد المشاركين، نسب الإجابات الصحيحة، ومستويات
                التفاعل بسهولة. استخدم البيانات لتحسين تجربة المسابقات واتخاذ
                قرارات أكثر فعالية.
              </p>
            </div>
          </div>
          <div className="ps-4 flex flex-col gap-4 text-shadeGray text-base lg:text-lg">
            <div className="flex items-center gap-3">
              <Image
                src={"/HomePage/check.svg"}
                alt="check"
                width={28}
                height={28}
              />
              <p>إحصائيات فورية عن المشاركين والأداء، و تحليل دقيق للنتائج. </p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/HomePage/check.svg"}
                alt="check"
                width={28}
                height={28}
              />
              <p>تصدير البيانات للتقارير والمتابعة.</p>
            </div>
            <div className="flex items-center gap-3">
              <Image
                src={"/HomePage/check.svg"}
                alt="check"
                width={28}
                height={28}
              />
              <p>تحسين استراتيجياتك بناءً على تحليلات متقدمة.</p>
            </div>
          </div>
        </div>
        <div>
          <Image
            src={"/HomePage/services3.svg"}
            alt="eksab"
            width={768}
            height={512}
            className="border-4 rounded-[10px] border-[#101828] border-l-0 rounded-l-none"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
