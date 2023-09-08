import React, { useState } from "react";
import { useProfileSetupStateContext } from "../../context/ProfileSetupStateContext";
import Indicators from "../../shared/Indicators";
import { AiOutlineArrowLeft } from "react-icons/ai";
import ImageSlider from "../../components/ImageSlider";

const Step2 = () => {
  const data = [
    {
      insurer: "Self",
    },
    {
      insurer: "Spouse",
    },
    {
      insurer: "Son",
    },
    {
      insurer: "Daughter",
    },
  ];

  const BackClickHandler = () => {
    setProfileSetupStates((prevStates: any) => ({
      ...prevStates,
      stepsStates: {
        currentStep: prevStates.stepsStates.currentStep - 1,
      },
    }));
  };

  const { profileSetupStates, setProfileSetupStates } =
    useProfileSetupStateContext();

  //sum insured states
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentSelection, setCurrentSelection] = useState(0);

  const continueClickHandler = () => {
    setProfileSetupStates((prevStates: any) => ({
      ...prevStates,
      stepsStates: {
        currentStep: prevStates.stepsStates.currentStep + 1,
      },
    }));
  };

  return (
    <div className="w-full">
      <div className="mb-10">
        <AiOutlineArrowLeft
          className="cursor-pointer"
          color="#0A225F"
          size={24}
          onClick={BackClickHandler}
        />
      </div>
      <Indicators step={2} />

      <h5 className="text-[36px] mobile:text-[22px] text-secondary font-[600]">{`When are you travelling to USA?`}</h5>
      <p className="text-lg mobile:text-[20px]">
        Don&anpos;t worry you can change your trip dates at a later stage.
      </p>
      <div className="w-[131px] mt-5 h-[5px] bg-[#36B37E]"></div>
      <div className="flex mt-[-15px] w-full flex-wrap items-end justify-between">
        <div className="text-left w-[50%] mobile:w-full mt-4 flex-col gap-8">
          <div className="mobile:mt-10">
            <label
              htmlFor="startDate"
              className="block text-xl font-medium text-[#0a225f] mb-2"
            >
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              className="mobile:w-full w-[500px] text-xl p-6 border border-[#0a225f] text-[#0a225f] text-opacity-60 border-opacity-60 rounded-md"
              placeholder="Enter Your Start Date..."
            />
          </div>
          <div>
            <label
              htmlFor="endDate"
              className="block text-xl font-medium text-[#0a225f] mb-2 mt-4"
            >
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              name="endDate"
              className="mobile:w-full w-[500px] text-xl p-6 border border-[#0a225f] text-[#0a225f] text-opacity-60 border-opacity-60 rounded-md"
              placeholder="Enter Your End Date..."
            />
          </div>
        </div>

        <div className="w-[50%]">
          <ImageSlider />
        </div>
      </div>

      <div className="text-left my-10">
        <p>
          {`By clicking on Continue, you agree to our`}{" "}
          <span className="text-[#0091E4]">Privacy Policy</span>
          {`, Terms of Use`} and
          <span className="text-[#0091E4]"> Disclaimer</span>
        </p>
      </div>
      <button
        onClick={() => continueClickHandler()}
        className="bg-primary w-full mb-10 font-[700] text-white py-4 rounded-[10px]"
      >
        Continue
      </button>
    </div>
  );
};

export default Step2;
