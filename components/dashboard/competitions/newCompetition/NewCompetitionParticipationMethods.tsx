import React from "react";

interface NewCompetitionParticipationMethodsProps {
  label: string;
  placeholder: string;
  dir: string;
}

const NewCompetitionParticipationMethods = ({
  label,
  placeholder,
  dir = "rtl",
}: NewCompetitionParticipationMethodsProps) => {
  return (
    <div className="flex flex-col items-start gap-6 w-full">
      <div className="flex flex-col items-start gap-4 w-full">
        <p className="text-shadeBlack text-[22px] font-semibold">{label}</p>
        <hr className="w-full" />
      </div>
      <div className="w-full">
        <textarea
          dir={dir}
          placeholder={placeholder}
          className={`w-full border border-gray-300 rounded px-4 py-2 ${
            dir === "ltr" ? "text-left" : "text-right"
          } text-shadeGray`}
          rows={6}
        ></textarea>
      </div>
    </div>
  );
};

export default NewCompetitionParticipationMethods;
