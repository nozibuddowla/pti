import React from 'react';
import hero_img from '../assets/Image1.png'

const Hero = () => {
  return (
    <div className='md:py-20'>
        <div className="hero min-h-screen md:bg-[#F99F1C] rounded-3xl max-w-screen-xl md:px-4 px-0 xl:h-[350px]">
            <div className="hero-content flex-col-reverse md:flex-row-reverse pb-0">
                <img src={hero_img} className="md:max-w-sm rounded-lg z-0 md:bg-transparent bg-[#FD9460]" alt='hero_image' />
                <div className='md:p-10 p-2'>
                    <h1 className="xl:text-5xl lg:text-4xl text-2xl md:text-[#FFF3EC] capitalize font-medium">Deliver Food To Your Door Step</h1>
                    <p className="py-6 xl:text-xl lg:text-base text-sm md:text-[#f3dbb7] text-gray-600">Authentic Food, Quick Service, Fast Delivery</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero