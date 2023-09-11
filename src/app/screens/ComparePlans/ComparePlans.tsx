import Container from "@/app/container/Container";
import React, { useState } from "react";
import Plans from "./components/Plans";
import { compariableData, products } from "@/app/data/home/plans";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
const ComparePlans = () => {
  const [showDetails, setShowDetails] = useState<any>(null);
  const [currentDetails, setCurrentDetails] = useState<any>(null);

  return (
    <div className="bg-[#f4f5f7] pb-10">
      <Container>
        <Plans />

        {compariableData?.map((item3: any, k: any) => {
          return (
            <div key={k}>
              <div className="bg-quaternary my-[25px] h-[1px] w-full opacity-25" />
              <div>
                <div className="flex w-full items-center justify-start gap-20">
                  <div className="flex items-center mobile:flex-wrap gap-[60px] mobile:gap-5 w-full">
                    <div
                      onClick={() => {
                        if (showDetails && currentDetails === k) {
                          return setShowDetails(null);
                        }
                        setShowDetails(item3.details);
                        setCurrentDetails(k);
                      }}
                      className="w-[290px] cursor-pointer justify-between mobile:w-full flex items-center gap-10"
                    >
                      <h3 className="text-secondary font-[600]">
                        {item3.name}
                      </h3>
                      {showDetails && currentDetails === k ? (
                        <IoIosArrowUp />
                      ) : (
                        <IoIosArrowDown />
                      )}
                    </div>
                    <div className="desktop:hidden">
                      {showDetails && currentDetails === k && (
                        <div className="flex flex-col gap-2">
                          <span className="text-quaternary font-semibold">
                            ${showDetails?.price} Deductible: $
                            {showDetails.deductible}
                          </span>
                          <span className="text-quaternary">
                            {showDetails.desc}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex flex-wrap mobile:grid mobile:grid-cols-2 gap-[78px] mobile:gap-5 mobile:justify-between justify-start w-full">
                      {products?.map((item, i) => {
                        if (i === 0) {
                          return;
                        }
                        return (
                          <div key={i}>
                            <div>
                              {item.slug === "care-supreme-direct" && (
                                <div className="bg-white shadow-md w-[200px] mobile:w-full text-center font-semibold px-5 py-3 rounded-md">
                                  Rs. {item.price}
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mobile:hidden mobile:w-full w-[280px]">
                {showDetails && currentDetails === k && (
                  <div className="flex flex-col gap-2">
                    <span className="text-quaternary font-semibold">
                      ${showDetails?.price} Deductible: $
                      {showDetails.deductible}
                    </span>
                    <span className="text-quaternary">{showDetails.desc}</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </Container>
    </div>
  );
};

export default ComparePlans;
