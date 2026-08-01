import Title from "../../common/Title/Title";
import "./Post.css";
import { FaArrowRight } from "react-icons/fa";

import blog1 from "../../assets/OnlineCourses/blog-card-01.jpg";
import blog2 from "../../assets/OnlineCourses/blog-card-02.jpg";
import blog3 from "../../assets/OnlineCourses/blog-card-03.jpg";
import blog4 from "../../assets/OnlineCourses/blog-card-04.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Post() {
  const { ref, inView } = useInView({
    triggerOnce: true /* يشتغل مرة واحدة  اول ما يدخل السيكشن في الفيووو*/,
    threshold: 1 /* يشتغل الكاونتر عندما يكون 100 من 100 من ال section موجود في ال view  */,
  });
  return (
    <section className="post py-14 min-[350px]:py-16 min-[500px]:py-20  min-[600px]:py-24 bg-slate-50">
      <div className="mx-auto px-2 sm:px-3 md:px-4 lg:px-5">
        <div className="flex flex-col items-center gap-8 min-[600px]:gap-15 w-[92%] mx-auto">
          <div className=" flex flex-col min-[600px]:flex-row justify-between items-start min-[600px]:items-center w-full gap-4 min-[600px]:gap-0 ">
            <Title
              MainText={"Blog Post"}
              subText={"Post Popular Post."}
              colorText={"text-[#DB7093]"}
              bgText={"bg-[#DB709321]"}
              width={true}
              items={"items-start"}
              topOffset={"text-start"}
              colorText2={"text-black"}
            />
            <button className="group mb-4 text-[9px] min-[230px]:text-[10px] min-[250px]:text-[10px]  min-[300px]:text-[11px] min-[400px]:text-[12px] min-[500px]:text-[13px] min-[600px]:text-[14px] min-[800px]:text-[17px]  transition duration-300  btn3 w-[105px]! min-[350px]:w-[140px]! min-[600px]:w-[170px]! min-[800px]:w-[198px]!  px-1.5! min-[600px]:px-3!  py-2.5! min-[350px]:py-3!  min-[400px]:py-3! min-[800px]:py-3.5! min-[1200px]:py-4!  text-white cursor-pointer">
              <div className=" flex justify-center items-center gap-2 text-center w-full transition duration-300 -translate-x-2 group-hover:translate-x-2">
                <div className="flex justify-center items-center self-stretch pt-0 min-[451px]:pt-1 flex-1  text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px] opacity-0 text-white  transition duration-300">
                  <FaArrowRight className=" " />
                </div>
                <span className="text-nowrap">See All Articles</span>
                <div className="flex justify-center items-center pt-0 min-[451px]:pt-1 flex-1 self-stretch text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px] opacity-100 transition duration-300 ">
                  <FaArrowRight className="" />
                </div>
              </div>
            </button>
          </div>

          <div
            className="postBox w-full relative   pt-2 bg-transparent"
            ref={ref}
          >
            {inView && (
              <AnimatePresence>
                <motion.div
                  initial={{
                    minHeight: 0,
                    opacity: 0,
                    overflow: "hidden",
                  }}
                  animate={{
                    minHeight: "90vh",
                    opacity: 1,
                    overflow: "visible",
                  }}
                  exit={{
                    minHeight: 0,
                    opacity: 0,
                    overflow: "hidden",
                  }}
                  transition={{ duration: 0.3 }}
                  className=" w-full mx-auto "
                >
                  <div className="grid grid-cols-1 min-[992px]:grid-cols-2  gap-10">
                    <div className="scale-100 hover:scale-x-[1.03] hover:scale-y-[1.03]  transition duration-300 rounded-xl  shadow  w-full bg-white flex flex-col justify-start items-start gap-3 ">
                      <div className="flex flex-col justify-start w-full  gap-1.5">
                        <img
                          src={blog1}
                          className="cursor-pointer w-full h-[130px] min-[350px]:h-[150px] min-[767px]:h-[230px] min-[992px]:h-full rounded-tr-lg rounded-tl-lg min-[767px]:rounded-tr-xl min-[767px]:rounded-tl-xl"
                        />
                        <div className="flex flex-col justify-center items-start gap-2 px-4 pt-1 pb-3 min-[450px]:px-5 min-[450px]:pb-5 min-[700px]:px-6 min-[700px]:pb-6 ">
                          <h4 className="text-gray-800 hover:text-blue-600 text-[17px] min-[270px]:text-[21px] min-[350px]:text-[24px] min-[400px]:text-[24px] min-[650px]:text-[30px] font-bold cursor-pointer hover:text-blue-600 transition duration-300">
                            React
                          </h4>
                          <p className=" text-[13px] min-[270px]:text-[15px] min-[350px]:text-[17px] min-[400px]:text-[18px] min-[650px]:text-[19px] text-slate-500">
                            It is a long established fact that a reader.
                          </p>
                          <p className="group cursor-pointer relative pb-1 flex justify-start items-center gap-1 text-neutral-600 text-[11px] min-[27px]:text-[13px] min-[350px]:text-[14px]  min-[400px]:text-[15px] min-[650px]:text-[16px]">
                            Learn More
                            <FaArrowRight className="relative top-0.5 -translate-y-0.49 transition duration-300 group-hover:translate-x-1" />
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col min-[600px]:flex-row min-[767px]:flex-col items-start justify-center gap-5 w-full">
                      <div className="shadow   bg-white w-full h-full min-[600px]:w-[50%] min-[767px]:w-full   grid grid-cols-1 min-[767px]:grid-cols-4 min-[992px]:grid-cols-2 rounded-lg scale-100 hover:scale-x-[1.03] hover:scale-y-[1.03] transition duration-300">
                        <img
                          src={blog2}
                          className="cursor-pointer  col-span-2 min-[992px]:col-span-1 w-full h-[130px] min-[350px]:h-[150px] min-[992px]:h-full rounded-tl-lg min-[767px]:rounded-tl-lg rounded-bl-none min-[767px]:rounded-bl-lg rounded-tr-lg min-[767px]:rounded-tr-none rounded-br-none min-[767px]:rounded-br-none"
                        />
                        <div className="flex flex-col justify-start items-start gap-2 p-3 min-[767px]:ps-5 py-3 min-[767px]:pe-3 col-span-2 min-[992px]:col-span-1 ">
                          <h4 className="text-gray-800 hover:text-blue-600 text-[15px] min-[350px]:text-[20px] min-[767px]:text-[26px]  min-[850px]:text-[29px]  min-[992px]:text-[22px] min-[1200px]:text-[27px] font-bold cursor-pointer hover:text-blue-600 transition duration-300">
                            Why Is Education So Famous?
                          </h4>
                          <p className="group cursor-pointer  relative pb-1 flex justify-start items-center gap-1 text-neutral-600 text-[12px] min-[270px]:text-[13px] min-[350px]:text-[14px]  min-[520px]:text-[15px] min-[1200px]:text-[16px]">
                            Read Article
                            <FaArrowRight className="relative top-0.5  -translate-y-0.5 min-[767px]:-translate-y-0.49 transition duration-300 group-hover:translate-x-1" />
                          </p>
                        </div>
                      </div>
                      <div className="shadow   bg-white w-full h-full min-[600px]:w-[50%] min-[767px]:w-full   grid grid-cols-1 min-[767px]:grid-cols-4 min-[992px]:grid-cols-2 rounded-lg scale-100 hover:scale-x-[1.03] hover:scale-y-[1.03] transition duration-300">
                        <img
                          src={blog3}
                          className="cursor-pointer  col-span-2 min-[992px]:col-span-1 w-full h-[130px] min-[350px]:h-[150px] min-[992px]:h-full rounded-tl-lg min-[767px]:rounded-tl-lg rounded-bl-none min-[767px]:rounded-bl-lg rounded-tr-lg min-[767px]:rounded-tr-none rounded-br-none min-[767px]:rounded-br-none"
                        />
                        <div className="flex flex-col justify-start items-start gap-2 p-3 min-[767px]:ps-5 py-3 min-[767px]:pe-3 col-span-2 min-[992px]:col-span-1 ">
                          <h4 className="text-gray-800 hover:text-blue-600 text-[15px] min-[350px]:text-[20px] min-[767px]:text-[26px]  min-[850px]:text-[29px]  min-[992px]:text-[22px] min-[1200px]:text-[27px] font-bold cursor-pointer hover:text-blue-600 transition duration-300">
                            Difficult Things About Education.
                          </h4>
                          <p className="group cursor-pointer  relative pb-1 flex justify-start items-center gap-1 text-neutral-600 text-[12px] min-[270px]:text-[13px] min-[350px]:text-[14px]  min-[520px]:text-[15px] min-[1200px]:text-[16px]">
                            Read Article
                            <FaArrowRight className="relative top-0.5  -translate-y-0.5 min-[767px]:-translate-y-0.49 transition duration-300 group-hover:translate-x-1" />
                          </p>
                        </div>
                      </div>
                      <div className="shadow   bg-white w-full h-full min-[600px]:w-[50%] min-[767px]:w-full   grid grid-cols-1 min-[767px]:grid-cols-4 min-[992px]:grid-cols-2 rounded-lg scale-100 hover:scale-x-[1.03] hover:scale-y-[1.03] transition duration-300">
                        <img
                          src={blog4}
                          className="cursor-pointer  col-span-2 min-[992px]:col-span-1 w-full h-[130px] min-[350px]:h-[150px] min-[992px]:h-full rounded-tl-lg min-[767px]:rounded-tl-lg rounded-bl-none min-[767px]:rounded-bl-lg rounded-tr-lg min-[767px]:rounded-tr-none rounded-br-none min-[767px]:rounded-br-none"
                        />
                        <div className="flex flex-col justify-start items-start gap-2 p-3 min-[767px]:ps-5 py-3 min-[767px]:pe-3 col-span-2 min-[992px]:col-span-1 ">
                          <h4 className="text-gray-800 hover:text-blue-600 text-[15px] min-[350px]:text-[20px] min-[767px]:text-[26px]  min-[850px]:text-[29px]  min-[992px]:text-[22px] min-[1200px]:text-[27px] font-bold cursor-pointer hover:text-blue-600 transition duration-300">
                            Education Is So Famous, But Why?
                          </h4>
                          <p className="group cursor-pointer  relative pb-1 flex justify-start items-center gap-1 text-neutral-600 text-[12px] min-[270px]:text-[13px] min-[350px]:text-[14px]  min-[520px]:text-[15px] min-[1200px]:text-[16px]">
                            Read Article
                            <FaArrowRight className="relative top-0.5  -translate-y-0.5 min-[767px]:-translate-y-0.49 transition duration-300 group-hover:translate-x-1" />
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Post;
