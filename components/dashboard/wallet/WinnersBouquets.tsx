import { Card } from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "next/link";
interface pportunityOffersCardProps {
    id: string;
    status: string;
    statusColor: string;
    title: string;

    imageSrc: string | null;
    onClick: () => void;
}
const WinnersBouquets = ({ imageSrc }: pportunityOffersCardProps) => {
    return (

        <div className="flex flex-col gap-[20px] w-full">
            <h2 className=" text-[25px]  mt-5"> باقات الفائز </h2>
            <hr />
            <div className=" w-full grid grid-cols-4 gap-x-6" >
                <Link href="/Opportunitydetails">
                    <article className="flex flex-col  gap-4 items-center p-4 rounded-lg bg-white shadow-card-shadow cursor-pointer">
                        <figure className="flex justify-center items-center border-2 border-[#EBEDF0] rounded-2xl w-full sm:w-[226px] h-[156px]">
                            {imageSrc ? (
                                <div className="size-12 flex justify-center items-center rounded-lg">
                                    <Image
                                        src="dashboard/competitions/placeholderImg.svg"
                                        alt=""
                                        width={50}
                                        height={50}
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <Image
                                    src="/dashboard/competitions/placeholderImg.svg"
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="object-cover"
                                />
                            )}
                        </figure>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <header>
                                <h1 className="text-[25px] font-semibold">
                                    الباقة الأساسية                  </h1>
                            </header>
                            <p>
                                الدخول في السحب علي جوائز محدودة مع فرصة واحدة للفوز
                            </p>
                            <div className="flex gap-5 items-center">

                                <p>100,000 فرصه</p>
                                <p className="text-xl text-[#3454B4] font-semibold">70.500 ر.س</p>

                            </div>
                        </div>
                    </article>
                </Link>
                <Link href="/Opportunitydetails">
                    <article className="flex flex-col  gap-4 items-center p-4 rounded-lg bg-white shadow-card-shadow cursor-pointer">
                        <figure className="flex justify-center items-center border-2 border-[#EBEDF0] rounded-2xl w-full sm:w-[226px] h-[156px]">
                            {imageSrc ? (
                                <div className="size-12 flex justify-center items-center rounded-lg">
                                    <Image
                                        src="dashboard/competitions/placeholderImg.svg"
                                        alt=""
                                        width={50}
                                        height={50}
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <Image
                                    src="/dashboard/competitions/placeholderImg.svg"
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="object-cover"
                                />
                            )}
                        </figure>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <header>
                                <h1 className="text-[25px] font-semibold">
                                    الباقة المميزة                  </h1>
                            </header>
                            <p>
                                الدخول في السحب علي جوائز محدودة مع فرصة واحدة للفوز
                            </p>
                            <div className="flex gap-5 items-center">

                                <p>100,000 فرصه</p>
                                <p className="text-xl text-[#3454B4] font-semibold">70.500 ر.س</p>

                            </div>
                        </div>
                    </article>
                </Link>
                <Link href="/Opportunitydetails">
                    <article className="flex flex-col  gap-4 items-center p-4 rounded-lg bg-white shadow-card-shadow cursor-pointer">
                        <figure className="flex justify-center items-center border-2 border-[#EBEDF0] rounded-2xl w-full sm:w-[226px] h-[156px]">
                            {imageSrc ? (
                                <div className="size-12 flex justify-center items-center rounded-lg">
                                    <Image
                                        src="dashboard/competitions/placeholderImg.svg"
                                        alt=""
                                        width={50}
                                        height={50}
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <Image
                                    src="/dashboard/competitions/placeholderImg.svg"
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="object-cover"
                                />
                            )}
                        </figure>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <header>
                                <h1 className="text-[25px] font-semibold">
                                    الباقة المتوسطة                  </h1>
                            </header>
                            <p>
                                الدخول في السحب علي جوائز محدودة مع فرصة واحدة للفوز
                            </p>
                            <div className="flex gap-5 items-center">

                                <p>100,000 فرصه</p>
                                <p className="text-xl text-[#3454B4] font-semibold">70.500 ر.س</p>

                            </div>
                        </div>
                    </article>
                </Link>
                <Link href="/Opportunitydetails">
                    <article className="flex flex-col  gap-4 items-center p-4 rounded-lg bg-white shadow-card-shadow cursor-pointer">
                        <figure className="flex justify-center items-center border-2 border-[#EBEDF0] rounded-2xl w-full sm:w-[226px] h-[200px]">
                            {imageSrc ? (
                                <div className="size-12 flex justify-center items-center rounded-lg">
                                    <Image
                                        src="dashboard/competitions/placeholderImg.svg"
                                        alt=""
                                        width={50}
                                        height={50}
                                        className="object-cover"
                                    />
                                </div>
                            ) : (
                                <Image
                                    src="/dashboard/competitions/placeholderImg.svg"
                                    alt=""
                                    width={50}
                                    height={50}
                                    className="object-cover"
                                />
                            )}
                        </figure>
                        <div className="flex flex-col justify-start items-start gap-2">
                            <header>
                                <h1 className="text-[25px] font-semibold">
                                    الباقة المخصصة                  </h1>
                            </header>
                            <p>
                                الدخول في السحب بناءُ علي عدد الكوبونات المشتراه
                            </p>
                           
                        </div>
                    </article>
                </Link>


            </div>
        </div>
    );
};

export default WinnersBouquets;
