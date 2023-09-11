import React, { useState } from "react";
import FaqCard from "./FaqCard";

interface FaqItem {
  question: string;
  subtitle: string; // Added subtitle
  answer: string;
}

const FaaqTwo: React.FC = () => {
  const [open, setOpened] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (open === index) {
      return setOpened(null);
    }
    setOpened(index);
  };

  const data: FaqItem[] = [
    {
      question: "Medical Expenses",
      subtitle: "$100,000 Deductible: $100",
      answer:
        "Covers unplanned and emergency medical expenses for the treatment of any illness or injuries that can occur while travelling abroad",
    },
    {
      question: "Dental Treatment",
      subtitle: "$500 Deductible: $25",
      answer:
        "Covers unplanned and emergency medical expenses for the treatment of any illness or injuries that can occur while travelling abroad",
    },
    {
      question: "Personal Accident",
      subtitle: "$12,000 No deductible",
      answer:
        "Fingers Crossed you never need this. This will offer financial support in case of an accidental death or disability during the trip.",
    },
    {
      question: "Medical Evacuation ",
      subtitle: "Part of medical expenses No deductible",
      answer:
        "This benefit covers expenses incurred in making arrangements to transport insured to a medical facility or back home if necessary",
    },

    {
      question: "Financial Emergency Assistance",
      subtitle: "$1,000 No deductible",
      answer:
        "Offers $1,000 coverage for financial emergency assistance with no deductible.",
    },

    {
      question: "Common Carrier Accidental Death",
      subtitle: "$6,000 No deductible",
      answer:
        "Covers Common Carrier Accidental Death with a $6,000 benefit and no deductible.",
    },
  ];

  return (
    <>
      <div>
        <div className="w-full">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-2">
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

export default FaaqTwo;
