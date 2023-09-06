import React from "react";

const Indicators = ({ step }: { step: number }) => {
  const steps = [1, 2, 3, 4, 5];

  const titles = [
    "Destinations",
    "Trip date",
    "Travellers",
    "Medical History",
    "Contact Details",
  ];

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="flex relative justify-between items-center w-[80%] mobile:w-full font-bold text-lg">
        <div className="w-full z-[-1] absolute h-[2px] bg-black bg-opacity-75" />
        {steps.map((item, i) => (
          <div key={i} className="relative">
            <div>
              <span
                className={`text-secondary w-[100%] absolute mt-[-25px] ms-[-8px] ${
                  i % 2 === 0 ? "flex" : "hidden"
                } md:text-sm text-xs`}
              >
                {titles[i]}
              </span>
            </div>
            <div className="flex items-center mt-1">
              <div
                className={`flex w-[44px] h-[44px] mobile:w-[34px] mobile:h-[34px] mobile:text-[12px] text-black justify-center items-center rounded-full ${
                  i < step
                    ? "bg-secondary text-white"
                    : "border-[2px] bg-white border-black border-opacity-75 text-black"
                }`}
              >
                {item}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Indicators;
