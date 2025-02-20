"use client";

import SubmitButton from "@/components/SharedComponents/SubmitButton";
import Image from "next/image";
import React from "react";

export default function SendEmail() {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم إرسال الرسالة بنجاح!");
  };

  return (
    <main className="w-full min-h-screen bg-[#EEEEEF]  md:px-[112px] p-5 md:py-[96px] flex flex-col md:flex-row gap-4 md:gap-10">
      <figure className="w-full md:w-1/2 flex justify-center items-center">
        <Image
          src="/landingPage/Image.png"
          alt="email"
          width={576}
          height={640}
          className=""
        />
      </figure>

      <article className=" lg:w-[480px] h-[612px]   flex flex-col justify-center gap-y-4">
        <h2 className="text-4xl font-bold mb-2">هل لا تزال لديك أسئلة؟</h2>
        <p className="text-gray-600 mb-6">
          سيسعد فريقنا للرد على جميع أسئلتك
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="flex flex-col w-1/2">
              <label htmlFor="firstName" className="text-gray-700 mb-1">
                الاسم الأول
              </label>
              <input
                type="text"
                id="firstName"
                className="border border-gray-300 rounded-md p-2"
                placeholder="First Name"
                required
              />
            </div>
            <div className="flex flex-col w-1/2">
              <label htmlFor="lastName" className="text-gray-700 mb-1">
                الاسم الأخير
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
            <label htmlFor="email" className="text-gray-700 mb-1">
              البريد الإلكتروني
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
            <label htmlFor="message" className="text-gray-700 mb-1">
              اكتب رسالتك
            </label>
            <textarea
              id="message"
              rows={4}
              className="border border-gray-300 rounded-md p-2"
              placeholder="Leave us a message..."
              required
            ></textarea>
          </div>

          <div className="flex items-center gap-4">
            <input type="checkbox" id="sendCopy" className="h-5 w-5" />
            <label htmlFor="sendCopy" className="text-gray-700">
    انت بكل ود توافق علي الشروط والأحكام
            </label>
          </div>
          <SubmitButton
              buttonText="ارسال رسالة "
              classContainer="mt-5"
              />
        </form>
      </article>
    </main>
  );
}
