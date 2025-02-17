"use client";
import React, { useState } from "react";
import PageHeader from "@/components/SharedComponents/PageHeader";
import BuyOpportunitiesTaps from "@/components/dashboard/wallet/BuyOpportunitiesTaps";
import BuyOpportunitiesTerms from "@/components/dashboard/wallet/BuyOpportunitiesTerms";
import NewCompetitionPayment from "@/components/dashboard/competitions/newCompetition/NewCompetitionPayment";
import CancelButton from "@/components/SharedComponents/CancelButton";
import SubmitButton from "@/components/SharedComponents/SubmitButton";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>("info");
   const router = useRouter();

    const handleCancel = () => {
      router.push("/wallet"); 
    };

    const handleNext = () => {
        if (activeTab === "info") {
            setActiveTab("pay");
        } else if (activeTab === "pay"){
            router.push("/BuyNewOpportunities/Reviewhand")
        }
    };


    return (
        <div className="w-full h-full pb-20">
            <PageHeader
                mainTitle="شراء فرصة جديدة"
                breadcrumbTitle="محفظة الفرص"
                badgeText="شراء فرصة جديدة"
            />


            <BuyOpportunitiesTaps activeTab={activeTab} switchTab={setActiveTab} />

            {activeTab === "info" && <BuyOpportunitiesTerms />}
            {activeTab === "pay" && <NewCompetitionPayment />}

            {activeTab==="info"&&
                <div className="flex flex-col md:flex-row gap-4 justify-end mt-6">
                    <CancelButton
                        buttonText="إلغاء"
                        fullWidth={false}
                        onClick={handleCancel}
                    />
                    <SubmitButton
                        buttonText="الخطوة التالية"
                        fullWidth={false}
                        onClick={handleNext}
                    />
                </div>}
                {activeTab==="pay"&&
         <div className="mt-6">
            <hr />
                <div className="flex flex-col md:flex-row  justify-between ">
               
                
                    <CancelButton
                        buttonText="الحطوة السابقة"
                        fullWidth={false}
                        onClick={() => setActiveTab("info")}
                        
                    />
                    <SubmitButton
                        buttonText="أرسال طلب "
                        fullWidth={false}
                        onClick={handleNext}
                        classContainer="px-20"
                    />
                </div>
                
                </div>
                }



        </div>
    );
};

export default Page;
