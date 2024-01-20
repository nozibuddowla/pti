import React, { useRef } from 'react'
import useFoods from '../../Hooks/useFoods';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import Slider from 'react-slick';

const PopularCard = () => {
    const [foods] = useFoods();
    const foodItem = foods?.Items;
    const isPopular = foodItem?.filter((food) => food.IsPopular === true);
    const sliderRef = useRef(null);

    const settings = {
        infinite: true,
        autoplaySpeed: 2000,
        slidesToShow: 5,
        slidesToScroll: 1,
        pauseOnHover: true,
        responsive: [
        {
            breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        ]
    };

    const handleNext = () => {
        if (sliderRef.current) {
        sliderRef.current.slickNext();
        }
    };

    const handlePrev = () => {
        if (sliderRef.current) {
        sliderRef.current.slickPrev();
        }
    };

    return (
        <div className="overflow-x-hidden">
            <div className="flex pb-4 items-center justify-end">
                <h1 onClick={handlePrev}>
                    <IoIosArrowBack className="md:text-3xl text-lg cursor-pointer" />
                </h1>
                <h1 onClick={handleNext} >
                    <IoIosArrowForward className="md:text-3xl text-lg cursor-pointer" />
                </h1>
            </div>
            <Slider ref={sliderRef} {...settings}>
                {isPopular?.map((item) => (
                  <div key={item?.Id} className="custom-slide-wrapper">
                      <img src={item?.ImageUrl} alt="" className="rounded-xl md:w-[250px] xl:h-[300px] md:h-[250px] w-[150px] h-[150px] object-cover"
                      />
                      <h1 className="text-center md:text-base text-sm">{item?.Name}</h1>
                  </div>
                ))}
            </Slider>
        </div>
    )
}

export default PopularCard