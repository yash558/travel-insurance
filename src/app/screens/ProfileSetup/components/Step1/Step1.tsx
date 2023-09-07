import React from "react";
import Indicators from "../../shared/Indicators";
import { useProfileSetupStateContext } from "../../context/ProfileSetupStateContext";
import DesktopStep1 from "./components/DesktopStep1";
import MobileStep1 from "./components/MobileStep1";
import Image from "next/image";
import ImageSlider from "../../components/ImageSlider";
const Step1 = ({ data }: { data: any }) => {
  const btns = [
    {
      name: "Schuzens",
    },
    {
      name: "USA",
    },
    {
      name: "UK",
    },
    {
      name: "Germany",
    },
    {
      name: "Thailand",
    },
    {
      name: "Malaysia",
    },
    {
      name: "India",
    },
    {
      name: "China",
    },
  ];

  const { profileSetupStates, setProfileSetupStates } =
    useProfileSetupStateContext();

  const onChangeHandler = ({ relationId }: { relationId: number }) => {
    let array = [];

    array.push(relationId);

    const newArray = [new Set(array)];

    setProfileSetupStates((prevStates: any) => ({
      ...prevStates,
      // set relation ids for insured person
    }));
  };

  const continueClickHandler = () => {
    setProfileSetupStates((prevStates: any) => ({
      ...prevStates,
      stepsStates: {
        currentStep: prevStates.stepsStates.currentStep + 1,
      },
    }));
  };

  return (
    <div>
      <Indicators step={1} />

      <div>
        <div className="text-left mb-3">
          <h2 className="text-[40px] mobile:text-[22px] mt-4 mb-4 text-secondary font-[600]">
            {data?.heading}
          </h2>
          <h5 className="text-[24px] mobile:text-[17px] font-[600]">
            {data?.subHeading}
          </h5>
          <div className="w-[200px] mt-3 h-[5px] bg-[#36B37E]" />
        </div>

        <div>
          <div>
            <div className="flex flex-wrap mobile:mt-10 items-end w-full justify-between">
              <div className="w-[50%] mobile:w-full">
                <div className="text-left">
                  <input
                    type="text"
                    className="w-[75%] mobile:w-full text-xl p-6 border border-[#0a225f] text-[#0a225f] text-opacity-60 border-opacity-60 rounded-md"
                    placeholder="Enter Your Destination..."
                  />
                  <h1 className="text-black text-3xl text-bold my-4">
                    Popular destinations&nbsp;
                    <span className="text-gray-800 text-xl">
                      (you can select multiple destinations)
                    </span>
                  </h1>
                </div>
                <div className="flex gap-5 mobile:grid mobile:grid-cols-2 flex-wrap  mobile:justify-start mobile:gap-5">
                  {btns?.map((item, i) => (
                    <div key={i}>
                      {profileSetupStates?.step1States?.selectedBtn === i ? (
                        <button
                          onClick={() =>
                            setProfileSetupStates((prevStates: any) => ({
                              ...prevStates,
                              step1States: {
                                ...prevStates.step1States,
                                selectedBtn: i,
                              },
                            }))
                          }
                          className="bg-secondary w-[165px] mobile:w-full border-2 border-secondary text-white px-5 py-2 rounded-[45px]"
                        >
                          {item?.name}
                        </button>
                      ) : (
                        <button
                          onClick={() =>
                            setProfileSetupStates((prevStates: any) => ({
                              ...prevStates,
                              step1States: {
                                ...prevStates.step1States,
                                selectedBtn: i,
                              },
                            }))
                          }
                          className="bg-white w-[165px] mobile:w-full border-2 border-secondary text-secondary px-5 py-2 rounded-[45px]"
                        >
                          {item?.name}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-[50%]">
                <ImageSlider />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => continueClickHandler()}
        className="bg-primary w-full mt-10 font-[700] text-white py-4 rounded-[10px]"
      >
        Next
      </button>
      <div className="text-center my-10">
        <p>
          {`By clicking on Continue, you agree to our`}{" "}
          <span className="text-[#0091E4]">Privacy Policy</span>
          {`, Terms of Use`} and
          <span className="text-[#0091E4]"> Disclaimer</span>
        </p>
      </div>
    </div>
  );
};

export default Step1;
