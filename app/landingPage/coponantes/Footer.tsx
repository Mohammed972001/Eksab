
import React from "react";
import Image from "next/image";
import SubmitButton from "@/components/SharedComponents/SubmitButton";

export default function Footeer() {
  return (
    <footer className="bg-[#171718] text-white pt-8 pb-4 px-40">
     
      <div className="container   flex flex-col md:flex-row md:justify-between  ">
        <div className="flex flex-col items-start w-[65%] gap-y-6  ">

        <div className="mt-8">
          <Image
            src="/landingPage/Logomark.svg"
            alt="eksab logo"
            width={104}
            height={48}
            className="object-contain"
          />
        </div>


        <div className="">
          <ul className="flex flex-col md:flex-row md:gap-6 text-center">
            <li>
              <a href="#" className="hover:text-gray-300">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                خدماتنا
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                أنواع المسابقات
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                إستفسارات
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                تواصل معنا
              </a>
            </li>
          </ul>
        </div>
        </div>
        
        <div className=" ">
          <h2 className="text-xl  ">ابقي على اطلاع</h2>
          <div className="flex items-center  gap-2">
            <input
              type="email"
              placeholder="أدخل البريد الإلكتروني"
              className="px-3 py-2 rounded-md text-black focus:outline-none mt-6"
            />
               <SubmitButton
              buttonText=" اشترك "
              classContainer="py-0 px-4"
              />
          </div>
        </div>


     
      </div>

    
      <div className="border-t border-gray-600 mt-8 pt-4">
      
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center md:justify-between text-sm text-gray-400">
          <p className="mb-2 md:mb-0">
            © 2025 جميع الحقوق محفوظة لمنصة إكساب
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300">
              الشروط والأحكام
            </a>
            <a href="#" className="hover:text-gray-300">
              سياسة الخصوصية
            </a>
            <a href="#" className="hover:text-gray-300">
              كوكيز
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
