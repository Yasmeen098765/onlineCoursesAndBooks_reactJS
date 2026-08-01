import "./RelatedCoursesDetails.css";
import Title from "../../common/Title/Title";
import { LuBook } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { useContext } from "react";
import { DisplayCoursesContext } from "../../context/DisplayCoursesContext.jsx";
import { Link } from "react-router-dom";

function RelatedCoursesDetails() {
  const { coursesData } = useContext(DisplayCoursesContext);
  const topCourse = coursesData.slice(0, 3);

  const handleScrollTo = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className="relatedCoursesDetails">
      <div className="flex flex-col justify-center items-center gap-6 min-[350px]:gap-10  ">
        <Title
          MainText={"More Similar Courses"}
          subText={"Related Courses"}
          colorText={"text-blue-500"}
          bgText={"bg-blue-100"}
          width1={true}
          items={"items-start"}
          topOffset={"text-start"}
        />
        <div className="grid grid-cols-6 gap-y-8    min-[470px]:gap-x-8 min-[640px]:gap-x-5 min-[900px]:gap-x-5 min-[1200px]:gap-x-8  relative py-3">
          {topCourse.map((el, index) => (
            <div
              key={el.id}
              className="col-span-6  sm:col-span-3 min-[900px]:col-span-2! scale-100! hover:scale-x-[1.02]! hover:scale-y-[1.02]!  transition-all! duration-500!  "
            >
              <div className="h-full scale-100  transition-all duration-300 coursecard  w-full bg-white rounded-lg shadow px-3 py-4 min-[320px]:p-4 min-[330px]:p-5 min-[380px]:p-6 min-[640px]:p-5  min-[900px]:p-5 min-[1200px]:p-6  ">
                <div className="cursor-pointer cardHeroImg w-full h-26 min-[350px]:h-30 min-[350px]:h-37 min-[520px]:h-39  min-[760px]:h-47 rounded-lg overflow-hidden mb-4 ">
                  <img src={el.image} className="w-full h-full  " />
                </div>
                <div className="cardHeroBody w-full flex flex-col justify-center items-start gap-2">
                  <div className="flex justify-between items-center w-full ">
                    <div className="rbt-review flex justifu-start items-center gap-2 text-[10px] min-[350px]:text-[12px] min-[430px]:text-[13px] min-[520px]:text-[14px] min-[900px]:text-[13px] min-[1200px]:text-[14px] font-semibold">
                      <div className="rating flex justify-center items-center gap-0.5 text-orange-400">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                      <span className="text-neutral-500"> (15 Reviews)</span>
                    </div>
                    <div className="p-1 min-[351px]:p-2 text-[10px] min-[350px]:text-[13px]  min-[391px]:text-[17px] min-[430px]:text-[17px] min-[900px]:text-[15px] min-[1200px]:text-[17px] hover:bg-gray-200  transition duration-300 rounded-full cursor-pointer hover:text-blue-600">
                      <FaRegBookmark />
                    </div>
                  </div>

                  <h4 className="text-gray-800 text-wrap min-[1200px]:text-nowrap text-[15px] min-[350px]:text-[18px] min-[430px]:text-[20px] min-[520px]:text-[24px] min-[640px]:text-[20px] min-[900px]:text-[20px] min-[1200px]:text-[24px] font-bold cursor-pointer hover:text-blue-600 transition duration-300">
                    {el.title}
                  </h4>

                  <div className="flex justify-start items-center  gap-2 min-[520px]:gap-4 text-[9px] min-[350px]:text-[11px] min-[430px]:text-[13px]  min-[520px]:text-[14px] min-[640px]:text-[13px] min-[900px]:text-[13px] min-[1200px]:text-[14px] text-gray-500">
                    <p className="flex justify-start items-center gap-0.5">
                      <LuBook /> {el.lessons} Lessons
                    </p>
                    <p className="flex justify-start items-center gap-0.5">
                      <LuUsers /> {el.Students} Students
                    </p>
                  </div>

                  <p className="text-[11px] min-[350px]:text-[14px] min-[430px]:text-[15px] min-[520px]:text-[16px] min-[600px]:text-[17px] min-[640px]:text-[16px] min-[900px]:text-[16px] min-[1200px]:text-[17px] text-slate-500">
                    {el.description}
                  </p>

                  <div className="flex gap-2 min-[640px]:gap-4 min-[900px]:gap-1 min-[1200px]:gap-4 items-center justify-start">
                    <img
                      src={el.image2}
                      className=" text-[14px] w-[30px] h-[30px] min-[330px]:w-[40px] min-[330px]:h-[40px] rounded-full border-gray-300 border-2 p-0.5 "
                    />
                    <p className="text-slate-500 capitalize text-wrap min-[290]:text-nowrap text-[10px] min-[350px]:text-[13px] min-[400px]:text-[14px] min-[520px]:text-[15px] min-[600px]:text-[16px] min-[640px]:text-[13px] min-[900px]:text-[14px] min-[1200px]:text-[16px] ">
                      <span className="text-black hover:text-blue-600 transition duration-300 cursor-pointer">
                        {el.study}
                      </span>{" "}
                    </p>
                  </div>

                  <div className="w-full flex-wrap flex justify-between items-center gap-1 ">
                    <div className="flex justify-start items-center gap-1 min-[350px]:gap-2 ">
                      <span className="font-bold text-gray-500 text-[14px] min-[350px]:text-[17px] min-[520px]:text-[22px]">
                        $
                        {(el.price - (el.discount * el.price) / 100).toFixed(2)}
                      </span>
                      <span className="font-semibold line-through text-neutral-400 text-[13px] min-[350px]:text-[16px] min-[520px]:text-[19px]">
                        ${el.price.toFixed(2)}
                      </span>
                    </div>
                    <Link
                      to={`/courseDetails/${el.id}`}
                      onClick={() => handleScrollTo()}
                    >
                      <p className="cursor-pointer hover:text-blue-600 transition duration-300 viewProfile relative pb-1 flex justify-start items-center gap-0.5 min-[350px]:gap-2 text-neutral-500 text-[9.5px] min-[250px]:text-[10px]  min-[320px]:text-[11px] min-[350px]:text-[12px]  min-[420px]:text-[13.5px] min-[470px]:text-[14px] min-[640px]:text-[15px]">
                        Learn More
                        <FaArrowRight className="relative top-0.5 -translate-y-0 -translate-x-0.5" />
                      </p>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedCoursesDetails;
