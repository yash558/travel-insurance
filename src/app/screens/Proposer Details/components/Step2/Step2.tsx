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
  
  
  const { profileSetupStates, setProfileSetupStates } = useProfileSetupStateContext();

  const BackClickHandler = () => {
    setProfileSetupStates((prevStates: any) => ({
      ...prevStates,
      stepsStates: {
        currentStep: prevStates.stepsStates.currentStep - 1,
      },
    }));
  };

  
  
  const [toggleSelected, setToggleSelected] = useState(false);
  const [toggledIndex, setToggledIndex] = useState<any>(null);
  const [showDropdown, setShowDropdown] = useState(false);

  const qualificationData = ["X Pass", "XII Pass", "Graduate", "Post Graduate"];
  const questions = [
    {
      id: 'declinedInsurance',
      text:
        'Has any proposal for insurance on the life of the applicant ever been declined, postponed, loaded, or subjected to any special conditions such as exclusions by any insurance company?',
    },
    {
      id: 'politicallyExposed',
      text: 'Are you a politically exposed person (PEP) or a close relative of PEP?',
    },
    {
      id: 'hospitalized',
      text:
        'Other than common cold, flu, infections, minor injury, or other minor ailments; have you ever been hospitalized for more than 5 days, undergone/advised to undergo any surgical procedures, or taken any medication/had any symptoms for more than 14 days? Medication is including but not limited to inhalers, injections, oral drugs, and topical applications.',
    },
    {
      id: 'adverseFindings',
      text:
        'Have you ever had adverse findings to any diagnostic tests or investigations such as Thyroid Profile, Lipid Profile, Treadmill test, Angiography, Echocardiography, Endoscopy, Ultrasound, CT Scan, MRI, Biopsy, and FNAC?',
    },
    {
      id: 'diabetes',
      text: 'Do you have diabetes?',
    },
    {
      id: 'highBloodPressure',
      text: 'Do you have high blood pressure?',
    },
    {
      id: 'geneticDisorder',
      text: 'Have you ever been diagnosed or treated for any genetic/hereditary disorders or HIV/AIDS?',
    },
    {
      id: 'mentalDisorder',
      text: 'Have you ever been diagnosed or treated for any mental/psychiatric disorders?',
    },
    {
      id: 'smoke',
      text: 'Does any of the applicants Smoke Cigarettes/Bidi/Cigar?',
    },
    {
      id: 'alcohol',
      text: 'Does any of the applicants take alcohol?',
    },
    {
      id: 'chewTobacco',
      text: 'Does any of the applicants Chew tobacco/Gutkha/Pan Masala?',
    },
  ];





 

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
      <div className="min-h-screen md:p-8 p-2">
      <h1 className="text-[#0A225F] font-bold md:text-4xl text-2xl">Help us know the medical condition, if any</h1>
      <h1 className="text-[#0A225F] text-xl">We’ll only ask for the details insurance companies need</h1>
      <div>
        {questions.map((question: any, index: number) => (
          <div key={question.id} className="flex md:flex-row flex-col justify-between items-center my-4">
            <div className="md:w-[60%] w-[90%] flex gap-4">
              <h1>{index + 1}</h1>
              <label className="">{question.text}</label>
            </div>

           
            <div className="flex items-center justify-center text-center   space-x-4">

              <button
                className="bg-[#0A225F] flex items-center justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  // Handle "Yes" button click here
                }}
              >
                Yes
              </button>
              <button
                className="border-2 border-[#0A225F] text-[#0A225F] flex items-center font-bold py-2 px-4 rounded"
                onClick={() => {
                  // Handle "No" button click here
                }}
              >
                No
              </button>


            </div>
            </div>
          
        ))}
        <div className="my-4">

          <div className="mt-10 justify-between flex mobile:flex-col gap-5 my-4">
            <div className="flex items-center gap-5">
              <div>
                <span>12  </span>&nbsp;<span>Qualification</span>
              </div>
            </div>
            <div className="flex items-center gap-5">
              <div className="relative w-full">
                <button
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="border-[2px] flex justify-end w-[200px] mobile:w-full gap-20 items-center border-secondary rounded-[4px] py-2 px-4"
                >
                  <IoIosArrowDown />
                </button>
                {showDropdown && (
                  <div className="absolute border-2 border-secondary border-t-0 rounded-b-md bg-white flex flex-col gap-2 px-4 py-2 w-full">
                    {qualificationData?.map((item, i) => (
                      <div key={i} className="flex items-center gap-1">
                        <input type="checkbox" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>


          
        </div>
      </div>
    </div>
      <ContinueBtn />
    </div>
  );
};

export default Step2;
