import "./hero.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/effect-cards";
import "swiper/css/pagination";

import { EffectCards, Autoplay, Pagination } from "swiper/modules";

import { FaArrowRight } from "react-icons/fa";
import shape1 from "../../assets/OnlineCourses/shape-01.png";
import shape2 from "../../assets/OnlineCourses/shape-02.png";
import banner1 from "../../assets/OnlineCourses/banner-01.png";
import CourseCard from "../CourseCard/CourseCard";
import { useContext } from "react";
import { DisplayCoursesContext } from "../../context/DisplayCoursesContext.jsx";

function Hero() {
  const { coursesData } = useContext(DisplayCoursesContext);
  const SwiperCourse = coursesData.slice(3, 6);
  return (
    <main className="hero pt-10 relative w-full min-h-[129vh] min-[230px]:min-h-[127vh] min-[300px]:min-h-[130vh] min-[350px]:min-h-[150vh] min-[400px]:min-h-[154vh]  min-[420px]:min-h-[160vh] min-[520px]:min-h-[163vh] min-[600px]:min-h-[183vh] min-[760px]:min-h-[178.5vh] min-[780px]:min-h-[182.5vh] min-[800px]:min-h-[186vh]  min-[820px]:min-h-[186vh] min-[840px]:min-h-[177vh]  min-[940px]:min-h-[177vh] min-[1200px]:min-h-[119vh] overflow-hidden  ">
      <div className=" mx-auto px-2 sm:px-3 md:px-4  lg:px-5 ">
        <div className="grid grid-cols-3 gap-6 min-[760px]:gap-3 w-[97%] min-[758px]:w-full min-[800px]:w-[97%]  min-[1200px]:w-[96%] relative mx-auto ">
          <div className="  col-span-3 min-[1200px]:col-span-1  flex flex-col justify-start items-start gap-4 min-[600px]:gap-4 ps-3 min-[350px]:ps-6 py-1 min-[600px]:py-6  h-full ">
            <div className="relative ">
              <div className="polygonhero bg-white  absolute  top-[50%] left-[50%] -translate-y-[50%] -translate-x-[50%] h-[30px] min-[350px]:h-[40px] min-[1200px]:h-[45px] w-[120%]"></div>
              <p className="relative shadow  w-full h-full py-2 px-3 min-[350px]:py-4 min-[1200px]:py-3 min-[350px]:px-4  bg-white absolute  top-0 left-0  w-full h-full rounded  text-gray-800 text-[11px] min-[350px]:text-[12px] min-[600px]:text-[18px] font-semibold">
                🏆 The Leader in Online{" "}
                <br className="block min-[350px]:hidden min-[600px]:hidden min-[1200px]:block" />{" "}
                Learning
              </p>
            </div>
            <h2 className="text-[16px] min-[350px]:text-[22px] min-[420px]:text-[30px] min-[600px]:text-[35px] min-[700px]:text-[37px]  min-[1200px]:text-[39px] font-bold w-[90%] min-[420px]:w-[85%] min-[600px]:w-[85%]  min-[1200px]:w-full">
              Build The Skills To Drive Your Career.
            </h2>
            <p className="text-gray-500 text-[12px] min-[350px]:text-[15px] min-[600px]:text-[20px] min-[700px]:text-[20px] min-[1200px]:text-[20px] w-[90%] min-[350px]:w-[85%] min-[600px]:w-[80%] min-[600px]:w-[70%]  min-[1200px]:w-full">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
              <span className="text-gray-500 font-semibold min-[600px]:font-bold min-[1200px]:font-semibold text-[12px] min-[350px]:text-[18px] ">
                Velit officia consequat.
              </span>
            </p>

            <button className="group text-[9px] min-[350px]:text-[13px] min-[600px]:text-[17px]  transition duration-300  btn w-[85px]!  min-[350px]:w-[140px]! min-[600px]:w-[170px]!  px-1.5! min-[600px]:px-3!  py-2.5!  min-[600px]:py-3! min-[1200px]:py-4!  text-white cursor-pointer">
              <div className="transition duration-300 -translate-x-2 group-hover:translate-x-2 flex justify-center items-center gap-2 text-center w-full">
                <div className="flex justify-center items-center self-stretch pt-1 flex-1  text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px] opacity-0 text-white  transition duration-300">
                  <FaArrowRight />
                </div>
                <span className="text-nowrap ">View Course</span>
                <div className="flex justify-center items-center self-stretch pt-1 flex-1 text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px] opacity-100 transition duration-300 ">
                  <FaArrowRight className="" />
                </div>
              </div>
            </button>
          </div>
          <div className=" col-span-3 min-[1200px]:col-span-2  h-full ">
            <div className="w-full flex justify-center items-center gap-0 min-[760px]:gap-6 h-full  ">
              <div className="overflow-visible w-0 min-[760px]:w-[50%]  h-full   ">
                <div className="relative  top-0 min-[760px]:top-[7%] min-[780px]:top-[11%] min-[800px]:top-[7%] min-[820px]:top-[11%] min-[900px]:top-[12%]  min-[957px]:top-[7%] min-[1013px]:top-[2%] min-[1200px]:top-0  z-1 w-full h-full">
                  <img
                    src={banner1}
                    className="w-[500]! h-full relative z-[3]"
                  />
                  <img
                    src={shape1}
                    className=" absolute   top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[1]"
                  />
                  <img
                    src={shape2}
                    className=" absolute  top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-[2]"
                  />
                </div>
              </div>
              <div className="w-full min-[760px]:w-[50%]  h-full pb-14 ps-0 min-[600px]:ps-2 flex! justify-center! items-center!  ">
                <Swiper
                  effect={"cards"}
                  grabCursor={true}
                  cardsEffect={{
                    slideShadows: false,
                  }}
                  autoplay={{
                    delay: 1500,
                    pauseOnMouseEnter: true,
                  }}
                  loop:true
                  pagination={{
                    clickable: true,
                    clickableClass: "pagination-container",
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                  }}
                  slidesPerView={"auto"}
                  modules={[EffectCards, Autoplay, Pagination]}
                  className="mySwiper w-full  py-2  "
                >
                  {SwiperCourse.map((val, index) => (
                    <SwiperSlide className="scale-100! hover:scale-x-[1.01]! hover:scale-y-[1.01]!  transition-all! duration-500! w-[80%]! min-[250px]:w-[165px]! min-[270px]:w-[184px]! min-[300px]:w-[190px]! min-[350px]:w-[240px]! min-[400px]:w-[260px]! min-[451px]:w-[60%]! min-[550px]:w-[55%]! min-[600px]:w-[50%]! min-[760px]:w-[280px]! min-[900px]:w-[350px]! shadow shadow-gray-300 rounded-lg">
                      <CourseCard val={val} key={val.id} />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Hero;
