import "./CartCourseDetails.css";
import { IoCallOutline, IoEyeOutline } from "react-icons/io5";
import { FaArrowRight, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoMdPlay } from "react-icons/io";
import video1 from "../../assets/OnlineCourses/video-01.jpg";
import { TbCircleArrowDownRight } from "react-icons/tb";
import { LuFacebook, LuLinkedin } from "react-icons/lu";
import { SlSocialTwitter } from "react-icons/sl";
import { GrInstagram } from "react-icons/gr";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

function CartCourseDetails({ price, discount, lessons, Students, id, title }) {
  const { addToCart2, cartIDS } = useContext(cartContext);
  const pricefinal = price - (price * discount) / 100;
  const [isMore, setIsMore] = useState(true);
  const [isScroll100, setIsScroll100] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setIsScroll100(true);
      } else {
        setIsScroll100(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <div className="w-full  bg-white rounded-xl border-2 min-[400px]:border-4 border-violet-300 relative top-[15px] min-[500px]:top-[25px] bottom-[0px] min-[1000px]:sticky  min-[1000px]:top-[100px]  min-[1000px]:bottom-[100px]">
        <div className="p-4  min-[500px]:px-7 min-[500px]:pt-7 min-[500px]:pb-3 w-full ">
          <div
            className={`  ${isScroll100 ? "hidden" : "block"}  transition duration-300   relative  flex  justify-center items-center  w-full  rounded-lg overflow-hidden
           after:content-[''] after:w-full after:h-full after:absolute after:top-0 after:left-0 after:bg-linear-to-b  after:from-black/50 after:from-10% after:via-70% after:to-100% after:via-transparent after:to-black/90  `}
          >
            <div className="z-[1] veideoAnimate  absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[50px] h-[50px] sm:w-[70px] sm:h-[70px] rounded-full border-0 bg-white text-[20px] sm:text-[30px] text-black flex justify-center items-center">
              <IoMdPlay />
            </div>
            <img
              src={video1}
              className="rounded-lg w-full h-[200px] sm:h-[250px] min-[991px]:h-auto!  "
            />
            <div className="z-[1] absolute bottom-[18px] left-[50%] translate-x-[-50%]  w-full text-white text-xl flex justify-center items-center gap-1">
              <IoEyeOutline className="self-center " />
              <span>Preview this Course</span>
            </div>
          </div>
          <div
            className={`flex flex-wrap justify-between items-center gap-0 min-[500px]:gap-3   ${isScroll100 ? "mt-0" : "mt-2"}`}
          >
            <div className="flex-1 flex justify-start items-center gap-3 text-md min-[350px]:text-xl min-[500px]:text-lg min-[588px]:text-xl min-[700px]:text-xl my-3">
              <div className="price bg-clip-text bg-linear-65 from-blue-600 to-purple-600 w-max font-bold text-transparent">
                ${pricefinal ? pricefinal.toFixed(2) : 0.0}
              </div>
              <div className="text-gray-400 line-through">
                ${price ? price.toFixed(2) : 0.0}
              </div>
            </div>
            <div className="bg-red-200 rounded text-red-600 py-1.5 px-2 flex justify-center items-center gap-0.5 text-xs min-[400px]:text-sm ">
              <MdOutlineAccessTime />
              <span>3 days left!</span>
            </div>
          </div>
          <button
            onClick={() => addToCart2(id, title, navigate)}
            disabled={cartIDS[id]}
            type="submit"
            className="my-2 group  text-[9px] min-[350px]:text-[13px] min-[600px]:text-[17px]  transition duration-300  btn5  w-full  px-1.5! min-[600px]:px-3!  py-2! min-[400px]:py-3!  min-[400px]:py-3! min-[1200px]:py-3!  text-white cursor-pointer
                     disabled:opacity-50! disabled:cursor-not-allowed! disabled:pointer-events-none!"
          >
            <div className=" flex justify-center items-center gap-2 text-center w-full transition duration-300 disabled:translate-x-0 disabled:group-hover:translate-x-0 -translate-x-2 group-hover:translate-x-2 ">
              <div className="flex justify-end items-center self-stretch pt-0 min-[451px]:pt-1 flex-1  text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px] opacity-0 text-white  transition duration-300">
                <FaArrowRight className=" " />
              </div>
              <span className="text-nowrap ">Add to Cart</span>
              <div className="flex justify-start items-center pt-0 min-[451px]:pt-1 flex-1 self-stretch text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px] opacity-100 transition duration-300 ">
                <FaArrowRight className="" />
              </div>
            </div>
          </button>
          <button className="my-2 group relative   text-black shadow shadow-gray-400 bg-white from-white to-white   rounded hover:text-white hover:bg-linear-60  hover:from-[#2f57ef] hover:to-[#b966e7] duration-300 transition  text-xs min-[400px]:text-[10px] min-[250px]:text-[11px]  min-[350px]:text-[12px] min-[400px]:text-[13px] min-[500px]:text-[13px] min-[600px]:text-[14px] min-[1200px]:text-[17px]  transition duration-300 w-full  px-1.5! min-[600px]:px-3!  py-2! min-[400px]:py-3!  min-[400px]:py-3! min-[1200px]:py-3!   cursor-pointer">
            <div className="text-black  group-hover:text-white flex justify-center items-center gap-2 text-center w-full transition duration-300 -translate-x-2 group-hover:translate-x-2">
              <div className="flex justify-end items-center self-stretch pt-0 min-[451px]:pt-1 flex-1  text-[9px] min-[400px]:text-[13px] min-[600px]:text-[15px] opacity-0 group-hover:opacity-100 group-hover:text-white   transition duration-300">
                <FaArrowRight className=" " />
              </div>
              <span className="text-nowrap">Buy Now</span>
              <div className="flex justify-start items-center pt-0 min-[451px]:pt-1 flex-1 self-stretch text-[9px] min-[400px]:text-[13px] min-[600px]:text-[15px] opacity-100 group-hover:opacity-0 transition duration-300 ">
                <FaArrowRight className="" />
              </div>
            </div>
          </button>
          <p className="my-2 flex items-start justify-start min-[500px]:items-center min-[500px]:justify-center gap-1 min-[400px]:gap-0.5 text-gray-500 text-start min-[400px]:text-center text-[10px] min-[350px]:text-sm min-[500px]:text-base">
            <TbCircleArrowDownRight className="self-center text-lg min-[500px]:text-lg self-start" />
            <span>30-Day Money-Back Guarantee</span>
          </p>
          <div
            className={`relative ${isMore ? "after:absolute after:content-[''] after:transition after:duration-300 after:w-full after:h-[30px] after:bottom-0 after:left-0 after:bg-linear-to-b  after:from-transparent after:from-0% after:to-white after:to-100%  after:z-[2]" : "after:content-none"} 
                    ${isMore ? "h-[260px] overflow-y-hidden" : "min-h-[60px] overflow-y-visible"} transition duration-300  mt-3 my-1.5 flex flex-col justify-start items-start gap-2 font-semibold text-gray-500`}
          >
            <div className="w-full flex flex-col min-[350px]:flex-row justify-start min-[350px]:justify-between items-start min-[350px]:items-center gap-2 py-3.5 border-b border-gray-300 text-xs min-[300px]:text-sm  min-[400px]:text-md min-[600px]:text-[16px] min-[1000px]:text-[15px] ">
              <span>Start Date</span>
              <span className="w-full min-[350px]:w-max  py-1 px-2 rounded-sm min-[400px]:rounded-lg text-xs min-[300px]:text-sm min-[350px]:text-xs min-[400px]:text-md min-[600px]:text-[14px] min-[1000px]:text-xs bg-gray-100 ">
                5 Hrs 20 Min
              </span>
            </div>
            <div className="w-full flex flex-col min-[350px]:flex-row justify-start min-[350px]:justify-between items-start min-[350px]:items-center gap-2 py-3.5 border-b border-gray-300 text-xs min-[300px]:text-sm  min-[400px]:text-md min-[600px]:text-[16px] min-[1000px]:text-[15px] ">
              <span>Enrolled</span>
              <span className="w-full min-[350px]:w-max  py-1 px-2 rounded-sm min-[400px]:rounded-lg text-xs min-[300px]:text-sm min-[350px]:text-xs min-[400px]:text-md min-[600px]:text-[14px] min-[1000px]:text-xs bg-gray-100 ">
                100
              </span>
            </div>
            <div className="w-full flex flex-col min-[350px]:flex-row justify-start min-[350px]:justify-between items-start min-[350px]:items-center gap-2 py-3.5 border-b border-gray-300 text-xs min-[300px]:text-sm  min-[400px]:text-md min-[600px]:text-[16px] min-[1000px]:text-[15px] ">
              <span>Lectures</span>
              <span className="w-full min-[350px]:w-max  py-1 px-2 rounded-sm min-[400px]:rounded-lg text-xs min-[300px]:text-sm min-[350px]:text-xs min-[400px]:text-md min-[600px]:text-[14px] min-[1000px]:text-xs bg-gray-100 ">
                {lessons}
              </span>
            </div>
            <div className="w-full flex flex-col min-[350px]:flex-row justify-start min-[350px]:justify-between items-start min-[350px]:items-center gap-2 py-3.5 border-b border-gray-300 text-xs min-[300px]:text-sm  min-[400px]:text-md min-[600px]:text-[16px] min-[1000px]:text-[15px] ">
              <span>Students</span>
              <span className="w-full min-[350px]:w-max  py-1 px-2 rounded-sm min-[400px]:rounded-lg text-xs min-[300px]:text-sm min-[350px]:text-xs min-[400px]:text-md min-[600px]:text-[14px] min-[1000px]:text-xs bg-gray-100 ">
                {Students}
              </span>
            </div>
            <div className="w-full flex flex-col min-[350px]:flex-row justify-start min-[350px]:justify-between items-start min-[350px]:items-center gap-2 py-3.5 border-b border-gray-300 text-xs min-[300px]:text-sm  min-[400px]:text-md min-[600px]:text-[16px] min-[1000px]:text-[15px] ">
              <span>Skill Level</span>
              <span className="w-full min-[350px]:w-max  py-1 px-2 rounded-sm min-[400px]:rounded-lg text-xs min-[300px]:text-sm min-[350px]:text-xs min-[400px]:text-md min-[600px]:text-[14px] min-[1000px]:text-xs bg-gray-100 ">
                Basic
              </span>
            </div>
            <div className="w-full flex flex-col min-[350px]:flex-row justify-start min-[350px]:justify-between items-start min-[350px]:items-center gap-2 py-3.5 border-b border-gray-300 text-xs min-[300px]:text-sm  min-[400px]:text-md min-[600px]:text-[16px] min-[1000px]:text-[15px] ">
              <span>Language</span>
              <span className="w-full min-[350px]:w-max  py-1 px-2 rounded-sm min-[400px]:rounded-lg text-xs min-[300px]:text-sm min-[350px]:text-xs min-[400px]:text-md min-[600px]:text-[14px] min-[1000px]:text-xs bg-gray-100 ">
                English
              </span>
            </div>
            <div className="w-full flex flex-col min-[350px]:flex-row justify-start min-[350px]:justify-between items-start min-[350px]:items-center gap-2 py-3.5 border-b border-gray-300 text-xs min-[300px]:text-sm  min-[400px]:text-md min-[600px]:text-[16px] min-[1000px]:text-[15px] ">
              <span>Quizzes</span>
              <span className="w-full min-[350px]:w-max  py-1 px-2 rounded-sm min-[400px]:rounded-lg text-xs min-[300px]:text-sm min-[350px]:text-xs min-[400px]:text-md min-[600px]:text-[14px] min-[1000px]:text-xs bg-gray-100 ">
                10
              </span>
            </div>
            <div className="w-full flex flex-col min-[350px]:flex-row justify-start min-[350px]:justify-between items-start min-[350px]:items-center gap-2 py-3.5 border-b border-gray-300 text-xs min-[300px]:text-sm  min-[400px]:text-md min-[600px]:text-[16px] min-[1000px]:text-[15px] ">
              <span>Certificate</span>
              <span className="w-full min-[350px]:w-max  py-1 px-2 rounded-sm min-[400px]:rounded-lg text-xs min-[300px]:text-sm min-[350px]:text-xs min-[400px]:text-md min-[600px]:text-[14px] min-[1000px]:text-xs bg-gray-100 ">
                Yes
              </span>
            </div>
            <div className="w-full flex flex-col min-[350px]:flex-row justify-start min-[350px]:justify-between items-start min-[350px]:items-center gap-2 py-3.5 border-b border-gray-300 text-xs min-[300px]:text-sm  min-[400px]:text-md min-[600px]:text-[16px] min-[1000px]:text-[15px] ">
              <span>Pass Percentage</span>
              <span className="w-full min-[350px]:w-max  py-1 px-2 rounded-sm min-[400px]:rounded-lg text-xs min-[300px]:text-sm min-[350px]:text-xs min-[400px]:text-md min-[600px]:text-[14px] min-[1000px]:text-xs bg-gray-100 ">
                95%
              </span>
            </div>
          </div>
          <div
            onClick={() => setIsMore(!isMore)}
            className="w-full  mt-4 transition duration-300 cursor-pointer flex justify-between items-center gap-2 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md  min-[1200px]:text-lg text-blue-600 hover:text-violet-400 font-semibold "
          >
            {isMore ? (
              <>
                <span>Show More</span>
                <FaChevronDown />
              </>
            ) : (
              <>
                <span>Show Less</span>
                <FaChevronUp />
              </>
            )}
          </div>
        </div>

        <div className="bg-slate-50 px-3 py-4 min-[500px]:p-7  w-full rounded-b-lg">
          <div className="pb-5  border-b border-gray-300  flex justify-center items-center gap-1.5 min-[350px]:gap-3  ">
            <div className="icon relative overflow-hidden z-[1] cursor-pointer hover:text-white transition duration-300 w-[25px] h-[25px] min-[300px]:w-[30px] min-[300px]:h-[30px]  min-[350px]:w-[40px] min-[350px]:h-[40px] min-[500px]:w-[40px] min-[500px]:h-[40px]  min-[613px]:w-[45px] min-[613px]:h-[45px] flex justify-center items-center text-[10px] min-[270]:text-sm min-[300px]:text-md min-[350px]:text-base  min-[400px]:text-lg text-gray-500 border-2 border-gray-200 rounded-full hover:border-transparent">
              <LuFacebook />
            </div>
            <div className="icon relative overflow-hidden z-[1] cursor-pointer hover:text-white transition duration-300 w-[25px] h-[25px] min-[300px]:w-[30px] min-[300px]:h-[30px]  min-[350px]:w-[40px] min-[350px]:h-[40px] min-[500px]:w-[40px] min-[500px]:h-[40px]  min-[613px]:w-[45px] min-[613px]:h-[45px] flex justify-center items-center text-[10px] min-[270]:text-sm min-[300px]:text-md min-[350px]:text-base  min-[400px]:text-lg text-gray-500 border-2 border-gray-200 rounded-full hover:border-transparent">
              <SlSocialTwitter />
            </div>
            <div className="icon relative overflow-hidden z-[1] cursor-pointer hover:text-white transition duration-300 w-[25px] h-[25px] min-[300px]:w-[30px] min-[300px]:h-[30px]  min-[350px]:w-[40px] min-[350px]:h-[40px] min-[500px]:w-[40px] min-[500px]:h-[40px]  min-[613px]:w-[45px] min-[613px]:h-[45px] flex justify-center items-center text-[10px] min-[270]:text-sm min-[300px]:text-md min-[350px]:text-base  min-[400px]:text-lg text-gray-500 border-2 border-gray-200 rounded-full hover:border-transparent">
              <GrInstagram />
            </div>
            <div className="icon relative overflow-hidden z-[1] cursor-pointer hover:text-white transition duration-300 w-[25px] h-[25px] min-[300px]:w-[30px] min-[300px]:h-[30px]  min-[350px]:w-[40px] min-[350px]:h-[40px] min-[500px]:w-[40px] min-[500px]:h-[40px]  min-[613px]:w-[45px] min-[613px]:h-[45px] flex justify-center items-center text-[10px] min-[270]:text-sm min-[300px]:text-md min-[350px]:text-base  min-[400px]:text-lg text-gray-500 border-2 border-gray-200 rounded-full hover:border-transparent">
              <LuLinkedin />
            </div>
          </div>
          <p className="text-gray-400 text-center my-2.5 min-[500px]:my-3.5 text-xs min-[300px]:text-sm min-[560px]:text-base">
            For details about the course
          </p>
          <div className="flex flex-col min-[400px]:flex-row items-center justify-center gap-1 cursor-pointer hover:text-blue-600 duration-300 transition py-2 min-[350px]:py-3.5 px-3 min-[350px]:px-6 mt-1 capitalize rounded-md min-[400px]:rounded-4xl font-semibold text-xs min-[560px]:text-base border border-white bg-violet-200">
            <p className="flex  items-center gap-0.5">
              <IoCallOutline className="font-black text-xs min-[300px]:text-sm min-[560px]:text-lg" />
              <span>Call Us:</span>
            </p>
            <span className="text-blue-600">+444 555 666 777</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartCourseDetails;
