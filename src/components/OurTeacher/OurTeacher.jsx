import Title from "../../common/Title/Title";
import "./OurTeacher.css";

import team1 from "../../assets/OnlineCourses/team-01.jpg";
import team2 from "../../assets/OnlineCourses/team-02.jpg";
import team3 from "../../assets/OnlineCourses/team-03.jpg";
import team4 from "../../assets/OnlineCourses/team-04.jpg";
import team5 from "../../assets/OnlineCourses/team-05.jpg";
import team6 from "../../assets/OnlineCourses/team-06.jpg";
// import { MdOutlineTurnLeft } from "react-icons/md";
import { useState } from "react";
import TeacherCard from "./TeacherCard/TeacherCard";
import TeacherImageCard from "./TeacherImageCard/TeacherImageCard";

function OurTeacher() {
  const [ActiveTeacher, setActiveTeacher] = useState("teacher1");

  return (
    <section className="ourTeacher">
      <div className=" mx-auto px-2 sm:px-3 md:px-4  lg:px-5 ">
        <div className="flex flex-col justify-center items-center gap-6 min-[350px]:gap-15 py-15 min-[350px]:py-24 ">
          <Title
            MainText={"Our Teacher"}
            subText={"Whose Inspirations You"}
            colorText={"text-blue-500"}
            bgText={"bg-blue-100"}
            width1={true}
            items={"items-center"}
            topOffset={"text-center"}
          />
          <div className="grid grid-cols-3 gap-8 min-[1200px]:gap-10 eventsBox w-[92%] min-[230px]:w-[88%] min-[654px]:w-[92%] min-[992px]:w-[96%] min-[1200px]:w-[92%] relative  ">
            <div className=" teamGalary1 relative min-h-[86vh] min-[210px]:min-h-[85vh] min-[230px]:min-h-[82vh] min-[300px]:min-h-[84vh] min-[323px]:min-h-[82vh] min-[350px]:min-h-[95vh] min-[400px]:min-h-[102vh] min-[450px]:min-h-[120vh] min-[500px]:min-h-[115vh]  min-[553px]:min-h-[122vh] min-[567px]:min-h-[118vh] min-[613px]:min-h-[129vh] min-[654px]:min-h-[428px] min-[1200px]:h-[395px] overflow-hidden overflow-y-auto  col-span-3 min-[992px]:col-span-2 shadow-2xl p-3 min-[300px]:p-4 min-[450px]:p-7  min-[654px]:p-5  min-[1200px]:p-7 rounded-lg">
              <div className=" relative w-full  h-full  z-[1] ">
                {/* 1 */}
                <TeacherCard
                  img={team1}
                  title={"Mames Mary"}
                  subtitle={"English Teacher"}
                  subtitle2={"CO Miego, AD,USA"}
                  paragraph={
                    "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
                  }
                  phone={"+1-202-555-0174"}
                  email={"example@gmail.com"}
                  ActiveTeacher={ActiveTeacher}
                  teachernum={"teacher1"}
                />
                {/* 2 */}
                <TeacherCard
                  img={team2}
                  title={"Robert Song"}
                  subtitle={"Math Teacher"}
                  subtitle2={"CO Miego, AD,USA"}
                  paragraph={
                    "Education The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
                  }
                  phone={"+1-202-555-0174"}
                  email={"example@gmail.com"}
                  ActiveTeacher={ActiveTeacher}
                  teachernum={"teacher2"}
                />
                {/* 3 */}
                <TeacherCard
                  img={team3}
                  title={"William Susan"}
                  subtitle={"React Teacher"}
                  subtitle2={"CO Miego, AD,USA"}
                  paragraph={
                    "React The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
                  }
                  phone={"+1-202-555-0174"}
                  email={"example@gmail.com"}
                  ActiveTeacher={ActiveTeacher}
                  teachernum={"teacher3"}
                />
                {/* 4 */}
                <TeacherCard
                  img={team4}
                  title={"Soseph Sara"}
                  subtitle={"Web Teacher"}
                  subtitle2={"CO Miego, AD,USA"}
                  paragraph={
                    "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
                  }
                  phone={"+1-202-555-0174"}
                  email={"example@gmail.com"}
                  ActiveTeacher={ActiveTeacher}
                  teachernum={"teacher4"}
                />
                {/* 5 */}
                <TeacherCard
                  img={team5}
                  title={"Thomas Dal"}
                  subtitle={"Graphic Teacher"}
                  subtitle2={"CO Miego, AD,USA"}
                  paragraph={
                    "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
                  }
                  phone={"+1-202-555-0174"}
                  email={"example@gmail.com"}
                  ActiveTeacher={ActiveTeacher}
                  teachernum={"teacher5"}
                />
                {/* 6 */}
                <TeacherCard
                  img={team6}
                  title={"Christopher Lisa"}
                  subtitle={"English Teacher"}
                  subtitle2={"CO Miego, AD,USA"}
                  paragraph={
                    "Histudy The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested."
                  }
                  phone={"+1-202-555-0174"}
                  email={"example@gmail.com"}
                  ActiveTeacher={ActiveTeacher}
                  teachernum={"teacher6"}
                />
              </div>
              <div className="topCircleShap absolute content-[''] "></div>
            </div>
            <div className="teamGalary col-span-3 min-[992px]:col-span-1  grid grid-cols-1 min-[270px]:grid-cols-2 min-[574px]:grid-cols-3  gap-2  ">
              <TeacherImageCard
                setActiveTeacher={setActiveTeacher}
                teachernum="teacher1"
                ActiveTeacher={ActiveTeacher}
                img={team1}
              />
              <TeacherImageCard
                setActiveTeacher={setActiveTeacher}
                teachernum="teacher2"
                ActiveTeacher={ActiveTeacher}
                img={team2}
              />
              <TeacherImageCard
                setActiveTeacher={setActiveTeacher}
                teachernum="teacher3"
                ActiveTeacher={ActiveTeacher}
                img={team3}
              />
              <TeacherImageCard
                setActiveTeacher={setActiveTeacher}
                teachernum="teacher4"
                ActiveTeacher={ActiveTeacher}
                img={team4}
              />
              <TeacherImageCard
                setActiveTeacher={setActiveTeacher}
                teachernum="teacher5"
                ActiveTeacher={ActiveTeacher}
                img={team5}
              />
              <TeacherImageCard
                setActiveTeacher={setActiveTeacher}
                teachernum="teacher6"
                ActiveTeacher={ActiveTeacher}
                img={team6}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurTeacher;
