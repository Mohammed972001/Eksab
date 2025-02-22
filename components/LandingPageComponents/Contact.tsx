import Image from "next/image";
import React from "react";
import SubmitButton from "../SharedComponents/SubmitButton";

const Contact = () => {
  return (
    <div className="px-4 py-[64px] lg:py-[96px] xl:px-[122px] bg-[#EEEEEF]">
      <div className="flex flex-col lg:flex-row gap-16">
        <div>
          <Image
            src={"/HomePage/contactImg.svg"}
            alt="contact"
            width={576}
            height={640}
            className="w-full lg:w-fit"
          />
        </div>
        {/* Contact Form */}
        <div className="flex flex-col gap-8 xl:gap-12 flex-1 sm:min-w-[480px]">
          <div className="flex flex-col gap-[20px]">
            <p className="text-[#101828] text-[24px] xl:text-[32px] font-bold">
              هل لا تزال لديك أسئلة؟
            </p>
            <p className="text-[#475467] text-base xl:text-lg">
              سيحب فريقنا الودود أن يسمع منك.
            </p>
          </div>
          {/* Form */}
          <form className="flex flex-col gap-8 lg:my-[14px]">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <div className="flex flex-col w-full">
                <label htmlFor="firstName" className="text-shadeGray mb-1">
                  الاسم الأول*
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="border border-gray-300 rounded-md p-2"
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="flex flex-col w-full">
                <label htmlFor="lastName" className="text-shadeGray mb-1">
                  الاسم الأخير*
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="border border-gray-300 rounded-md p-2"
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="text-shadeGray mb-1">
                البريد الإلكتروني*
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-md p-2"
                placeholder="you@company.com"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="text-shadeGray mb-1">
                الرسالة*
              </label>
              <textarea
                dir="ltr"
                id="message"
                rows={4}
                className="border border-gray-300 rounded-md p-2"
                placeholder="Leave us a message..."
                required
              ></textarea>
            </div>

            <div className="flex items-center gap-4">
              <input type="checkbox" id="sendCopy" className="h-5 w-5" />
              <label
                htmlFor="sendCopy"
                className="text-shadeGray flex items-center gap-1 sm:gap-2"
              >
                انت بكل ود توافق علي
                <span className="underline cursor-pointer">
                  الشروط والأحكام
                </span>
              </label>
            </div>
            <SubmitButton buttonText="ارسال الرسالة" classContainer="mt-0"/>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
