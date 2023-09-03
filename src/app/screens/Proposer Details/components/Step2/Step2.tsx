import React, { useState } from "react";
import Indicators from "../../shared/Indicators";
import { medicalConditionData, proposerData } from "../../data/data";
import ContinueBtn from "../../shared/ContinueBtn";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { useProfileSetupStateContext } from "@/app/screens/ProfileSetup/context/ProfileSetupStateContext";
import Summary from "../Summary";
import CheckBox from "../CheckBox"

const Step2 = () => {
  const [toggleSelected, setToggleSelected] = useState(false);
  const [toggledIndex, setToggledIndex] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState(false);
  const { profileSetupStates, setProfileSetupStates } = useProfileSetupStateContext();

  const BackClickHandler = () => {
    setProfileSetupStates((prevStates: any) => ({
      ...prevStates,
      stepsStates: {
        currentStep: prevStates.stepsStates.currentStep - 1,
      },
    }));
  };




 

  return (
    <div>
      <div className="mb-10">
        <AiOutlineArrowLeft
          className="cursor-pointer"
          color="#0A225F"
          size={24}
          onClick={BackClickHandler}
        />
      </div>
      <div className="py-5">
        <Indicators step={2} />
      </div>
      {/* <div className="flex mobile:grid mobile:grid-cols-2 gap-10 mt-10 mobile:gap-5">
        {proposerData.tabs[0]?.btns?.map((item, i) => (
          <button
            className="w-full text-left ps-2 rounded-[8px] py-2 border-2 border-secondary"
            key={i}
          >
            {item}
          </button>
        ))}
      </div> */}
      <div>
        <h1 className="text-4xl text-secondary font-[600] mt-10">
          {medicalConditionData?.heading}
        </h1>
        <p className="text-[#253858] text-lg md:w-[60%] my-4">{medicalConditionData?.desc}</p>
        <div className="flex items-start justify-start md:mt-0 pt-8 space-x-4">

              <button
                className="bg-[#0A225F] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  // Handle "Yes" button click here
                }}
              >
                Yes
              </button>
              <button
                className="border-2 border-[#0A225F] text-[#0A225F] font-bold py-2 px-4 rounded"
                onClick={() => {
                  // Handle "No" button click here
                }}
              >
                No
              </button>


            </div>
        <div className="flex justify-between">
        <div className="list-decimal flex flex-col items-center justify-center">
         <CheckBox/>
          
        </div>
        <div className="mobile:hidden">
            <Summary />
          </div>
          </div>
      </div>
      <ContinueBtn />
    </div>
  );
};

export default Step2;
