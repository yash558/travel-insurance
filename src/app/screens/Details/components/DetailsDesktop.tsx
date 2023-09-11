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
const DetailsDesktop = () => {
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
      <div className="bg-white shadow-md rounded-lg p-6">
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
    <div className="">
      <Container>
        <div>
          <div className="py-10">
            <Link href="/view-plans">
              <AiOutlineArrowLeft className="cursor-pointer" size={24} />
            </Link>
          </div>
          <div className="flex gap-10 mobile:flex-wrap ">
            <div className="flex flex-col justify-center pr-2 h-full py-[90px] mobile:w-full mobile:flex-row font-[600] md:gap-5 gap-2 md:mt-1 md:pr-[50px] ps-0 mobile:p-5 md:bg-secondary bg-white rounded-[35px] mobile:rounded-none rounded-s-none">
              {proposerDataone?.tabs?.map((item, i) => (
                <div
                  onClick={() => setActiveTab(i)}
                  key={i}
                  className={`flex cursor-pointer w-[300px] ${
                    activeTab === i
                      ? "text-white bg-secondary md:bg-white md:text-secondary rounded-r-[35px] "
                      : "text-secondary border border-secondary md:bg-secondary md:text-white bg-white"
                  }`}
                >
                  <div className="md:text-xl mobile:text-xs rounded-[8px] px-5 py-2">
                    {item.tab}
                  </div>
                </div>
              ))}
            </div>
            <div className="mobile:mt-5 mb-10 mt-[-6rem]">
              <div>
                <div className="flex items-center gap-10 mb-10">
                  <div className="flex items-center justify-center">
                    <Image
                      src="/assets/details.png"
                      className="w-[200px] h-auto object-contain"
                      alt=""
                      height={500}
                      width={500}
                    />
                  </div>
                  <h1 className="text-3xl text-secondary my-4 font-[600] text-center mb-4">
                    {proposerDataone.tabs[activeTab]?.heading}
                  </h1>
                </div>

                {activeTab === 0 && (
                  <div className="flex flex-wrap gap-5">
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
              <div className="flex items-end md:justify-end justify-center mt-8 md:mr-10">
                <Link href="/proposer-details">
                  <button className="px-14 py-3 bg-[#F5AB01] text-white  rounded-md ">
                    Proceed to buy
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DetailsDesktop;
