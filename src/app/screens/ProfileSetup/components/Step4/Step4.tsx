import * as React from "react";
import Indicators from "../../shared/Indicators";
import ContinueBtn from "../../shared/ContinueBtn";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useProfileSetupStateContext } from "../../context/ProfileSetupStateContext";
import ImageSlider from "../../components/ImageSlider";

const Step4 = () => {
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
      <Indicators step={4} />
      <div className="flex justify-between pt-10 mobile:pt-0">
        <div>
          <h5 className="text-[36px] mobile:text-[22px] mt-10  text-secondary font-[600]">
            Does the traveller have any pre-existing{" "}
            <br className="md:flex hidden" /> medical condition?
          </h5>
          <p className="text-[20px] mobile:text-[20px]">
            If the traveller have a known illness, injury or health condition{" "}
            <br className="md:flex hidden" /> like heart disease, diabetes,
            cancer etc which will help us cover you
          </p>
          <div className="w-[131px] mt-3 h-[5px] bg-[#36B37E]"></div>
          <div className="flex gap-5 mt-10 justify-center">
            <span className="text-white cursor-pointer bg-secondary px-4 py-2 rounded-md">
              Yes
            </span>
            <span className="text-secondary cursor-pointer bg-white border-2 border-secondary px-4 py-2 rounded-md">
              No
            </span>
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

export default Step4;
