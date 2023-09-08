import React from "react";
import DetailsDesktop from "./components/DetailsDesktop";
import DetailsMobile from "./components/DetailsMobile";

const Details = () => {
  return (
    <div>
      <div className="mobile:hidden">
        <DetailsDesktop />
      </div>
      <div className="desktop:hidden">
        <DetailsMobile />
      </div>
    </div>
  );
};

export default Details;
