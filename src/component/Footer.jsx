import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { FaGoogle , FaTwitter , FaInstagram } from "react-icons/fa";
import footer_img from '../assets/Image2.png'

const Footer = () => {
  return (
    <div className='bg-[#f99f1c] h-[300px] mt-10'>
        <div className='flex justify-between max-w-screen-lg mx-auto items-center'>
            <div className="flex max-w-lg w-full pt-10 px-6 justify-between flex-col">
                <div className="max-w-lg w-full relative">
                    <input type="text" placeholder="Enter your news letter" className="input input-bordered input-md w-full max-w-lg text-sm rounded-2xl focus:outline-none bg-[#EEEFF0]" />
                    <button className="btn btn-sm bg-[#FC6011] border-none hover:bg-[#FC6011] absolute right-2 top-2 font-medium text-white">
                        Subscribe <GoArrowRight />
                    </button>
                </div>

                <div className="flex md:flex-row flex-col-reverse items-center md:pt-24 pt-10 justify-between">
                    <span className="md:flex py-5 gap-3 md:text-left text-center flex-col md:space-y-0  md:pt-0 pt-8 space-y-5">
                        <a style={{ fontFamily: "'Baloo 2', 'CM Sans Serif 2012', sans-serif",}} className=" text-black xl:text-4xl text-3xl  font-bold" href='/'> pti<span className='text-[#FC6011]'>.</span> </a>
                        <p className="text-xs text-[#000] font-bold">Copyright@Trip.All Right Reserved</p>
                    </span>

                    <div className="flex gap-4 items-center">
                        <span className="md:bg-[#FEDEBC] bg-[#FC6011] text-[#FEDEBC] cursor-pointer p-2 rounded-full">
                            <FaGoogle className="text-lg md:text-[#FC6011]" />
                        </span>
                        <span className="md:bg-[#FEDEBC] bg-[#FC6011] text-[#FEDEBC] cursor-pointer p-2 rounded-full">
                            <FaTwitter className="text-lg md:text-[#FC6011]" />
                        </span>
                        <span className="md:bg-[#FEDEBC] bg-[#FC6011] text-[#FEDEBC] cursor-pointer p-2 rounded-full">
                            <FaInstagram className="text-lg md:text-[#FC6011]" />
                        </span>
                    </div>
                </div>
            </div>
            <div className="md:block hidden">
                <img src={footer_img} alt="" className="w-3/5 mx-auto" />
            </div>
        </div>
    </div>
  )
}

export default Footer