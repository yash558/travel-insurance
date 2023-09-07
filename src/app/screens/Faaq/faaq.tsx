import React, { useState } from "react";
import FaqCard from "./FaqCard";

interface FaqItem {
  question: string;
  subtitle: string; // Added subtitle
  answer: string;
}

const Faaq: React.FC = () => {
  const [open, setOpened] = useState<number | null>(null);

  const toggle = (index: number) => {
    if (open === index) {
      return setOpened(null);
    }
    setOpened(index);
  };

  const data: FaqItem[] = [
    {
      question: "Trip Cancellation ",
      subtitle: "$1,500 No deductible",
      answer:
        "Pays for your prepaid, non-refundable expenses if the trip gets canceled due to serious illness, injury, extreme weather, or an accident among other reasons",
    },
    {
      question: "Trip Delay",
      subtitle: "Not covered",
      answer:
        "Compensates the insured for essential expenses if the flight is delayed due to reasons beyond your control.",
    },
    {
      question: "Missed Connection",
      subtitle: "$300 No deductible",
      answer:
        "Covers the costs of your unplanned expenses if you miss the connecting flight.",
    },
    {
      question: "Hijacking Benefits",
      subtitle: "$3,000 No deductible",
      answer:
        "COffers financial support in case if your flight or ship is hijacked when travelling abroad",
    },
    {
      question: "Upgradation to Business Class",
      subtitle: " Not covered",
      answer:
        "Covers the cost of upgrading your return ticket to business class if you get injured on the trip",
    },
    {
      question: "Trip Interruptions",
      subtitle: "$750 No deductible",
      answer:
        "Covers unplanned expenses if you need to return suddenly due to the death or hospitalization of a family member, bankruptcy or an airline carrier strike etc.",
    },
    // Add more FAQ items here if needed
  ];

  return (
    <>
      <div className="h-full m-4">
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

export default Faaq;
