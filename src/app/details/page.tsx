"use client";
import Summary from "@/app/screens/Proposer Details/components/Summary";
import { proposerDataone } from "@/app/screens/Proposer Details/data/data";
import React, { useState } from "react";
import Faaq from "../screens/Faaq/faaq";
import FaaqOne from "../screens/Faaq/faaqone";

const Step1 = () => {
  const [activeTab, setActiveTab] = useState<any>(0);
  const data = [
    {
      title: "Medical Expenses",
      expense: "$100,000",
      deductible: "$100",
    },
    {
      title: "Baggage Loss",
      expense: "$500",
      deductible: "No Deductible",
    },
    {
      title: "Loss of Passport",
      expense: "$300",
      deductible: "No Deductible",
    },
    {
      title: "Trip Cancellation",
      expense: "$1,500",
      deductible: "No Deductible",
    },
    {
      title: "Personal Accident",
      expense: "$12,000",
      deductible: "No Deductible",
    },
  ];

  interface MedicalExpensesCardProps {
    totalExpenses: string;
    deductible: string;
    title: string;
  }

  const MedicalExpensesCard: React.FC<MedicalExpensesCardProps> = ({
    title,
    totalExpenses,
    deductible,
  }) => {
    return (
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="mb-4">
          <span className="font-semibold"></span> {totalExpenses}
        </div>
        <div>
          <span className="font-semibold">Deductible:</span> {deductible}
        </div>
      </div>
    );
  };
  return (
    <div>
      <div>
        <div className="flex mobile:hidden gap-10 mobile:flex-wrap ">
          <div className="flex flex-col justify-center h-[500px] mobile:w-full mobile:flex-row font-[600] gap-5 mt-10 p-[50px] ps-0 mobile:p-5 bg-secondary rounded-[35px] mobile:rounded-none rounded-s-none">
            {proposerDataone?.tabs?.map((item, i) => (
              <div
                onClick={() => setActiveTab(i)}
                key={i}
                className={`flex cursor-pointer w-[300px] ${
                  activeTab === i
                    ? "bg-white text-secondary rounded-[35px] mobile:rounded-[35px] rounded-s-none"
                    : "bg-secondary text-white"
                }`}
              >
                <div className="text-xl mobile:text-xs rounded-[8px] px-5 py-2">
                  {item.tab}
                </div>
              </div>
            ))}
          </div>
          <div className="mobile:mt-5 mt-10">
            <div className="">
              <h1 className="text-3xl text-secondary my-4 font-[600]">
                {proposerDataone.tabs[activeTab]?.heading}
              </h1>
              {/* <p className="text-quaternary w-[70%] my-4">
                {proposerDataone.tabs[activeTab]?.desc}
              </p> */}
           
              {/* <div className="grid mobile:flex mobile:flex-wrap  grid-cols-2 grid-rows-2 gap-2 mobile:gap-5 mt-5">
                {proposerData?.tabs[activeTab]?.fields?.map((item, i) => (
                  <div key={i} className="mobile:w-full">
                    {item !== "Dropdown" && item !== "Input File" && (
                      <input
                        className="border-2 w-full mobile:w-full border-secondary px-5 py-5 rounded-[8px] my-2"
                        type="text"
                        placeholder={item}
                      />
                    )}
                    {item === "Name" && (
                      <div className="mt-2 flex items-center gap-1 text-quaternary">
                        <input type="checkbox" />
                        <label>{`Don't have a last name.`}</label>
                      </div>
                    )}
                    {item === "PAN Card" && (
                      <div className="mt-2 flex items-center gap-1 text-quaternary">
                        <input type="checkbox" />
                        <label>{`I Don't have a PAN Card.`}</label>
                      </div>
                    )}

                    {item === "Dropdown" && (
                      <div className="text-quaternary">
                        <select className="w-full mobile:w-full bg-white px-4 py-[9.2px] border-2 border-secondary rounded-[8px]">
                          <option>Option 1</option>
                          <option>Option 2</option>
                          <option>Option 3</option>
                        </select>
                      </div>
                    )}
                    <span>
                      {item === "Input File" && (
                        <span>
                          <input className="w-[290px] mt-2" type="file" />
                        </span>
                      )}
                    </span>
                  </div>
                ))}
              </div> */}
              {
                activeTab === 0 &&
              <div className=" flex gap-10 mr-8 flex-wrap items-center justify-start">
                {data.map((item, index) => (
                  <MedicalExpensesCard
                    key={index} // Add a unique key when rendering in a list
                    title={item.title}
                    totalExpenses={item.expense}
                    deductible={item.deductible}
                  />
                ))}
              </div>
              }
                 {activeTab === 1 && (
                <div className="flex flex-wrap mobile:grid mobile:grid-cols-2 mobile:grid-rows-2 gap-2 mt-10 mobile:gap-4">
                  <Faaq/>
                </div>
              )}
                 {activeTab === 2 && (
                <div className="flex flex-wrap mobile:grid mobile:grid-cols-2 mobile:grid-rows-2 gap-2 mt-10 mobile:gap-4">
                  <FaaqOne/>
                </div>
              )}
                 {activeTab === 3 && (
                <div className="flex flex-wrap mobile:grid mobile:grid-cols-2 mobile:grid-rows-2 gap-2 mt-10 mobile:gap-4">
                  <Faaq/>
                </div>
              )}
               
            </div>
            <div className="flex items-end justify-end mr-10">
              <button className="px-14 py-3 bg-[#F5AB01] text-white  rounded-md ">Proceed to buy</button>
            </div>
          </div>
        </div>

        <div className="flex desktop:hidden flex-col gap-5">
          {proposerDataone?.tabs?.map((item, i) => (
            <div key={i}>
              <div
                onClick={() => setActiveTab(activeTab === i ? null : i)}
                className={`flex ${
                  activeTab === i && "bg-secondary text-white"
                } cursor-pointer w-full border-2 rounded-md text-secondary border-secondary`}
              >
                <div className="text-xl text-center w-full font-[700] rounded-[8px] px-5 py-2">
                  {item.tab}
                </div>
              </div>
              {activeTab === i && (
                <div>
                  <div className="mobile:mt-5 mt-10">
                    <div>
                      <h1 className="text-xl text-secondary font-[600]">
                        {proposerDataone.tabs[activeTab]?.heading}
                      </h1>
                      <p className="text-quaternary">
                        {proposerDataone.tabs[activeTab]?.desc}
                      </p>
                      <div className="flex flex-wrap mobile:grid mobile:grid-cols-2 mobile:grid-rows-2 gap-2 mt-10 mobile:gap-4">
                        {proposerDataone.tabs[activeTab]?.btns?.map(
                          (item, i) => (
                            <button
                              className="w-[146.5px] mobile:w-full text-left ps-2 rounded-[8px] py-2 border-2 border-secondary"
                              key={i}
                            >
                              {item}
                            </button>
                          )
                        )}
                      </div>
                      <div className="grid mobile:flex mobile:flex-wrap  grid-cols-2 grid-rows-2 gap-2 mobile:gap-5 mt-5">
                        {proposerDataone?.tabs[activeTab]?.fields?.map(
                          (item, i) => (
                            <div key={i} className="mobile:w-full">
                              {item !== "Dropdown" && item !== "Input File" && (
                                <input
                                  className="border-2 w-full mobile:w-full border-secondary px-5 py-2 rounded-[8px]"
                                  type="text"
                                  placeholder={item}
                                />
                              )}
                              {item === "Name" && (
                                <div className="mt-2 flex items-center gap-1 text-quaternary">
                                  <input type="checkbox" />
                                  <label>{`Don't have a last name.`}</label>
                                </div>
                              )}
                              {item === "PAN Card" && (
                                <div className="mt-2 flex items-center gap-1 text-quaternary">
                                  <input type="checkbox" />
                                  <label>{`I Don't have a PAN Card.`}</label>
                                </div>
                              )}

                              {item === "Dropdown" && (
                                <div className="text-quaternary">
                                  <select className="w-full mobile:w-full bg-white px-4 py-[9.2px] border-2 border-secondary rounded-[8px]">
                                    <option>Option 1</option>
                                    <option>Option 2</option>
                                    <option>Option 3</option>
                                  </select>
                                </div>
                              )}
                              <span>
                                {item === "Input File" && (
                                  <span>
                                    <input className="w-full" type="file" />
                                  </span>
                                )}
                              </span>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}

          <div className="mobile:hidden">{/* <Summary /> */}</div>
        </div>
      </div>
    </div>
  );
};

export default Step1;
