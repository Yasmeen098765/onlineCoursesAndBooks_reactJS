import "./courseCard.css";
import { FaArrowRight } from "react-icons/fa";
import { LuBook } from "react-icons/lu";
import { LuUsers } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

function CourseCard({ val }) {
  const handleScrollTo = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div className=" scale-100  transition-all duration-300 coursecard cursor-pointer w-full bg-white rounded-lg shadow pt-3 pb-2 px-3  min-[350px]:pt-4 min-[350px]:pb-3 min-[350px]:px-5 min-[520px]:pt-5 min-[520px]:pb-4 min-[520px]:px-6 ">
      <div className="cardHeroImg w-full h-26 min-[270px]:h-30 min-[350px]:h-37 min-[520px]:h-39  min-[760px]:h-47 rounded-lg overflow-hidden mb-4 ">
        <img src={val.image} className="w-full h-full  " />
      </div>
      <div className="cardHeroBody w-full flex flex-col justify-center items-start gap-2">
        <div className="flex justify-start items-center gap-2 min-[520px]:gap-4 text-[9px] min-[350px]:text-[11px]  min-[520px]:text-[14px] text-gray-500">
          <p className="flex justify-start items-center gap-0.5">
            <LuBook /> {val.lessons} Lessons
          </p>
          <p className="flex justify-start items-center gap-0.5">
            <LuUsers /> {val.Students} Students
          </p>
        </div>
        <h4 className="text-gray-800 text-[15px] min-[350px]:text-[18px] min-[520px]:text-[24px] font-bold cursor-pointer hover:text-blue-600 transition duration-300">
          {val.title}
        </h4>
        <p className="text-[11px] min-[350px]:text-[14px] min-[520px]:text-[16px] text-slate-500">
          {val.description}
        </p>
        <div className="rbt-review flex justifu-start items-center gap-2 text-[10px] min-[350px]:text-[12px] min-[520px]:text-[14px] font-semibold">
          <div className="rating flex justify-center items-center gap-0.5 text-orange-400">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <span className="text-neutral-500"> (15 Reviews)</span>
        </div>
        <div className="w-full flex-wrap gap-1 flex justify-between items-center ">
          <div className="flex justify-start items-center gap-1 min-[350px]:gap-2 ">
            <span className="font-bold text-gray-500 text-[14px] min-[350px]:text-[17px] min-[520px]:text-[22px]">
              ${(val.price - (val.discount * val.price) / 100).toFixed(2)}
            </span>
            <span className="font-semibold line-through text-neutral-400 text-[13px] min-[350px]:text-[16px] min-[520px]:text-[19px]">
              ${val.price.toFixed(2)}
            </span>
          </div>
          <Link
            to={`/courseDetails/${val.id}`}
            onClick={() => handleScrollTo()}
          >
            <p className=" hover:text-blue-600 transition duration-300 viewProfile relative pb-1 flex justify-start items-center gap-1 min-[350px]:gap-2 text-neutral-500 text-[9.5px] min-[350px]:text-[11px]  min-[520px]:text-[15px]">
              Learn More
              <FaArrowRight className="relative top-0.5 -translate-x-0.5" />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
