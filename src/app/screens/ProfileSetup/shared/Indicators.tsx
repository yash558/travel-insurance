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
    <div className="flex items-center justify-center mt-4 mb-[50px]">
      <div className="flex relative justify-between items-center w-[80%] mobile:w-full font-bold text-lg">
        <div className="w-full z-[-1] absolute h-[2px] bg-black bg-opacity-75" />
        {steps.map((item, i) => (
          <div
            key={i}
            className={`${i % 2 === 0 ? "flex-col" : "flex-col-reverse"} flex`}
          >
            <div className="ms-[-5rem] mobile:relative mobile:ms-0">
              <span
                className={`mobile:whitespace-nowrap ${
                  i === steps.length - 1 && "mobile:ms-[-3.5rem]"
                } ${
                  i === 0 || i === steps.length - 1 ? "" : "mobile:ms-[-1rem]"
                } text-secondary mobile:w-full w-[200px] text-center text-[1rem] mobile:text-xs absolute ${
                  i % 2 === 0 ? "mt-[-30px]" : "mt-[10px]"
                }`}
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
