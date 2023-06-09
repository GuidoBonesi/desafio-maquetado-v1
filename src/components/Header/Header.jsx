import React from "react";
import { OrderByFilter } from "../../commons/OrderByFilter/OrderByFilter";
import { TopBannerBenefits } from "../../commons/TopBannerBenefits/TopBannerBenefits";
import { TopBannerHome } from "../../commons/TopBannerHome/TopBannerHome";
import { Navbar } from "../Navbar/Navbar";

export const Header = () => {
  return (
    <>
      <Navbar />
      <TopBannerHome />
      <TopBannerBenefits />
    </>
  );
};
