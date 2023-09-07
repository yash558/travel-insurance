import * as React from "react";
import { useState } from "react";
import Indicators from "../../shared/Indicators";
import ContinueBtn from "../../shared/ContinueBtn";
import { AiOutlineArrowLeft } from "react-icons/ai";
import SelectDob from "./components/SelectDob";
import { useProfileSetupStateContext } from "../../context/ProfileSetupStateContext";
import Image from "next/image";
import ImageSlider from "../../components/ImageSlider";

const Step3 = () => {
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

  const [selectedValue, setSelectedValue] = useState(null);

  const handleButtonClick = (value: any) => {
    setSelectedValue(value);
    //   // You can perform any additional actions here based on the selected value.
  };
  return (
    <div>
      <div className="mb-10 mobile:mb-10">
        <AiOutlineArrowLeft
          className="cursor-pointer"
          color="#0A225F"
          size={24}
          onClick={BackClickHandler}
        />
      </div>
      <Indicators step={3} />
      <h5 className="text-[36px] mobile:text-[22px] mt-10 mb-4 text-secondary font-[600]">{`How many people are travelling?`}</h5>
      <div className="w-[131px] mt-3 h-[5px] bg-[#36B37E]"></div>

      <div className="flex w-full items-center justify-between gap-8">
        <div className="text-left  flex flex-col gap-8">
          <div className="">
            <label
              htmlFor="ageGroup"
              className="block text-xl mt-4 font-medium text-[#0a225f] mb-2"
            >
              Select Number of People:
            </label>
            {[1, 2, 3, "4+"].map((value) => (
              <button
                key={value}
                className={`w-12 h-12 mr-8 rounded-full border border-gray-300 ${
                  selectedValue === value
                    ? "bg-gray-800 text-white" // Style for the selected button
                    : "bg-white text-gray-800 hover:bg-gray-100" // Style for other buttons
                }`}
                onClick={() => handleButtonClick(value)}
              >
                {value}
              </button>
            ))}
          </div>
          <div>
            <label
              htmlFor="ageGroup"
              className="block text-xl font-medium text-[#0a225f] mb-2"
            >
              Select Age Group
            </label>
            <select
              id="ageGroup"
              name="ageGroup"
              className="mobile:w-full bg-white w-[500px] text-xl p-6 border border-[#0a225f] text-[#0a225f] text-opacity-60 border-opacity-60 rounded-md"
              defaultValue="" // Set a default value if needed
            >
              <option value="" disabled>
                Select an Age Group
              </option>
              <option value="child">Child (0-12 years)</option>
              <option value="teen">Teen (13-19 years)</option>
              <option value="adult">Adult (20+ years)</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="endDate"
              className="block text-xl font-medium text-[#0a225f] mb-2 mt-4"
            >
              Sum Insured
            </label>
            <input
              type="number"
              className="mobile:w-full w-[500px] text-xl p-6 border border-[#0a225f] text-[#0a225f] text-opacity-60 border-opacity-60 rounded-md"
              placeholder="Sum Insured"
            />
          </div>
        </div>
        <div className="w-[50%] mobile:hidden">
          <ImageSlider />
        </div>
      </div>

      <ContinueBtn />
    </div>
  );
};

export default Step3;
