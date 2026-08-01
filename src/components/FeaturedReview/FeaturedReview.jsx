import { FaStar } from "react-icons/fa";
import "./FeaturedReview.css";
import { GrDislike, GrLike } from "react-icons/gr";

function FeaturedReview({ img, title, description }) {
  return (
    <div className="grid grid-cols-4  gap-3  mt-3 min-[500px]:mt-6 border-b border-gray-300 pb-5">
      <div className="col-span-4 min-[500px]:col-span-1 w-full h-[130px] min-[400px]:h-[100px] min-[430px]:h-[130px] min-[600px]:w-[100px] min-[650px]:w-[110px] min-[720px]:w-[130px]  min-[870px]:w-[150px] min-[1000px]:w-[100px] min-[500px]:h-[100px]  ">
        <img
          src={img}
          className="rounded-md min-[500px]:rounded-lg w-full h-full "
        />
      </div>
      <div className="col-span-4 min-[500px]:col-span-3">
        <div className="flex flex-col justify-start items-start gap-3 w-full">
          <h2 className="font-black text-xs min-[300px]:text-sm min-[400px]:text-[15px] min-[600px]:text-xl cursor-pointer hover:text-blue-600 transition duration-300">
            {title}
          </h2>
          <div className="rating flex justify-center items-center gap-0.5 text-orange-400 text-xs min-[300px]:text-sm min-[400px]:text-[15px]  min-[600px]:text-lg">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
          <p className="text-gray-400 text-xs min-[300px]:text-sm min-[400px]:text-[15px] min-[600px]:text-lg my-1 min-[500px]:my-2">
            {description}
          </p>
          <div className=" flex justify-center items-center gap-1.5 min-[350px]:gap-3  ">
            <div className="icon relative overflow-hidden z-[1] cursor-pointer hover:text-white transition duration-300 w-[30px] h-[30px] min-[350px]:w-[40px] min-[350px]:h-[40px]  min-[613px]:w-[45px] min-[613px]:h-[45px] flex justify-center items-center text-[13px] min-[270]:text-sm min-[350px]:text-lg text-gray-500 border-2 border-gray-200 rounded-full hover:border-transparent">
              <GrLike />
            </div>
            <div className="icon relative overflow-hidden z-[1] cursor-pointer hover:text-white transition duration-300 w-[30px] h-[30px] min-[350px]:w-[40px] min-[350px]:h-[40px] min-[613px]:w-[45px] min-[613px]:h-[45px] flex justify-center items-center text-[13px] min-[270]:text-sm min-[350px]:text-lg text-gray-500 border-2 border-gray-200 rounded-full hover:border-transparent">
              <GrDislike />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedReview;
