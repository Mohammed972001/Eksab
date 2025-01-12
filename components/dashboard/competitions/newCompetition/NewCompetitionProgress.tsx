import React from "react";

interface NewCompetitionProgressProps {
  steps: string[]; // Array of step names
  activeStep: number; // Index of the currently active step
  containerClass?: string;
}

const NewCompetitionProgress: React.FC<NewCompetitionProgressProps> = ({
  steps,
  activeStep,
  containerClass,
}) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 py-6 gap-4 ${containerClass}`}
    >
      {steps.map((step, index) => (
        <div
          key={index}
          className="flex flex-col items-start justify-center gap-3"
        >
          <div
            className={`border-t-[4px] w-full ${
              index <= activeStep ? "border-primary" : "border-[#C6C7CA]"
            }`}
          />
          <div
            className={`text-sm font-semibold ${
              index <= activeStep ? "text-primary" : "text-shadeGray"
            }`}
          >
            {step}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewCompetitionProgress;
