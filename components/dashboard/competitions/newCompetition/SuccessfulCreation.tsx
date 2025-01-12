import SubmitButton from "@/components/SharedComponents/SubmitButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SuccessfulCreation = () => {
  const router = useRouter();
  return (
    <div className="w-full h-full mt-[98px] flex flex-col max-w-[480px] mx-auto ">
      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <div className="flex flex-col justify-center items-center w-full gap-6">
          <Image
            src={"/auth/success.svg"}
            alt="success"
            width={120}
            height={120}
          />
          <div className="flex flex-col justify-center items-center gap-3">
            <p className="font-bold text-shadeBlack text-[32px]">
              لقد تم عمل مسابقة بنجاح!
            </p>
            <p className="text-shadeGray text-center">
              لقد قمت بعمل مسابقة بنجاح، لكن يتبقى خطوة اخيره لك من اجل ان
              يستطيع المتسابقين الاشتراك فيها وهي الحصول على التصريح من مكتب
              الغرفة التجارية. <br /> لقد قمنا بالتسهيل عليك و عمل خطاب تستطيع
              من خلاله طلب التصريح، سوف يتم ارسال هذا الخطاب عبر بريدك
              الإلكتروني و أيضاً تستطيع تحميله من الاسفل.
            </p>
          </div>
          {/* <div>placholder</div> */}
        </div>
      </div>
      <SubmitButton
        buttonText="العودة الي الصفحة الرئيسية"
        onClick={() => {
          router.push("/");
        }}
      />
    </div>
  );
};

export default SuccessfulCreation;
