import React, { useState } from "react";
import Indicators from "../../shared/Indicators";
import { medicalConditionData, proposerData } from "../../data/data";
import ContinueBtn from "../../shared/ContinueBtn";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

const Step2 = () => {
  const [toggleSelected, setToggleSelected] = useState(false);
  const [toggledIndex, setToggledIndex] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState<number>();

  const data = [
    {
      insurer: 1,
    },
    {
      insurer: 2,
    },
    {
      insurer: 3,
    },
    {
      insurer: 4,
    },
  ];

  const qualificationData = ["X Pass", "XII Pass", "Graduate", "Post Graduate"];

  return (
    <div>
      <div className="mb-10">
        <AiOutlineArrowLeft
          className="cursor-pointer"
          color="#0A225F"
          size={24}
        />
      </div>
      <div className="py-5">
        <Indicators step={2} />
      </div>
      <div className="mt-10 mb-3">
        {data?.map((item: any, i: number) => (
          <button
            key={i}
            className={`w-12 h-12 mr-8 rounded-full border border-gray-300 ${
              selectedBtn === i
                ? "bg-secondary text-white" // Style for the selected button
                : "bg-white text-gray-800 hover:bg-gray-100" // Style for other buttons
            }`}
            onClick={() => setSelectedBtn(i)}
          >
            {item.insurer}
          </button>
        ))}
      </div>
      <div>
        <h1 className="text-2xl text-secondary font-[600] mt-10">
          {medicalConditionData?.heading}
        </h1>
        <p className="text-quaternary">{medicalConditionData?.desc}</p>
        <div className="list-decimal flex flex-col gap-10 mt-10">
          {medicalConditionData?.conditions?.map((item, i) => (
            <div className="text-quaternary" key={i}>
              <div className="flex-wrap gap-5 mobile:justify-center flex items-center justify-between">
                <div className="w-[600px]">
                  <span>{i + 1}.</span> {item}
                </div>

                <div className="flex gap-5 mobile:mt-5">
                  <span className="text-white border-2 border-secondary my-auto text-center cursor-pointer w-[100px] bg-secondary px-4 py-2 rounded-md">
                    Yes
                  </span>
                  <span className="text-secondary my-auto text-center cursor-pointer w-[100px] bg-white border-2 border-secondary px-4 py-2 rounded-md">
                    No
                  </span>
                </div>
              </div>
              <div>
                {i === medicalConditionData?.conditions?.length - 1 && (
                  <div className="mt-10 justify-between flex mobile:flex-col gap-5">
                    <div className="flex items-center gap-5">
                      <div>
                        <span>{i + 2}.</span>&nbsp;<span>Qualification</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="relative w-full">
                        <button
                          onClick={() => setShowDropdown(!showDropdown)}
                          className="border-[2px] flex justify-end w-[220px] mobile:w-full gap-20 items-center border-secondary rounded-[4px] py-2 px-4"
                        >
                          <IoIosArrowDown />
                        </button>
                        {showDropdown && (
                          <div className="absolute border-2 border-secondary border-t-0 rounded-b-md bg-white flex flex-col gap-2 px-4 py-2 w-full">
                            {qualificationData?.map((item, i) => (
                              <div key={i} className="flex items-center gap-1">
                                <input type="checkbox" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ContinueBtn />
    </div>
  );
};

export default Step2;
