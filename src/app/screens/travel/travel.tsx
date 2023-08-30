"use client"
import React, { useState } from 'react';

type FormData = {
  declinedInsurance: boolean;
  politicallyExposed: boolean;
  hospitalized: boolean;
  adverseFindings: boolean;
  diabetes: boolean;
  highBloodPressure: boolean;
  geneticDisorder: boolean;
  mentalDisorder: boolean;
  smoke: boolean;
  alcohol: boolean;
  chewTobacco: boolean;
};

const InsuranceForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    declinedInsurance: false,
    politicallyExposed: false,
    hospitalized: false,
    adverseFindings: false,
    diabetes: false,
    highBloodPressure: false,
    geneticDisorder: false,
    mentalDisorder: false,
    smoke: false,
    alcohol: false,
    chewTobacco: false,
  });

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

  const handleToggle = (field: keyof FormData) => {
    setFormData((prevData) => ({
      ...prevData,
      [field]: !prevData[field],
    }));
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-[#0A225F] font-bold md:text-4xl text-2xl">Help us know the medical condition, if any</h1>
      <h1 className="text-[#0A225F] text-xl">We’ll only ask for the details insurance companies need</h1>
      <div>
        {questions.map((question: any, index: number) => (
          <div key={question.id} className="flex flex-wrap justify-between items-center my-8">
            <div className="md:w-[60%] w-[90%] flex gap-4">
              <h1>{index + 1}</h1>
              <label className="">{question.text}</label>
            </div>
            <div className="flex items-center justify-center md:mt-0 pt-8 space-x-4">

              <button
                className="bg-[#0A225F] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  // Handle "Yes" button click here
                }}
              >
                Yes
              </button>
              <button
                className="border-2 border-[#0A225F] text-[#0A225F] font-bold py-2 px-4 rounded"
                onClick={() => {
                  // Handle "No" button click here
                }}
              >
                No
              </button>


            </div>
          </div>
        ))}
        <div className="flex items-center justify-center ">
          <button className="px-14 py-3 bg-[#F5AB01] text-white  rounded-md  w-[50%]">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default InsuranceForm;
