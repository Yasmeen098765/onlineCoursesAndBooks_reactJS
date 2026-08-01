import Title from "../../common/Title/Title";
import "./Subscribe.css";
import { FaArrowRight } from "react-icons/fa";
//counter احتجت مكتبتين هما :لمعرفة اول ما يدخل السيكشن في الفيوو ليبدأ الكاونتر يشتغل
import { useInView } from "react-intersection-observer";
import * as CountUpModule from "react-countup";
const CountUp = CountUpModule.default.default;

function Subscribe() {
  const { ref, inView } = useInView({
    triggerOnce: true /* يشتغل مرة واحدة  اول ما يدخل السيكشن في الفيووو*/,
    threshold: 1 /* يشتغل الكاونتر عندما يكون 100 من 100 من ال section موجود في ال view  */,
  });

  return (
    <section className="subscribe  pt-16 min-[400px]:pt-24 pb-10 min-[400px]:pb-20 ">
      <div className="mx-auto px-2 sm:px-3 md:px-4 lg:px-5">
        <div className="flex flex-col items-center gap-5 min-[400px]:gap-7 min-[600px]:gap-10 w-[92%] min-[270px]:w-[85%] min-[400px]:w-[92%] mx-auto text-white">
          <Title
            MainText={"Get Latest Histudy Update"}
            subText={"Subscribe Our Newsletter"}
            colorText={"text-white"}
            bgText={"bg-[#ffffff21]"}
            width={true}
            items={"items-center"}
            topOffset={"text-center"}
            colorText2={"text-white"}
          />
          <p className="w-[95%] min-[350px]:w-[97%] min-[400px]:w-[90%] min-[500px]:w-[80%] min-[800px]:w-[75%]   min-[900px]:w-[55%] text-center text-[13px] min-[350px]:text-[15px] min-[400px]:text-[16px]  min-[500px]:text-[18.5px]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam
            explicabo sit est eos earum reprehenderit inventore nam autem
            corrupti rerum!
          </p>
          <div className=" flex flex-col justify-center items-center gap-5 w-full">
            <div className="relative  flex flex-col min-[700px]:flex-row justify-between items-center gap-1.5 p-2 subscribeEmail  bg-white rounded-lg w-[90%] min-[400px]:w-[80%] min-[800px]:w-[75%] min-[900px]:w-[70%] min-[1200px]:w-[55%] ">
              <input
                type="email"
                placeholder="Enter Your E-Email"
                className="text-gray-600 text-xs sm:text-sm min-[350px]:text-[14px]! min-[500px]:text-[16px]! min-[600px]:text-lg!  p-0.5 min-[400px]:p-1  min-[600px]:p-1 ps-1 min-[400px]:ps-3 min-[500px]:ps-3.5 min-[600px]:ps-4 w-full border-0 outline-0 placeholder-gray-600 "
              />
              <button className="group hidden min-[700px]:block  relative   shadow hover:bg-white hover:from-white hover:to-white   rounded bg-linear-60  from-[#2f57ef] to-[#b966e7] duration-300 transition  text-[9px] min-[400px]:text-[10px] min-[250px]:text-[10px]  min-[400px]:text-[11px] min-[400px]:text-[12px] min-[500px]:text-[13px] min-[600px]:text-[14px] min-[1200px]:text-[17px]  transition duration-300   w-[105px]! min-[400px]:w-[140px]! min-[600px]:w-[170px]! min-[1200px]:w-[150px]!  px-1.5! min-[600px]:px-3!  py-2.5! min-[400px]:py-3!  min-[400px]:py-3! min-[1200px]:py-3!  text-white cursor-pointer">
                <div className="text-white group-hover:text-blue-600 flex justify-center items-center gap-2 text-center w-full transition duration-300 -translate-x-2 group-hover:translate-x-2">
                  <div className="flex justify-center items-center self-stretch pt-0 min-[451px]:pt-1 flex-1  text-[9px] min-[400px]:text-[13px] min-[600px]:text-[15px] opacity-0 group-hover:opacity-100 group-hover:text-blue-600 text-white  transition duration-300">
                    <FaArrowRight className=" " />
                  </div>
                  <span className="text-nowrap">Subscribe</span>
                  <div className="flex justify-center items-center pt-0 min-[451px]:pt-1 flex-1 self-stretch text-[9px] min-[400px]:text-[13px] min-[600px]:text-[15px] opacity-100 group-hover:opacity-0 transition duration-300 ">
                    <FaArrowRight className="" />
                  </div>
                </div>
              </button>
            </div>
            <button className="group  block min-[700px]:hidden relative    shadow hover:bg-white hover:from-white hover:to-white   rounded bg-linear-60  from-[#2f57ef] to-[#b966e7] duration-300 transition  text-xs min-[400px]:text-[10px] min-[250px]:text-[11px]  min-[350px]:text-[12px] min-[400px]:text-[13px] min-[500px]:text-[13px] min-[600px]:text-[14px] min-[1200px]:text-[17px]  transition duration-300   w-[105px]! min-[400px]:w-[140px]! min-[600px]:w-[170px]! min-[1200px]:w-[150px]!  px-1.5! min-[600px]:px-3!  py-2! min-[400px]:py-3!  min-[400px]:py-3! min-[1200px]:py-3!  text-white cursor-pointer">
              <div className="text-white group-hover:text-blue-600 flex justify-center items-center gap-2 text-center w-full transition duration-300 -translate-x-2 group-hover:translate-x-2">
                <div className="flex justify-center items-center self-stretch pt-0 min-[451px]:pt-1 flex-1  text-[9px] min-[400px]:text-[13px] min-[600px]:text-[15px] opacity-0 group-hover:opacity-100 group-hover:text-blue-600 text-white  transition duration-300">
                  <FaArrowRight className=" " />
                </div>
                <span className="text-nowrap">Subscribe</span>
                <div className="flex justify-center items-center pt-0 min-[451px]:pt-1 flex-1 self-stretch text-[9px] min-[400px]:text-[13px] min-[600px]:text-[15px] opacity-100 group-hover:opacity-0 transition duration-300 ">
                  <FaArrowRight className="" />
                </div>
              </div>
            </button>
            <span className="text-xs min-[270px]:text-[13px] min-[300px]:text-[14px] min-[350px]:text-[14.5px]  min-[400px]:text-[15.5px] min-[500px]:text-[16px] min-[600px]:text-[16.5px] text-center w-full">
              No ads, No trails, No commitments
            </span>
          </div>
          <div
            className="grid grid-cols-1 min-[659px]:grid-cols-2 gap-6 min-[400px]:gap-10 min-[659px]:gap-0  w-full py-4"
            ref={ref}
          >
            {inView && (
              <>
                <div className=" flex  justify-center min-[659px]:justify-end items-center border-0 min-[659px]:border-r-[0.5px] border-gray-50/25 ">
                  <div className=" flex flex-col justify-center items-center gap-2 min-[400px]gap-3 py-1 px-4 min-[400px]:px-10 hover:-translate-y-1 duration-300 transition ">
                    <h2 className=" text-3xl min-[350px]:text-4xl min-[500px]:text-5xl font-bold pb-1 min-[400px]:pb-3">
                      {" "}
                      <CountUp start={0} end={500} duration={3} />+
                    </h2>
                    <h3 className="text-sm min-[350px]:text-lg min-[500px]:text-xl font-bold text-center">
                      Successfully Trained
                    </h3>
                    <span className="text-sm min-[350px]:text-[16px] min-[500px]:text-lg text-center">
                      Learners & counting
                    </span>
                  </div>
                </div>
                <div className=" flex justify-center min-[659px]:justify-start items-center  ">
                  <div className=" flex flex-col justify-center items-center gap-2 min-[400px]gap-3 py-1 px-4 min-[400px]:px-10 hover:-translate-y-1 duration-300 transition  ">
                    <h2 className=" text-3xl min-[350px]:text-4xl min-[500px]:text-5xl font-bold pb-1 min-[400px]:pb-3">
                      {" "}
                      <CountUp start={0} end={100} duration={3} />+
                    </h2>
                    <h3 className="text-sm min-[350px]:text-lg min-[500px]:text-xl font-bold text-center ">
                      Certification Students
                    </h3>
                    <span className="text-sm min-[350px]:text-[16px] min-[500px]:text-lg text-center">
                      Online Course
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Subscribe;
