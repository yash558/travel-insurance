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
      insurer: "Pass 1",
    },
    {
      insurer: "Pass 2",
    },
    {
      insurer: "Pass 3",
    },
    {
      insurer: "Pass 4",
    },
  ];

  return (
    <div>
      <div className="py-5">
        <Indicators step={1} />
      </div>
      <div>
        <div className="flex mt-10 mobile:mt-5 mobile:mb-5 items-center mobile:grid mobile:grid-cols-2 gap-10 mobile:gap-5">
          {data?.map((item: any, i: number) => (
            <button
              onClick={() => setSelectedBtn(i)}
              className={`border-2 ${
                selectedBtn === i && "bg-secondary text-white"
              } text-left mobile:w-full text-secondary w-full py-2 px-3 border-secondary rounded-[6px]`}
              key={i}
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
                <div className="my-auto mobile:mx-auto w-full">
                  <button className="bg-primary py-[22px] w-full font-[700] text-white rounded-[10px]">
                    + Add a traveller
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile:hidden">
            <Summary />
          </div>
        </div>

        <div className="hidden flex-col gap-5">
          {proposerData?.tabs?.map((item, i) => (
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
                        {proposerData.tabs[activeTab]?.heading}
                      </h1>
                      <p className="text-quaternary">
                        {proposerData.tabs[activeTab]?.desc}
                      </p>
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
                      {/* <div className="grid mobile:flex mobile:flex-wrap  grid-cols-2 grid-rows-2 gap-2 mobile:gap-5 mt-5">
                        {proposerData?.tabs[activeTab]?.fields?.map(
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
                      </div> */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <ContinueBtn />
    </div>
  );
};

export default Step1;
