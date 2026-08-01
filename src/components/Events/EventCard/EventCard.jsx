import "./EventCard.css";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa";
function EventCard({ img, span1, span2, p1, p2, title }) {
  return (
    <div className="mb-10 min-[400px]:mb-13 min-[1200px]:mb-14 eventCard transition-all duration-300 w-full bg-white rounded-lg shadow pt-3 pb-2 px-3  min-[350px]:pt-4 min-[350px]:pb-3 min-[350px]:px-5 min-[520px]:pt-5 min-[520px]:pb-4 min-[520px]:px-6 ">
      <div className="relative cardEventImg w-full h-26 min-[270px]:h-30 min-[350px]:h-37 min-[520px]:h-39  min-[760px]:h-47 rounded-lg overflow-hidden mb-4 ">
        <img src={img} className="w-full h-full  " />
        <div className=" text-[8px] min-[300px]:text-[10px] min-[800px]:text-[12px] flex flex-col justify-center items-center cardEventImgOffer text-white absolute bottom-3 right-3 w-[35px] h-[35px] min-[300px]:w-[50px] min-[800px]:w-[65px] min-[300px]:h-[50px] min-[800px]:h-[65px] bg-transparent z-[1] p-1">
          <span>{span1}</span>
          <span>{span2}</span>
        </div>
      </div>
      <div className="cardEventBody w-full flex flex-col justify-center items-start gap-3">
        <div className="flex flex-col min-[280px]:flex-row min-[500px]:flex-col min-[705px]:flex-row min-[900px]:flex-col min-[1017px]:flex-row justify-start items-start gap-1 min-[270px]:gap-2 min-[500px]:gap-2 min-[800px]:gap-4 min-[900px]:gap-2 text-[11px] min-[270px]:text-[12px] min-[300px]:text-[13px] min-[520px]:text-[15px]  text-gray-500">
          <p className="flex justify-start items-center gap-0.5">
            <MdOutlineLocationOn /> {p1}
          </p>
          <p className="flex justify-start items-center gap-0.5">
            <IoMdTime /> {p2}
          </p>
        </div>
        <h4 className="text-gray-800 text-[15px] min-[350px]:text-[18px] min-[500px]:text-[17px] min-[800px]:text-[20px]  min-[1200px]:text-[24px] font-bold cursor-pointer hover:text-blue-600 transition duration-300">
          {title}
        </h4>

        <button className="mb-1 group rounded-4xl border-2 border-gray-300 hover:border-blue-600 hover:bg-blue-600 text-[9px] min-[350px]:text-[13px] min-[600px]:text-[17px]  transition duration-300   w-[105px]! min-[350px]:w-[140px]! min-[600px]:w-[150px]!  px-1.5! min-[600px]:px-2!  py-1.5!  text-white cursor-pointer">
          <div className="text-black transition duration-300 -translate-x-2  group-hover:text-white group-hover:translate-x-2 flex justify-center items-center gap-0 text-center w-full">
            <div className="flex justify-center items-center self-stretch pt-0.5 flex-1  text-[9px] min-[350px]:text-[13px] min-[600px]:text-[14px] opacity-0   group-hover:opacity-100   transition duration-300">
              <FaArrowRight />
            </div>
            <span className="text-nowrap text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px]">
              Get Ticket
            </span>
            <div className="flex justify-center items-center self-stretch pt-0.5 flex-1 text-[9px] min-[350px]:text-[13px] min-[600px]:text-[14px] opacity-100 group-hover:opacity-0 transition duration-300 ">
              <FaArrowRight className="" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default EventCard;
