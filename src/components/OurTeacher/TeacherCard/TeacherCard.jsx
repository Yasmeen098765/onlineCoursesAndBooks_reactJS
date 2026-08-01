import "./TeacherCard.css";
import { IoLocationOutline } from "react-icons/io5";
import { LuFacebook } from "react-icons/lu";
import { SlSocialTwitter } from "react-icons/sl";
import { GrInstagram } from "react-icons/gr";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";

function TeacherCard({
  img,
  title,
  subtitle,
  subtitle2,
  paragraph,
  phone,
  email,
  ActiveTeacher,
  teachernum,
}) {
  const result = ActiveTeacher == teachernum ? "active" : "";
  return (
    <div
      className={`teacherCard ${result}   transition duration-300  absolute opacity-0 top-0 left-0 w-full h-full flex flex-col min-[654px]:flex-row  items-center gap-4  min-[450px]:gap-8  min-[654px]:gap-6  min-[1200px]:gap-8 `}
    >
      <img
        src={img}
        className="  w-full  min-[654px]:w-[250px] min-[1200px]:w-[280px] h-[150px] min-[350px]:h-[180px] min-[450px]:h-[240px] min-[553px]:h-[280px] min-[613px]:h-[318px] min-[654px]:h-full  rounded-lg "
      />
      <div className="flex flex-col  items-start justify-center gap-1.5 min-[400px]:gap-3 z-[1] ">
        <h2 className="text-[14px] min-[270px]:text-[16px] min-[350px]:text-xl min-[400px]:text-2xl min-[613px]:text-3xl min-[654px]:text-2xl min-[720px]:text-3xl font-bold capitalize">
          {title}
        </h2>
        <span className="text-[11.5px] min-[350px]:text-[15px] min-[400px]:text-lg min-[613px]:text-xl min-[654px]:text-lg min-[720px]:text-xl font-semibold text-blue-500 capitalize">
          {subtitle}
        </span>
        <span className="italic text-[10px] min-[350px]:text-[13px] min-[400px]:text-sm min-[613px]:text-md min-[654px]:text-sm min-[720px]:text-md text-gray-500 flex gap-1 justify-center items-center">
          <IoLocationOutline />
          {subtitle2}
        </span>
        <p
          className="text-gray-500 text-[12px] min-[300px]:text-[13px] min-[350px]:text-[15px] min-[400px]:text-[16px] min-[500px]:text-[17px] min-[613px]:text-lg min-[654px]:text-[17px] min-[720px]:text-lg min-[1200px]:text-xl w-full min-[1200px]:w-[95%] py-2"
          style={{ lineHeight: "1.5" }}
        >
          {paragraph}
        </p>
        <div className="flex justify-start items-center gap-1.5 min-[350px]:gap-3  ">
          <div className="icon relative overflow-hidden z-[1] cursor-pointer hover:text-white transition duration-300 w-[30px] h-[30px] min-[350px]:w-[40px] min-[350px]:h-[40px]  min-[613px]:w-[45px] min-[613px]:h-[45px] flex justify-center items-center text-[13px] min-[270]:text-sm min-[350px]:text-lg text-gray-500 bg-gray-100 rounded-full">
            <LuFacebook />
          </div>
          <div className="icon relative overflow-hidden z-[1] cursor-pointer hover:text-white transition duration-300 w-[30px] h-[30px] min-[350px]:w-[40px] min-[350px]:h-[40px] min-[613px]:w-[45px] min-[613px]:h-[45px] flex justify-center items-center text-[13px] min-[270]:text-sm min-[350px]:text-lg text-gray-500 bg-gray-100 rounded-full">
            <SlSocialTwitter />
          </div>
          <div className="icon relative overflow-hidden z-[1] cursor-pointer hover:text-white transition duration-300 w-[30px] h-[30px] min-[350px]:w-[40px] min-[350px]:h-[40px] min-[613px]:w-[45px] min-[613px]:h-[45px] flex justify-center items-center text-[13px] min-[270]:text-sm min-[350px]:text-lg text-gray-500 bg-gray-100 rounded-full">
            <GrInstagram />
          </div>
        </div>
        <div className="flex flex-col min-[500px]:flex-row min-[654px]:flex-col justify-center items-start gap-2 min-[500px]:gap-6 min-[654px]:gap-2 pt-3 ">
          <div className="flex z-[1] justify-start items-center gap-2 text-gray-500 text-[11px]  min-[300px]:text-[12px] min-[350px]:text-[14px] min-[400px]:text-[15px] min-[613px]:text-lg min-[654px]:text-[15px] min-[800px]:text-lg hover:text-blue-600 duration-300 transition cursor-pointer">
            <LuPhone />
            <span>{phone}</span>
          </div>
          <div className="flex z-[1] justify-start items-center gap-2 text-gray-500 text-[11px]  min-[300px]:text-[12px]  min-[350px]:text-[14px] min-[400px]:text-[15px] min-[613px]:text-lg min-[654px]:text-[15px] min-[800px]:text-lg hover:text-blue-600 duration-300 transition cursor-pointer">
            <MdOutlineEmail />
            <span>{email}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeacherCard;
