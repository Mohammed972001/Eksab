import React from "react";
import { BiChevronDown } from "react-icons/bi";

interface FilterButtonProps {
  buttonText: string;
}

const FilterButton = ({ buttonText }: FilterButtonProps) => {
  return (
    <div className="border border-black rounded-[99px] bg-white flex items-center justify-center gap-2 px-6 py-[10px]">
      <p className="text-shadeGray font-medium text-base text-nowrap">
        {buttonText}
      </p>
      <BiChevronDown size={20} />
    </div>
  );
};

export default FilterButton;
