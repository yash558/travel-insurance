import React from "react";
import { useState } from "react";
import Indicators from "../../shared/Indicators";
import Details from "./components/Details";
import ContinueBtn from "../../shared/ContinueBtn";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useProfileSetupStateContext } from "../../context/ProfileSetupStateContext";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import Image from "next/image";
import ImageSlider from "../../components/ImageSlider";
const Step5 = () => {
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

  const [phone, setPhone] = useState("");

  const handlePhoneChange = (value: any) => {
    setPhone(value);
  };
  return (
    <div className="mb-10">
      <div className="mb-10 mobile:mb-5">
        <AiOutlineArrowLeft
          className="cursor-pointer"
          color="#0A225F"
          size={24}
          onClick={BackClickHandler}
        />
      </div>
      <Indicators step={5} />
      <h5 className="text-[36px] mobile:text-[22px] mt-10 mb-4 text-secondary font-[600]">{`Great! One last step to get your travel insurance plans`}</h5>
      <p className="text-[20px] mobile:text-[20px]">
        It will help us to share policy documents and assist you in claim <br />{" "}
        settlement if needed.
      </p>
      <div className="w-[131px] mt-3 h-[5px] bg-[#36B37E]"></div>
      <div className="flex justify-between">
      <div>
      <h1 className="text-2xl font-semibold mb-4 mt-8">
        Phone Input with Country Code:
      </h1>
      <PhoneInput
        country="in" // Set the default country (you can change it)
        value={phone}
        onChange={handlePhoneChange}
        inputClass="py-6 w-[400px]" // Apply styles directly to the input element
        containerClass="phone-input-container" // Apply styles to the phone input container
        inputProps={{
          placeholder: 'Enter Your Phone Number',
        }}
      />
    </div>
        <div className="mt-[-8rem]">
        <ImageSlider/>
        </div>
      </div>

      <Link href="/view-plans">
        <button className="bg-primary w-full mt-10 font-[700] text-white py-4 rounded-[10px]">
          View Plans
        </button>
      </Link>
    </div>
  );
};

export default Step5;
