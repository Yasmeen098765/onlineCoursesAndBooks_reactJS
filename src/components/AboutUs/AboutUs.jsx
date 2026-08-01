import "./aboutUs.css";
import about1 from "../../assets/OnlineCourses/about-01.png";
import about2 from "../../assets/OnlineCourses/about-02.png";
import about3 from "../../assets/OnlineCourses/about-03.png";
import video1 from "../../assets/OnlineCourses/video-01.jpg";

import { FaArrowRight } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FiBook } from "react-icons/fi";
import { IoMdPlay } from "react-icons/io";

// جعل الصور تتحرك  على حسب السكرول
import { motion, useScroll, useTransform } from "framer-motion";

import { useRef } from "react";
// import Title from "../../common/Title/Title";
// import { DiEnvato } from "react-icons/di";

function AboutUs() {
  const ref = useRef(null);

  //لتعمل تتبع للسكرول على محور y على شان الصور تتحرك بناء ع السكرول
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  //كل صورة بحركة مختلفة :
  const y1 = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-15, 15]);
  const y3 = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <section className="aboutUs pt-16 min-[600px]:pt-28 pb-28 min-[991px]:pb-96 min-[1200px]:pb-56 relative  w-full">
      <div className="mx-auto px-2 sm:px-3 md:px-4  min-[991px]:px-0!">
        <div className="mx-auto w-[92%] min-[1030px]:w-full flex flex-col items-center gap-8 md:gap-14  ">
          <div
            ref={ref}
            className="grid grid-cols-2 gap-5 min-[768px]:gap-10 min-[991px]:gap-5 "
          >
            <div className="col-span-2 min-[991px]:col-span-1 min-h-[35vh]  min-[768px]:min-h-[75vh] min-[768px]:min-h-[90vh] min-[900px]:min-h-[125vh] min-[1024px]:min-h-[150vh] min-[1200px]:min-h-[125vh]  relative ">
              <motion.img
                src={about1}
                style={{ y: y1 }}
                className="relative min-[768px]:absolute left-[50%] translate-x-[-50%] min-[768px]:translate-x-[0%] min-[768px]:left-0 -top-9 min-[991px]:top-0 transition duration-1000 w-full min-[300px]:w-[80%] min-[400px]:w-[70%] min-[500px]:w-[60%] min-[600px]:w-[60%] min-[700px]:w-[50%] min-[768px]:w-[38%] min-[991px]:w-[70%] min-[1200px]:w-[60%]  "
                alt=""
              />
              <motion.img
                src={about2}
                style={{ y: y2 }}
                className="absolute right-0 top-0 transition duration-1000 rounded hidden min-[991px]:block w-[25%] min-[991px]:w-[45%] min-[1200px]:w-[42%]"
                alt=""
              />
              <motion.img
                src={about3}
                style={{ y: y3 }}
                className="absolute  right-[231px] min-[991px]:right-[-90px] bottom-[35px] min-[768px]:bottom-[0px] min-[889px]:bottom-[0px] min-[991px]:bottom-[111px] min-[1200px]:bottom-[32px] transition duration-1000 z-1 w-[45%] min-[991px]:w-[81%] min-[1200px]:w-[70%] hidden  min-[768px]:block"
                alt=""
              />
            </div>
            <div className="col-span-2 min-[991px]:col-span-1 about-content h-full ">
              <div className="flex flex-col gap-4 min-[1200px]:gap-8 items-start justify-center ps-0 min-[600px]:ps-5">
                <div
                  className={`title  flex flex-col justify-center items-start gap-4 text-center  w-full`}
                >
                  <h3
                    className={`text-[10px] min-[350px]:text-[13px] min-[450px]:text-[14px] min-[600px]:text-[17px] min-[900px]:text-[17px] text-orange-500 bg-orange-100  rounded-4xl font-semibold py-1 min-[230px]:py-2 px-3 min-[230px]:px-4 min-[350px]:px-7 uppercase `}
                  >
                    Know About Us
                  </h3>
                  <h2
                    className={`  text-start  text-[14px] min-[270px]:text-[16px] min-[350px]:text-[18px] min-[450px]:text-[22px] min-[600px]:text-[27px] min-[900px]:text-[31px] min-[1200px]:text-[36px] font-bold w-[100%]  min-[1200px]:w-[60%] text-gray-800 `}
                    style={{ lineHeight: "1.5" }}
                  >
                    Know About Histudy Learning Platform
                  </h2>
                </div>
                <p className="text-sm sm:text-md   md:text-lg min-[1200px]:text-xl w-[100%] min-[1200px]:w-[82%] text-gray-400">
                  Far far away , behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language ocean.
                </p>
                <div className="flex flex-col gap-2 justify-start items-start w-full ">
                  <div className="p-2 min-[230px]:p-3 min-[300px]:p-3 min-[400px]:p-5 shadowAbout rounded-lg w-[100%] min-[1200px]:w-[85%]  flex flex-col min-[300px]:flex-row justify-start items-start gap-4 bg-transparent hover:bg-white transition duration-300 scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105">
                    <div className="p-2.5 bg-pink-100 rounded-full text-sm min-[230px]:text-[20px] min-[1200px]:text-[28px] flex justify-center items-center ">
                      <FaRegHeart className=" text-pink-500" />
                    </div>
                    <div className="flex flex-col gap-2 justify-start items-start w-full ">
                      <h3 className="text-slate-800 font-semibold text-sm sm:text-md md:text-[20px]">
                        Flexible Classes
                      </h3>
                      <p className="text-gray-500  text-sm sm:text-md md:text-[17px] min-[1200px]:text-[18px] w-full ">
                        It is a long established fact that a reader will be
                        distracted by this on readable content of when looking
                        at its layout.
                      </p>
                    </div>
                  </div>
                  <div className="p-2 min-[230px]:p-3 min-[300px]:p-3 min-[400px]:p-5 shadowAbout rounded-lg w-[100%] min-[1200px]:w-[85%]  flex flex-col min-[300px]:flex-row justify-start items-start gap-4 bg-transparent hover:bg-white transition duration-300 scale-x-100 scale-y-100 hover:scale-x-105 hover:scale-y-105">
                    <div className="p-2.5 bg-blue-100 rounded-full text-[20px] min-[1200px]:text-[28px] flex justify-center items-center ">
                      <FiBook className=" text-blue-500" />
                    </div>
                    <div className="flex flex-col gap-2 justify-start items-start w-full ">
                      <h3 className="text-slate-800 font-semibold text-sm sm:text-md md:text-[20px]">
                        Learn From Anywhere
                      </h3>
                      <p className="text-gray-500  text-sm sm:text-md md:text-[17px] min-[1200px]:text-[18px] w-full ">
                        Sed distinctio repudiandae eos recusandae laborum eaque
                        non eius iure suscipit laborum eaque non eius iure
                        suscipit.
                      </p>
                    </div>
                  </div>
                </div>
                <button className="group mb-4 text-[9px] min-[230px]:text-[10px] min-[250px]:text-[10px]  min-[300px]:text-[11px] min-[400px]:text-[12px] min-[500px]:text-[13px] min-[600px]:text-[14px] min-[1200px]:text-[17px]  transition duration-300  btn3 w-[105px]! min-[350px]:w-[140px]! min-[600px]:w-[170px]!  px-1.5! min-[600px]:px-3!  py-2.5! min-[350px]:py-3!  min-[400px]:py-3! min-[1200px]:py-4!  text-white cursor-pointer">
                  <div className=" flex justify-center items-center gap-2 text-center w-full transition duration-300 -translate-x-2 group-hover:translate-x-2">
                    <div className="flex justify-center items-center self-stretch pt-0 min-[451px]:pt-1 flex-1  text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px] opacity-0 text-white  transition duration-300">
                      <FaArrowRight className=" " />
                    </div>
                    <span className="text-nowrap ">More About Us</span>
                    <div className="flex justify-center items-center pt-0 min-[451px]:pt-1 flex-1 self-stretch text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px] opacity-100 transition duration-300 ">
                      <FaArrowRight className="" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className=" online-box mx-auto w-full min-[991px]:w-[90%] grid grid-cols-2 gap-5 md:gap-10 relative min-[991px]:absolute bottom-[0] min-[991px]:bottom-[-162px] left-[50%] translate-x-[-50%]  z-1">
            <div className="col-span-2 min-[991px]:col-span-1 h-full w-full bg-white shadowAbout1 px-3 py-4 min-[350px]:px-10 min-[350px]:py-8 h-full flex flex-col min-[1200px]:flex-row  items-center justify-center gap-3.5  shadow bg-white p-10 rounded-xl ">
              <div className="flex w-full min-[1200px]:w-[50%] flex-col items-start justify-center gap-3">
                <div className="py-1.5 px-4 rounded-4xl cursor-pointer text-[11px] sm:text-sm md:text-md lg:text-[16px] border border-gray-300 text-gray-500 hover:bg-gray-100">
                  New Collection
                </div>
                <h2
                  className=" font-bold  sm:text-sm md:text-[28px] min-[1200px]:text-[30px] "
                  style={{ lineHeight: 1.4 }}
                >
                  Online Courses from Histudy
                </h2>
                <p className=" sm:text-sm md:text-[18px] min-[1200px]:text-[20px] text-gray-500">
                  Top instructors from around the world
                </p>
              </div>
              <div
                className="relative flex justify-center items-center
               w-full min-[1200px]:w-[50%] rounded-lg overflow-hidden"
              >
                <div className="veideoAnimate absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full border-0 bg-white text-[20px] sm:text-[30px] text-black flex justify-center items-center">
                  <IoMdPlay />
                </div>
                <img
                  src={video1}
                  className="rounded-lg w-full h-[200px] sm:h-[250px] min-[991px]:h-auto!  "
                />
              </div>
            </div>
            <div className="col-span-2 min-[991px]:col-span-1 h-full bg-white shadowAbout1 px-3 py-4 min-[350px]:px-10 min-[350px]:py-8 h-full flex flex-col items-start justify-center gap-3.5 w-full shadow bg-white p-10 rounded-xl ">
              <div className="py-1.5 px-4 rounded-4xl cursor-pointer text-[11px] sm:text-sm md:text-md lg:text-[16px] border border-gray-300 text-gray-500 hover:bg-gray-100">
                Top Teacher
              </div>
              <h2
                className=" font-bold sm:text-sm md:text-[28px] min-[1200px]:text-[30px]"
                style={{ lineHeight: 1.4 }}
              >
                Free Online Courses from Histudy School To Education
              </h2>
              <p className="sm:text-sm md:text-[18px] min-[1200px]:text-[20px] text-gray-500">
                Top instructors from around the world
              </p>
              <button className="flex justify-center items-center group mt-1.5  text-[9px] min-[230px]:text-[10px] min-[250px]:text-[10px]  min-[300px]:text-[11px] min-[400px]:text-[12px] min-[500px]:text-[13px] min-[600px]:text-[14px] min-[1200px]:text-[17px]   btn1   px-1.5 text-white cursor-pointer">
                <div className="text-center w-full ">
                  <span className="text-nowrap relative left-0 group-hover:left-[-152%]  transition-left duration-500">
                    Join Now
                  </span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
