import React from "react";
import Image from "next/image";
import Link from "next/link";
import { bitpensioncoin } from "../Data/WhyBitcoin";
import Button_Yellow from "../Buttons/Button_Yellow";
const BitChatRight = () => {
  return (
    <div className="md:px-4 md:px-14 md:w-[674px]">
      <div>
        <h1 className="text-3xl font-semibold my-8">
          Why
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#FECA00] to-[#D19228]">
          Bitcoin -
          </span>
          <br />
          Better Asset Class
        </h1>
        <Link href="/signup">
          <Button_Yellow text="Buy Bitcoin" />
        </Link>
      </div>
      <div className="grid grid-cols md:grid-cols-2 justify-center gap-4">
        {bitpensioncoin.map((bitpensioncoin, index) => (
          <div
            key={index}
            className="rounded-lg 
            shadow-sm hover:shadow-md transition-shadow p-8"
          >
            <Image
              src={bitpensioncoin.icon}
              alt={`Logo of ${bitpensioncoin.icon}`}
              width={50}
              height={50}
              className="object-contain"
            />
            <h2 className="text-2xl font-semibold py-4">
              {bitpensioncoin.title}
            </h2>
            <p className="text-lg text-[#7C7C7C] italic">
              {bitpensioncoin.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BitChatRight;
