import Title from "../../common/Title/Title";
import "./chooseUs.css";
import counter1 from "../../assets/OnlineCourses/counter-01.png";
import counter2 from "../../assets/OnlineCourses/counter-02.png";
import counter3 from "../../assets/OnlineCourses/counter-03.png";
import counter4 from "../../assets/OnlineCourses/counter-04.png";

//counter احتجت مكتبتين هما :لمعرفة اول ما يدخل السيكشن في الفيوو ليبدأ الكاونتر يشتغل
import { useInView } from "react-intersection-observer";
import Counter from "../Counter/Counter";

function ChooseUs() {
  const { ref, inView } = useInView({
    triggerOnce: true /* يشتغل مرة واحدة  اول ما يدخل السيكشن في الفيووو*/,
    threshold: 1 /* يشتغل الكاونتر عندما يكون 100 من 100 من ال section موجود في ال view  */,
  });
  return (
    <section className="chooseUs py-20 min-[700px]:pt-24 min-[990px]:pt-72 min-[990px]:pb-32 bg-[#faf9ff] ">
      <div className="mx-auto px-2 sm:px-3 md:px-4  lg:px-5">
        <div className=" flex flex-col items-center gap-15  ">
          <Title
            MainText={"Why Choose Us"}
            subText={"Creating A Community Of Life Long Learners."}
            colorText={"text-blue-500"}
            bgText={"bg-blue-100"}
            width={true}
            items={"items-center"}
            topOffset={"text-center"}
          />
          <div
            className="countersBox  w-[92%] grid grid-cols-4 gap-4 min-[400px]:gap-8 pt-1 relative "
            ref={ref}
          >
            {inView && (
              <>
                <div className="col-span-4 min-[479px]:col-span-2 min-[900px]:col-span-1  ">
                  <Counter
                    img={counter1}
                    count={500}
                    content={"Learners & counting"}
                    translate={true}
                    translate1={true}
                  />
                </div>
                <div className="col-span-4 min-[479px]:col-span-2 min-[900px]:col-span-1">
                  <Counter
                    img={counter2}
                    count={800}
                    content={"Courses & Video"}
                    translate={false}
                    translate1={false}
                  />
                </div>
                <div className="col-span-4 min-[479px]:col-span-2 min-[900px]:col-span-1">
                  <Counter
                    img={counter3}
                    count={1000}
                    content={"Certified Students"}
                    translate={true}
                    translate1={true}
                  />
                </div>
                <div className="col-span-4 min-[479px]:col-span-2 min-[900px]:col-span-1">
                  <Counter
                    img={counter4}
                    count={100}
                    content={"Registered Enrolls"}
                    translate={false}
                    translate1={false}
                  />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ChooseUs;
