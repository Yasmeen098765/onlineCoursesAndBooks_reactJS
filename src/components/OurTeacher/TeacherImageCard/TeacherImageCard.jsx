import "./TeacherImageCard.css";
import { MdOutlineTurnLeft } from "react-icons/md";
function TeacherImageCard({
  setActiveTeacher,
  teachernum,
  ActiveTeacher,
  img,
}) {
  const result1 = ActiveTeacher == teachernum ? "active" : "";
  const result2 = ActiveTeacher == teachernum ? "opacity-100" : "opacity-0";
  return (
    <div
      onClick={() => setActiveTeacher(teachernum)}
      className={`teacherImageCard col-span-1 cursor-pointer rounded px-2.5 py-3 bg-white relative shadowTeacher     `}
    >
      <div
        className={` ${result1} transition duration-300 w-full h-full overflow-hidden rounded relative`}
      >
        <img
          src={img}
          className="w-full h-[140px] min-[450px]:h-[230px] min-[613px]:h-[280px] min-[992px]:h-full "
        />
        <MdOutlineTurnLeft
          className={` ${result2} transition duration-300 absolute z-[1] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white  text-[45px]`}
        />
      </div>
    </div>
  );
}

export default TeacherImageCard;
