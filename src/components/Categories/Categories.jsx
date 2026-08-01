import Title from "../../common/Title/Title";
import "./categories.css";
import webDesign from "../../assets/OnlineCourses/web-design.png";
import design from "../../assets/OnlineCourses/design.png";
import personal from "../../assets/OnlineCourses/personal.png";
import server from "../../assets/OnlineCourses/server.png";
import pantone from "../../assets/OnlineCourses/pantone.png";
import paintpalette from "../../assets/OnlineCourses/paint-palette.png";
import smartphone from "../../assets/OnlineCourses/smartphone.png";
import infographic from "../../assets/OnlineCourses/infographic.png";

import { FaArrowRight } from "react-icons/fa";

function Categories() {
  const categories = [
    {
      image: webDesign,
      title: "web design",
      count: "25",
    },
    {
      image: design,
      title: "Graphic Design",
      count: "30",
    },
    {
      image: personal,
      title: "Personal Development",
      count: "20",
    },
    {
      image: server,
      title: "IT and Software",
      count: "15",
    },
    {
      image: pantone,
      title: "Sales Marketing",
      count: "15",
    },
    {
      image: paintpalette,
      title: "Art & Humanities",
      count: "15",
    },
    {
      image: smartphone,
      title: "Mobile Application",
      count: "15",
    },
    {
      image: infographic,
      title: "Finance & Accounting",
      count: "15",
    },
  ];
  return (
    <section className="categories">
      <div className=" mx-auto px-2 sm:px-3 md:px-4  lg:px-5 ">
        <div className="flex flex-col justify-center items-center gap-5 min-[270px]:gap-9  min-[1200px]:gap-10 pt-5  min-[900px]:pt-8 min-[1200px]:pt-0 pb-15 min-[1200px]:pb-24">
          <Title
            MainText={"CATEGORIES"}
            subText={"Explore Top Courses Caterories That Change Yourself"}
            colorText={"text-blue-600"}
            bgText={"bg-indigo-100"}
            width1={true}
            items={"items-center"}
            topOffset={"text-center"}
          />
          {/*           <div className="grid grid-cols-12  gap-x-0 min-[470px]:gap-x-5 gap-y-6  min-[1200px]:gap-y-9  px-6 min-[470px]:px-10 py-3 bg-amber-300"> */}
          <div className="grid grid-cols-12  gap-x-0 min-[470px]:gap-x-5 gap-y-6  min-[1200px]:gap-y-9 w-[92%] relative  py-3 ">
            {categories.map((el, index) => (
              <div
                key={index}
                className="col-span-12 min-[470px]:col-span-6 md:col-span-4  lg:col-span-3 py-5 px-2 min-[700px]:py-8 min-[1200px]:py-10 min-[470px]:px-4 bg-white shadowcard  rounded-xl overflow-hidden cursor-pointer transition duration-300 hover:-translate-y-1.5 "
              >
                <div className="flex flex-col justify-center items-center gap-3 ">
                  <img
                    src={el.image}
                    className="w-[38px] min-[270px]:w-[50px] min-[470px]:w-[51px]  min-[670px]:w-[67px] min-[1200px]:w-[80px] text-center "
                  />
                  <h3 className="text-center font-bold text-[13px] min-[270px]:text-[15px] min-[350px]:text-[17px] min-[470px]:text-[17px] min-[768px]:text-[15px] min-[804px]:text-[17px]  min-[1021px]:text-[16px] min-[1200px]:text-[21px] capitalize">
                    {el.title}
                  </h3>
                  <p className="capitalize cursor-pointer hover:text-blue-600 transition duration-300 viewProfile relative pb-1 flex justify-start items-center gap-1 min-[350px]:gap-2 text-slate-800 text-[11px] min-[350px]:text-[13px]  min-[520px]:text-[15px]">
                    {el.count} courses{" "}
                    <FaArrowRight className="relative top-0.5 -translate-x-0.3  text-[9px] min-[350px]:text-[11px]  min-[470px]:text-[13px] min-[670px]:text-[15px]" />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
