"use client";
import { useState } from "react";
import Image from "next/image";

interface FAQItemProps {
  answer: string;
  question: string;
  isFirst?: boolean;
}

const FAQItem = ({ question, answer, isFirst = false }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex justify-between items-center min-w-[320px] w-full pt-8 ${
        !isFirst && "border-t border-[#E4E7EC]"
      }`}
    >
      <div className="flex flex-col gap-2">
        <p
          className={`text-[${
            isOpen ? "#3454B4" : "shadeGray"
          }] text-lg md:text-[22px]`}
        >
          {question}
        </p>
        {isOpen && <p className="text-[#0D152D]">{answer}</p>}
      </div>
      <Image
        src={isOpen ? "/HomePage/minusIcon.svg" : "/HomePage/plusIcon.svg"}
        alt={isOpen ? "hide" : "show"}
        width={20}
        height={20}
        className="cursor-pointer"
        onClick={toggleOpen}
      />
    </div>
  );
};

export default FAQItem;