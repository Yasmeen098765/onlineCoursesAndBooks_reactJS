import { IoChevronForward } from "react-icons/io5";
import "./CourseDetails.css";
import { Link, useParams } from "react-router-dom";
import cartImg from "../../assets/OnlineCourses/cartimg.png";
import { ProgressBar } from "ms-react-progress-bar";
import "ms-react-progress-bar/dist/ProgressBar.css";
import {
  FaCheck,
  FaChevronDown,
  FaChevronUp,
  FaGlobe,
  FaStar,
  FaUserAlt,
} from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";
import { TfiMedallAlt } from "react-icons/tfi";
import { useEffect, useRef, useState } from "react";
import client2 from "../../assets/OnlineCourses/client-06.png";
import client3 from "../../assets/OnlineCourses/client-05.png";
import client4 from "../../assets/OnlineCourses/testimonial-1.jpg";
import client5 from "../../assets/OnlineCourses/testimonial-6.jpg";
import client6 from "../../assets/OnlineCourses/testimonial-8.jpg";
import client7 from "../../assets/OnlineCourses/client-02.png";
import AcordionCourseDetails from "../../components/AcordionCourseDetails/AcordionCourseDetails";
import CartCourseDetails from "../../components/CartCourseDetails/CartCourseDetails";
import { FiUsers } from "react-icons/fi";
import { GoDeviceCameraVideo } from "react-icons/go";
import { LuFacebook, LuLinkedin } from "react-icons/lu";
import { GrInstagram } from "react-icons/gr";
import { SlSocialTwitter } from "react-icons/sl";
import { TiStarOutline } from "react-icons/ti";
import FeaturedReview from "../../components/FeaturedReview/FeaturedReview";
import TopCoursesDetails from "../../components/TopCoursesDetails/TopCoursesDetails";
import RelatedCoursesDetails from "../../components/RelatedCoursesDetails/RelatedCoursesDetails";
import HandleLottie from "../../components/HandleLottie/HandleLottie";
import axios from "axios";
import { RiErrorWarningLine } from "react-icons/ri";

