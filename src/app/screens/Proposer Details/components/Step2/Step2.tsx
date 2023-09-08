import React, { useState } from "react";
import Indicators from "../../shared/Indicators";
import { medicalConditionData, proposerData } from "../../data/data";
import ContinueBtn from "../../shared/ContinueBtn";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useProfileSetupStateContext } from "@/app/screens/ProfileSetup/context/ProfileSetupStateContext";
import Summary from "../Summary";
import CheckBox from "../CheckBox";

const Step2 = () => {
  const { profileSetupStates, setProfileSetupStates } =
    useProfileSetupStateContext();

  const BackClickHandler = () => {
    setProfileSetupStates((prevStates: any) => ({
      ...prevStates,
      stepsStates: {
        currentStep: prevStates.stepsStates.currentStep - 1,
      },
    }));
  };

  const [selectedBtn, setSelectedBtn] = useState<number>();

  const data = [
    {
      insurer: "Pass 1",
    },
    {
      insurer: "Pass 2",
    },
    {
      insurer: "Pass 3",
    },
    {
      insurer: "Pass 4",
    },
  ];

  const [toggleSelected, setToggleSelected] = useState(false);
  const [toggledIndex, setToggledIndex] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="">
      <div className="mb-10">
        <AiOutlineArrowLeft
          className="cursor-pointer"
          color="#0A225F"
          size={24}
          onClick={BackClickHandler}
        />
      </div>
      <div className="pb-3">
        <Indicators step={2} />
      </div>

      <div className="flex my-10 items-center mobile:grid mobile:grid-cols-2 gap-10 mobile:gap-5">
        {data?.map((item: any, i: number) => (
          <button
            onClick={() => setSelectedBtn(i)}
            className={`border-2 ${
              selectedBtn === i && "bg-secondary text-white"
            } text-left mobile:w-full text-secondary w-full py-2 px-3 border-secondary rounded-[6px]`}
            key={i}
          >
            {item.insurer}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-10 justify-between">
        <div className="w-[60%] mobile:w-full">
          <h1 className="text-secondary text-3xl font-semibold">
            Medical History
          </h1>
          <p className="text-secondary">
            Does any of the traveller(s) have pre-existing medical conditions?
            Select YES if any of the traveller(s) have health issues for which
            they need to take regular medication as part of the long-term
            treatment.
          </p>

          <div className="flex gap-5 mt-5 mobile:justify-center">
            <span className="text-white border-2 border-secondary bg-secondary px-4 py-2 rounded-md">
              Yes
            </span>
            <span className="text-secondary border-2 border-secondary bg-white px-4 py-2 rounded-md">
              No
            </span>
          </div>

          <div className="mt-5 mobile:flex mobile:flex-col mobile:gap-2">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-quaternary">
                I declare that nominee is of 18 years of age
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-quaternary">
                I hereby declare that information provided above is true, and I
                accept all <a href="#">Terms & Conditions</a>
              </p>
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <p className="text-quaternary">
                I hereby consent to receive information from Central KYC
                Registry through SMS/email on the...Read More
              </p>
            </div>
          </div>
        </div>
        <div className="mobile:hidden">
          <Summary />
        </div>
      </div>

      <ContinueBtn />
    </div>
  );
};

export default Step2;
