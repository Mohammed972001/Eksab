import React, { useState } from "react";
import TextInput from "@/components/SharedComponents/TextInput";
import SubmitButton from "@/components/SharedComponents/SubmitButton";

interface Answer {
  text: string;
  isCorrect: boolean;
}

interface Question {
  question: string;
  answers: Answer[];
}

interface NewCompetitionQuestionAndAnswerProps {
  isInputDisabled: boolean;
}

const NewCompetitionQuestionAndAnswer: React.FC<NewCompetitionQuestionAndAnswerProps> = ({
  isInputDisabled,
}) => {
  const [questions, setQuestions] = useState<Question[]>([
    {
      question: "",
      answers: [
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
      ],
    },
  ]);

  const handleQuestionChange = (qIndex: number, value: string) => {
    setQuestions((prev) => {
      const updated = [...prev];
      updated[qIndex].question = value;
      return updated;
    });
  };

  const handleAnswerCheckboxChange = (qIndex: number, aIndex: number) => {
    setQuestions((prev) => {
      return prev.map((q, index) => {
        if (index === qIndex) {
          return {
            ...q,
            answers: q.answers.map((ans, i) => ({
              ...ans,
              isCorrect: i === aIndex,
            })),
          };
        }
        return q;
      });
    });
  };

  const handleAnswerTextChange = (qIndex: number, aIndex: number, value: string) => {
    setQuestions((prev) => {
      const updated = [...prev];
      updated[qIndex].answers[aIndex].text = value;
      return updated;
    });
  };

  const addNewQuestion = () => {
    setQuestions((prev) => [
      ...prev,
      {
        question: "",
        answers: [
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
        ],
      },
    ]);
  };

  return (
    <div className="pt-2 flex flex-col gap-6 w-full lg:w-[95%] xl:w-full">
      <div className="flex flex-col gap-4 w-full">
        <p className="text-shadeBlack font-semibold text-[22px]">الأسئلة والإجابات</p>
        <hr />

        {questions.map((q, qIndex) => (
          <div key={qIndex} className="flex flex-col gap-4  p-4 rounded-md">
            <TextInput
              label={`السؤال ${qIndex + 1}`}
              type="text"
              value={q.question}
              onChange={(e) => handleQuestionChange(qIndex, e.target.value)}
              disabled={isInputDisabled}
            />
            <div className="grid grid-cols-3 w-full gap-4">
              {q.answers.map((answer, aIndex) => (
                <div key={aIndex} className="flex flex-col items-center gap-2">
                  <div className="flex items-center gap-2 w-full">
                    <label className="relative w-[18px] h-[18px] cursor-pointer">
                      <input
                        type="checkbox"
                        checked={answer.isCorrect}
                        onChange={() => handleAnswerCheckboxChange(qIndex, aIndex)}
                        disabled={isInputDisabled}
                        className="peer absolute w-full h-full appearance-none"
                      />
                      <div className="w-full h-full border-2 border-gray-400 rounded-full transition-colors duration-200 
                          peer-checked:border-blue-500"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                          w-[9px] h-[9px] rounded-full bg-transparent transition-all duration-200
                          peer-checked:bg-blue-500"></div>
                    </label>
                    <TextInput
                      label={`الإجابة ${aIndex + 1}`}
                      type="text"
                      value={answer.text}
                      onChange={(e) => handleAnswerTextChange(qIndex, aIndex, e.target.value)}
                      disabled={isInputDisabled}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <hr />

        <SubmitButton
          buttonText="إضافة سؤال جديد"
          classContainer=" !bg-[#F9F9FA] text-[#3454B4] !border-2 !border-[#70737A]"
          onClick={addNewQuestion}
          rightIcon="/public/dashboard/add.svg"
        />
      </div>
    </div>
  );
};

export default NewCompetitionQuestionAndAnswer;
