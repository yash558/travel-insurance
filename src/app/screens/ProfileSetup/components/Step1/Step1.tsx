import React from "react";
import Indicators from "../../shared/Indicators";
import { useProfileSetupStateContext } from "../../context/ProfileSetupStateContext";
import DesktopStep1 from "./components/DesktopStep1";
import MobileStep1 from "./components/MobileStep1";
import Image from "next/image";
const Step1 = ({ data }: { data: any }) => {
  const btns = [
    {
      name: "Schuzens",
    },
    {
      name: "USA",
    },
    {
      name: "United Kingdom",
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

  let countLeftInsuranceFor = 0;

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

      <div className="text-left mt-5">
        <h2 className="text-[40px] mobile:text-[22px] mt-4 mb-4 text-secondary font-[600]">
          {data?.heading}
        </h2>
        <h5 className="text-[24px] mobile:text-[17px] font-[600]">
          {data?.subHeading}
        </h5>
        <div className="w-[200px] mt-3 h-[5px] bg-[#36B37E]" />
      </div>

      <div className="flex justify-left">
        <div className="">
          <div className="flex items-center justify-center">
            <div className="flex justify-left mt-5">
              {/* mobile */}
              {/* <MobileStep1
              data={data}
              countLeftInsuranceFor={countLeftInsuranceFor}
              onChangeHandler={onChangeHandler}
            /> */}
              {/* desktop */}
              {/* <DesktopStep1
              data={data}
              countLeftInsuranceFor={countLeftInsuranceFor}
              onChangeHandler={onChangeHandler}
            /> */}

              <div>
                <div className="text-left  my-4">
                  <input
                    type="text"
                    className="w-[75%] text-xl p-6 border border-[#0a225f] text-[#0a225f] text-opacity-60 border-opacity-60 rounded-md"
                    placeholder="Enter Your Destination..."
                  />
                  <h1 className="text-black text-3xl text-bold my-4">
                    Popular destinations{" "}
                    <span className="text-gray-800 text-xl">
                      {" "}
                      ( you can select multiple destinations)
                    </span>
                  </h1>
                </div>
                <div className="flex gap-5 mobile:grid mobile:grid-cols-2 mb-10 flex-wrap mobile:justify-start mobile:gap-5">
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
                          className="bg-secondary w-[240px] mobile:w-full border-2 border-secondary text-white px-5 py-2 rounded-[45px]"
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
                          className="bg-white w-full border-2 border-secondary text-secondary px-5 py-2 rounded-[45px]"
                        >
                          {item?.name}
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="">
                <Image
                  src="/assets/bg.png"
                  className="w-[700px] -mt-32 rounded-tl-[200px] rounded-3xl  h-[450px] mobile:w-[70px] mobile:h-[50px]"
                  width={200}
                  height={200}
                  alt="Logo"
                />
              </div>
            </div>
          </div>
          <button
            onClick={() => continueClickHandler()}
            className="bg-primary w-full mt-10 font-[700] text-white py-4 rounded-[10px]"
          >
            Next
          </button>
        </div>
      </div>
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
