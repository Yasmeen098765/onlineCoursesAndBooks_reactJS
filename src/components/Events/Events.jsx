import Title from "../../common/Title/Title";
import "./Events.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import icons
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import grid1 from "../../assets/OnlineCourses/grid-type-01.jpg";
import grid2 from "../../assets/OnlineCourses/grid-type-02.jpg";
import grid3 from "../../assets/OnlineCourses/grid-type-04.jpg";
import grid4 from "../../assets/OnlineCourses/grid-type-05.jpg";
import EventCard from "./EventCard/EventCard";

function Events() {
  return (
    <section className="events pb-10 pt-16 min-[400px]:pt-24 min-[400px]:pb-20 bg-linear-to-r from-indigo-300 to-violet-400">
      <div className="mx-auto px-2 sm:px-3 md:px-4 lg:px-5">
        <div className="flex flex-col items-center gap-10 min-[300px]:gap-15">
          <Title
            MainText={"STIMULATED TO TAKE PART IN?"}
            subText={"Upcoming Events"}
            colorText={"text-white"}
            bgText={"bg-[#ffffff21]"}
            width={true}
            items={"items-center"}
            topOffset={"text-center"}
            colorText2={"text-white"}
          />
          <div className="eventsBox w-[92%] relative">
            <Swiper
              pagination={{
                clickable: true,
                clickableClass: "pagination-container",
                bulletClass: "swiper-pagination-bullet",
                bulletActiveClass: "swiper-pagination-bullet-active",
              }}
              autoplay={{
                delay: 2500,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 0,
                },
                500: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1000: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              navigation={{
                prevEl: ".custom-prev",
                nextEl: ".custom-next",
              }}
              modules={[Pagination, Navigation, Autoplay]}
              className="mySwiper w-full "
            >
              {/* الأزرار داخل الـ Swiper */}
              <button className="opacity-0 cursor-pointer custom-prev absolute left-2 top-[34%] min-[270px]:top-[38%]   min-[350px]:top-[44%] min-[500px]:top-[36%] min-[700px]:top-[42%] min-[770px]:top-[47%] min-[900px]:top-[39%] min-[1000px]:top-[42%] min-[1200px]:top-[44%] -translate-y-1/2 z-50 bg-blue-600  text-white w-6 h-6 min-[350px]:w-8 min-[350px]:h-8  min-[700px]:w-9 min-[700px]:h-9 min-[1000px]:w-12 min-[1000px]:h-12  rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <div className="relative flex justify-center items-center w-full h-full group overflow-hidden">
                  <FaArrowLeft className="w-[10px] h-[10px] min-[350px]:w-[15px] min-[350px]:h-[15px]  min-[700px]:w-[20px] min-[700px]:h-[20px] translate-x-1 min-[350px]:translate-x-2 group-hover:-translate-x-6 transition-all duration-300" />
                  <FaArrowLeft className="w-[10px] h-[10px] min-[350px]:w-[15px] min-[350px]:h-[15px]  min-[700px]:w-[20px] min-[700px]:h-[20px]  group-hover:-translate-x-1.5 translate-x-6 min-[350px]:group-hover:-translate-x-2  transition-all duration-300" />
                </div>
              </button>
              <button className="opacity-0 cursor-pointer custom-next absolute right-2 top-[34%] min-[270px]:top-[38%] min-[350px]:top-[44%] min-[500px]:top-[36%] min-[700px]:top-[42%] min-[770px]:top-[47%] min-[900px]:top-[39%] min-[1000px]:top-[42%] min-[1200px]:top-[44%] -translate-y-1/2 z-50 bg-blue-600  text-white w-6 h-6 min-[350px]:w-8 min-[350px]:h-8  min-[700px]:w-9 min-[700px]:h-9 min-[1000px]:w-12 min-[1000px]:h-12  rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110">
                <div className="relative flex justify-center items-center w-full h-full group overflow-hidden">
                  <FaArrowRight className="w-[10px] h-[10px] min-[350px]:w-[15px] min-[350px]:h-[15px]  min-[700px]:w-[20px] min-[700px]:h-[20px] translate-x-1 min-[350px]:translate-x-2 group-hover:-translate-x-6 transition-all duration-300" />
                  <FaArrowRight className="w-[10px] h-[10px] min-[350px]:w-[15px] min-[350px]:h-[15px]  min-[700px]:w-[20px] min-[700px]:h-[20px]  group-hover:-translate-x-1.5 translate-x-6 min-[350px]:group-hover:-translate-x-2  transition-all duration-300" />
                </div>
              </button>
              <SwiperSlide>
                <EventCard
                  img={grid2}
                  span1={"11 Mar"}
                  span2={"2024"}
                  p1={"Vancouver"}
                  p2={"8:00 am -5:00 pm"}
                  title={"Painting Art Contest 2020 for histudy Clud"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <EventCard
                  img={grid3}
                  span1={"11 Jan"}
                  span2={"2024"}
                  p1={"IAC Building"}
                  p2={"8:00 am - 5:00 pm"}
                  title={"Elegant Light Box Paper Cut Dioramas in UK"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <EventCard
                  img={grid4}
                  span1={"11 Mar"}
                  span2={"2024"}
                  p1={"Vancouver"}
                  p2={"8:00 am -5:00 pm"}
                  title={"Most Effective Ways for Education's Problem"}
                />
              </SwiperSlide>
              <SwiperSlide>
                <EventCard
                  img={grid1}
                  span1={"11 Jan"}
                  span2={"2024"}
                  p1={"IAC Building"}
                  p2={"8:00 am - 5:00 pm"}
                  title={"International Education Fair 2024"}
                />
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Events;
