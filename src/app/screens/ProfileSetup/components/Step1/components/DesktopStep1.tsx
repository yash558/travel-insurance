import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useProfileSetupStateContext } from "../../../context/ProfileSetupStateContext";

const DesktopStep1 = ({
  data,
  countLeftInsuranceFor,
  onChangeHandler,
}: {
  data: any;
  countLeftInsuranceFor: number;
  onChangeHandler: any;
}) => {
  const { profileSetupStates, setProfileSetupStates } =
    useProfileSetupStateContext();

  const moreMembersHandler = () => {
    setProfileSetupStates((prevStates: any) => ({
      ...prevStates,
      step1States: {
        ...profileSetupStates.step1States,
        moreMembersClicked: true,
      },
    }));
  };

  return (
    <div>
      <div className="text-[24px] w-[860px] mobile:hidden grid grid-rows-3 grid-cols-3 gap-5 mobile:grid-cols-2">
        {data?.insuranceFor?.map((item: any, i: number) => {
          if (i > 7 && !profileSetupStates?.step1States?.moreMembersClicked) {
            countLeftInsuranceFor++;
            if (countLeftInsuranceFor === 3) {
              return (
                <div
                  onClick={() => moreMembersHandler()}
                  key={item?.relationId}
                  className="border-[2px] whitespace-nowrap cursor-pointer opacity-[55%] w-full font-[300] gap-2 rounded-[8px] flex items-center ps-5 px-[50px] py-2 border-[#2E2E2E] text-[#2E2E2E]"
                >
                  <span className="bg-primary w-[20px] h-[20px] p-[2px] rounded-full flex items-center justify-center text-white">
                    <AiOutlinePlus className="w-[20px] h-[20px]" />
                  </span>
                  More Members
                </div>
              );
            }
            if (!profileSetupStates?.step1States?.moreMembersClicked) {
              return;
            }
          }

          return (
            <div
              key={item?.relationId}
              className="border-[2px] whitespace-nowrap  w-full opacity-[55%] font-[300] gap-2 rounded-[8px] flex items-center ps-5 px-10 py-2 border-[#2E2E2E] text-[#2E2E2E]"
            >
              <input
                onChange={() =>
                  onChangeHandler({
                    relationId: item?.relationId,
                  })
                }
                className="w-[20px] h-[20px] border-[2px] rounded-[5px]"
                type="checkbox"
                required
              />
              <span>
                {item.relationType?.charAt(0).toUpperCase() +
                  item.relationType?.slice(1)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopStep1;
