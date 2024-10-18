import React from 'react'
import Image from 'next/image'
import HeroThumb from "../../../public/videoframe.svg"
import HeroThumbMob from "../../../public/heroThumbMob.png"

const Hero = () => {
  return (
    <div className="pb-9">
        <Image src={HeroThumb} alt="Bitcoin Image" className="hidden md:block" />
        <Image src={HeroThumbMob} alt="Bitcoin Image" className="block md:hidden" />
    </div>
  )
}

export default Hero