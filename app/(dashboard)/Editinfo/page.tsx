"use client";
import CancelButton from "@/components/SharedComponents/CancelButton";
import PageHeader from "@/components/SharedComponents/PageHeader";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import TextInput from "@/components/SharedComponents/TextInput";
import Image from "next/image";

import React from "react";

const EditInfoPage = () => {
  return (
    <div className="w-full h-full pb-20">

      <PageHeader
        breadcrumbTitle="بيانات الشركة"
        badgeText="تعديل بيانات الشركة"
        mainTitle="تعديل بيانات الشركة"
      />
        <div className="flex items-center w[1104px] h-[314px] gap-[24px] ">
                      <Image
                          src={"/upload[.png"}
                          alt="logo"
                          width={352}
                          height={258}
                          className=" "
                      />
      
      <div className="w-full flex flex-col pt-12 pb-10 gap-4 ">
                <TextInput
                    label="اسم الشركة"
                    type="text"

                />
                <TextInput
                    label="عنوان الشركة"
                    type="text"
                />
               <div className="w-full  gap-10 flex ">
                <TextInput
                    label=" البريد الألكتروني"
                    type="Email"

                />
                <TextInput
                    label="رقم الهاتف"
                    type="phone"
                />
          
            </div>

            </div>
                  </div>
                  <hr />
                    <div className="flex flex-col md:flex-row gap-4 justify-end  ">
                        <CancelButton
                            buttonText=" ألغاء "
                            fullWidth={false}
                            onClick={() => console.log("Clicked!")}
                        />
                        <SubmitButton
                            buttonText="  حفظ التعديلات"
                            fullWidth={false}
                            onClick={() => console.log("Clicked!")}
                        />
                    </div>
    </div>
    
  );
};

export default EditInfoPage;
