import React from "react";

interface Bill {
  date: string;
  description: string;
  amount: string;
  remaining: string;
}

interface BillsListProps {
  bills: Bill[];
}

const BillsList: React.FC<BillsListProps> = ({ bills }) => {
  return (
    <div className="mt-6 flex flex-col gap-4 items-start w-full">
      <div className="flex flex-col gap-4 w-full">
        <p className="text-[#101828] text-[22px] font-semibold">
          قائمة الفواتير
        </p>
        <hr />
      </div>
      <table className="w-full border-collapse table-fixed">
        <thead>
          <tr className="bg-[#E9E9EA]">
            {[".No", "التاريخ", "الوصف", "قيمة الفاتورة", "المتبقي"].map(
              (header, idx) => (
                <th
                  key={idx}
                  className={`px-6 py-3 text-[12px] text-shadeGray ${
                    idx === 0 || idx === 3 || idx === 4
                      ? "text-center"
                      : "text-right"
                  } ${idx === 2 ? "w-[480px]" : ""} border-b border-[#C6C7CA]`}
                >
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {bills.map((bill, index) => (
            <tr
              key={index}
              className={`${
                index % 2 === 0 ? "bg-white" : "bg-[#F9F9FA]"
              } border-b border-[#C6C7CA]`}
            >
              <td className="px-6 py-6 text-center">
                {String(index + 1).padStart(2, "0")}
              </td>
              <td className="px-6 text-right">{bill.date}</td>
              <td className="px-6 text-right">{bill.description}</td>
              <td className="px-6 text-center">{bill.amount}</td>
              <td className="px-6 text-center">
                <button className="underline text-[#0080CC]">
                  استعراض الفاتورة
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BillsList;
