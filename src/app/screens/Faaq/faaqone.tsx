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
        "Ensures you're compensated if the airline mishandles your checked baggage, offering peace of mind during your travels.",
    },
    {
      question: "Loss of Passport",
      subtitle: "$300 No deductible",
      answer:
        "Covers the cost of getting a duplicate passport or travel documents during the trip if the same gets lost due to unforseen events",
    },
    {
      question: "Delay in Checked-in Baggage",
      subtitle: "$100 Deductible: 10 hrs for abroad/10 hrs for india",
      answer:
        "Pays for essentials or emergency purchase that insured person needs to buy if the airline delays the check-in baggage",
    },
    {
      question: "Personal Liability",
      subtitle: "$100,000 No deductible",
      answer:
        "This specific benefit helps in covering any unintentionally injury or damage where the travelling person becomes liable to compensate the third party as per the damage/loss incurred.",
    },
    {
      question: "Loss of Driving license",
      subtitle: "Covered in loss of passport No deductible",
      answer:
        "Covers the cost of getting a duplicate international driving license during the trip",
    },
    // Add more FAQ items here if needed
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

export default FaaqOne;
