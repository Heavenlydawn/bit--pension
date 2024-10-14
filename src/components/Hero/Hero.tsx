import React from 'react'
import Image from 'next/image'
import HeroThumb from "../../../public/videoframe.svg"

const Hero = () => {
  return (
    <div className="pb-9">
        <Image src={HeroThumb} alt="Bitcoin Image" />
    </div>
  )
}

export default Hero