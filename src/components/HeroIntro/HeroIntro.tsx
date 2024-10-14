import React from "react";
import Link from "next/link";
import Image from "next/image";
import RightArrow from "../../../public/right_arrow.svg";

const HeroIntro = () => {
  return (
    <div className="py-8 md:py-24">
      <div className="p-4 md:p-0">
        <p className="text=[#7C7C7C] italic text-lg py-4">
          Invest In Bitcoin With Long-Term Confidence.
        </p>
        <div>
          <h3 className="text-3xl md:text-5xl leading-10 md:leading-[62px]">
            BitPension is The Best Place To
            <span className="text-[#0B7A38] border-[#0B7A38] border-l-4 border-r-4 px-2">Buy Bitcoin</span> <br />
            With 100% Full Reserve, Personalize Custody, <br />
            And Zero Setup Fees.
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <Link href="/signup" className="text-[#7C7C7C] text-lg underline py-4">Buy Bitcoin Now!</Link>
          <Image src={RightArrow} alt="Right Arrow Icon" />
        </div>
      </div>
    </div>
  );
};

export default HeroIntro;
