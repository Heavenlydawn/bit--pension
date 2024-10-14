import React from "react";
import Image from "next/image";
import Link from "next/link";
import Private from "../../../public/private_individual.svg";
import Tick from "../../../public/tick.svg";
import Button_Clear from "../Buttons/Button_Clear";

const PensionStatisticsLeft = () => {
  return (
    <div>
      <div>
        <div>
          <div className="relative">
            <div className="absolute right-5 -top-20">
              <Image src={Private} alt="Private Icon" />
            </div>
            <p className="text-3xl font-semibold leading-10 mb-4">
              Self-Employed or An
              <br /> Entrepreneur? Take Control of
              <br /> Your Pension with BitPension
            </p>
          </div>

          <section className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div>
                <Image src={Tick} alt="Tick Icon" />
              </div>
              <div>
                <p className="text-[#454444] text-lg leading-7">
                  Whether you are self-employed, an entrepreneur,
                  <br /> or simply looking for a more flexible and
                  <br /> innovative way to save for retirement
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <Image src={Tick} alt="Tick Icon" />
              </div>
              <div>
                <p className="text-[#454444] text-lg leading-7">
                  Our expert team is here to serve sophisticated <br />
                  investors buying more than
                  <span className="underline text-[#0B7A38]">$10,000</span>.
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
      </div>
    </div>
  );
};

export default PensionStatisticsLeft;
