import DetailsPaymentInfo from "@/components/dashboard/competitions/competitionDetails/DetailsPaymentInfo";
import DetailsInvoiceValue from "@/components/SharedComponents/InvoiceValue";
import PageHeader from "@/components/SharedComponents/PageHeader";
import Image from "next/image";

const Page: React.FC = () => {
    return (
        <div className="w-full h-full pb-20">
            <PageHeader
                mainTitle="تفاصيل الفرصة"
                breadcrumbTitle="محفظة الفرص"
                badgeText="تفاصيل الفرص"
            />
            <div className="w-full h-full pt-10 flex gap-5">
                <div className="flex items-center w[728px] h-[240px] gap-[24px] p-[24px] border rounded-xl bg-white ">
                    <div className="w-[320px]">
                        <Image
                            src={"/Placeholder Alt..png"}
                            alt="calendar"
                            width={290}
                            height={200}
                            className="  rounded-[10px]"
                        />
                    </div>
                    <div className="flex flex-col space-y-3  ">
                        <span className="bg-[#D6F5D6] border border-[#ADEBAD] w-[83px] px-1 py- rounded-[8px] text-[14px] ">

                            <p> عروض فرصة</p>
                        </span>

                        <h1 className="font-semibold text-[24px] text-shadeBlack">شارك وأربح معنا في مسابقة العام الجديد من شركة قوافل وادخل السحب على جوائز قيمة</h1>


                        <div className="flex items-center text-sm gap-24 pt-5">
                            <div className="flex flex-col items-center ">
                                <div className="flex gap-2">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.167 8.33332H1.16699M12.0003 1.66666V4.99999M5.33366 1.66666V4.99999M5.16699 18.3333H12.167C13.5671 18.3333 14.2672 18.3333 14.802 18.0608C15.2724 17.8212 15.6548 17.4387 15.8945 16.9683C16.167 16.4335 16.167 15.7335 16.167 14.3333V7.33332C16.167 5.93319 16.167 5.23313 15.8945 4.69835C15.6548 4.22794 15.2724 3.84549 14.802 3.60581C14.2672 3.33332 13.5671 3.33332 12.167 3.33332H5.16699C3.76686 3.33332 3.0668 3.33332 2.53202 3.60581C2.06161 3.84549 1.67916 4.22794 1.43948 4.69835C1.16699 5.23313 1.16699 5.93319 1.16699 7.33332V14.3333C1.16699 15.7335 1.16699 16.4335 1.43948 16.9683C1.67916 17.4387 2.06161 17.8212 2.53202 18.0608C3.0668 18.3333 3.76686 18.3333 5.16699 18.3333Z" stroke="#70737A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <h2>عدد فرص الباقة </h2>
                                </div>
                                <span className="  pr-8">15 جائزة</span>
                            </div>


                            <div className="flex flex-col items-center ">
                                <div className="flex gap-2">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16.167 8.33332H1.16699M12.0003 1.66666V4.99999M5.33366 1.66666V4.99999M5.16699 18.3333H12.167C13.5671 18.3333 14.2672 18.3333 14.802 18.0608C15.2724 17.8212 15.6548 17.4387 15.8945 16.9683C16.167 16.4335 16.167 15.7335 16.167 14.3333V7.33332C16.167 5.93319 16.167 5.23313 15.8945 4.69835C15.6548 4.22794 15.2724 3.84549 14.802 3.60581C14.2672 3.33332 13.5671 3.33332 12.167 3.33332H5.16699C3.76686 3.33332 3.0668 3.33332 2.53202 3.60581C2.06161 3.84549 1.67916 4.22794 1.43948 4.69835C1.16699 5.23313 1.16699 5.93319 1.16699 7.33332V14.3333C1.16699 15.7335 1.16699 16.4335 1.43948 16.9683C1.67916 17.4387 2.06161 17.8212 2.53202 18.0608C3.0668 18.3333 3.76686 18.3333 5.16699 18.3333Z" stroke="#70737A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <h2>فرص العرض </h2>
                                </div>
                                <span className=""> الرياض</span>
                            </div>


                            <div className="flex flex-col items-center ">
                                <div className="flex gap-2">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.99935 5V10L13.3327 11.6667M18.3327 10C18.3327 14.6024 14.6017 18.3333 9.99935 18.3333C5.39698 18.3333 1.66602 14.6024 1.66602 10C1.66602 5.39762 5.39698 1.66666 9.99935 1.66666C14.6017 1.66666 18.3327 5.39762 18.3327 10Z" stroke="#70737A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>

                                    <h2> أجمالي الفرص </h2>
                                </div>
                                <span className="">الرياض</span>
                            </div>

                        </div>

                    </div>
                </div>
                <DetailsInvoiceValue/>
            </div>

            
        </div>
    );
};

export default Page;
