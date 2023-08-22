import React from "react";
import Indicators from "../../shared/Indicators";
import Details from "./components/Details";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Step6 = () => {
  return (
    <div>
      <div className="mb-10 mobile:mb-5">
        <AiOutlineArrowLeft
          className="cursor-pointer"
          color="#0A225F"
          size={24}
        />
      </div>
      <Indicators step={6} />
      <h5 className="text-[36px] mobile:text-[22px] mt-10 mb-4 text-secondary font-[600]">{`Tell us about yourself`}</h5>
      <div className="w-[131px] mt-3 h-[5px] bg-[#36B37E]"></div>
      <p className="text-[32px] mobile:text-[20px] mt-5">
        Fill personal details
      </p>
      <Details />
      <Link href="/view-plans">
        <button className="bg-primary w-full mt-10 font-[700] text-white py-4 rounded-[10px]">
          View Plans
        </button>
      </Link>
    </div>
  );
};

export default Step6;
