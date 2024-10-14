import React from "react";
import Image from "next/image";
import BitWallet from "../../../public/Bitcoin wallet icon.svg";
import Arrow from "../../../public/rightandleftarrow.svg";
import BitSecurity from "../../../public/House Lock.svg";
import MobileSecurity from "../../../public/mobileviewSecurity.svg"

const BitPensionSecurity = () => {
  return (
    <div className="flex items-center justify-around flex-col md:flex-row bg-[#F8F8FA] p-4 md:px-36 md:py-28 my-20">
      <div>
        <h2 className="text-2xl md:text-3xl font-semibold leading-10">
          <span className="text-[#0B7A38]">Bitpension</span> uses enterprise-
          <br />
          Grade security setup and <br />
          custodian partner.
        </h2>
      </div>
      <div className="flex items-center justify-center gap-8">
        <Image src={BitWallet} alt="BitWallet"  className="hidden md:flex" />
        <Image src={Arrow} alt="Arrow"  className="hidden md:flex" />
        <Image src={BitSecurity} alt="BitSecurity"  className="hidden md:flex" />
        <Image src={MobileSecurity} alt="BitSecurity" className="flex md:hidden" />
      </div>
    </div>
  );
};

export default BitPensionSecurity;