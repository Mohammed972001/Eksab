import SubmitButton from "@/components/SharedComponents/SubmitButton";
import React from "react";

interface DetailsPaymentInfoProps {
  showButton: boolean;
  handlePaymentClick: () => void;
}

const  DetailsInvoiceValue: React.FC<DetailsPaymentInfoProps> = ({
  showButton,
  handlePaymentClick,
}) => {
  return (
    <div className="flex flex-col gap-6 min-w-[352px] h-fit items-start shadow-card-shadow bg-white border border-[#C6C7CA] p-6 rounded-lg">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-4 w-full">
        <p className="text-shadeBlack font-semibold text-[22px]">
          قيمة الفاتورة
        </p>
        <hr className="w-full" />
      </div>

      {/* Bill Details */}
      <div className="flex flex-col gap-4 text-shadeGray font-medium w-full">
        {/* Main Details */}
        <div className="flex flex-col gap-[10px]">
          <div className="flex justify-between items-center">
            <p>سعر الباقة </p>
            <p>40,000 ر.س</p>
          </div>
          <div className="flex justify-between items-center">
            <p>ضريبة القيمة المضافة</p>
            <p>4,250 ر.س</p>
          </div>
        </div>
        <hr />
        {/* Total Bills */}
        <div className="flex justify-between items-center text-shadeBlack font-semibold text-[22px]">
          <p>الإجمالي</p>
          <p>86,250 ر.س</p>
        </div>

        <div>
         
            <SubmitButton
              buttonText="ادفع 86,250 ر.س"
              onClick={handlePaymentClick} 
              classContainer="mt-0"
            />
        </div>
      </div>
    </div>
  );
};

export default DetailsInvoiceValue;