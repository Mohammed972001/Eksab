
import React from "react";
import SubmitButton from "@/components/SharedComponents/SubmitButton"; 
import Image from "next/image";
const HeroSection = () => {
  return (
    <main className=" w-full min-h-screen flex pt-20 ">
        <article className=" w-[50%] h-full py-40 flex flex-col  space-y-4 pr-28    ">

            <h1 className="text-6xl text-cente">أنشئ مسابقاتك الآن بسهولة وابدأ التحدي!</h1>
            <p className="text-xl pt-4">قم بإنشاء مسابقات تفاعلية بجميع الأنواع، سواء كانت تعليمية، ترفيهية أو تنافسية، واستمتع بتجربة فريدة في عالم التحديات! انضم إلى الآلاف من المستخدمين الذين يستمتعون بصنع مسابقات إبداعية وجذابة.</p>
            <div className="flex justify-between gap-5 pl-64 ">
              <SubmitButton
              buttonText="ابدء الان "
              />
               <SubmitButton
              buttonText=" تحميل التطبيق "
              classContainer=" !bg-[#F9F9FA] text-[#434549]"
              />
            </div >
            </article>
             <figure className=" w-[50%] h-full  ">
                <Image src="/landingPage/Hero section.png" 
                alt="hero" 
                className="mr-16" 
                width={688}
                height={770} />
                
             </figure>
  
  </main>
  );
};

export default HeroSection;