function CourseDetails() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const [isMoreLearn, setIsMoreLearn] = useState(true);
  const [isMoreLearnReview, setIsMoreLearnReview] = useState(true);
  const [coursesDetailsSingle, setCoursesDetailsSingle] = useState([]);
  const [isLoaderCourseDetails, setIsLoaderCourseDetails] = useState(false);
  const [isErrorCourseDetails, setIsErrorCourseDetails] = useState(false);
  const [activeSec, setActiveSec] = useState("overview");
  const container = useRef(null);

  const handleActiveScroll = () => {
    window.addEventListener("scroll", () => {
      const allSecs = container.current.querySelectorAll(".sec");
      allSecs.forEach((el) => {
        if (window.scrollY >= el.offsetTop) {
          setActiveSec(el.id);
        }
      });
    });
  };
  useEffect(() => {
    handleActiveScroll();
  }, []);

  const FeaturedReview1 = [
    {
      img: client3,
      title: "Farjana Bawnia",
      description:
        "At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.",
    },
    {
      img: client7,
      title: "Razwan Islam",
      description:
        "At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.",
    },
    {
      img: client4,
      title: "Babor Azom",
      description:
        "At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.",
    },
    {
      img: client5,
      title: "Mohammad Ali",
      description:
        "At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.",
    },
    {
      img: client6,
      title: "Sakib Al Hasan",
      description:
        "At 29 years old, my favorite compliment is being told that I look like my mom. Seeing myself in her image, like this daughter up top.",
    },
  ];

  const options = {
    height: "24px",
    borderRadius: "20px",
    labelSize: "12px",
    barColor: "#ff8f3c",
    containerColor: "#dddddd",
    containerStyle: "border",
    stripeAnimation: true,
    stripeAnimationDuration: "20s",
    type: "striped",
    labelColor: "#192335",
  };
  const handleCourseDetails = async (bookId) => {
    try {
      setIsLoaderCourseDetails(true);
      setIsErrorCourseDetails(false);
      const { data } = await axios.get(
        `${API_URL}/products?category=courses&id=${bookId}`,
      );
      if (data && data.length > 0) {
        setCoursesDetailsSingle(data[0]);
        console.log(coursesDetailsSingle);
      } else {
        setIsErrorCourseDetails(true);
      }
    } catch (error) {
      setIsErrorCourseDetails(true);
      setCoursesDetailsSingle([]);
    } finally {
      setIsLoaderCourseDetails(false);
    }
  };
  useEffect(() => {
    if (id) {
      handleCourseDetails(id);
    } else {
      setIsErrorCourseDetails(true);
    }
  }, [id]);

  return (
    <section className="courseDetails">
      {isLoaderCourseDetails ? (
        <HandleLottie state="secondary" />
      ) : isErrorCourseDetails ? (
        <div className="my-20   px-3 py-3 sm:py-4 md:py-6 lg:py-8 rounded-md md:rounded-lg lg:rounded-xl shadow-[0_0_20px_rgb(254,102,105)] text-xs min-[600px]:text-lg md:text-xl text-red-500 bg-white border-1 border-red-400 w-[98%] min-[350px]:w-[70%] md:w-[65%] lg:w-[50%] mx-auto flex flex-col justify-center items-center text-center gap-3 errorZoom">
          <RiErrorWarningLine className="text-5xl min-[600px]:text-6xl md:text-7xl" />
          <span> Course not found </span>
        </div>
      ) : (
        coursesDetailsSingle && (
          <div className="courseDetails-heading  ">
            <div className="mx-auto py-10 min-[400px]:py-14 px-3 min-[220px]:px-5 min-[350px]:px-8  min-[500px]:px-10 min-[800px]:py-16 min-[800px]:px-16 min-[900px]:px-10 min-[1200px]:p-16">
              <div className="grid grid-cols-5 min-[1200px]:grid-cols-3 gap-10 relative  border-b border-gray-300 pb-8 min-[500px]:pb-14">
                <div className="col-span-5 min-[1000px]:col-span-3  min-[1200px]:col-span-2 ">
                  <div className="w-[100%] min-[770px]:w-[85%]  min-[1000px]:w-[95%] min-[1200px]:w-[88%] me-auto">
                    {/* Breadcrumb */}
                    <div className="indicator flex items-center gap-0.5 min-[300px]:gap-1 text-[11px]  min-[300px]:text-xs min-[350px]:text-sm capitalize text-gray-400">
                      <Link className="text-gray-500" to={"/"}>
                        Home
                      </Link>
                      <IoChevronForward />
                      <span>Web Development</span>
                    </div>
                    {/* العنوان */}
                    <h2
                      style={{ lineHeight: "1.3" }}
                      className="w-full  min-[350px]:w-[90%] min-[770px]:w-[80%] min-[1000px]:w-full capitalize text-gray-800 font-bold text-md min-[300px]:text-lg  min-[350px]:text-2xl min-[560px]:text-3xl min-[700px]:text-4xl min-[1200px]:text-5xl title my-5"
                    >
                      The Complete Histudy 2024: From Zero to Expert!
                    </h2>

                    <p className="text-[12px]  min-[300px]:text-xs min-[350px]:text-[14px] min-[560px]:text-[16px] min-[700px]:text-lg">
                      Master Python by building 100 projects in 100 days. Learn
                      data science, automation, build websites, games and apps!
                    </p>

                    <div className="flex flex-wrap justify-start items-center gap-1.5 min-[300px]:gap-2 min-[350px]:gap-3 min-[670px]:gap-5 title my-6">
                      <div className="cursor-pointer hover:text-blue-600 duration-300 transition py-1 min-[300px]:py-1.5 min-[670px]:py-2 px-2 min-[300px]:px-3 min-[670px]:px-6 mt-1 capitalize rounded-4xl font-semibold text-[11px] min-[300px]:text-xs min-[670px]:text-sm flex justify-center items-center gap-0.5 min-[670px]:gap-1.5 border border-white bg-violet-200">
                        <img
                          src={cartImg}
                          className="w-3 h-3  min-[300px]:w-7 min-[300px]:h-7"
                        />
                        <span> Bestseller</span>
                      </div>
                      <div className=" flex items-center justify-center gap-1 text-[11.5px] min-[300px]:text-xs min-[350px]:text-sm min-[670px]:text-base ">
                        <span className="hover:text-blue-600 transition duration-300 font-semibold">
                          4.8
                        </span>
                        <div className="rating flex justify-center items-center gap-0.5 text-orange-400 text-[11.5px] min-[300px]:xs min-[350px]:text-sm min-[670px]:text-base">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                        </div>
                      </div>
                      <div className="py-1 min-[300px]:py-1.5 px-2 min-[300px]:px-3 text-[11px] min-[300px]:text-xs min-[350px]:text-sm min-[670px]:text-base overflow-hidden z-[1] cursor-pointer rounded-md bg-violet-200 hover:text-blue-600 relative after:content-[''] after:absolute after:duration-300 after:transition after:w-full after:h-full after:scale-0 after:z-[-1] after:top-0 after:left-0 hover:after:bg-blue-500/40 transition duration-300 hover:after:scale-100">
                        215,475 rating
                      </div>
                      <span className="font-semibold text-[10.5px] min-[300px]:text-xs min-[350px]:text-sm min-[670px]:text-base">
                        616,029 students
                      </span>
                    </div>

                    <div className="flex gap-1.5 min-[640px]:gap-4 min-[900px]:gap-1 min-[1200px]:gap-4 items-center justify-start">
                      <img
                        src={coursesDetailsSingle?.image2}
                        className=" text-[14px] w-[30px] h-[30px] min-[330px]:w-[40px] min-[330px]:h-[40px] rounded-full border-gray-300 border-2 p-0.5 "
                      />
                      <p className="text-slate-500 capitalize text-wrap min-[290]:text-nowrap text-[10px] min-[350px]:text-[13px] min-[400px]:text-[14px] min-[500px]:text-[15px] min-[600px]:text-[16px]  min-[900px]:text-[15px] min-[1200px]:text-[16px] ">
                        <span className="text-black hover:text-blue-600 transition duration-300 cursor-pointer">
                          {coursesDetailsSingle?.study}
                        </span>{" "}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 min-[400px]:gap-6 mt-5 ps-1 text-[11.5px] min-[300px]:text-xs min-[350px]:text-sm min-[670px]:text-base">
                      <p className="flex items-center justify-center gap-0.5 ">
                        <MdOutlineDateRange />
                        <span>Last updated 12/2024</span>
                      </p>
                      <p className="flex items-center justify-center gap-0.5 ">
                        <FaGlobe />
                        <span>English</span>
                      </p>
                      <p className="flex items-center justify-center gap-0.5 ">
                        <TfiMedallAlt />
                        <span>Certified Course</span>
                      </p>
                    </div>
                  </div>
                  <div className="mt-20  min-[500px]:mt-36 flex flex-col gap-4  bg-white border border-gray-200 shadow-lg shadow-gray-300 px-3 py-4 min-[350px]:p-8 rounded-xl">
                    <div className=" w-full h-[110px] min-[350px]:h-[150px] min-[400px]:h-[180px] min-[560px]:h-[250px] min-[690px]:h-[350px] min-[1200px]:h-[400px]">
                      <img
                        src={coursesDetailsSingle?.image}
                        className="w-full h-full  rounded-lg"
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className=" font-black  text-sm  min-[500px]:text-lg min-[600px]:text-xl min-[700px]:text-2xl ">
                        {coursesDetailsSingle?.title}
                      </h2>
                      <p className="text-gray-500 italic text-xs min-[300px]:text-sm min-[500px]:text-md flex gap-0.5 items-center">
                        <FaUserAlt />
                        <span>{coursesDetailsSingle?.author}</span>
                      </p>
                      <p className="text-xs min-[300px]:text-sm min-[500px]:text-lg text-gray-500 ">
                        {coursesDetailsSingle?.description}
                      </p>
                    </div>
                  </div>
                  <div className="" ref={container}>
                    <div className="sticky z-[3] overflow-hidden top-[100px] my-8 rounded-lg min-[488px]:rounded-full bg-white p-2 min-[400px]:p-3 border border-gray-200 shadow-lg shadow-gray-300">
                      <div className="flex flex-wrap justify-center items-center gap-1 min-[350px]:gap-1 min-[526px]:gap-2  ">
                        <a
                          href="#overview"
                          className={`activeCourseDetails  ${activeSec == "overview" ? "active" : ""} flex-0 min-[526px]:flex-1  min-[1000px]:flex-1 text-center bg-neutral-100 cursor-pointer px-1.5 min-[350px]:px-3 py-1 min-[350px]:py-2 text-[10px] min-[300px]:text-[11px] min-[578px]:text-sm min-[690px]:text-lg min-[1000px]:text-sm min-[1200px]:text-lg rounded-full hover:bg-blue-600 hover:text-white transition duration-300 `}
                        >
                          OverView
                        </a>
                        <a
                          href="#CourseContent"
                          className={`text-nowrap  activeCourseDetails ${activeSec == "CourseContent" ? "active" : ""} flex-0 min-[526px]:flex-2  min-[1000px]:flex-1 text-center bg-neutral-100 cursor-pointer px-1.5 min-[350px]:px-3 py-1 min-[350px]:py-2 text-[10px] min-[300px]:text-[11px] min-[578px]:text-sm min-[690px]:text-lg min-[1000px]:text-sm min-[1200px]:text-lg rounded-full hover:bg-blue-600 hover:text-white transition duration-300 `}
                        >
                          Course Content
                        </a>
                        <a
                          href="#Details"
                          className={`activeCourseDetails ${activeSec == "Details" ? "active" : ""} flex-0 min-[526px]:flex-1  min-[1000px]:flex-1 text-center bg-neutral-100 cursor-pointer px-1.5 min-[350px]:px-3 py-1 min-[350px]:py-2 text-[10px] min-[300px]:text-[11px] min-[578px]:text-sm min-[690px]:text-lg min-[1000px]:text-sm min-[1200px]:text-lg rounded-full hover:bg-blue-600 hover:text-white transition duration-300 `}
                        >
                          Details
                        </a>
                        <a
                          href="#Intructor"
                          className={`activeCourseDetails ${activeSec == "Intructor" ? "active" : ""} flex-0 min-[526px]:flex-1  min-[1000px]:flex-1 text-center bg-neutral-100 cursor-pointer px-1.5 min-[350px]:px-3 py-1 min-[350px]:py-2 text-[10px] min-[300px]:text-[11px] min-[578px]:text-sm min-[690px]:text-lg min-[1000px]:text-sm min-[1200px]:text-lg rounded-full hover:bg-blue-600 hover:text-white transition duration-300`}
                        >
                          Intructor
                        </a>
                        <a
                          href="#Review"
                          className={`activeCourseDetails ${activeSec == "Review" ? "active" : ""} flex-0 min-[526px]:flex-1   min-[1000px]:flex-1  text-center bg-neutral-100 cursor-pointer px-1.5 min-[350px]:px-3 py-1 min-[350px]:py-2 text-[10px] min-[300px]:text-[11px] min-[578px]:text-sm min-[690px]:text-lg min-[1000px]:text-sm min-[1200px]:text-lg rounded-full hover:bg-blue-600 hover:text-white transition duration-300 `}
                        >
                          Review
                        </a>
                      </div>
                    </div>

                    <div
                      id="overview"
                      className="sec rounded-lg min-[350px]:rounded-xl bg-white px-3 py-4 min-[350px]:p-7 border border-gray-200 shadow-lg shadow-gray-300"
                    >
                      <div
                        className={`relative ${isMoreLearn ? "after:absolute after:content-[''] after:transition after:duration-300 after:w-full after:h-[50px] after:bottom-0 after:left-0 after:bg-linear-to-b  after:from-transparent after:from-0% after:to-white after:to-100%  after:z-[2]" : "after:content-none"} 
                        ${isMoreLearn ? "h-[290px] overflow-y-hidden" : "min-h-[200px] overflow-y-visible"} transition duration-300
                  flex flex-col justify-start items-start  gap-2 min-[350px]:gap-4 `}
                      >
                        <p className="w-full  border-b border-gray-300 text-sm min-[350px]:text-lg min-[500px]:text-xl min-[690px]:text-2xl min-[1000px]:text-xl min-[1200px]:text-2xl font-black pb-2 min-[350px]:pb-4">
                          What you'll learn
                        </p>
                        <p className="text-gray-500 w-full text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                          Are you new to PHP or need a refresher? Then this
                          course will help you get all the fundamentals of
                          Procedural PHP, Object Oriented PHP, MYSQLi and ending
                          the course by building a CMS system similar to
                          WordPress, Joomla or Drupal. Knowing PHP has allowed
                          me to make enough money to stay home and make courses
                          like this one for students all over the world.
                        </p>
                        <div className=" grid grid-cols-2 gap-3 min-[1200px]:gap-6 my-2 ">
                          <div className="col-span-2 min-[670px]:col-span-1 flex flex-col justify-center items-start gap-2">
                            <div className="flex items-start justify-start gap-1 text-gray-500 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                              <FaCheck className="text-green-500 self-start text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-xl min-[1000px]:text-md min-[1200px]:text-xl shrink-0 mt-1" />
                              <p>
                                Become an advanced, confident, and modern
                                JavaScript developer from scratch.
                              </p>
                            </div>
                            <div className="flex items-start justify-start gap-1 text-gray-500 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                              <FaCheck className="text-green-500 self-start text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-xl min-[1000px]:text-md min-[1200px]:text-xl shrink-0 mt-1" />
                              <p>
                                Have an intermediate skill level of Python
                                programming.
                              </p>
                            </div>
                            <div className="flex items-start justify-start gap-1 text-gray-500 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                              <FaCheck className="text-green-500 self-start text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-xl min-[1000px]:text-md min-[1200px]:text-xl shrink-0 mt-1" />
                              <p>
                                Have a portfolio of various data analysis
                                projects.
                              </p>
                            </div>
                            <div className="flex items-start justify-start gap-1 text-gray-500 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                              <FaCheck className="text-green-500 self-start text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-xl min-[1000px]:text-md min-[1200px]:text-xl shrink-0 mt-1" />
                              <p>
                                Use the numpy library to create and manipulate
                                arrays.
                              </p>
                            </div>
                          </div>
                          <div className="col-span-2 min-[670px]:col-span-1 flex flex-col justify-center items-start gap-2">
                            <div className="flex items-start justify-start gap-1 text-gray-500 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                              <FaCheck className="text-green-500 self-start text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-xl min-[1000px]:text-md min-[1200px]:text-xl shrink-0 mt-1" />
                              <p>
                                Use the Jupyter Notebook Environment. JavaScript
                                developer from scratch.
                              </p>
                            </div>
                            <div className="flex items-start justify-start gap-1 text-gray-500 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                              <FaCheck className="text-green-500 self-start text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-xl min-[1000px]:text-md min-[1200px]:text-xl shrink-0 mt-1" />
                              <p>
                                Use the pandas module with Python to create and
                                structure data.
                              </p>
                            </div>
                            <div className="flex items-start justify-start gap-1 text-gray-500 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                              <FaCheck className="text-green-500 self-start text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-xl min-[1000px]:text-md min-[1200px]:text-xl shrink-0 mt-1" />
                              <p>
                                Have a portfolio of various data analysis
                                projects.
                              </p>
                            </div>
                            <div className="flex items-start justify-start gap-1 text-gray-500 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                              <FaCheck className="text-green-500 self-start text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-xl min-[1000px]:text-md min-[1200px]:text-xl shrink-0 mt-1" />
                              <p>
                                Create data visualizations using matplotlib and
                                the seaborn.
                              </p>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-500 w-full text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Omnis, aliquam voluptas laudantium incidunt
                          architecto nam excepturi provident rem laborum
                          repellendus placeat neque aut doloremque ut ullam,
                          veritatis nesciunt iusto officia alias, non est vitae.
                          Eius repudiandae optio quam alias aperiam nemo nam
                          tempora, dignissimos dicta excepturi ea quo ipsum
                          omnis maiores perferendis commodi voluptatum facere
                          vel vero. Praesentium quisquam iure veritatis,
                          perferendis adipisci sequi blanditiis quidem porro
                          eligendi fugiat facilis inventore amet delectus
                          expedita deserunt ut molestiae modi laudantium, quia
                          tenetur animi natus ea. Molestiae molestias ducimus
                          pariatur et consectetur. Error vero, eum soluta
                          delectus necessitatibus eligendi numquam hic at?
                        </p>
                      </div>
                      <div
                        onClick={() => setIsMoreLearn(!isMoreLearn)}
                        className="w-full  mt-4 transition duration-300 cursor-pointer flex justify-between items-center gap-2 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md  min-[1200px]:text-lg text-blue-600 hover:text-violet-400 font-semibold "
                      >
                        {isMoreLearn ? (
                          <>
                            <span>Show More</span>
                            <FaChevronDown />
                          </>
                        ) : (
                          <>
                            <span>Show Less</span>
                            <FaChevronUp />
                          </>
                        )}
                      </div>
                    </div>

                    <div
                      id="CourseContent"
                      className="sec rounded-lg min-[350px]:rounded-xl my-4 min-[350px]:my-8 bg-white px-3 py-4 min-[350px]:p-7 border border-gray-200 shadow-lg shadow-gray-300"
                    >
                      <AcordionCourseDetails />
                    </div>

                    <div
                      id="Details"
                      className="sec rounded-lg min-[350px]:rounded-xl my-4 min-[350px]:my-8 bg-white px-3 py-4 min-[350px]:p-7 border border-gray-200 shadow-lg shadow-gray-300"
                    >
                      <div className=" grid grid-cols-2 gap-5 min-[350px]:gap-10  ">
                        <div className="col-span-2 min-[670px]:col-span-1 flex flex-col justify-center items-start gap-2">
                          <p className="w-full font-bold text-xs min-[300px]:text-sm min-[350px]:text-md min-[500px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg pb-3 min-[350px]:pb-4 mb-2 border-b border-gray-300">
                            Requirements
                          </p>
                          <div className="flex items-start justify-start gap-1 text-gray-500 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                            <FaCheck className="text-green-500 self-start text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-xl min-[1000px]:text-md min-[1200px]:text-xl shrink-0 mt-1" />
                            <p>
                              Become an advanced, confident, and modern
                              JavaScript developer from scratch.
                            </p>
                          </div>
                          <div className="flex items-start justify-start gap-1 text-gray-500 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                            <FaCheck className="text-green-500 self-start text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-xl min-[1000px]:text-md min-[1200px]:text-xl shrink-0 mt-1" />
                            <p>
                              Have an intermediate skill level of Python
                              programming.
                            </p>
                          </div>
                          <div className="flex items-start justify-start gap-1 text-gray-500 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                            <FaCheck className="text-green-500 self-start text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-xl min-[1000px]:text-md min-[1200px]:text-xl shrink-0 mt-1" />
                            <p>
                              Have a portfolio of various data analysis
                              projects.
                            </p>
                          </div>
                          <div className="flex items-start justify-start gap-1 text-gray-500 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                            <FaCheck className="text-green-500 self-start text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-xl min-[1000px]:text-md min-[1200px]:text-xl shrink-0 mt-1" />
                            <p>
                              Use the numpy library to create and manipulate
                              arrays.
                            </p>
                          </div>
                        </div>
                        <div className="col-span-2 min-[670px]:col-span-1 flex flex-col justify-center items-start gap-2">
                          <p className="w-full font-bold text-xs min-[300px]:text-sm min-[350px]:text-md min-[500px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg pb-3 min-[350px]:pb-4 mb-2 border-b border-gray-300">
                            Description
                          </p>
                          <div className="flex items-start justify-start gap-1 text-gray-500 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                            <FaCheck className="text-green-500 self-start text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-xl min-[1000px]:text-md min-[1200px]:text-xl shrink-0 mt-1" />
                            <p>
                              Use the Jupyter Notebook Environment. JavaScript
                              developer from scratch.
                            </p>
                          </div>
                          <div className="flex items-start justify-start gap-1 text-gray-500 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                            <FaCheck className="text-green-500 self-start text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-xl min-[1000px]:text-md min-[1200px]:text-xl shrink-0 mt-1" />
                            <p>
                              Use the pandas module with Python to create and
                              structure data.
                            </p>
                          </div>
                          <div className="flex items-start justify-start gap-1 text-gray-500 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                            <FaCheck className="text-green-500 self-start text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-xl min-[1000px]:text-md min-[1200px]:text-xl shrink-0 mt-1" />
                            <p>
                              Have a portfolio of various data analysis
                              projects.
                            </p>
                          </div>
                          <div className="flex items-start justify-start gap-1 text-gray-500 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg ">
                            <FaCheck className="text-green-500 self-start text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md min-[690px]:text-xl min-[1000px]:text-md min-[1200px]:text-xl shrink-0 mt-1" />
                            <p>
                              Create data visualizations using matplotlib and
                              the seaborn.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="Intructor"
                      className="sec rounded-lg min-[350px]:rounded-xl my-4 min-[350px]:my-8 bg-white px-3 py-4 min-[350px]:p-7 border border-gray-200 shadow-lg shadow-gray-300"
                    >
                      <p className="w-full  border-b border-gray-300 text-sm min-[350px]:text-lg min-[500px]:text-xl min-[690px]:text-2xl min-[1000px]:text-xl min-[1200px]:text-2xl  font-black pb-4">
                        Instructor
                      </p>
                      <div className="grid grid-cols-3 gap-4 min-[350px]:gap-8 min-[1000px]:gap-4 min-[1200px]:gap-8 mt-3 min-[450px]:mt-6">
                        <div className=" col-span-3 min-[690px]:col-span-1 flex items-start justify-start rounded-md min-[400px]:rounded-full ">
                          <img
                            src={client2}
                            className="w-full  min-[400px]:w-[150px] min-[690px]:w-[200px] min-[1000px]:w-[150px] min-[1200px]:w-[200px] h-[130px] min-[400px]:h-[140px] min-[690px]:h-[180px] min-[780px]:h-[200px] min-[1000px]:h-[150px]   min-[1200px]:h-[200px] rounded-md min-[400px]:rounded-full "
                          />
                        </div>
                        <div className="col-span-3 min-[690px]:col-span-2">
                          <div className="flex flex-col justify-center items-start gap-2 min-[500px]:gap-3">
                            <h2 className="font-black text-xs min-[300px]:text-sm min-[350px]:text-md min-[500px]:text-xl min-[1000px]:text-lg min-[1200px]:text-xl cursor-pointer hover:text-blue-600 transition duration-300">
                              B.M. Rafekul Islam
                            </h2>
                            <span className="text-gray-400 text-xs min-[400px]:text-base">
                              Advanced Educator
                            </span>
                            <div className="flex flex-wrap items-center gap-2 min-[500px]:gap-4 text-[10px] min-[300px]:text-xs min-[400px]:text-sm min-[500px]:text-base min-[1000px]:text-sm min-[1200px]:text-base">
                              <div className="flex gap-0.5 items-center">
                                <FaStar className="text-orange-400" />
                                <span className="text-gray-400">
                                  75,237 Reviews
                                </span>
                              </div>
                              <p className="py-0.5 px-2 min-[400px]:px-3 flex items-center justify-center text-gray-400 bg-gray-200 rounded">
                                4.4 Rating
                              </p>
                              <div className="flex gap-0.5 items-center text-gray-400 text-[10px] min-[300px]:text-xs min-[400px]:text-sm min-[500px]:text-base min-[1000px]:text-sm min-[1200px]:text-base">
                                <FiUsers />
                                <span>912,970 Students</span>
                              </div>
                            </div>
                            <div className="flex items-center gap-0.5  text-gray-400 text-[10px] min-[300px]:text-xs min-[400px]:text-sm min-[500px]:text-base cursor-pointer hover:text-blue-600 transition duration-300">
                              <GoDeviceCameraVideo className="mt-0.5" />
                              <span>16 Courses</span>
                            </div>
                            <p className="text-gray-400 text-xs min-[350px]:text-sm min-[400px]:text-[15px] min-[500px]:text-lg min-[1000px]:text-md min-[1200px]:text-lg my-3">
                              John is a brilliant educator, whose life was spent
                              for computer science and love of nature.
                            </p>
                            <div className=" flex justify-center items-center gap-1.5 min-[350px]:gap-3  ">
                              <div className="icon relative overflow-hidden z-[1] cursor-pointer hover:text-white transition duration-300 w-[30px] h-[30px] min-[350px]:w-[40px] min-[350px]:h-[40px]  min-[613px]:w-[45px] min-[613px]:h-[45px] flex justify-center items-center text-[13px] min-[270]:text-sm min-[350px]:text-lg text-gray-500 border-2 border-gray-200 rounded-full hover:border-transparent">
                                <LuFacebook />
                              </div>
                              <div className="icon relative overflow-hidden z-[1] cursor-pointer hover:text-white transition duration-300 w-[30px] h-[30px] min-[350px]:w-[40px] min-[350px]:h-[40px] min-[613px]:w-[45px] min-[613px]:h-[45px] flex justify-center items-center text-[13px] min-[270]:text-sm min-[350px]:text-lg text-gray-500 border-2 border-gray-200 rounded-full hover:border-transparent">
                                <SlSocialTwitter />
                              </div>
                              <div className="icon relative overflow-hidden z-[1] cursor-pointer hover:text-white transition duration-300 w-[30px] h-[30px] min-[350px]:w-[40px] min-[350px]:h-[40px] min-[613px]:w-[45px] min-[613px]:h-[45px] flex justify-center items-center text-[13px] min-[270]:text-sm min-[350px]:text-lg text-gray-500 border-2 border-gray-200 rounded-full hover:border-transparent">
                                <GrInstagram />
                              </div>
                              <div className="icon relative overflow-hidden z-[1] cursor-pointer hover:text-white transition duration-300 w-[30px] h-[30px] min-[350px]:w-[40px] min-[350px]:h-[40px] min-[613px]:w-[45px] min-[613px]:h-[45px] flex justify-center items-center text-[13px] min-[270]:text-sm min-[350px]:text-lg text-gray-500 border-2 border-gray-200 rounded-full hover:border-transparent">
                                <LuLinkedin />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      id="Review"
                      className="sec rounded-md min-[500px]:rounded-lg min-[350px]:rounded-xl my-4 min-[350px]:my-8 bg-white px-3 py-4 min-[350px]:p-7 border border-gray-200 shadow-lg shadow-gray-300"
                    >
                      <p className="w-full  border-b border-gray-300 text-sm min-[350px]:text-lg min-[500px]:text-xl min-[690px]:text-2xl min-[1000px]:text-xl min-[1200px]:text-2xl  font-black pb-4">
                        Review
                      </p>
                      <div className="grid grid-cols-3 gap-4 min-[500px]:gap-8 min-[1000px]:gap-4 w-[1200px]:gap-8 mt-6">
                        <div className="col-span-3  min-[660px]:col-span-1  bg-orange-50 rounded-lg flex flex-col gap-2 items-center justify-center px-2 py-4 ">
                          <h2 className="text-center text-4xl min-[300px]:text-5xl  min-[350px]:text-6xl min-[1000px]:text-5xl w-[1200px]:text-6xl text-black font-bold mb-3">
                            5.0
                          </h2>
                          <div className="rating flex justify-center items-center gap-0.5 text-orange-400 text-sm min-[350px]:text-md min-[500px]:text-lg">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                          </div>
                          <span className="text-orange-400 text-sm min-[350px]:text-md min-[500px]:text-lg">
                            Course Rating
                          </span>
                        </div>
                        <div className="col-span-3  min-[660px]:col-span-2">
                          <div className="flex flex-col justify-center items-start gap-1.5 min-[500px]:gap-3 w-full">
                            <div className="border-b border-gray-300 pb-2 min-[500px]:pb-0 min-[500px]:border-b-0   flex flex-col min-[500px]:flex-row gap-1 min-[500px]:gap-2 items-start justify-start w-full">
                              <div className="rating flex justify-center items-center gap-0.5 text-orange-400 text-xs min-[350px]:text-md min-[500px]:text-lg">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                              </div>
                              <div className="w-full  ">
                                <ProgressBar value={63} options={options} />
                              </div>
                            </div>
                            <div className="border-b border-gray-300 pb-2 min-[500px]:pb-0 min-[500px]:border-b-0  flex flex-col min-[500px]:flex-row gap-1 min-[500px]:gap-2 items-start justify-start w-full">
                              <div className="rating flex justify-center items-center gap-0.5 text-orange-400 text-xs min-[350px]:text-md min-[500px]:text-lg">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <TiStarOutline />
                              </div>
                              <div className="w-full ">
                                <ProgressBar value={40} options={options} />
                              </div>
                            </div>
                            <div className="border-b border-gray-300 pb-2 min-[500px]:pb-0 min-[500px]:border-b-0  flex flex-col min-[500px]:flex-row gap-1 min-[500px]:gap-2 items-start justify-start w-full">
                              <div className="rating flex justify-center items-center gap-0.5 text-orange-400 text-xs min-[350px]:text-md min-[500px]:text-lg">
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <TiStarOutline />
                                <TiStarOutline />
                              </div>
                              <div className="w-full ">
                                <ProgressBar value={29} options={options} />
                              </div>
                            </div>
                            <div className="border-b border-gray-300 pb-2 min-[500px]:pb-0 min-[500px]:border-b-0  flex flex-col min-[500px]:flex-row gap-1 min-[500px]:gap-2 items-start justify-start w-full">
                              <div className="rating flex justify-center items-center gap-0.5 text-orange-400 text-xs min-[350px]:text-md min-[500px]:text-lg">
                                <FaStar />
                                <FaStar />
                                <TiStarOutline />
                                <TiStarOutline />
                                <TiStarOutline />
                              </div>
                              <div className="w-full ">
                                <ProgressBar value={10} options={options} />
                              </div>
                            </div>
                            <div className="border-b border-gray-300 pb-2 min-[500px]:pb-0 min-[500px]:border-b-0 flex flex-col min-[500px]:flex-row gap-1 min-[500px]:gap-2 items-start justify-start w-full">
                              <div className="rating flex justify-center items-center gap-0.5 text-orange-400 text-xs min-[350px]:text-md min-[500px]:text-lg">
                                <FaStar />
                                <TiStarOutline />
                                <TiStarOutline />
                                <TiStarOutline />
                                <TiStarOutline />
                              </div>
                              <div className="w-full ">
                                <ProgressBar value={5} options={options} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="sec rounded-md min-[500px]:rounded-lg min-[350px]:rounded-xl my-4 min-[350px]:my-8 bg-white px-3 py-4 min-[350px]:p-7 border border-gray-200 shadow-lg shadow-gray-300">
                      <p className="w-full  border-b border-gray-300 text-sm min-[350px]:text-lg min-[500px]:text-xl min-[690px]:text-2xl min-[1000px]:text-xl min-[1200px]:text-2xl  font-black pb-4">
                        Featured review
                      </p>
                      <div
                        className={`relative ${isMoreLearnReview ? "after:absolute after:content-[''] after:transition after:duration-300 after:w-full after:h-[50px] after:bottom-0 after:left-0 after:bg-linear-to-b  after:from-transparent after:from-0% after:to-white after:to-100%  after:z-[2]" : "after:content-none"} 
                        ${isMoreLearnReview ? "h-[600px] overflow-y-hidden" : "min-h-[200px] overflow-y-visible"} transition duration-300
                  flex flex-col items-start justify-start gap-3`}
                      >
                        {FeaturedReview1.map((el, index) => (
                          <FeaturedReview
                            img={el.img}
                            title={el.title}
                            description={el.description}
                            key={index}
                          />
                        ))}
                      </div>
                      <div
                        onClick={() => setIsMoreLearnReview(!isMoreLearnReview)}
                        className="w-full  mt-4 transition duration-300 cursor-pointer flex justify-between items-center gap-2 text-[10px] min-[300px]:text-xs min-[350px]:text-sm min-[500px]:text-md  min-[1200px]:text-lg text-blue-600 hover:text-violet-400 font-semibold "
                      >
                        {isMoreLearnReview ? (
                          <>
                            <span>Show More</span>
                            <FaChevronDown />
                          </>
                        ) : (
                          <>
                            <span>Show Less</span>
                            <FaChevronUp />
                          </>
                        )}
                      </div>
                    </div>

                    <div className="pt-7">
                      <TopCoursesDetails />
                    </div>
                  </div>
                </div>

                <div className=" col-span-5 min-[1000px]:col-span-2 min-[1200px]:col-span-1 overflow-visible  mb-10 min-[1000px]:mb-0  ">
                  <CartCourseDetails
                    price={coursesDetailsSingle?.price}
                    discount={coursesDetailsSingle?.discount}
                    lessons={coursesDetailsSingle?.lessons}
                    Students={coursesDetailsSingle?.Students}
                    id={coursesDetailsSingle?.id}
                    title={coursesDetailsSingle?.title}
                  />
                </div>
              </div>
              <div className="pt-8 min-[500px]:pt-14">
                <RelatedCoursesDetails />
              </div>
            </div>
          </div>
        )
      )}
    </section>
  );
}

export default CourseDetails;
