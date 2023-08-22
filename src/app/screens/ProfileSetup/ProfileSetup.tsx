import React from "react";

import Container from "@/app/container/Container";

import { useProfileSetupStateContext } from "./context/ProfileSetupStateContext";
import Step2 from "./components/Step2/Step2";
import Step1 from "./components/Step1/Step1";
import Step3 from "./components/Step3/Step3";
import Step4 from "./components/Step4/Step4";
import Step5 from "./components/Step5/Step5";


const ProfileSetup = () => {
  const stepsData = {
    step1: {
      heading: "Let's secure your travel",
      subHeading: "Which country are you travelling to?",
      insuranceFor: [
        {
          relationId: 1,
          relationType: "self",
        },
        {
          relationId: 2,
          relationType: "spouse",
        },
        {
          relationId: 3,
          relationType: "son",
        },
        {
          relationId: 4,
          relationType: "daughter",
        },
        {
          relationId: 5,
          relationType: "father",
        },
        {
          relationId: 6,
          relationType: "mother",
        },
        {
          relationId: 7,
          relationType: "grand father",
        },
        {
          relationId: 8,
          relationType: "grand mother",
        },
        {
          relationId: 9,
          relationType: "dasdas",
        },
        {
          relationId: 10,
          relationType: "dasdasd",
        },
        {
          relationId: 11,
          relationType: "dasd",
        },
      ],
    },
  };

  const { profileSetupStates } = useProfileSetupStateContext();

  const currentStep = profileSetupStates?.stepsStates?.currentStep;

  return (
    <div className="my-10">
      <div>
        <Container>
          {currentStep === 0 && <Step1 data={stepsData.step1} />}
          {currentStep === 1 && <Step2 />}
          {currentStep === 2 && <Step3 />}
          {currentStep === 3 && <Step4 />}
          {currentStep === 4 && <Step5 />}
        </Container>
      </div>
    </div>
  );
};

export default ProfileSetup;
