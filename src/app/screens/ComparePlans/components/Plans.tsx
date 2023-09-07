import { products } from "@/app/data/home/plans";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Plans = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="mt-10 flex flex-col mobile:flex-wrap items-center gap-20">
          <div className="flex items-center justify-center flex-col">
            <p className="text-[#0A225F] text-lg">
              Who would you like to insure?
            </p>
            <div className="flex items-center justify-center bg-[#36B37E] h-[2px] w-[40%]"></div>
            <h3 className="text-secondary font-[600] md:text-4xl text-center text-2xl">
              Find top travel insurance plans
            </h3>
          </div>
          <div className="flex justify-between w-full flex-wrap mobile:justify-center gap-2 mobile:gap-5">
            {products?.map((item, i) => (
              <div
                key={i}
                className="flex bg-white shadow-md md:w-[250px]  p-5 flex-col"
              >
                <div className="flex justify-end">
                  <RxCross1 className="cursor-pointer" />
                </div>
                <Image
                  src={item.img}
                  width={500}
                  height={500}
                  className="w-[100px] mx-auto h-[100px] object-contain"
                  alt={item.name}
                />

                <div className="w-full bg-gray-300 h-[1px]" />

                <h5 className="text-quaternary mt-2 text-center line-through">
                  Rs. {item.price}
                </h5>
                <h4 className="text-lg font-semibold text-center">
                  Rs.{" "}
                  {Math.floor(
                    item.price - (item.discount / 100) * item.discount
                  )}
                </h4>

                <div className="mx-auto mt-2 w-full">
                  <Link href="/review-plan">
                    <button className="bg-primary w-full rounded-[6px] py-1 px-4 text-white text-xs font-[600]">
                      Select
                    </button>
                  </Link>
                </div>
                <div className="w-[100px] mx-auto mt-5 bg-gray-300 h-[2px]" />
              </div>
            ))}
            <div className="relative bg-white shadow-md">
              <div className="absolute desktop:hidden right-0 p-3 flex">
                <AiOutlineArrowRight size={20} />
              </div>
              <div className="flex h-full cursor-pointer justify-center items-center gap-5 w-[250px] mobile:w-[165px] p-5 flex-col">
                <div className="w-[100px] h-[100px] rounded-full border-2 flex items-center justify-center border-primary">
                  <span className="text-7xl text-primary mt-[-5px]">+</span>
                </div>

                <span className="text-secondary text-center font-[600]">
                  Add plan to compare
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
