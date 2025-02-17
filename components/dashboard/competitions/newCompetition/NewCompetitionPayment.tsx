import React, { useState } from "react";
import TabSwitch from "@/components/SharedComponents/TabSwitch";
import TextInput from "@/components/SharedComponents/TextInput";
import Image from "next/image";
import DatePicker from "react-datepicker"; // Import react-datepicker
import "react-datepicker/dist/react-datepicker.css"; // Import datepicker styles
import DatePickerInput from "@/components/SharedComponents/DatePickerInput";
import { FileUpload } from "@/components/AuthComponents/RegisterComponents/FileUpload";
import SubmitButton from "@/components/SharedComponents/SubmitButton";

const NewCompetitionPayment = () => {
  const tabs = ["دفع بنكي", "دفع ألكتروني", "طلب شراء (P.O)"];
  const [activeTab, setActiveTab] = useState(0);

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState(""); // Name on card
  const [cardNumber, setCardNumber] = useState(""); // Card number
  const [expirationDate, setExpirationDate] = useState<Date | null>(null); // Date input state
  const [cvv, setCvv] = useState(""); // CVV state

  // Toggle visibility for the password field
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  // Handle input changes for name, card number, expiration date, and CVV
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row items-start gap-6 w-full">
      {/* Payment Method Section */}
      <div className="flex flex-col items-start gap-4 shadow-card-shadow bg-white border border-[#C6C7CA] p-6 rounded-lg flex-1 w-full md:w-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start justify-center gap-4 w-full">
          <h2 className="text-2xl font-semibold text-shadeBlack">
            اختر طريقة الدفع
          </h2>
          <hr className="w-full" />
          {/* Selecting Payment Method */}
          <TabSwitch
            tabs={tabs}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>

        {/* Bank Payment */}
        {activeTab === 0 && (
          <>
            <div className="flex flex-col items-start justify-start gap-6 w-full">
              {/* Section Header */}
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <p className="text-shadeBlack font-semibold">
                    تفاصيل طريقة الدفع:
                  </p>
                  <hr />
                </div>
              </div>
              {/* FileUploader */}
              <div className="flex flex-col gap-3 w-full">
                <p className="text-shadeBlack font-medium text-sm">
                  أرفق إيصال الدفع
                </p>
                <FileUpload
                  label=""
                  textClass="text-center items-center"
                  classContainer="w-full flex flex-col items-center justify-center text-center !bg-[#F9F9FA]"
                />
              </div>
              {/* Bank Details */}
              <div className="flex flex-col gap-4 w-full">
                {/* Header with line */}
                <div className="flex flex-col gap-2 w-full">
                  <p className="text-shadeBlack font-bold">
                    بيانات الحساب البنكي:
                  </p>
                  <hr />
                </div>
                {/* Details */}
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center">
                      <Image
                        src={"/bank.svg"}
                        alt="bank"
                        width={56}
                        height={56}
                      />
                    </div>
                    <p className="text-shadeBlack font-bold text-[22px]">
                      بنك الرياض
                    </p>
                  </div>
                  {/* Copy Details Section */}
                  <div className="pr-[76px]">
                    <div className="flex flex-col gap-2">
                      {/* Account Number */}
                      <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">رقم الحساب :</p>
                          <p className="font-medium" id="accountNumber">
                            012345678 1001001234 0123
                          </p>
                        </div>
                        <div
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={() => {
                            const accountNumberElement =
                              document.getElementById("accountNumber");
                            if (accountNumberElement) {
                              const accountNumber =
                                accountNumberElement.innerText;
                              navigator.clipboard
                                .writeText(accountNumber)
                                .then(() => {
                                  alert("تم نسخ رقم الحساب بنجاح");
                                });
                            } else {
                              console.error(
                                'Element with ID "accountNumber" not found.'
                              );
                            }
                          }}
                        >
                          <Image
                            src={"/copy.svg"}
                            alt="copy"
                            width={20}
                            height={20}
                          />
                          <button className="text-[#0080CC] text-sm">
                            نسخ النص
                          </button>
                        </div>
                      </div>

                      {/* IBAN Number */}
                      <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">رقم الIBAN :</p>
                          <p className="font-medium" id="ibanNumber">
                            GB 12 ABCD 102030 12345678
                          </p>
                        </div>
                        <div
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={() => {
                            const ibanNumberElement =
                              document.getElementById("ibanNumber");
                            if (ibanNumberElement) {
                              const ibanNumber = ibanNumberElement.innerText;
                              navigator.clipboard
                                .writeText(ibanNumber)
                                .then(() => {
                                  alert("تم نسخ رقم الIBAN بنجاح");
                                });
                            } else {
                              console.error(
                                'Element with ID "ibanNumber" not found.'
                              );
                            }
                          }}
                        >
                          <Image
                            src={"/copy.svg"}
                            alt="copy"
                            width={20}
                            height={20}
                          />
                          <button className="text-[#0080CC] text-sm">
                            نسخ النص
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Electronic Payment*/}
        {activeTab === 1 && (
          <>
            <SubmitButton buttonText="قم بالدفع الأن" classContainer="mt-0" />
          </>
        )}

        {/* P.O Payment */}
        {activeTab === 2 && (
          <>
            <div className="flex flex-col items-start justify-start gap-6 w-full">
              {/* Section Header */}
              <div className="flex flex-col items-start gap-4 w-full">
                <div className="flex flex-col gap-2 w-full">
                  <p className="text-shadeBlack font-semibold">
                    تفاصيل طريقة الدفع:
                  </p>
                  <hr />
                </div>
              </div>
              {/* FileUploader */}
              <div className="flex flex-col gap-3 w-full">
                <p className="text-shadeBlack font-medium text-sm">
                  أرفق ملف طلب الشراء (P.O)
                </p>
                <FileUpload
                  label=""
                  textClass="text-center items-center"
                  classContainer="w-full flex flex-col items-center justify-center text-center !bg-[#F9F9FA]"
                />
              </div>
              {/* Bank Details */}
              <div className="flex flex-col gap-4 w-full">
                {/* Header with line */}
                <div className="flex flex-col gap-2 w-full">
                  <p className="text-shadeBlack font-bold">
                    بيانات الحساب البنكي:
                  </p>
                  <hr />
                </div>
                {/* Details */}
                <div className="w-full flex flex-col gap-2">
                  <div className="flex items-center gap-4">
                    <div className="flex justify-center items-center">
                      <Image
                        src={"/bank.svg"}
                        alt="bank"
                        width={56}
                        height={56}
                      />
                    </div>
                    <p className="text-shadeBlack font-bold text-[22px]">
                      بنك الرياض
                    </p>
                  </div>
                  {/* Copy Details Section */}
                  <div className="pr-[76px]">
                    <div className="flex flex-col gap-2">
                      {/* Account Number */}
                      <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">رقم الحساب :</p>
                          <p className="font-medium" id="accountNumber">
                            012345678 1001001234 0123
                          </p>
                        </div>
                        <div
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={() => {
                            const accountNumberElement =
                              document.getElementById("accountNumber");
                            if (accountNumberElement) {
                              const accountNumber =
                                accountNumberElement.innerText;
                              navigator.clipboard
                                .writeText(accountNumber)
                                .then(() => {
                                  alert("تم نسخ رقم الحساب بنجاح");
                                });
                            } else {
                              console.error(
                                'Element with ID "accountNumber" not found.'
                              );
                            }
                          }}
                        >
                          <Image
                            src={"/copy.svg"}
                            alt="copy"
                            width={20}
                            height={20}
                          />
                          <button className="text-[#0080CC] text-sm">
                            نسخ النص
                          </button>
                        </div>
                      </div>

                      {/* IBAN Number */}
                      <div className="flex items-center gap-10">
                        <div className="flex items-center gap-2">
                          <p className="font-medium">رقم الIBAN :</p>
                          <p className="font-medium" id="ibanNumber">
                            GB 12 ABCD 102030 12345678
                          </p>
                        </div>
                        <div
                          className="flex items-center gap-2 cursor-pointer"
                          onClick={() => {
                            const ibanNumberElement =
                              document.getElementById("ibanNumber");
                            if (ibanNumberElement) {
                              const ibanNumber = ibanNumberElement.innerText;
                              navigator.clipboard
                                .writeText(ibanNumber)
                                .then(() => {
                                  alert("تم نسخ رقم الIBAN بنجاح");
                                });
                            } else {
                              console.error(
                                'Element with ID "ibanNumber" not found.'
                              );
                            }
                          }}
                        >
                          <Image
                            src={"/copy.svg"}
                            alt="copy"
                            width={20}
                            height={20}
                          />
                          <button className="text-[#0080CC] text-sm">
                            نسخ النص
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Bill Amount Section*/}
      <div className="flex flex-col gap-6 min-w-[352px] items-start shadow-card-shadow bg-white border border-[#C6C7CA] p-6 rounded-lg w-full md:w-auto">
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
              <p>رسوم المسابقة</p>
              <p>5,000 ر.س</p>
            </div>
            <div className="flex justify-between items-center">
              <p>خدمة الكوبونات اللامحدودة</p>
              <p>70,000 ر.س</p>
            </div>
          </div>
          <hr />
          {/* Taxes Details */}
          <div className="flex flex-col gap-[10px]">
            <div className="flex justify-between items-center">
              <p>الإجمالي قبل الضريبة</p>
              <p>75,000 ر.س</p>
            </div>
            <div className="flex justify-between items-center">
              <p>ضريبة القيمة المضافة</p>
              <p>11,250 ر.س</p>
            </div>
          </div>
          <hr />
          {/* Total Bills */}
          <div className="flex justify-between items-center text-shadeBlack font-semibold text-[22px]">
            <p>الإجمالي</p>
            <p>86,250 ر.س</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCompetitionPayment;
