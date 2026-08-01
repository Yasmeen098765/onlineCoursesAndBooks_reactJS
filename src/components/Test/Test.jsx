import "./test.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

// import required modules
import {
  EffectCoverflow,
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";

function Test() {
  return (
    <section className="container mx-auto px-10 my-10">
      <div className=" my-5 flex justify-center items-center gap-3">
        <button className="prev border rounded py-3 px-5 cursor-pointer transition duration-300 hover:text-white hover:bg-amber-300">
          prev
        </button>
        <button className="next border rounded py-3 px-5 cursor-pointer transition duration-300 hover:text-white hover:bg-amber-300">
          next
        </button>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        autoplay={{
          delay: 2500,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        pagination={{
          clickable: true,
          clickableClass: "pagination-container",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        navigation={{
          prevEl: ".prev",
          nextEl: ".next",
        }}
        slidesPerView={4}
        spaceBetween={10}
        //minum width:
        // breakpoints={{
        //   0: {
        //     slidesPerView: 1,
        //     spaceBetween: 0,
        //   },
        //   640: {
        //     slidesPerView: 2,
        //     spaceBetween: 20,
        //   },
        //   768: {
        //     slidesPerView: 3,
        //     spaceBetween: 40,
        //   },
        //   900: {
        //     slidesPerView: 4,
        //     spaceBetween: 10,
        //   },
        // }}
        modules={[EffectCoverflow, Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-[50vh] text-center bg-blue-100 flex justify-center items-center text-white text-2xl">
            one
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[50vh] text-center bg-blue-200 flex justify-center items-center text-white text-2xl">
            two
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[50vh] text-center bg-blue-300 flex justify-center items-center text-white text-2xl">
            three
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[50vh] text-center bg-blue-400 flex justify-center items-center text-white text-2xl">
            four
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[50vh] text-center bg-blue-500 flex justify-center items-center text-white text-2xl">
            five
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[50vh] text-center bg-blue-600 flex justify-center items-center text-white text-2xl">
            six
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[50vh] text-center bg-blue-700 flex justify-center items-center text-white text-2xl">
            seven
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="h-[50vh] text-center bg-blue-800 flex justify-center items-center text-white text-2xl">
            eight
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Test;
