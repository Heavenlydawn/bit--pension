import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button_Clear from "../Buttons/Button_Clear";
import Business from "../../../public/business.svg";
import Tick from "../../../public/tick.svg";

const Holdings_Info = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute right-5 -top-20">
          <Image src={Business} alt="Business Icon" />
        </div>
        <p className="text-3xl font-semibold leading-10 mb-4">
          <span className="text-[#0B7A38]"> Bitpension:</span> Increase Your
          <br /> Employee Benefits With The <br />
          Ultimate Long-Term Savings <br />
          Platform.
        </p>
      </div>

      <section className="flex flex-col gap-6">
        <div className="flex gap-4">
          <div>
            <Image src={Tick} alt="Tick Icon" />
          </div>
          <div>
            <p className="text-[#454444] text-lg leading-7">
              Inflation is eating up your hard-earned balance.
              <br /> Adding Bitcoin to your balance sheet will position
              <br /> your business for long-term capital gains.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <Image src={Tick} alt="Tick Icon" />
          </div>
          <div>
            <p className="text-[#454444] text-lg leading-7">
              <span className="text-[#0B7A38]"> Bitpension </span> Personalize
              Custody makes it easy <br />
              for you to incorporate Bitcoin into your
              <br />
              Financial Strategy.
            </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div>
            <Image src={Tick} alt="Tick Icon" />
          </div>
          <div>
            <p className="text-[#454444] text-lg leading-7">
              Securely Invest in Bitcoin on a recurring basis<br /> with Our Expert
              Guidance
            </p>
          </div>
        </div>
      </section>

      <div className="mt-6">
        <Link href="/signup">
          <Button_Clear text="Get Started" />
        </Link>
      </div>
    </div>
  );
};

export default Holdings_Info;
