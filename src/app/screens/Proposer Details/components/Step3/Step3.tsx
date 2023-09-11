import React, { useState } from "react";
import Indicators from "../../shared/Indicators";
import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Step3 = () => {
  const [showDeclarationModal, setShowDeclarationModal] = useState(false);
  const [selectedBtn, setSelectedBtn] = useState<number>();

  const data = [
    {
      insurer: 1,
    },
    {
      insurer: 2,
    },
    {
      insurer: 3,
    },
    {
      insurer: 4,
    },
  ];

  return (
    <div>
      {showDeclarationModal && (
        <div className="fixed z-10 flex justify-center items-center inset-0 backdrop-brightness-[30%]">
          <div className="w-[600px] rounded-[8px] bg-white p-5">
            <h1 className="text-3xl text-secondary font-[600] text-center">
              Declaration
            </h1>
            <div>
              <div className="flex border-2 px-4 py-2 rounded-[8px] border-quaternary items-center gap-5 mt-10">
                <input type="checkbox" />
                <div>
                  I hereby declare that all information provided above is true,
                  and I accept all{" "}
                  <span className="text-primary">Terms & conditions</span>
                </div>
              </div>
              <div className="flex border-2 px-4 py-2 rounded-[8px] border-quaternary items-center gap-5 mt-10">
                <input type="checkbox" />
                <div>
                  I hereby consent to receive information from Central KYC
                  Registry through SMS/email on the registered number/email
                  address.{" "}
                  <span className="text-primary underline">Read more</span>
                </div>
              </div>
              <Link href="/thank-you-page">
                <button className="w-full px-5 font-[600] py-3 text-white bg-primary rounded-[8px] mt-10">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      <div className="mb-10">
        <AiOutlineArrowLeft
          className="cursor-pointer"
          color="#0A225F"
          size={24}
        />
      </div>
      <div className="py-5">
        <Indicators step={3} />
        <div className="mt-[50px]">
          {data?.map((item: any, i: number) => (
            <button
              key={i}
              className={`w-12 h-12 mr-8 rounded-full border border-gray-300 ${
                selectedBtn === i
                  ? "bg-secondary text-white" // Style for the selected button
                  : "bg-white text-gray-800 hover:bg-gray-100" // Style for other buttons
              }`}
              onClick={() => setSelectedBtn(i)}
            >
              {item.insurer}
            </button>
          ))}
        </div>
        <div className="mt-10 mobile:flex-wrap flex items-center justify-between">
          <div>
            <h1 className="text-secondary text-2xl font-[600]">
              Tell us who you want to make nominee
            </h1>
            <p className="text-quaternary">
              God forbid, in case of any mishappening to the proposer, nominee
              is the person who gets the benefits.
            </p>
            <div className="mt-10 mobile:text-center">
              Give us the details of nominee to be
            </div>
            <div className="flex flex-wrap items-center gap-7 mobile:flex-col mt-5">
              <input
                className="px-5 w-[300px] py-2 border-2 border-secondary rounded-[8px]"
                type="text"
                placeholder="Relationship with proposer"
              />
              <input
                className="px-5 w-[300px] py-2 border-2 border-secondary rounded-[8px]"
                type="text"
                placeholder="Nominee full name"
              />

              <input
                onFocus={(e) => (e.currentTarget.type = "date")}
                type="text"
                className="px-5 w-[300px] py-2 border-2 border-secondary rounded-[8px]"
                id="dateInput"
                placeholder="Date of Birth"
              />
            </div>
          </div>
          {/*   <div className="mobile:hidden">
            <Summary />
          </div> */}
        </div>
        <button
          onClick={() => setShowDeclarationModal(true)}
          className="w-full px-5 font-[600] py-3 text-white bg-primary rounded-[8px] mt-10"
        >
          Review & Pay
        </button>
      </div>
    </div>
  );
};

export default Step3;
