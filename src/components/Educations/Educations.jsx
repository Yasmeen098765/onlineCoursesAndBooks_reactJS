import Title from "../../common/Title/Title";
import "./educations.css";
import facebook from "../../assets/OnlineCourses/facebook.png";
import yelp from "../../assets/OnlineCourses/yelp.png";
import google from "../../assets/OnlineCourses/google.png";
import bing from "../../assets/OnlineCourses/bing.png";
import hubs from "../../assets/OnlineCourses/hubs.png";
import client1 from "../../assets/OnlineCourses/client-01.png";
import client2 from "../../assets/OnlineCourses/client-02.png";
import client3 from "../../assets/OnlineCourses/client-03.png";
import client4 from "../../assets/OnlineCourses/client-04.png";
import client5 from "../../assets/OnlineCourses/client-05.png";
import { Marquee } from "react-beautiful-marquee";

function Eductions() {
  return (
    <section className="educations ">
      <div className="flex flex-col justify-center items-center gap-6 min-[350px]:gap-10 py-15 min-[300px]:py-20 min-[900px]:py-25 min-[1200px]:py-28 ">
        <Title
          MainText={"EDUCATION FOR EVERYONE"}
          subText={
            "People like histudy education. No joking - here’s the proof!"
          }
          colorText={"text-blue-500"}
          bgText={"bg-blue-100"}
          width={true}
          items={"items-center"}
          topOffset={"text-center"}
        />

        <div className="flex flex-col justify-center items-center gap-4  ">
          <Marquee
            direction="left"
            speed={50}
            pauseOnHover={true}
            fade={false}
            className="w-full"
          >
            <div className="grid grid-cols-6 gap-3.5 md:gap-5 mt-5 mb-1 ms-0 md:ms-1.5">
              <div
                style={{ lineHeight: 1.4 }}
                className="educationCard cursor-pointer text-white py-6 px-4 md:py-8 md:px-6 rounded-lg shadow flex flex-col items-center gap-5 w-[200px] sm:w-[300px] md:w-[450px] bg-linear-[45deg] from-blue-600 to-purple-400 "
              >
                <div className="relative w-full flex justify-center items-center educationImageQuets">
                  <img src={facebook} className="w-[40px] md:w-[50px]" />
                </div>
                <p className="text-center text-sm md:text-xl ">
                  After the launch, vulputate at sapien sit amet, auctor iaculis
                  lorem. In vel hend rerit nisi. Vestibulum eget risus velit.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 font-semibold text-center">
                  <div className="rounded-full  shadow p-0.5  border-2 border-white overflow-hidden bg-white">
                    <img src={client1} className="w-[35px] rounded-full  " />
                  </div>
                  <span className="text-white   text-xs md:text-[16px]">
                    Martha Maldonado, CEO
                  </span>
                </div>
              </div>

              <div
                style={{ lineHeight: 1.4 }}
                className="educationCard cursor-pointer py-6 px-4 md:py-8 md:px-6 rounded-lg shadow flex flex-col items-center gap-5 w-[200px] sm:w-[300px] md:w-[450px] "
              >
                <div className="w-full flex justify-center items-center ">
                  <img src={facebook} className="w-[40px] md:w-[50px]" />
                </div>
                <p className="text-center text-sm md:text-xl text-gray-600">
                  People says about, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus
                  velit.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 font-semibold text-center">
                  <div className="rounded-full  shadow p-0.5  border-2 border-gray-300 overflow-hidden bg-white">
                    <img src={client4} className="w-[35px] rounded-full  " />
                  </div>

                  <span className="text-xs md:text-[16px]">Hannah R., CEO</span>
                </div>
              </div>

              <div
                style={{ lineHeight: 1.4 }}
                className="educationCard cursor-pointer text-white py-6 px-4 md:py-8 md:px-6 rounded-lg shadow flex flex-col items-center gap-5 w-[200px] sm:w-[300px] md:w-[450px] bg-linear-[45deg] from-blue-600 to-purple-400 "
              >
                <div className="relative w-full flex justify-center items-center educationImageQuets">
                  <img src={yelp} className="w-[85px] md:w-[100px]" />
                </div>
                <p className="text-center text-sm md:text-xl ">
                  Our educational, vulputate at sapien sit amet, auctor iaculis
                  lorem. In vel hend rerit nisi. Vestibulum eget risus velit.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 font-semibold text-center">
                  <div className="rounded-full  shadow p-0.5  border-2 border-white overflow-hidden bg-white">
                    <img src={client3} className="w-[35px] rounded-full  " />
                  </div>
                  <span className="text-white   text-xs md:text-[16px]">
                    Valerie J., CEO
                  </span>
                </div>
              </div>

              <div
                style={{ lineHeight: 1.4 }}
                className="educationCard cursor-pointer py-6 px-4 md:py-8 md:px-6 rounded-lg shadow flex flex-col items-center gap-5 w-[200px] sm:w-[300px] md:w-[450px] "
              >
                <div className="w-full flex justify-center items-center ">
                  <img src={google} className="w-[100px] md:w-[135px]" />
                </div>
                <p className="text-center text-sm md:text-xl text-gray-600">
                  Histudy education, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus
                  velit.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 font-semibold text-center">
                  <div className="rounded-full  shadow p-0.5  border-2 border-gray-300 overflow-hidden bg-white">
                    <img src={client2} className="w-[35px] rounded-full  " />
                  </div>
                  <span className="text-xs md:text-[16px]">
                    Michael D., CEO
                  </span>
                </div>
              </div>

              <div
                style={{ lineHeight: 1.4 }}
                className="educationCard cursor-pointer text-white py-6 px-4 md:py-8 md:px-6 rounded-lg shadow flex flex-col items-center gap-5 w-[200px] sm:w-[300px] md:w-[450px] bg-linear-[45deg] from-blue-600 to-purple-400 "
              >
                <div className="relative w-full flex justify-center items-center educationImageQuets">
                  <img src={bing} className="w-[40px] md:w-[50px]" />
                </div>
                <p className="text-center text-sm md:text-xl ">
                  Like this histudy, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus
                  velit.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 font-semibold text-center">
                  <div className="rounded-full  shadow p-0.5  border-2 border-white overflow-hidden bg-white">
                    <img src={client5} className="w-[35px] rounded-full  " />
                  </div>
                  <span className="text-white   text-xs md:text-[16px]">
                    Pearl B. Hill, Marketing
                  </span>
                </div>
              </div>

              <div
                style={{ lineHeight: 1.4 }}
                className="educationCard cursor-pointer py-6 px-4 md:py-8 md:px-6 rounded-lg shadow flex flex-col items-center gap-5 w-[200px] sm:w-[300px] md:w-[450px] "
              >
                <div className="w-full flex justify-center items-center ">
                  <img src={facebook} className="w-[40px] md:w-[50px]" />
                </div>
                <p className="text-center text-sm md:text-xl text-gray-600">
                  Educational template, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus
                  velit.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 font-semibold text-center">
                  <div className="rounded-full  shadow p-0.5  border-2 border-gray-300 overflow-hidden bg-white">
                    <img src={client1} className="w-[35px] rounded-full  " />
                  </div>
                  <span className="text-xs md:text-[16px]">
                    Mandy F. Wood, SR Designer
                  </span>
                </div>
              </div>
            </div>
          </Marquee>

          <Marquee
            direction="left" // الاتجاه الأساسي
            reverse={true} // عكسه ليصبح يميناً
            speed={50}
            pauseOnHover={true}
            fade={false}
          >
            <div className="grid grid-cols-6 gap-3.5 md:gap-5 mt-5 mb-1 ms-0 md:ms-1.5">
              <div
                style={{ lineHeight: 1.4 }}
                className="educationCard cursor-pointer  py-6 px-4 md:py-8 md:px-6 rounded-lg shadow flex flex-col items-center gap-5 w-[200px] sm:w-[300px] md:w-[450px]  "
              >
                <div className="relative w-full flex justify-center items-center ">
                  <img src={bing} className="w-[40px] md:w-[50px]" />
                </div>
                <p className="text-center text-sm md:text-xl text-gray-600">
                  People says about, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus
                  velit.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 font-semibold text-center">
                  <div className="rounded-full  shadow p-0.5  border-2 border-gray-300 overflow-hidden bg-white">
                    <img src={client4} className="w-[35px] rounded-full  " />
                  </div>
                  <span className="text-xs md:text-[16px]">Hannah R., CEO</span>
                </div>
              </div>

              <div
                style={{ lineHeight: 1.4 }}
                className="educationCard cursor-pointer text-white py-6 px-4 md:py-8 md:px-6 rounded-lg shadow flex flex-col items-center gap-5 w-[200px] sm:w-[300px] md:w-[450px] bg-linear-[45deg] from-blue-600 to-purple-400 "
              >
                <div className="relative w-full flex justify-center items-center educationImageQuets">
                  <img src={yelp} className="w-[85px] md:w-[100px]" />
                </div>
                <p className="text-center text-sm md:text-xl ">
                  Our educational, vulputate at sapien sit amet, auctor iaculis
                  lorem. In vel hend rerit nisi. Vestibulum eget risus velit.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 font-semibold text-center">
                  <div className="rounded-full  shadow p-0.5  border-2 border-white overflow-hidden bg-white">
                    <img src={client3} className="w-[35px] rounded-full  " />
                  </div>
                  <span className="text-white  text-xs md:text-[16px]">
                    Valerie J., CEO
                  </span>
                </div>
              </div>

              <div
                style={{ lineHeight: 1.4 }}
                className="educationCard cursor-pointer py-6 px-4 md:py-8 md:px-6 rounded-lg shadow flex flex-col items-center gap-5 w-[200px] sm:w-[300px] md:w-[450px]  "
              >
                <div className="relative w-full flex justify-center items-center ">
                  <img src={google} className="w-[100px] md:w-[135px]" />
                </div>
                <p className="text-center text-sm md:text-xl text-gray-600">
                  Histudy education, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus
                  velit.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 font-semibold text-center">
                  <div className="rounded-full  shadow p-0.5  border-2 border-gray-300 overflow-hidden bg-white">
                    <img src={client2} className="w-[35px] rounded-full  " />
                  </div>
                  <span className="text-xs md:text-[16px]">
                    Michael D., CEO
                  </span>
                </div>
              </div>

              <div
                style={{ lineHeight: 1.4 }}
                className="educationCard cursor-pointer  py-6 px-4 md:py-8 md:px-6 rounded-lg shadow text-white flex flex-col items-center gap-5 w-[200px] sm:w-[300px] md:w-[450px] bg-linear-[45deg] from-blue-600 to-purple-400"
              >
                <div className="relative w-full flex justify-center items-center educationImageQuets">
                  <img src={facebook} className="w-[40px] md:w-[50px]" />
                </div>
                <p className="text-center text-sm md:text-xl  ">
                  After the launch, vulputate at sapien sit amet, auctor iaculis
                  lorem. In vel hend rerit nisi. Vestibulum eget risus velit.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 font-semibold text-center">
                  <div className="rounded-full  shadow p-0.5  border-2 border-white overflow-hidden bg-white">
                    <img src={client1} className="w-[35px] rounded-full  " />
                  </div>
                  <span className="text-white  text-xs md:text-[16px]">
                    Martha Maldonado, CEO
                  </span>
                </div>
              </div>

              <div
                style={{ lineHeight: 1.4 }}
                className="educationCard cursor-pointer  py-6 px-4 md:py-8 md:px-6 rounded-lg shadow flex flex-col items-center gap-5 w-[200px] sm:w-[300px] md:w-[450px]  "
              >
                <div className="relative w-full flex justify-center items-center ">
                  <img src={yelp} className="w-[85px] md:w-[100px]" />
                </div>
                <p className="text-center text-sm md:text-xl text-gray-600">
                  Educational template, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus
                  velit.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 font-semibold text-center">
                  <div className="rounded-full  shadow p-0.5  border-2 border-gray-300 overflow-hidden bg-white">
                    <img src={client1} className="w-[35px] rounded-full  " />
                  </div>
                  <span className="text-xs md:text-[16px]">
                    Mandy F. Wood, SR Designer
                  </span>
                </div>
              </div>

              <div
                style={{ lineHeight: 1.4 }}
                className="educationCard cursor-pointer py-6 px-4 md:py-8 md:px-6 rounded-lg shadow text-white flex flex-col items-center gap-5 w-[200px] sm:w-[300px] md:w-[450px] bg-linear-[45deg] from-blue-600 to-purple-400 "
              >
                <div className="relative w-full flex justify-center items-center educationImageQuets">
                  <img src={hubs} className="w-[85px] md:w-[100px]" />
                </div>
                <p className="text-center text-sm md:text-xl ">
                  Like this histudy, vulputate at sapien sit amet, auctor
                  iaculis lorem. In vel hend rerit nisi. Vestibulum eget risus
                  velit.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-3 font-semibold text-center ">
                  <div className="rounded-full  shadow p-0.5  border-2 border-gray-300 overflow-hidden bg-white">
                    <img src={client5} className="w-[35px] rounded-full  " />
                  </div>
                  <span className="text-white  text-xs md:text-[16px]">
                    Pearl B. Hill, Marketing
                  </span>
                </div>
              </div>
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Eductions;
