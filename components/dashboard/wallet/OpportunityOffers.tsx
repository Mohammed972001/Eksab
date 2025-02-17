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
const OpportunityOffers = ({ imageSrc }: pportunityOffersCardProps) => {
    return (

        <div className="flex flex-col gap-5 w-full">
        <h2 className="text-[25px] mt-5">عروض الفرص</h2>
        <hr />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link href="/BuyNewOpportunities">
            <article className="flex flex-col sm:flex-row gap-4 items-center p-4 rounded-lg bg-white shadow-card-shadow cursor-pointer">
              <figure className="flex justify-center items-center border-2 border-[#EBEDF0] rounded-2xl w-full sm:w-[300px] h-[190px]">
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
                    اشتري الباقة المميزة واحصل علي 5,000 فرصة إضافية مجاناً....
                  </h1>
                </header>
                <p>
                  عند شراء الباقة المميزة بسعر 100 ريال، ستحصل على 5,000 كوبون إضافي مجانًا لزيادة فرصك في السحب!
                </p>
                <div className="flex gap-3 items-center">
                  <p className="text-2xl text-[#C22221]">105,000 فرصه</p>
                  <p>100,000 فرصه</p>
                </div>
                <footer className="w-full">
                  <p className="text-2xl font-semibold">30,000.00 ر.س</p>
                </footer>
              </div>
            </article>
          </Link>
      
          <Link href="/BuyNewOpportunities">
            <article className="flex flex-col sm:flex-row gap-4 items-center p-4 rounded-lg bg-white shadow-card-shadow cursor-pointer">
              <figure className="flex justify-center items-center border-2 border-[#EBEDF0] rounded-2xl w-full sm:w-[300px] h-[190px]">
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
                    اشتري الباقة المميزة واحصل علي 5,000 فرصة إضافية مجاناً....
                  </h1>
                </header>
                <p>
                  عند شراء الباقة المميزة بسعر 100 ريال، ستحصل على 5,000 كوبون إضافي مجانًا لزيادة فرصك في السحب!
                </p>
                <div className="flex gap-3 items-center">
                  <p className="text-2xl text-[#C22221]">105,000 فرصه</p>
                  <p>100,000 فرصه</p>
                </div>
                <footer className="w-full">
                  <p className="text-2xl font-semibold">30,000.00 ر.س</p>
                </footer>
              </div>
            </article>
          </Link>
        </div>
      </div>
      
    );
};

export default OpportunityOffers;
