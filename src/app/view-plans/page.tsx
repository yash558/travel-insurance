"use client";
import React from "react";
import ViewPlans from "../screens/ViewPlans/ViewPlans";
import HomeStateContext from "../screens/ViewPlans/context/HomeStateContext";

const Page = () => {
  return (
    <div>
      <HomeStateContext>
        <ViewPlans />
      </HomeStateContext>
    </div>
  );
};

export default Page;
