import React from "react";
import { BiChevronDown } from "react-icons/bi";

interface FilterButtonProps {
  continerclassname?: string;
  buttonText: string;
  onClick?: () => void;
}

const FilterButton = ({ buttonText, continerclassname = "" }: FilterButtonProps) => {
  return (
    <div className={`${continerclassname} border border-black rounded-[99px] bg-white flex items-center justify-start gap-2 cursor-pointer px-2 py-2 md:px-6 md:py-[10px]`}>
      <p className="text-shadeGray font-medium text-[12px] md:text-base text-nowrap text-right">
        {buttonText}
      </p>
      <BiChevronDown size={20} />
    </div>
  );
};

export default FilterButton;
