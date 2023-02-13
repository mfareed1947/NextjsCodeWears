/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div>
        <div className=' relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[600px] 2xl:h-[800px]'>
        <Image src={'/ecommercenews.jpg'} layout='fill' objectFit="cover" />
    </div>
    </div>
  )
}

export default Banner