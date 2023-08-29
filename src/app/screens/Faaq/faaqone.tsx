import React, { useState } from "react";
import FaqCard from "./FaqCard";

interface FaqItem {
  question: string;
  subtitle: string; // Added subtitle
  answer: string;
}

const FaaqOne: React.FC = () => {
  const [open, setOpened] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (open === index) {
      return setOpened(null);
    }
    setOpened(index);
  };

  const data: FaqItem[] = [
    {
      question: "Baggage Loss",
      subtitle: "$500 No deductible",
      answer:
        "Compensates you if the airlines loses your check-in bag",
    },
    {
      question: "Baggage Loss",
      subtitle: "$500 No deductible",
      answer:
        "Compensates you if the airlines loses your check-in bag",
    },
    {
      question: "Baggage Loss",
      subtitle: "$500 No deductible",
      answer:
        "Compensates you if the airlines loses your check-in bag",
    },
    {
      question: "Baggage Loss",
      subtitle: "$500 No deductible",
      answer:
        "Compensates you if the airlines loses your check-in bag",
    },
    {
      question: "Baggage Loss",
      subtitle: "$500 No deductible",
      answer:
        "Compensates you if the airlines loses your check-in bag",
    },
    // Add more FAQ items here if needed
  ];

  return (
    <>
      <div className="h-full">
        <div className=" mx-auto w-full  max-w-7xl">
        
     
          <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
            {data.map((item, index) => (
              <FaqCard
                key={index}
                open={index === open}
                title={item.question}
                subtitle={item.subtitle} // Pass the subtitle
                desc={item.answer}
                toggle={() => toggle(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaaqOne;
