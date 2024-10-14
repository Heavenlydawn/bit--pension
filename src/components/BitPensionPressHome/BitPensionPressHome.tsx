import React from "react";
import BitPensionPressHomeLeft from "./BitPensionPressHomeLeft";
import BitPensionPressHomeRight from "./BitPensionPressHomeRight";

const BitPensionPressHome = () => {
  return (
    <div className="flex items-center justify-around flex-col md:flex-row px-8 md:p-0">
      <BitPensionPressHomeLeft />
      <BitPensionPressHomeRight />
    </div>
  );
};

export default BitPensionPressHome;
