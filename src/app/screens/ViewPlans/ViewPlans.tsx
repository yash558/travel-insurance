import React, { useEffect } from "react";
import InsuredDetails from "./components/InsuredDetails";
import Filter from "./components/Filters/Filter";
import Companies from "./components/Companies";
import Products from "./components/Products";
import { useHomeStateContext } from "./context/HomeStateContext";
import Image from "next/image";
import PopUp from "./shared/PopUp";

const ViewPlans = () => {
  const { homeStates, setHomeStates } = useHomeStateContext();

  useEffect(() => {
    if (
      homeStates?.filterStates?.showCovers ||
      homeStates?.filterStates?.showAllFilters
    ) {
      document.body.style.overflowY = "hidden";
      return;
    }
    document.body.style.overflowY = "";
  }, [
    homeStates?.filterStates?.showCovers,
    homeStates?.filterStates?.showAllFilters,
  ]);

  return (
    <div className="bg-[#f4f5f7]">
      {homeStates?.filterStates?.showPopUp &&
        homeStates?.filterStates?.currentPopUp?.title === "Age" && (
          <PopUp
            isOpen={homeStates?.filterStates?.showPopUp}
            onClose={() =>
              setHomeStates((prevStates: any) => ({
                ...prevStates,
                filterStates: {
                  ...prevStates.filterStates,
                  showPopUp: false,
                },
              }))
            }
            title={homeStates?.filterStates?.currentPopUp.title}
          >
            <div className="px-6 py-3">
              <div className="h-[200px] flex flex-col gap-5 overflow-y-auto">
                {homeStates?.filterStates?.currentPopUp?.options?.map(
                  (item: any, i: number) => {
                    return (
                      <div
                        key={i}
                        className="p-2 rounded-[6px] border-2 border-primary flex items-center justify-between gap-5"
                      >
                        <span>{item.insurer}</span>
                        <div>
                          <input
                            defaultValue="1997-04-15"
                            type="date"
                            className="text-center p-2"
                          />
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
              <div>
                <div className="mt-5 flex justify-between">
                  <button
                    onClick={() =>
                      setHomeStates((prevStates: any) => ({
                        ...prevStates,
                        filterStates: {
                          ...prevStates.filterStates,
                          selectedOption: null,
                          showPopUp: false,
                        },
                      }))
                    }
                    className="text-primary px-10 py-1 font-[600]"
                  >
                    Cancel
                  </button>
                  <button className="bg-primary px-10 py-1 text-white font-[600] rounded-[10px]">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </PopUp>
        )}

      {homeStates?.filterStates?.showPopUp &&
        homeStates?.filterStates?.currentPopUp?.title !== "Age" &&
        homeStates?.filterStates?.currentPopUp?.title !== "Pin Code" && (
          <PopUp
            isOpen={homeStates?.filterStates?.showPopUp}
            onClose={() =>
              setHomeStates((prevStates: any) => ({
                ...prevStates,
                filterStates: {
                  ...prevStates.filterStates,
                  showPopUp: false,
                },
              }))
            }
            title={homeStates?.filterStates?.currentPopUp.title}
          >
            <div className="px-6 py-3 mobile:px-3">
              <div className="h-[200px] overflow-y-auto overflow-x-hidden">
                {homeStates?.filterStates?.currentPopUp?.options?.map(
                  (item: any, i: number) => {
                    return (
                      <div key={i} className="py-1">
                        <div className="px-6 w-[310px] mobile:w-full rounded-[6px] flex gap-3 py-2 border border-primary">
                          {homeStates?.filterStates?.currentPopUp?.title ===
                          "Plan Type" ? (
                            <div className="flex items-center gap-2">
                              <input
                                onChange={() =>
                                  setHomeStates((prevStates: any) => ({
                                    ...prevStates,
                                    filterStates: {
                                      ...prevStates.filterStates,
                                      selectedOption: i,
                                    },
                                  }))
                                }
                                name="options"
                                type="checkbox"
                              />
                              {item.img && (
                                <Image
                                  className="object-contain"
                                  src={item.img}
                                  width={40}
                                  height={40}
                                  alt="Niva"
                                />
                              )}

                              <span>{item.item}</span>
                            </div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <input
                                onChange={() =>
                                  setHomeStates((prevStates: any) => ({
                                    ...prevStates,
                                    filterStates: {
                                      ...prevStates.filterStates,
                                      selectedOption: i,
                                    },
                                  }))
                                }
                                name="options"
                                type="radio"
                              />
                              {item.img && (
                                <Image
                                  className="object-contain"
                                  src={item.img}
                                  width={40}
                                  height={40}
                                  alt="Niva"
                                />
                              )}
                              {homeStates?.filterStates?.currentPopUp?.title ===
                              "Sum Insured" ? (
                                <span>${item.item}</span>
                              ) : (
                                <span>{item.item}</span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
              <div>
                <div className="mt-5 flex justify-between">
                  <button
                    onClick={() =>
                      setHomeStates((prevStates: any) => ({
                        ...prevStates,
                        filterStates: {
                          ...prevStates.filterStates,
                          selectedOption: null,
                          showPopUp: false,
                        },
                      }))
                    }
                    className="text-primary px-10 py-1 font-[600]"
                  >
                    Cancel
                  </button>
                  <button className="bg-primary px-10 py-1 text-white font-[600] rounded-[10px]">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </PopUp>
        )}

      <div>
        <InsuredDetails />
        <Filter />
        {/* <Companies /> */}
        <Products />
      </div>
    </div>
  );
};

export default ViewPlans;
