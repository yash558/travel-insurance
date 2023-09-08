"use client";
import { proposerDataone } from "@/app/screens/Proposer Details/data/data";
import React, { useState } from "react";
import Image from "next/image";
import { AiOutlineArrowLeft } from "react-icons/ai";
import Link from "next/link";
import Faaq from "../../Faaq/faaq";
import FaaqOne from "../../Faaq/faaqone";
import FaaqTwo from "../../Faaq/faaqtwo";
import Container from "@/app/container/Container";
const DetailsMobile = () => {
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
    <div className="mb-10">
      <Container>
        <div>
          <div className="py-10">
            <Link href="/view-plans">
              <AiOutlineArrowLeft className="cursor-pointer" size={24} />
            </Link>
          </div>
          <div className="flex gap-10 mobile:flex-wrap ">
            <div className="flex flex-col w-full font-[600] gap-2 bg-white">
              {proposerDataone?.tabs?.map((item, i) => (
                <div key={i}>
                  <div
                    onClick={() => {
                      if (activeTab === i) {
                        return setActiveTab(null);
                      }
                      setActiveTab(i);
                    }}
                    className={`flex cursor-pointer rounded-lg py-3 w-full ${
                      activeTab === i
                        ? "text-white bg-secondary"
                        : "text-secondary border-2 border-secondary"
                    }`}
                  >
                    <div className="rounded-[8px] px-5 py-2 text-center w-full">
                      {item.tab}
                    </div>
                  </div>
                  {activeTab === i && (
                    <div className="mobile:mt-5 mb-10 mt-[-6rem]">
                      <div>
                        <div className="flex mobile:flex-col mobile:gap-0 items-center gap-10 mb-10">
                          <div className="flex items-center justify-center">
                            <Image
                              src="/assets/details.png"
                              className="w-[200px] h-auto object-contain"
                              alt=""
                              height={500}
                              width={500}
                            />
                          </div>
                          <span>
                            <h1 className="text-3xl text-secondary my-4 font-[600] text-center mb-4">
                              {proposerDataone.tabs[activeTab]?.heading}
                            </h1>
                          </span>
                        </div>

                        {activeTab === 0 && (
                          <div className=" flex w-full gap-10 flex-wrap items-center justify-center">
                            {data.map((item, index) => (
                              <MedicalExpensesCard
                                key={index} // Add a unique key when rendering in a list
                                title={item.title}
                                totalExpenses={item.expense}
                                deductible={item.deductible}
                              />
                            ))}
                          </div>
                        )}
                        {activeTab === 1 && <Faaq />}
                        {activeTab === 2 && <FaaqOne />}
                        {activeTab === 3 && <FaaqTwo />}
                      </div>
                      <div className="mt-10 w-full flex justify-center">
                        <Link href="/proposer-details" className="w-full">
                          <button className="px-14 py-3 w-full bg-[#F5AB01] text-white rounded-md">
                            Proceed to buy
                          </button>
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailsMobile;
