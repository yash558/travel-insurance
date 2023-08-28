import Container from "@/app/container/Container";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { TbFilter } from "react-icons/tb";
import { useHomeStateContext } from "../../../context/HomeStateContext";
import DesktopAllFilters from "./DesktopAllFilters";

const DesktopFilters = ({ filters }: { filters: any }) => {
  const { homeStates, setHomeStates } = useHomeStateContext();

  return (
    <div className="bg-white mobile:hidden">
      <DesktopAllFilters filters={filters} />

      <Container>
        <div className="flex flex-wrap justify-between w-full py-7 text-[#2E2E2EA6]">
          {filters?.map((item: any, i: number) => {
            if (item.type === "popup") {
              return (
                <div key={i}>
                  <button
                    onClick={() => {
                      setHomeStates((prevStates: any) => ({
                        ...prevStates,
                        filterStates: {
                          ...prevStates.filterStates,
                          currentPopUp: {
                            title: item.title,
                            options: item.options,
                          },
                          showPopUp: true,
                        },
                      }));
                    }}
                    className="border-[2px] w-full flex items-center justify-between border-secondary rounded-[40px] py-2 px-4"
                  >
                    {item.title}
                    <IoIosArrowDown className="mx-2" />
                  </button>
                </div>
              );
            } else if (item.type === "btn") {
              if (item.icon) {
                return (
                  <div key={i}>
                    <button
                      onClick={() =>
                        setHomeStates((prevStates) => ({
                          ...prevStates,
                          filterStates: {
                            ...prevStates.filterStates,
                            showAllFilters:
                              !homeStates.filterStates.showAllFilters,
                          },
                        }))
                      }
                      className="border-[2px] w-[200px] flex items-center gap-3 border-secondary rounded-[40px] py-2 px-4"
                    >
                      <TbFilter />
                      {item.title}
                    </button>
                  </div>
                );
              } else {
                return (
                  <div key={i}>
                    <button className="border-[2px] w-full flex items-center gap-3 border-secondary rounded-[40px] py-2 px-4">
                      {item.title}
                    </button>
                  </div>
                );
              }
            }
          })}
        </div>
      </Container>
    </div>
  );
};

export default DesktopFilters;
