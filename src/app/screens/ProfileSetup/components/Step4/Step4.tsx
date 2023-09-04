import * as React from "react";
import Indicators from "../../shared/Indicators";
import ContinueBtn from "../../shared/ContinueBtn";
import SelectCity from "./components/SelectCity";
import cities from "./data/cities.json";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useProfileSetupStateContext } from "../../context/ProfileSetupStateContext";
import Image from "next/image";
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
      <div className="mb-10 mobile:mb-5">
        <AiOutlineArrowLeft
          className="cursor-pointer"
          color="#0A225F"
          size={24}
          onClick={BackClickHandler}
        />
      </div>
      <Indicators step={4} />
      <h5 className="text-[36px] mobile:text-[22px] mt-10  text-secondary font-[600]">Does the traveller have any pre-existing <br className="md:flex hidden"/> medical condition?</h5>
      <p className="text-[20px] mobile:text-[20px]">If the traveller have a known illness, injury or health condition like heart disease, <br className="md:flex hidden"/> diabetes, cancer etc which will help us cover you</p>
      <div className="w-[131px] mt-3 h-[5px] bg-[#36B37E]"></div>
  <div className="flex justify-between">

      <SelectCity data={cities} />
      <div className="">
      <ImageSlider/>
        </div>
  </div>

      <ContinueBtn />
    </div>
  );
};

export default Step4;
