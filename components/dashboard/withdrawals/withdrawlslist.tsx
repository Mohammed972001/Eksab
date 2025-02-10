"use client";

import React from "react";

interface WithdrawLslist {
  no: number;
  name: string;
  location: string;
  draws: number;
  prizes: number;
  drawDate: string;
  status: string;
}

interface WithdrawLslistProps {
  WithdrawLslist: WithdrawLslist[];
}


const WithdrawLslist: React.FC<WithdrawLslistProps> = ({ WithdrawLslist }) => {
  return (
    <div className="mt-6 flex flex-col gap-4 items-start w-full overflow-x-auto">
      <div className="flex flex-col gap-4 w-full">
        <p className="text-[#101828] text-[22px] font-semibold">قائمة المسابقات</p>
        <hr />
      </div>
      <table className="border-collapse table-fixed w-full min-w-[1024px]">
        <thead>
          <tr className="bg-[#E9E9EA]">
            {[
              "No.",
              "اسم المسابقة",
              "مكان المسابقة",
              "عدد السحوبات",
              "عدد الجوائز",
              "تاريخ السحب",
              "حالة المسابقة",
            ].map((header, idx) => (
              <th
                key={idx}
                className={`px-6 py-3 text-[12px] text-shadeGray ${
                  idx === 0 || idx >= 3 ? "text-center" : "text-right"
                } border-b border-[#C6C7CA]`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {WithdrawLslist.map((WithdrawLslist, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-[#F9F9FA]"
              } border-b border-[#C6C7CA]`}
            >
              <td className="px-6 py-6 text-center">{String(WithdrawLslist.no).padStart(2, "0")}</td>
              <td className="px-6 text-right">{WithdrawLslist.name}</td>
              <td className="px-6 text-right">{WithdrawLslist.location}</td>
              <td className="px-6 text-center">{WithdrawLslist.draws}</td>
              <td className="px-6 text-center">{WithdrawLslist.prizes}</td>
              <td className="px-6 text-center">{WithdrawLslist.drawDate}</td>
              <td className="px-6 text-center">
                <span
                  className={`px-4 py-1 rounded-full text-[12px] font-semibold ${
                    WithdrawLslist.status === "تم التسليم"
                      ? "bg-[#E0EAFF] text-[#0066FF]"
                      : "bg-[#D1FADF] text-[#027A48]"
                  }`}
                >
                  {WithdrawLslist.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WithdrawLslist;
