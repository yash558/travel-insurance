import Container from "@/app/container/Container";
import React, { useState } from "react";
import Plans from "./components/Plans";
import { compariableData, products } from "@/app/data/home/plans";
import { IoIosArrowDown } from "react-icons/io";
const ComparePlans = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [currentDetails, setCurrentDetails] = useState<any>(null);

  return (
    <div className="bg-[#f4f5f7] pb-10">
      <Container>
        <Plans />

        {products?.map((item3: any, k: any) => (
          <div key={k}>
            <div className="bg-quaternary my-[25px] h-[1px] w-full opacity-25" />
            <div>
              <div className="flex w-full items-center justify-start gap-20">
                <div className="flex items-center mobile:flex-wrap gap-[60px] mobile:gap-5 w-full">
                  <div
                    onClick={() => {
                      setShowDetails(true);
                      setCurrentDetails(k);
                    }}
                    className="w-[290px] cursor-pointer justify-between mobile:w-full flex items-center gap-10"
                  >
                    <h3 className="text-secondary font-[600]">{item3.name}</h3>
                    <IoIosArrowDown />
                  </div>
                  <div className="flex justify-between w-full">
                    {products?.map((item, i) => (
                      <div key={i}>
                        <div>
                          {item.slug === "care-supreme-direct" && (
                            <div className="md:flex md:flex-wrap   grid grid-cols-3 gap-10 mobile:gap-2">
                              <div className="bg-white shadow-md w-[200px] text-center font-semibold px-5 py-3 rounded-md">
                                Rs. {item.price}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {showDetails && showDetails === k && <div>{}</div>}
          </div>
        ))}
      </Container>
    </div>
  );
};

export default ComparePlans;
