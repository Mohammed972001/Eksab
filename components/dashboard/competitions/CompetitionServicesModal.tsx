import Image from "next/image";
import React from "react";
import CompetitionServiceCard from "./CompetitionServiceCard";

interface CompetitionServicesModalProps {
  handleCloseModal: () => void;
}

const cardData = [
  {
    imageSrc: "/dashboard/competitions/barcode.svg",
    bgColor: "bg-[#D9E1F9]",
    title: "الباركود التفاعلي عبر التطبيق",
    description:
      "يتم توجيه العملاء إلى تطبيق الشركة لمسح الباركود للدخول في المسابقة والحصول على فرص للفوز",
    competitionId: "1",
    isActive: true,
    competitionType: "Barcode", // النوع هنا من ال enum
  },
  {
    imageSrc: "/dashboard/competitions/scanner.svg",
    bgColor: "bg-[#D9E1F9]",
    title: "التحقق من الفاتورة",
    description:
      "بمجرد شراء المنتج ومسح الباركود، يتم تسجيل العميل تلقائيًا في السحب الشهري على جوائز",
    competitionId: "2",
    isActive: true,
    competitionType: "VerifyBill", // النوع هنا من ال enum
  },
  {
    imageSrc: "/dashboard/competitions/location.svg",
    bgColor: "bg-[#D9E1F9]",
    title: "الحضور أو المشاركة الفعلية",
    description:
      "تطلب الشركات من الجمهور الحضور إلى حدث أو فعالية محددة للفوز بالجوائز او المشاركة في المسابقات.",
    competitionId: "3",
    isActive: true,
    competitionType: "Attendance", // النوع هنا من ال enum
  },
  {
    imageSrc: "/dashboard/competitions/help.svg",
    bgColor: "bg-[#D9E1F9]",
    title: "سؤال وجواب",
    description:
      "عبارة عن سؤال او مجموعة أسئلة تجاوب عليها من اجل الدخول على السحب.",
    competitionId: "4",
    isActive: true,
    competitionType: "QuestionAndAnswer", // النوع هنا من ال enum
  },
  {
    imageSrc: "/dashboard/competitions/upload.svg",
    bgColor: "bg-[#D9E1F9]",
    title: "رفع ملف او صورة",
    description:
      "تطلب الشركات من الجمهور الحضور إلى حدث أو فعالية محددة للفوز بالجوائز او المشاركة في المسابقات.",
    competitionId: "5",
    isActive: true,
    competitionType: "UploadFile", // النوع هنا من ال enum
  },
  {
    imageSrc: "/dashboard/competitions/shapes.svg",
    bgColor: "bg-[#D9E1F9]",
    title: "المشاركة عبر منصات التواصل",
    description:
      "تطلب الشركات من الجمهور الحضور إلى حدث أو فعالية محددة للفوز بالجوائز او المشاركة في المسابقات.",
    competitionId: "6",
    isActive: false,
    competitionType: "SocialMedia", // النوع هنا من ال enum
  },
  {
    imageSrc: "/dashboard/competitions/shapes.svg",
    bgColor: "bg-[#D9E1F9]",
    title: "ربط بمنصتك الخاصة",
    description: "ربط عن طريقك الAPI لمنصتك الخاصة و المشركة منها.",
    competitionId: "7",
    isActive: false,
    competitionType: "ConnectToYourOwnPlatform", // النوع هنا من ال enum
  },
  {
    imageSrc: "/dashboard/competitions/shapes.svg",
    bgColor: "bg-[#D9E1F9]",
    title: "مسابقة العاب تفاعلية",
    description: "ربط عن طريقك الAPI لمنصتك الخاصة و المشركة منها.",
    competitionId: "8",
    isActive: false,
    competitionType: "SocialMedia", // النوع هنا من ال enum
  },
];

const CompetitionServicesModal = ({
  handleCloseModal,
}: CompetitionServicesModalProps) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 backdrop-blur-sm overflow-y-scroll">
      <div className="bg-white w-[90%] md:min-w-[760px] max-w-[760px] h-full overflow-y-auto scrollbar-hide p-6 rounded-3xl">
        <div className="flex flex-col justify-start items-start mb-4">
          <div className="flex justify-between items-center w-full mb-1">
            <p className="font-semibold text-lg text-shadeBlack text-center">
              خدمات المسابقة
            </p>
            <button onClick={handleCloseModal}>
              <Image src={"/close.svg"} alt="close" width={12} height={12} />
            </button>
          </div>
          <p className="text-sm text-shadeGray font-normal">
            قم بإنشاء جائزة جديدة لتكريم الأفراد أو الفرق التي تستحق ذلك.
          </p>
        </div>

        <hr className="my-4" />

        {/* Grid Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cardData.map((card) => (
            <CompetitionServiceCard
              key={card.competitionId}
              imageSrc={card.imageSrc}
              bgColor={card.bgColor}
              title={card.title}
              description={card.description}
              competitionId={card.competitionId}
              isActive={card.isActive}
              competitionType={card.competitionType} // بتمرير النوع هنا
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompetitionServicesModal;
