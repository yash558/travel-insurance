import React, { useState } from "react";
import Indicators from "../../shared/Indicators";
import { proposerData } from "../../data/data";
import ContinueBtn from "../../shared/ContinueBtn";
import Summary from "../Summary";

const Step1 = () => {
  const [activeTab, setActiveTab] = useState<any>(0);
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
      <div className="py-5">
        <Indicators step={1} />
      </div>
      <div className="flex items-end gap-20">
        <div>
          <div className="mt-10 mb-3">
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
          <div className="flex  gap-10 mobile:flex-wrap-reverse justify-between">
            <div className="mobile:mt-5 mt-10">
              <div>
                <h1 className="text-3xl text-secondary font-[600]">
                  {proposerData.tabs[activeTab]?.heading}
                </h1>
                <p className="text-quaternary md:w-[70%] my-4">
                  {proposerData.tabs[activeTab]?.desc}
                </p>
                {activeTab === 1 && (
                  <div className="flex flex-wrap mobile:grid mobile:grid-cols-2 mobile:grid-rows-2 gap-2 mt-10 mobile:gap-4">
                    {proposerData.tabs[activeTab]?.btns?.map((item, i) => (
                      <button
                        className="w-[146.5px] mobile:w-full text-left ps-2 rounded-[8px] py-2 border-2 border-secondary"
                        key={i}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                )}
                <div className="grid mobile:flex mobile:flex-wrap  grid-cols-2 grid-rows-2 gap-2 mobile:gap-5 mt-5">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mobile:hidden">
          <Summary />
        </div>
      </div>
      <ContinueBtn />
    </div>
  );
};

export default Step1;
