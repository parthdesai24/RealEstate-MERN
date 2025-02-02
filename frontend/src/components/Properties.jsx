import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { VscSettings } from "react-icons/vsc";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper/modules";
import Item from "./Item";
import useProperties from "../hooks/useProperties";
import { PuffLoader } from "react-spinners";

const Properties = () => {
  const { data, isError, isLoading } = useProperties();
  // console.log(data)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  if(isError){
    return(
      <div>
        <span>Error while fetching data</span>
      </div>
    )
  }

  if(isLoading){
    return(
      <div className="h-64 flexCenter">
        <PuffLoader  height="80" width="80" radius={1} color="#555" aria-label="puff-loading"/>
      </div>
    )
  }
  return (
    <section className="max-padd-container">
      <div className="py-16 xl:py-28 rounded-3xl">
        <span className="medium-18">Your Future Home Awaits!</span>
        <h2 className="h2">Find Your Dream Here</h2>
        <div className="flexBetween mt-8 mb-6">
          <h5>
            <span className="font-bold">Showing 1-9</span> out of 3k properties
          </h5>
          <Link to={"/"} className="bg-secondary text-white text-2xl rounded-md p-2 flexCenter">
            <VscSettings />
          </Link>
        </div>
        {/* CONTAINER */}
        <Swiper
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            600: {
              slidesPerView : 2,
              spaceBetween : 30,
            },
            1124: {
              slidesPerView : 3,
              spaceBetween : 30,
            },
            1300: {
              slidesPerView : 4,
              spaceBetween : 30,
            }
          }}
          modules={[Autoplay]}
          className="h-[488px] md:h-[533px] xl:h-[422px] mt-5"
        >
          {data?.length > 0&& data?.slice(0,6).map((property) => (
            <SwiperSlide key={property.id}>
              <Item property={property}/>
            </SwiperSlide>  
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Properties;
