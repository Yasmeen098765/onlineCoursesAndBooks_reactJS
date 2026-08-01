import "./NavBar.css";
import { Link } from "react-router-dom";
import { Tooltip } from "flowbite-react";
import logo from "../../../assets/OnlineCourses/logo.png";
import { MdGridView } from "react-icons/md";
import { useState, useContext, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { LuArrowDownUp } from "react-icons/lu";
import { FiFolderMinus } from "react-icons/fi";
import { FaChevronRight } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegUser } from "react-icons/fa";
import { Marquee } from "react-beautiful-marquee";
import category10 from "../../../assets/OnlineCourses/category-10.png";
import h3 from "../../../assets/OnlineCourses/h3.jpg";
import h6 from "../../../assets/OnlineCourses/h6.jpg";
import h15 from "../../../assets/OnlineCourses/h15.jpg";
import h7 from "../../../assets/OnlineCourses/h7.jpg";
import h8 from "../../../assets/OnlineCourses/h8.jpg";
import h11 from "../../../assets/OnlineCourses/h11.jpg";
import h10 from "../../../assets/OnlineCourses/h10.jpg";
import h5 from "../../../assets/OnlineCourses/h5.jpg";
import h2 from "../../../assets/OnlineCourses/h2.jpg";
import h16 from "../../../assets/OnlineCourses/h16.jpg";
import h17 from "../../../assets/OnlineCourses/h17.jpg";
import h18 from "../../../assets/OnlineCourses/h18.jpg";
import h19 from "../../../assets/OnlineCourses/h19.jpg";
import h20 from "../../../assets/OnlineCourses/h20.jpg";
import h21 from "../../../assets/OnlineCourses/h21.jpg";
import h22 from "../../../assets/OnlineCourses/h22.jpg";
import h23 from "../../../assets/OnlineCourses/h23.jpg";
import h24 from "../../../assets/OnlineCourses/h24.jpg";
import h25 from "../../../assets/OnlineCourses/h25.jpg";
import h26 from "../../../assets/OnlineCourses/h26.jpg";
import category1 from "../../../assets/OnlineCourses/category-1.png";
import category2 from "../../../assets/OnlineCourses/category-2.png";
import category4 from "../../../assets/OnlineCourses/category-4.png";
import category9 from "../../../assets/OnlineCourses/category-9.png";
import mobileCat from "../../../assets/OnlineCourses/mobile-cat.jpg";
import avatar from "../../../assets/OnlineCourses/avatar.jpg";
import { CiHome } from "react-icons/ci";
import { CiBookmark } from "react-icons/ci";
import { FiShoppingBag } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FaListUl } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { FiMessageSquare } from "react-icons/fi";
import { BiBookOpen } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { SlSocialTwitter } from "react-icons/sl";
import { LuFacebook } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { cartContext } from "../../../context/CartContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";
function NavBar({ isScroll }) {
  const navigate = useNavigate();
  const { cartIDS, cartItemsAmount, cartAmount, records } =
    useContext(cartContext);
  const [selectedCat, setSelectedCat] = useState("one");
  const [isOpenBars, setIsOpenBars] = useState(false);
  const { currentUser } = useContext(AuthContext);

  // ============ كائن واحد لإدارة جميع القوائم ============
  const [menus, setMenus] = useState({
    // للـ Desktop
    home: false,
    course: false,
    dashboard: false,
    instructorDashboard: false,
    studentDashboard: false,
    pages: false,
    elements: false,
    blogs: false,
    admin: false,
    // للـ Chevrons
    chevron1: false,
    chevron2: false,
    chevron3: false,
    chevron4: false,
    chevron5: false,
    chevron6: false,
    // للـ Mobile
    homeMobile: false,
    coursesMobile: false,
    dashboardMobile: false,
    instructorDashboardMobile: false,
    studentDashboardMobile: false,
    pagesMobile: false,
    elementsMobile: false,
    blogMobile: false,
  });

  // ============ دوال مساعدة للتحكم ============
  const toggleMenu = (menuName) => {
    setMenus((prev) => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  const openMenu = (menuName) => {
    setMenus((prev) => ({
      ...prev,
      [menuName]: true,
    }));
  };

  const closeMenu = (menuName) => {
    setMenus((prev) => ({
      ...prev,
      [menuName]: false,
    }));
  };

  const courses_Home = [
    { image: h3, title: "Online School" },
    { image: h6, title: "University Status" },
    { image: h15, title: "Home Technology" },
    { image: h7, title: "Instructor Portfolio" },
    { image: h8, title: "Language Academy" },
    { image: h11, title: "Single Course" },
    { image: h10, title: "Online Course" },
    { image: h5, title: "Classic Lms" },
    { image: h2, title: "Course School" },
    { image: h16, title: "Udemy Affiliate" },
    { image: h17, title: "Online Academy" },
    { image: h18, title: "Instructor Coaches" },
    { image: h19, title: "Modern University" },
    { image: h20, title: "Multilingual" },
    { image: h21, title: "Art Design School" },
    { image: h22, title: "Wishlist" },
    { image: h23, title: "Coaching" },
    { image: h24, title: "Health Institute" },
    { image: h25, title: "Life Coach" },
    { image: h26, title: "Islamic Center" },
  ];

  useEffect(() => {
    cartAmount();
  }, [cartIDS, records]);

  const handleScrollTo2 = (setState, state) => {
    setState(state);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };
  const handleScrollTo3 = (setState, state) => {
    setState(!state);
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };
  const handleScrollTo = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <div
      className={` ${isScroll ? "scrollAnimate" : "relative"}   w-full  navBar  bg-white text-gray-700 shadow-md shadow-gray-200   transition-all duration-1000`}
    >
      <div className=" mx-auto px-2 sm:px-3 md:px-4  lg:px-5 ">
        <div className="flex items-stretch justify-between   ">
          {/* 1 */}
          <div className="flex  items-stretch h-full justify-center text-[16px] gap-1  min-[1030px]:gap-5 py-1 min-[351px]:py-3 min-[1030px]:py-0  ">
            <Link
              to="/"
              onClick={() => handleScrollTo()}
              className="self-center cursor-pointer  w-[70px] min-[351px]:w-[100px]  md:w-[130px]"
            >
              <img src={logo} alt="logo" className="w-full" />
            </Link>
            <div
              onMouseEnter={() => openMenu("category")}
              onMouseLeave={() => closeMenu("category")}
              className=" relative   h-full self-center py-3"
            >
              <div className=" flex   text-[12px] min-[351px]:text-[17px] items-center justify-center gap-2 min-[1030px]:py-3 min-[1030px]:px-5 min-[1030px]:shadow min-[1030px]:bg-neutral-100 text-gray-700 min-[1030px]:rounded-3xl cursor-pointer  font-semibold ">
                <Tooltip
                  content="Category"
                  placement="bottom-start"
                  style="light"
                  className="z-50 text-[11px] min-[351px]:text-[16px]  min-[1030px]:hidden! translate-x-[15px]!  -translate-y-[5px]!  rounded-none! px-1! min-[351px]:px-2! py-2! min-[351px]:py-2! border-1! border-black! "
                >
                  <MdGridView className="font-semibold text-[19px]" />
                </Tooltip>
                <span className="hidden min-[1030px]:block">Category</span>

                <AnimatePresence>
                  {menus.category && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        overflow: "hidden",
                      }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        overflow: "hidden",
                      }}
                      transition={{ duration: 0.2 }}
                      className="dropDown-Cat z-40 hidden min-[1030px]:block absolute top-[101%] rounded-br-lg rounded-bl-lg inset-s-0 bg-white shadow p-3 w-125 text-gray-400"
                    >
                      <div className="grid grid-cols-5 ">
                        <div className="col-span-2 text-sm px-2 border-e border-gray-200">
                          <div className="flex flex-col ">
                            <p
                              className={`py-2 px-4 hover:bg-gray-300 transition duration-300 rounded hover:text-blue-600 ${selectedCat == "one" ? "active" : ""} `}
                              onMouseEnter={() => setSelectedCat("one")}
                            >
                              Course School
                            </p>
                            <p
                              className={`py-2 px-4 hover:bg-gray-300 transition duration-300 rounded hover:text-blue-600 ${selectedCat == "two" ? "active" : ""}`}
                              onMouseEnter={() => setSelectedCat("two")}
                            >
                              Online School
                            </p>
                            <p
                              className={`py-2 px-4 hover:bg-gray-300 transition duration-300 rounded hover:text-blue-600 ${selectedCat == "three" ? "active" : ""}`}
                              onMouseEnter={() => setSelectedCat("three")}
                            >
                              kindergarten
                            </p>
                            <p
                              className={`py-2 px-4 hover:bg-gray-300 transition duration-300 rounded hover:text-blue-600 ${selectedCat == "four" ? "active" : ""}`}
                              onMouseEnter={() => setSelectedCat("four")}
                            >
                              Classic LMS
                            </p>
                          </div>
                        </div>
                        <div className="col-span-3 text-sm px-2 relative ">
                          {/* one */}
                          <div
                            className={`cat-info px-3 flex items-center justify-center gap-4  w-full absolute top-0  inset-s-0 ${selectedCat == "one" ? "active" : ""}`}
                          >
                            <div className="w-[50%]">
                              <p className="font-bold p-2 pb-3 ps-0 text-[12px] border-b border-gray-200 uppercase">
                                Course Title
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Web Design
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Art
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Figma
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Adobe
                              </p>
                            </div>

                            <div className="w-[50%]">
                              <p className="font-bold p-2 pb-3 ps-0 text-[12px] border-b border-gray-200 uppercase">
                                Course Title
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Photo
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                English
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Math
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Read
                              </p>
                            </div>
                          </div>
                          {/* two */}
                          <div
                            className={`cat-info px-3 flex items-center justify-center gap-4 w-full absolute top-0  inset-s-0 ${selectedCat == "two" ? "active" : ""}`}
                          >
                            <div className="w-[50%]">
                              <p className="font-bold p-2 pb-3 ps-0 text-[12px] border-b border-gray-200 uppercase">
                                Course Title
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Photo
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                English
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Math
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Read
                              </p>
                            </div>
                            <div className="w-[50%]">
                              <p className="font-bold p-2 pb-3 ps-0 text-[12px] border-b border-gray-200 uppercase">
                                Course Title
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Web Design
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Art
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Figma
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Adobe
                              </p>
                            </div>
                          </div>
                          {/* three */}
                          <div
                            className={`cat-info px-3 flex items-center justify-center gap-4 w-full absolute top-0 inset-s-0 ${selectedCat == "three" ? "active" : ""}`}
                          >
                            <div className="w-full">
                              <p className="font-bold p-2 pb-3 ps-0 text-[12px] border-b border-gray-200 uppercase">
                                Course Title
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Photo
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                English
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Math
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300 flex justify-start items-center  text-gray-700 gap-1">
                                <span>Learn More</span>{" "}
                                <FaArrowRight className="text-sm relative top-0.5 -translate-x-0.5" />
                              </p>
                            </div>
                          </div>
                          {/* four */}
                          <div
                            className={`cat-info px-3 flex items-center justify-center gap-4 w-full absolute top-0 inset-s-0 ${selectedCat == "four" ? "active" : ""}`}
                          >
                            <div className="w-full">
                              <p className="font-bold p-2 pb-3 ps-0 text-[12px] border-b border-gray-200 uppercase">
                                Course Title
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Photo
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                English
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Math
                              </p>
                              <p className="p-1 hover:text-blue-400 transition duration-300">
                                Read
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* 2 links */}
          <nav className="hidden  min-[1030px]:block">
            <ul className="flex justify-center h-full items-center gap-6   text-gray-800 ">
              <li
                onMouseEnter={() => {
                  openMenu("chevron1");
                  openMenu("home");
                }}
                onMouseLeave={() => {
                  closeMenu("chevron1");
                  closeMenu("home");
                }}
                className="  flex justify-center items-center h-full  hover:text-blue-500! transition duration-300 "
              >
                <a
                  href="#"
                  className="flex justify-center items-center gap-1 text-[16px] font-semibold  "
                >
                  Home
                  {menus.chevron1 ? (
                    <FaChevronDown className="text-[12px] font-semibold  " />
                  ) : (
                    <FaChevronUp className="text-[12px] font-semibold  " />
                  )}
                </a>
                <AnimatePresence>
                  {menus.home && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        overflow: "hidden",
                      }}
                      animate={{ height: "75vh", opacity: 1 }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        overflow: "hidden",
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute  h-[75vh]   px-5 w-full mx-auto   top-[101%] inset-s-[50%]  translate-x-[-50%]"
                    >
                      <div className="h-full flex flex-col z-40 justify-start items-center gap-4 overflow-y-auto bg-gray-800 text-white text-sm rounded-bl-2xl rounded-br-2xl  px-9 py-7">
                        <div className="grid grid-cols-6 gap-x-7 ">
                          {courses_Home.map((course, index) => (
                            <div
                              key={index}
                              className="course cursor-pointer  flex flex-col justify-center items-center gap-2 hover:-translate-y-2.5 transition duration-300 "
                            >
                              <div className="rounded-xl w-full overflow-hidden">
                                <img src={course.image} className="w-full" />
                              </div>
                              <span className="cursor-pointer flex justify-center items-center gap-1">
                                {course.title}{" "}
                                <FaArrowRight className="text-sm relative top-0.5 -translate-x-0.5" />
                              </span>
                            </div>
                          ))}
                        </div>
                        <span className=" text-gray-300 text-[12px] min-[351px]:text-[17px] hover:text-white transition duration-300  cursor-pointer flex justify-center items-center gap-1">
                          Scroll to view more <LuArrowDownUp />
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li
                onMouseEnter={() => {
                  openMenu("chevron2");
                  openMenu("course");
                }}
                onMouseLeave={() => {
                  closeMenu("chevron2");
                  closeMenu("course");
                }}
                className=" flex justify-center items-center h-full  hover:text-blue-500 transition duration-300 "
              >
                <a
                  href="#"
                  className="flex justify-center items-center gap-1 text-[16px] font-semibold "
                >
                  Course
                  {menus.chevron2 ? (
                    <FaChevronDown className="text-[12px] font-semibold  " />
                  ) : (
                    <FaChevronUp className="text-[12px] font-semibold  " />
                  )}
                </a>
                <AnimatePresence>
                  {menus.course && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        overflow: "hidden",
                      }}
                      animate={{ height: "75vh", opacity: 1 }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        overflow: "hidden",
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute  h-[75vh]   rounded-br-lg rounded-bl-lg bg-white text-gray-400  shadow-md shadow-gray-200 w-[50%] mx-auto   top-[101%] inset-s-[50%]  translate-x-[-50%]"
                    >
                      <div className="grid grid-cols-6  h-full  z-40 overflow-y-auto   ">
                        <div className="relative col-span-6 h-35 ">
                          <img src={category10} className=" w-full h-full" />
                          <div className="px-8 py-2 absolute top-0 inset-0 w-full h-full  text-white flex flex-col justify-center items-start gap-2">
                            <b>Developer hub</b>
                            <p className="w-[50%]">
                              Start building fast, with code samples, key
                              resources and more.
                            </p>
                          </div>
                        </div>
                        <div className="col-span-6 px-5 py-3 flex justify-start items-center gap-9 w-full">
                          <div className="w-[50%] ">
                            <p className="font-bold p-2 pb-3 mb-1 ps-0 text-[12px] border-b border-gray-200 text-gray-400 uppercase">
                              Course Layout
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              filter one toggle
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              filter one open
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              filter two toggle
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              filter two open
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              course with tab
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              course with tab two
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              course card two
                            </p>
                          </div>
                          <div className="w-[50%] ">
                            <p className="font-bold p-2 pb-3 mb-1 ps-0 text-[12px] border-b border-gray-200 text-gray-400 uppercase">
                              Course Layout
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5  capitalize transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              course card three
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              course masonry
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              course with sidebar
                            </p>
                            <Link
                              to={"/courseDetails/12"}
                              className="w-full"
                              onClick={() =>
                                handleScrollTo2(toggleMenu, "course")
                              }
                            >
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                course details
                              </p>
                            </Link>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              course details two
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 flex justify-start items-center gap-1 min-[351px]:gap-2 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              course lesson
                              <span className="  text-[9px]  min-[351px]:text-[11px]  bg-linear-90 from-fuchsia-300 to-indigo-300 px-1.5 min-[351px]:px-3 py-0.5 flex justify-center items-center text-white cursor-pointer rounded-full">
                                New
                              </span>
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 flex justify-start items-center gap-1 min-[351px]:gap-2 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              create course
                              <span className="  text-[9px]  min-[351px]:text-[11px]  bg-linear-90 from-fuchsia-300 to-indigo-300 px-3 py-0.5 flex justify-center items-center text-white cursor-pointer rounded-full">
                                New
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="bg-[#f5f5fa] col-span-6  px-5 py-3 ">
                          <div className="grid grid-cols-6 gap-9 text-gray-500">
                            <div className="col-span-3 flex flex-col gap-2 justify-center items-start">
                              <p className="flex items-center justify-center gap-2 ">
                                <FiFolderMinus className="text-purple-400" />
                                <span>quick start guide </span>
                              </p>
                              <p className="flex items-center justify-center gap-2 ">
                                <FiFolderMinus className="text-purple-400" />
                                <span>quick start guide </span>
                              </p>
                            </div>
                            <div className="col-span-3 flex flex-col gap-2 justify-center items-start">
                              <p className="flex items-center justify-center gap-2 ">
                                <FiFolderMinus className="text-purple-400" />
                                <span>quick start guide </span>
                              </p>
                              <p className="flex items-center justify-center gap-2 ">
                                <FiFolderMinus className="text-purple-400" />
                                <span>quick start guide </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li
                onMouseEnter={() => {
                  openMenu("chevron3");
                  openMenu("dashboard");
                }}
                onMouseLeave={() => {
                  closeMenu("chevron3");
                  closeMenu("dashboard");
                  closeMenu("studentDashboard");
                  closeMenu("instructorDashboard");
                }}
                className=" flex justify-center items-center h-full  hover:text-blue-500 transition duration-300 "
              >
                <a
                  href="#"
                  className="flex justify-center items-center gap-1 text-[16px] font-semibold "
                >
                  Dashboard
                  {menus.chevron3 ? (
                    <FaChevronDown className="text-[12px] font-semibold  " />
                  ) : (
                    <FaChevronUp className="text-[12px] font-semibold  " />
                  )}
                </a>
                <AnimatePresence>
                  {menus.dashboard && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        scaleY: 0.9,
                      }}
                      animate={{ height: "auto", opacity: 1, scaleY: 1 }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        scaleY: 0.9,
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute w-auto h-auto  py-2 rounded-br-lg rounded-bl-lg bg-white text-gray-400 top-[101%] inset-s-auto shadow-md shadow-gray-200 "
                    >
                      <div className="relative w-full  px-2  z-40 ">
                        <p
                          onMouseEnter={() => {
                            openMenu("instructorDashboard");
                            closeMenu("studentDashboard");
                          }}
                          className={`py-2 px-4 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                        >
                          instructor dashboard
                        </p>
                        <AnimatePresence>
                          {menus.instructorDashboard && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                                scale: 0.9,
                              }}
                              animate={{ height: "70vh", opacity: 1, scale: 1 }}
                              exit={{
                                height: 0,
                                opacity: 0,
                                scale: 0.9,
                              }}
                              transition={{ duration: 0.3 }}
                              className="h-[70vh] z-40 overflow-y-auto  absolute  inset-e-0 top-2 translate-x-full w-full px-2 py-2 rounded-lg shadow bg-white"
                            >
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                dashboard
                              </p>
                              <Link
                                to={"/profile"}
                                className="w-full"
                                onClick={() =>
                                  handleScrollTo2(toggleMenu, "dashboard")
                                }
                              >
                                <p
                                  className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                                >
                                  profile
                                </p>
                              </Link>

                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                enrolled courses
                              </p>
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                wishlist
                              </p>
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                reviews
                              </p>
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                my quize attempts
                              </p>
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                order history
                              </p>
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                my course
                              </p>
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                announcementes
                              </p>
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                quize attempts
                              </p>
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                assignments
                              </p>
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                settings
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                      <div className="relative w-full  px-2 z-40 ">
                        <p
                          onMouseEnter={() => {
                            openMenu("studentDashboard");
                            closeMenu("instructorDashboard");
                          }}
                          className={`py-2 px-4 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                        >
                          student dashboard
                        </p>
                        <AnimatePresence>
                          {menus.studentDashboard && (
                            <motion.div
                              initial={{
                                height: 0,
                                opacity: 0,
                                scale: 0.9,
                              }}
                              animate={{ height: "60vh", opacity: 1, scale: 1 }}
                              exit={{
                                height: 0,
                                opacity: 0,
                                scale: 0.9,
                              }}
                              transition={{ duration: 0.3 }}
                              className="h-[60vh] overflow-y-auto z-40  absolute  inset-e-0 top-2 translate-x-full w-full px-2 py-2 rounded-lg shadow bg-white"
                            >
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                dashboard
                              </p>
                              <Link
                                to={"/profile"}
                                className="w-full"
                                onClick={() =>
                                  handleScrollTo2(toggleMenu, "dashboard")
                                }
                              >
                                <p
                                  className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                                >
                                  profile
                                </p>
                              </Link>
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                enrolled courses
                              </p>
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                wishlist
                              </p>
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                reviews
                              </p>
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                my quize attempts
                              </p>
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                order history
                              </p>
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                settings
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li
                onMouseEnter={() => {
                  openMenu("chevron4");
                  openMenu("pages");
                }}
                onMouseLeave={() => {
                  closeMenu("chevron4");
                  closeMenu("pages");
                }}
                className="  flex justify-center items-center h-full  hover:text-blue-500 transition duration-300 "
              >
                <a
                  href="#"
                  className="flex justify-center items-center gap-1 text-[16px] font-semibold "
                >
                  Pages
                  {menus.chevron4 ? (
                    <FaChevronDown className="text-[12px] font-semibold  " />
                  ) : (
                    <FaChevronUp className="text-[12px] font-semibold  " />
                  )}
                </a>
                <AnimatePresence>
                  {menus.pages && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        overflow: "hidden",
                      }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        overflow: "hidden",
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute  px-5 pb-3  w-full mx-auto   top-[101%] inset-s-[50%]  translate-x-[-50%]"
                    >
                      <div className=" bg-white shadow   z-40  overflow-y-auto  rounded-bl-2xl rounded-br-2xl  px-5 py-4">
                        <div className="grid grid-cols-12 gap-x-9  text-gray-500 ">
                          <div className="col-span-3">
                            <p className="font-bold px-2.5 pb-3 mb-1  text-[12px] border-b border-gray-200 text-gray-400 uppercase">
                              Get Started
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  text-[14px] transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              About Us
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px] transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              About Us 02
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Event Grid
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Event List
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Event Sidebar
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Event Details
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Academy Gallery
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Admission Guide
                            </p>
                          </div>

                          <div className="col-span-3">
                            <p className="font-bold px-2.5 pb-3 mb-1  text-[12px] border-b border-gray-200 text-gray-400 uppercase">
                              Get Started
                            </p>
                            <Link
                              to={"/profile"}
                              className="w-full"
                              onClick={() =>
                                handleScrollTo2(toggleMenu, "pages")
                              }
                            >
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  text-[14px] transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                Profile
                              </p>
                            </Link>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px] transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Contact Us
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Become a Teacher
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Instructor
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              FAQS
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Privacy Policy
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              404 Page
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Maintenance
                            </p>
                          </div>

                          <div className="col-span-3">
                            <p className="font-bold px-2.5 pb-3 mb-1  text-[12px] border-b border-gray-200 text-gray-400 uppercase">
                              Shop Pages
                            </p>
                            <Link
                              className="w-full"
                              to={"/shope"}
                              onClick={() =>
                                handleScrollTo2(toggleMenu, "pages")
                              }
                            >
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5  flex gap-1 min-[351px]:gap-2 capitalize  text-[14px] transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                Shop
                                <span className=" text-[9px]  min-[351px]:text-[11px]  bg-linear-90 from-fuchsia-300 to-indigo-300  px-1.5 min-[351px]:px-3  py-0.5 flex justify-center items-center text-white cursor-pointer rounded-full">
                                  Sale Anything
                                </span>
                              </p>
                            </Link>
                            <Link
                              className="w-full"
                              to={`/bookDetails/1`}
                              onClick={() =>
                                handleScrollTo2(toggleMenu, "pages")
                              }
                            >
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                Single Product
                              </p>
                            </Link>
                            <Link
                              className="w-full"
                              onClick={() =>
                                handleScrollTo2(toggleMenu, "pages")
                              }
                              to="/cart"
                            >
                              <p
                                className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                              >
                                Cart Page
                              </p>
                            </Link>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Checkout
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Wishlist Page
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              My Acount
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Login & Register
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Subscription
                            </p>
                          </div>

                          <div className="col-span-3 ">
                            <div className="flex flex-col justify-center items-center gap-1 w-full">
                              <div className="relative w-full rounded-md overflow-hidden group ">
                                <img src={category2} className="w-full h-15" />
                                <p className=" hover:text-blue-600  transition duration-300  cursor-pointer absolute top-0 inset-s-0 ps-4 text-[16px]  flex items-center justify-start gap-1  w-full h-full ">
                                  Online Education
                                  <FaChevronRight className="  text-[9px]  min-[351px]:text-[11px]  group-hover:translate-x-2.5  transition duration-500 " />
                                </p>
                              </div>
                              <div className="relative w-full rounded-md overflow-hidden group ">
                                <img src={category1} className="w-full h-15" />
                                <p className=" hover:text-blue-600  transition duration-300  cursor-pointer absolute top-0 inset-s-0 ps-4 text-[16px]  flex items-center justify-start gap-1  w-full h-full ">
                                  language club
                                  <FaChevronRight className="  text-[9px]  min-[351px]:text-[11px]  group-hover:translate-x-2.5  transition duration-500 " />
                                </p>
                              </div>
                              <div className="relative w-full rounded-md overflow-hidden group ">
                                <img src={category4} className="w-full h-15" />
                                <p className=" hover:text-blue-600  transition duration-300  cursor-pointer absolute top-0 inset-s-0 ps-4 text-[16px]  flex items-center justify-start gap-1  w-full h-full ">
                                  university status
                                  <FaChevronRight className="  text-[9px]  min-[351px]:text-[11px]  group-hover:translate-x-2.5  transition duration-500 " />
                                </p>
                              </div>
                              <div className="relative w-full rounded-md overflow-hidden group ">
                                <img src={category1} className="w-full h-15" />
                                <p className=" hover:text-blue-600  transition duration-300  cursor-pointer absolute top-0 inset-s-0 ps-4 text-[16px]  flex items-center justify-start gap-1  w-full h-full ">
                                  course school
                                  <FaChevronRight className="  text-[9px]  min-[351px]:text-[11px]  group-hover:translate-x-2.5  transition duration-500 " />
                                </p>
                              </div>
                              <div className="relative w-full rounded-md overflow-hidden group ">
                                <img src={category9} className="w-full h-15" />
                                <p className=" hover:text-blue-600  transition duration-300  cursor-pointer absolute top-0 inset-s-0 ps-4 text-[16px]  flex items-center justify-start gap-1  w-full h-full ">
                                  academy
                                  <FaChevronRight className="  text-[9px]  min-[351px]:text-[11px]  group-hover:translate-x-2.5  transition duration-500 " />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
              <li
                onMouseEnter={() => {
                  openMenu("chevron5");
                  openMenu("elements");
                }}
                onMouseLeave={() => {
                  closeMenu("chevron5");
                  closeMenu("elements");
                }}
                className="  flex justify-center items-center h-full  hover:text-blue-500 transition duration-300 "
              >
                <a
                  href="#"
                  className="flex justify-center items-center gap-1 text-[16px] font-semibold "
                >
                  Elements
                  {menus.chevron5 ? (
                    <FaChevronDown className="text-[12px] font-semibold  " />
                  ) : (
                    <FaChevronUp className="text-[12px] font-semibold  " />
                  )}
                </a>
                <AnimatePresence>
                  {menus.elements && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        overflow: "hidden",
                      }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        overflow: "hidden",
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute  px-5 pb-3 w-[50%] mx-auto   top-[101%] inset-s-[50%]  translate-x-[-50%]  "
                    >
                      <div className=" bg-white shadow   z-40  overflow-y-auto  rounded-bl-2xl rounded-br-2xl  ">
                        <div className="grid grid-cols-9 gap-x-9  text-gray-500 px-5 pt-4 pb-2 ">
                          <div className="col-span-3">
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 flex justify-start items-center gap-1 min-[351px]:gap-2 capitalize  text-[14px] transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Style Guide
                              <span className="  text-[9px]  min-[351px]:text-[11px]  bg-linear-90 from-fuchsia-300 to-indigo-300  px-1.5 min-[351px]:px-3  py-0.5 flex justify-center items-center text-white cursor-pointer rounded-full">
                                New
                              </span>
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px] transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Accordion
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Advance Tab
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 flex justify-start items-center gap-1 min-[351px]:gap-2 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              About
                              <span className="  text-[9px]  min-[351px]:text-[11px]  bg-linear-90 from-fuchsia-300 to-indigo-300  px-1.5 min-[351px]:px-3  py-0.5 flex justify-center items-center text-white cursor-pointer rounded-full">
                                New
                              </span>
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Brand
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Button
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Badge
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Card
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              & More Coming
                            </p>
                          </div>

                          <div className="col-span-3">
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5  gap-2 capitalize  text-[14px] transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Call To Action
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px] transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Counter
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Categories
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5  capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Header Style
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Newslette
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Team
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Social
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              List Style
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              & More Coming
                            </p>
                          </div>

                          <div className="col-span-3">
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5  gap-2 capitalize  text-[14px] transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Gallery
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px] transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Pricing
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Progressbar
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5  capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Testimonial
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Service
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Split Area
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Search Style
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Instagram Style
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              & More Coming
                            </p>
                          </div>
                        </div>
                        <div className="group  flex justify-center items-center bg-linear-to-r from-indigo-400  to-purple-400 hover:from-purple-400 hover:to-indigo-400 transition duration-700  px-1.5 min-[351px]:px-3  py-4  text-white cursor-pointer">
                          <div className="group-hover:translate-x-2 transition duration-300    flex justify-center items-center gap-2 text-center w-full">
                            <FaArrowRight className="font-semibold opacity-0  group-hover:opacity-100 transition duration-500 relative top-0.5 -translate-x-0.5" />
                            <p className="text-nowrap">
                              Visit Histudy Template
                            </p>
                            <FaArrowRight className="font-semibold opacity-100 group-hover:opacity-0 transition duration-500 relative top-0.5 -translate-x-0.5" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>

              <li
                onMouseEnter={() => {
                  openMenu("chevron6");
                  openMenu("blogs");
                }}
                onMouseLeave={() => {
                  closeMenu("chevron6");
                  closeMenu("blogs");
                }}
                className="  flex justify-center items-center h-full  hover:text-blue-500 transition duration-300 "
              >
                <a
                  href="#"
                  className="flex justify-center items-center gap-1 text-[16px] font-semibold "
                >
                  Blogs
                  {menus.chevron6 ? (
                    <FaChevronDown className="text-[12px] font-semibold  " />
                  ) : (
                    <FaChevronUp className="text-[12px] font-semibold  " />
                  )}
                </a>
                <AnimatePresence>
                  {menus.blogs && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        overflow: "hidden",
                      }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        overflow: "hidden",
                      }}
                      transition={{ duration: 0.3 }}
                      className="absolute  w-[70%] mx-auto   top-[101%] inset-s-[50%]  translate-x-[-50%]  px-5 pb-3   "
                    >
                      <div className=" bg-white shadow    z-40  overflow-y-auto  rounded-bl-2xl rounded-br-2xl  px-5 py-4">
                        <div className="grid grid-cols-9 gap-x-9  text-gray-500 ">
                          <div className="col-span-3">
                            <p className="font-bold px-2.5 pb-3 mb-1  text-[12px] border-b border-gray-200 text-gray-400 uppercase">
                              Blog Styles
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  text-[14px] transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Blog List
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px] transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Blog Grid
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Blog Grid Minimaly
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Blog With Sidebar
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Blog Details
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Post Format Standard
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Post Format Galler
                            </p>
                          </div>

                          <div className="col-span-3">
                            <p className="font-bold px-2.5 pb-3 mb-1  text-[12px] border-b border-gray-200 text-gray-400 uppercase">
                              Get Started
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize  text-[14px] transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Post Format Quote
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px] transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Post Format Audio
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Post Format Video
                            </p>

                            <p
                              className={`text-[12px] text-nowrap min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 flex justify-start items-center gap-1 min-[351px]:gap-2 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Media Under Title
                              <span className="  text-[9px]  min-[351px]:text-[11px]  bg-linear-90 from-fuchsia-300 to-indigo-300  px-1.5 min-[351px]:px-3  py-0.5 flex justify-center items-center text-white cursor-pointer rounded-full">
                                Coming
                              </span>
                            </p>

                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 flex justify-start items-center gap-2 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Sticky Sidebar
                              <span className="  text-[9px]  min-[351px]:text-[11px]  bg-linear-90 from-fuchsia-300 to-indigo-300  px-1.5 min-[351px]:px-3  py-0.5 flex justify-center items-center text-white cursor-pointer rounded-full">
                                Coming
                              </span>
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 flex justify-start items-center gap-2 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Auto Masonry
                              <span className="  text-[9px]  min-[351px]:text-[11px]  bg-linear-90 from-fuchsia-300 to-indigo-300  px-1.5 min-[351px]:px-3  py-0.5 flex justify-center items-center text-white cursor-pointer rounded-full">
                                Coming
                              </span>
                            </p>
                            <p
                              className={`text-[12px]  min-[351px]:text-[16px] w-full py-1 min-[351px]:py-2 px-1.5 min-[351px]:px-2.5 flex justify-start items-center gap-2 capitalize text-[14px]  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                            >
                              Meta Overlaid
                              <span className="  text-[9px]  min-[351px]:text-[11px]  bg-linear-90 from-fuchsia-300 to-indigo-300  px-1.5 min-[351px]:px-3  py-0.5 flex justify-center items-center text-white cursor-pointer rounded-full">
                                Coming
                              </span>
                            </p>
                          </div>

                          <div className="col-span-3">
                            <img src={mobileCat} className="w-full" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            </ul>
          </nav>

          {/* 3 */}
          <div className="flex justify-center items-center  ">
            <div className="flex gap-1 min-[351px]:gap-1.5 justify-center items-center min-[1030px]:pe-4  min-[1030px]:border-e min-[1030px]:border-gray-300">
              <div className="p-1 min-[351px]:p-2 text-[16px]    min-[351px]:text-[17px] hover:bg-gray-200  transition duration-300 rounded-full cursor-pointer hover:text-blue-600">
                <FaSearch />
              </div>
              <Link
                className="w-full"
                onClick={() => handleScrollTo()}
                to="/cart"
              >
                <div className="relative p-1 min-[351px]:p-2 text-[16px] min-[351px]:text-[17px] hover:bg-gray-200  transition duration-300 rounded-full cursor-pointer hover:text-blue-600">
                  <FiShoppingCart className=" font-bold " />
                  <div className="absolute -top-1.5 -inset-e-1.5 bg-blue-600 text-white text-[9px]   min-[351px]:text-[12px] px-1 py-0.5 min-[500px]:px-1.5 rounded-4xl">
                    {cartItemsAmount}
                  </div>
                </div>
              </Link>
            </div>
            <div className="flex justify-center self-stretch gap-1 min-[351px]:gap-2">
              <div
                onMouseEnter={() => openMenu("admin")}
                onMouseLeave={() => closeMenu("admin")}
                className="cursor-pointer ps-1 min-[351px]:ps-2 min-[1030px]:ps-4 flex justify-center items-center group"
              >
                {currentUser ? (
                  <>
                    <Link to="/profile" onClick={() => handleScrollTo()}>
                      <div className="text-[12px] min-[351px]:text-[16px]  hidden min-[1030px]:flex justify-center items-center gap-1 cursor-pointer group-hover:text-blue-600 transition duration-300">
                        <img
                          src={currentUser ? currentUser?.image : avatar}
                          width={25}
                          hight={25}
                          className="rounded-full"
                        />
                        <span className="capitalize">
                          {currentUser?.firstName}
                        </span>
                      </div>
                    </Link>
                    <Link to="/profile" onClick={() => handleScrollTo()}>
                      <div className="text-[16px]   min-[351px]:text-[12px] min-[351px]:text-[18px]  flex min-[1030px]:hidden p-1 min-[451px]:p-2 text-black justify-center items-center gap-2 cursor-pointer rounded-full hover:bg-gray-200 hover:text-blue-600 transition duration-300">
                        <img
                          src={currentUser ? currentUser?.image : avatar}
                          className="rounded-full w-[20px] h-[20px] min-[300px]:w-[25px] min-[300px]:h-[25px] min-[400px]:w-[35px] min-[400px]:h-[35px]"
                        />
                      </div>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/register" onClick={() => handleScrollTo()}>
                      <div className="text-[12px] min-[351px]:text-[16px]  hidden min-[1030px]:flex justify-center items-center gap-1 cursor-pointer group-hover:text-blue-600 transition duration-300">
                        <FaRegUser />
                        <span>Login/Register</span>
                      </div>
                    </Link>
                    <Link to="/register" onClick={() => handleScrollTo()}>
                      <div className="text-[16px]   min-[351px]:text-[12px] min-[351px]:text-[18px]  flex min-[1030px]:hidden p-1 min-[451px]:p-2 text-black justify-center items-center gap-2 cursor-pointer rounded-full hover:bg-gray-200 hover:text-blue-600 transition duration-300">
                        <FaRegUser />
                      </div>
                    </Link>
                  </>
                )}

                <AnimatePresence>
                  {menus.admin && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        overflow: "auto",
                      }}
                      animate={{ height: "75vh", opacity: 1 }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        overflow: "auto",
                      }}
                      transition={{ duration: 0.3 }}
                      className="dropDownAdmin h-[63vh]! min-[451px]:h-[75vh]! overflow-y-auto rounded-bl-lg w-38 min-[451px]:w-56.25  absolute top-full inset-e-0 bg-white shadow "
                    >
                      <div className="flex flex-col justify-center items-center ">
                        <div className="flex justify-center items-center gap-2 min-[451px]:gap-4 py-2 min-[451px]:py-4 px-1 min-[451px]:px-2">
                          <img
                            src={currentUser ? currentUser?.image : avatar}
                            className="rounded-4xl outline-2 outline-offset-3 outline-gray-300 w-[36px] min-[451px]:w-[45px] h-[36px] min-[451px]:h-[45px]"
                          />
                          <div className="flex flex-col justify-center items-start">
                            <b className=" text-[12px]  min-[451px]:text-[12px] min-[451px]:text-[18px] capitalize">
                              {currentUser?.firstName}
                            </b>
                            <Link
                              to="/profile"
                              onClick={() => handleScrollTo()}
                              className="text-blue-600 viewProfile relative pb-1 text-[11px] min-[451px]:text-[16px]"
                            >
                              <p>View Profile</p>
                            </Link>
                          </div>
                        </div>

                        <div className=" px-2 pb-2 flex flex-col justify-center items-start gap-1 w-full">
                          <p
                            className={`text-[12px]  min-[451px]:text-[16px] w-full py-1 min-[451px]:py-2 px-1.5 min-[451px]:px-2.5 flex justify-start items-center gap-1 min-[451px]:gap-2 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                          >
                            <CiHome />
                            My Dashboard
                          </p>
                          <p
                            className={`text-[12px]  min-[451px]:text-[16px] w-full py-1 min-[451px]:py-2 px-1.5 min-[451px]:px-2.5 flex justify-start items-center gap-2 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                          >
                            <CiBookmark />
                            Bookmark
                          </p>
                          <p
                            className={`text-[12px]  min-[451px]:text-[16px] w-full py-1 min-[451px]:py-2 px-1.5 min-[451px]:px-2.5 flex w-full justify-start items-center gap-2 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                          >
                            <FiShoppingBag />
                            Enrolled Courses
                          </p>
                          <p
                            className={`text-[12px]  min-[451px]:text-[16px] w-full py-1 min-[451px]:py-2 px-1.5 min-[451px]:px-2.5 flex w-full justify-start items-center gap-2 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                          >
                            <FaRegHeart />
                            Wishlist
                          </p>
                          <p
                            className={`text-[12px]  min-[451px]:text-[16px] w-full py-1 min-[451px]:py-2 px-1.5 min-[451px]:px-2.5 flex w-full justify-start items-center gap-2 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                          >
                            <FaRegStar />
                            Reviews
                          </p>
                          <p
                            className={`text-[12px]  min-[451px]:text-[16px] w-full py-1 min-[451px]:py-2 px-1.5 min-[451px]:px-2.5 flex w-full justify-start items-center gap-2 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                          >
                            <FaListUl />
                            My Quiz Attempts
                          </p>
                          <p
                            className={`text-[12px]  min-[451px]:text-[16px] w-full py-1 min-[451px]:py-2 px-1.5 min-[451px]:px-2.5 flex w-full justify-start items-center gap-2 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                          >
                            <FiClock />
                            Order History
                          </p>
                          <p className="text-[12px]  min-[451px]:text-[16px] w-full py-1 min-[451px]:py-2 px-1.5 min-[451px]:px-2.5 flex w-full justify-start items-center gap-2 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer">
                            <FiMessageSquare />
                            Question &amp; Answer
                          </p>
                        </div>

                        <div className=" px-2 py-2 w-full border-t border-gray-300 ">
                          <p
                            className={` w-full text-[12px]  min-[451px]:text-[16px] w-full py-1 min-[451px]:py-2 px-1.5 min-[451px]:px-2.5 flex justify-start items-center gap-2 capitalize  transition duration-300 rounded hover:text-blue-600  hover:bg-zinc-200 cursor-pointer`}
                          >
                            <BiBookOpen />
                            Getting Started
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="w-27.5 hidden min-[1030px]:flex justify-center items-center ">
                <div className=" bg-blue-600 cursor-pointer  p-1 w-full bg-linear-to-r from-purple-400 to-blue-500 rounded-4xl ">
                  <Marquee
                    direction="left"
                    innerClassName="[--duration:3s]"
                    pauseOnHover={false}
                    fade={false}
                    className="bg-white w-full py-2 font-semibold rounded-4xl"
                  >
                    Enroll Now
                  </Marquee>
                </div>
              </div>

              <div className="min-[1030px]:hidden  flex justify-center  self-stretch ">
                <div className="flex justify-center items-center">
                  <FaBars
                    onClick={() => setIsOpenBars(!isOpenBars)}
                    className="  text-[16px]  text-black    min-[351px]:text-[25px]  cursor-pointer hover:text-blue-600"
                  />
                </div>
              </div>

              {
                <>
                  <div
                    onClick={() => setIsOpenBars(false)} // إغلاق القائمة عند الضغط على الخلفية
                    className={`  fixed inset-0 min-h-[100vh]   bg-neutral-800/85 ${isOpenBars ? "opacity-100 visible " : "opacity-0 hidden"}  w-full  transition-transform duration-500 ease-in-out`}
                  />
                  <div
                    className={`z-[99999999]! fixed min-h-[100vh] inset-0 w-0  bg-red-200  min-[1030px]:hidden transition-transform duration-500 ease-in-out `}
                  >
                    <div
                      className={`absolute top-0 left-0 h-full bg-white shadow-xl  transition-all duration-500 ease-in-out w-50 min-[351px]:w-55 min-[400px]:w-61 min-[451px]:w-70 min-[551px]:w-85  min-[750px]:w-125 px-4 min-[451px]:px-5 min-[750px]:px-9 py-2 min-[451px]:py-3 min-[750px]:py-5 overflow-y-auto
                     ${isOpenBars ? "translate-x-0" : "-translate-x-full"}`}
                    >
                      <div className=" w-full flex flex-col justify-center items-start gap-3 min-[451px]:gap-5 py-3 min-[451px]:py-5 border-b border-gray-200 ">
                        <div className="flex justify-between items-center  w-full">
                          <Link
                            to="/"
                            onClick={() => handleScrollTo()}
                            className="self-center w-[72px]   min-[451px]:w-[100px]  min-[750px]:w-[130px] "
                          >
                            <img
                              src={logo}
                              onClick={() => navigate("/")}
                              alt="logo"
                              className="w-full"
                            />
                          </Link>
                          <IoClose
                            className={`text-[15px]!  min-[451px]:text-[25px]!   min-[750px]:text-[30px]!  cursor-pointer  ${isOpenBars ? " opacity-100" : " opacity-0"}  transition-transform duration-500 ease-in-out`}
                            onClick={() => setIsOpenBars(!isOpenBars)}
                          />
                        </div>

                        <p className="w-[85%]  text-[12px]  min-[451px]:text-[16px]  min-[750px]:text-[18px]">
                          Histudy is a education website template. You can
                          customize all.
                        </p>

                        <div className="flex flex-col justify-center items-start gap-1 ">
                          <div className="flex justify-start items-center  text-[12px] min-[451px]:text-[14px]  min-[750px]:text-[16px] gap-1  min-[451px]:gap-2  w-full hover:text-blue-600 transition duration-300 cursor-pointer ">
                            <MdOutlineEmail />
                            example@gmail.com
                          </div>
                          <div className="flex justify-start items-center text-[12px] min-[451px]:text-[14px]  min-[750px]:text-[16px] gap-1  min-[451px]:gap-2  w-full  hover:text-blue-600 transition duration-300 cursor-pointer">
                            <FiPhone />
                            (302) 555-0107
                          </div>
                        </div>
                      </div>

                      <div className=" w-full flex flex-col justify-center items-start gap-2 py-3 min-[451px]:py-5  ">
                        {/* 1 */}
                        <div className="relative w-full border-b border-gray-300 pt-1 pb-2">
                          <div
                            onClick={() => toggleMenu("homeMobile")}
                            className="flex justify-between items-center hover:text-blue-600 transition duration-300 cursor-pointer"
                          >
                            <span className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px] font-semibold">
                              Home
                            </span>
                            {menus.homeMobile ? (
                              <FaMinus className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold" />
                            ) : (
                              <FaPlus className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold" />
                            )}
                          </div>
                          <div
                            className={` max-h-0 overflow-hidden w-[96%] ms-auto top-full inset-s-0 ${menus.homeMobile ? "overflow-y-auto max-h-327.5" : "max-h-0 overflow-hidden"}   transition-all duration-1000`}
                          >
                            <div className="flex flex-col justify-center items-center gap-2 w-full py-2 ">
                              <p className=" hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px] min-[451px]:text-[15px] min-[750px]:text-[17px] cursor-pointer ">
                                Home Demo
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Marketplace
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                kindergarten
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                University Classic
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Home Elegant
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Gym Coaching
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Online School
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                University Status
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Home Technology
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Instructor Portfolio
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Language Academpy
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Single Course
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Online Course
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Classic Lms
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Course School
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Udemy Affiliate
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Online Academy
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Instructor Coaches
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Modern University
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Multilingual
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Art Design School
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Wishlist
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Coaching
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Health Institute
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Life Coach
                              </p>
                              <p className="hover:text-blue-600 transition duration-300  pb-1 pt-1 w-full font-semibold text-[11px] min-[451px]:text-[15px] min-[750px]:text-[17px] cursor-pointer ">
                                Islamic Center
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* 2 */}
                        <div className="relative w-full border-b border-gray-300 pt-0 pb-2">
                          <div
                            onClick={() => toggleMenu("coursesMobile")}
                            className="flex justify-between items-center hover:text-blue-600 transition duration-300 cursor-pointer"
                          >
                            <span className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold">
                              Courses
                            </span>
                            {menus.coursesMobile ? (
                              <FaMinus className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold" />
                            ) : (
                              <FaPlus className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold" />
                            )}
                          </div>
                          <div
                            className={`  max-h-0 overflow-hidden w-[96%] ms-auto top-full inset-s-0 ${menus.coursesMobile ? "overflow-y-auto max-h-325" : "max-h-0 overflow-hidden"}   transition-all duration-600`}
                          >
                            <div className="mt-3  min-[451px]:mt-4 h-full bg-zinc-800 text-white rounded-md flex flex-col justify-center items-start gap-3 w-full px-3 min-[451px]:px-6 py-3 min-[451px]:py-6">
                              <b className="text-[14px]  min-[451px]:text-[16px] min-[750px]:text-[18px] ">
                                Developer hub
                              </b>
                              <p className="w-[90%] text-[12px]  min-[451px]:text-[15px] min-[750px]:text-[18px] ">
                                Start building fast, with code samples, key
                                resources and more.
                              </p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2 w-full py-2 ">
                              <p className=" uppercase text-neutral-400 transition duration-300 border-b border-neutral-300 pb-2 min-[451px]:pb-3 pt-1 min-[451px]:pt-2 w-full font-semibold text-[11px] min-[451px]:text-[14px] min-[750px]:text-[15px]   cursor-pointer ">
                                Course Layout
                              </p>
                              <p className=" hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Filter One Toggle
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Filter One Open
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Filter Two Toggle
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Filter Two Open
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Course With Tab
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Course With Tab Two
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Course Card Two
                              </p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2 w-full py-2 ">
                              <p className=" uppercase text-neutral-400 transition duration-300 border-b border-neutral-300  pb-2 min-[451px]:pb-3 pt-1 min-[451px]:pt-2  w-full font-semibold   text-[11px]   min-[451px]:text-[14px] min-[750px]:text-[15px]     cursor-pointer ">
                                Course Layout
                              </p>
                              <p className=" hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Course Card Three
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Course Masonry
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Course With Sidebar
                              </p>
                              <Link
                                to={"/courseDetails/12"}
                                className="w-full"
                                onClick={() =>
                                  handleScrollTo3(setIsOpenBars, isOpenBars)
                                }
                              >
                                <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                  Course Details
                                </p>
                              </Link>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Course Details Two
                              </p>
                              <p className="flex justify-start items-center gap-2   hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Course Lesson
                                <span className="text-[9px]  min-[451px]:text-[11px] bg-linear-90 from-fuchsia-300 to-indigo-300  px-1.5 min-[451px]:px-3  py-0.5 flex justify-center items-center text-white cursor-pointer rounded-full">
                                  New
                                </span>
                              </p>
                              <p className="flex justify-start items-center gap-1 min-[451px]:gap-2 hover:text-blue-600 transition duration-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Create Course
                                <span className="  text-[9px]  min-[451px]:text-[11px]  bg-linear-90 from-fuchsia-300 to-indigo-300  px-1.5 min-[451px]:px-3  py-0.5 flex justify-center items-center text-white cursor-pointer rounded-full">
                                  New
                                </span>
                              </p>
                            </div>
                            <div className="mt-1  min-[451px]:mt-4 h-full bg-slate-100 rounded flex flex-col justify-center items-start gap-1.5 min-[451px]:gap-3 w-full px-2 min-[451px]:px-6 py-2 min-[451px]:py-6">
                              <p className=" flex justify-start items-center gap-2 hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                <FiFolderMinus className=" text-gray-400 ms-2" />
                                <span className="text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px] ">
                                  Course Card Three
                                </span>
                              </p>
                              <p className=" flex justify-start items-center gap-2 hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                <FiFolderMinus className=" text-gray-400 ms-2" />
                                <span className="text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px] ">
                                  For Open Source
                                </span>
                              </p>
                              <p className=" flex justify-start items-center gap-2 hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                <FiFolderMinus className=" text-gray-400 ms-2" />
                                <span className="text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px] ">
                                  API Status
                                </span>
                              </p>
                              <p className=" flex justify-start items-center gap-2 hover:text-blue-600 transition duration-300   pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                <FiFolderMinus className=" text-gray-400 ms-2" />
                                <span className="text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px] ">
                                  Support
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* 3 */}
                        <div className="relative w-full border-b border-gray-300 pt-0 pb-2">
                          <div
                            onClick={() => toggleMenu("dashboardMobile")}
                            className="flex justify-between items-center hover:text-blue-600 transition duration-300 cursor-pointer"
                          >
                            <span className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold">
                              Dashboard
                            </span>
                            {menus.dashboardMobile ? (
                              <FaMinus className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold" />
                            ) : (
                              <FaPlus className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold" />
                            )}
                          </div>
                          <div
                            className={`  max-h-0 overflow-hidden w-[96%] ms-auto top-full inset-s-0 ${menus.dashboardMobile ? "overflow-y-auto max-h-325" : "max-h-0 overflow-hidden"}   transition-all duration-600`}
                          >
                            <div className="flex flex-col  justify-between items-center gap-2 w-full pt-2 pb-1 ">
                              <div className="relative w-full border-b border-gray-300 pt-0 pb-4">
                                <div
                                  onClick={() =>
                                    toggleMenu("instructorDashboardMobile")
                                  }
                                  className=" w-full flex justify-between items-center hover:text-blue-600 transition duration-300 cursor-pointer  pt-2 pb-0"
                                >
                                  <span className="text-[11px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold">
                                    Instructor Dashboard
                                  </span>
                                  {menus.instructorDashboardMobile ? (
                                    <FaMinus className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold" />
                                  ) : (
                                    <FaPlus className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold" />
                                  )}
                                </div>
                                <div
                                  className={` max-h-0 overflow-hidden w-[96%] ms-auto top-full inset-s-0 ${menus.instructorDashboardMobile ? "overflow-y-auto max-h-325" : "max-h-0 overflow-hidden"}   transition-all duration-1000`}
                                >
                                  <div className="flex flex-col justify-center items-center gap-2 w-full pt-2 ">
                                    <p className=" hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      Dashboard
                                    </p>
                                    <Link
                                      to={"/profile"}
                                      className="w-full"
                                      onClick={() =>
                                        handleScrollTo3(
                                          setIsOpenBars,
                                          isOpenBars,
                                        )
                                      }
                                    >
                                      <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                        Profile
                                      </p>
                                    </Link>
                                    <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      Enrolled Courses
                                    </p>
                                    <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      Wishlist
                                    </p>
                                    <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      Reviews
                                    </p>
                                    <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      My Quiz Attempts
                                    </p>
                                    <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      Order History
                                    </p>
                                    <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      My Course
                                    </p>
                                    <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      Announcements
                                    </p>
                                    <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      Quiz Attempts
                                    </p>
                                    <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      Assignments
                                    </p>
                                    <p className="hover:text-blue-600 transition duration-300  pb-0 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      Settings
                                    </p>
                                  </div>
                                </div>
                              </div>

                              <div className="relative w-full  pt-0 pb-1">
                                <div
                                  onClick={() =>
                                    toggleMenu("studentDashboardMobile")
                                  }
                                  className=" w-full flex justify-between items-center hover:text-blue-600 transition duration-300 cursor-pointer  pt-2 pb-0"
                                >
                                  <span className="text-[11px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold">
                                    Student Dashboard
                                  </span>
                                  {menus.studentDashboardMobile ? (
                                    <FaMinus className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold" />
                                  ) : (
                                    <FaPlus className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold" />
                                  )}
                                </div>
                                <div
                                  className={` max-h-0 overflow-hidden w-[96%] ms-auto top-full inset-s-0 ${menus.studentDashboardMobile ? "overflow-y-auto max-h-325" : "max-h-0 overflow-hidden"}   transition-all duration-1000`}
                                >
                                  <div className="flex flex-col justify-center items-center gap-2 w-full pt-2 ">
                                    <p className=" hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      Dashboard
                                    </p>
                                    <Link
                                      to={"/profile"}
                                      className="w-full"
                                      onClick={() =>
                                        handleScrollTo3(
                                          setIsOpenBars,
                                          isOpenBars,
                                        )
                                      }
                                    >
                                      <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                        Profile
                                      </p>
                                    </Link>
                                    <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      Enrolled Courses
                                    </p>
                                    <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      Wishlist
                                    </p>
                                    <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      Reviews
                                    </p>
                                    <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      My Quiz Attempts
                                    </p>
                                    <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      Order History
                                    </p>

                                    <p className="hover:text-blue-600 transition duration-300  pb-0 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                      Settings
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* 4 */}
                        <div className="relative w-full border-b border-gray-300 pt-0 pb-2">
                          <div
                            onClick={() => toggleMenu("pagesMobile")}
                            className="flex justify-between items-center hover:text-blue-600 transition duration-300 cursor-pointer"
                          >
                            <span className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold">
                              Pages
                            </span>
                            {menus.pagesMobile ? (
                              <FaMinus className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold" />
                            ) : (
                              <FaPlus className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold" />
                            )}
                          </div>
                          <div
                            className={`  max-h-0 overflow-hidden w-[96%] ms-auto top-full inset-s-0 ${menus.pagesMobile ? "overflow-y-auto max-h-475" : "max-h-0 overflow-hidden"}   transition-all duration-600`}
                          >
                            <div className="flex flex-col justify-center items-center gap-2 w-full py-2 ">
                              <p className=" uppercase text-neutral-400 transition duration-300 border-b border-neutral-300  pb-2 min-[451px]:pb-3 pt-1 min-[451px]:pt-2  w-full font-semibold   text-[11px]   min-[451px]:text-[14px] min-[750px]:text-[15px]     cursor-pointer ">
                                Get Started
                              </p>
                              <p className=" hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                About Us
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                About Us 02
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Event Grid
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Event List
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Event Sidebar
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Event Details
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[12px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Academy Gallery
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Admission Guide
                              </p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2 w-full py-2 ">
                              <p className=" uppercase text-neutral-400 transition duration-300 border-b border-neutral-300  pb-2 min-[451px]:pb-3 pt-1 min-[451px]:pt-2  w-full font-semibold   text-[11px]   min-[451px]:text-[14px] min-[750px]:text-[15px]     cursor-pointer ">
                                Get Started
                              </p>
                              <Link
                                to={"/profile"}
                                className="w-full"
                                onClick={() =>
                                  handleScrollTo3(setIsOpenBars, isOpenBars)
                                }
                              >
                                <p className=" hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                  Profile
                                </p>
                              </Link>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Contact Us
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Become a Teacher
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Instructor
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                FAQS
                              </p>
                              <p className="   hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Privacy Policy
                              </p>
                              <p className="   hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                404 Page
                              </p>
                              <p className=" hover:text-blue-600 transition duration-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Maintenance
                              </p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2 w-full py-2 ">
                              <p className=" uppercase text-neutral-400 transition duration-300 border-b border-neutral-300  pb-2 min-[451px]:pb-3 pt-1 min-[451px]:pt-2  w-full font-semibold   text-[11px]   min-[451px]:text-[14px] min-[750px]:text-[15px]   cursor-pointer ">
                                Shop Pages
                              </p>
                              <Link
                                to={"/shope"}
                                className="w-full"
                                onClick={() =>
                                  handleScrollTo3(setIsOpenBars, isOpenBars)
                                }
                              >
                                <p className="flex justify-start items-center gap-1 min-[451px]:gap-2  hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                  Shop
                                  <span className=" text-[9px]  min-[451px]:text-[11px]  bg-linear-90 from-fuchsia-300 to-indigo-300  px-1.5 min-[451px]:px-3  py-0.5 flex justify-center items-center text-white cursor-pointer rounded-full">
                                    Sale Anything
                                  </span>
                                </p>
                              </Link>
                              <Link
                                className="w-full"
                                onClick={() =>
                                  handleScrollTo3(setIsOpenBars, isOpenBars)
                                }
                                to={`/bookDetails/1`}
                              >
                                <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                  Single Product
                                </p>
                              </Link>
                              <Link
                                className="w-full"
                                onClick={() =>
                                  handleScrollTo3(setIsOpenBars, isOpenBars)
                                }
                                to="/cart"
                              >
                                <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                  Cart Page
                                </p>
                              </Link>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Checkout
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Wishlist Page
                              </p>
                              <p className="   hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                My Acount
                              </p>
                              <p className="   hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Login & Register
                              </p>
                              <p className=" hover:text-blue-600 transition duration-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Subscription
                              </p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-0 min-[451px]:gap-1 w-full py-2 ">
                              <div className="relative w-full rounded-md overflow-hidden group ">
                                <img src={category2} className="w-full h-15" />
                                <p className=" hover:text-blue-600  transition duration-300  cursor-pointer absolute top-0 inset-s-0 ps-2 min-[451px]:ps-4 text-[11px]  min-[451px]:text-[14px] min-[750px]:text-[18px]  font-semibold  flex items-center justify-start gap-1  w-full h-full ">
                                  Online Education
                                  <FaChevronRight className="  text-[9px]  min-[451px]:text-[11px]  group-hover:translate-x-2.5  transition duration-500 " />
                                </p>
                              </div>
                              <div className="relative w-full rounded-md overflow-hidden group ">
                                <img src={category1} className="w-full h-15" />
                                <p className=" hover:text-blue-600  transition duration-300  cursor-pointer absolute top-0 inset-s-0 ps-2 min-[451px]:ps-4 text-[11px]  min-[451px]:text-[14px] min-[750px]:text-[18px]  font-semibold  flex items-center justify-start gap-1  w-full h-full ">
                                  language club
                                  <FaChevronRight className="  text-[9px]  min-[451px]:text-[11px]  group-hover:translate-x-2.5  transition duration-500 " />
                                </p>
                              </div>
                              <div className="relative w-full rounded-md overflow-hidden group ">
                                <img src={category4} className="w-full h-15" />
                                <p className=" hover:text-blue-600  transition duration-300  cursor-pointer absolute top-0 inset-s-0 ps-2 min-[451px]:ps-4 text-[11px]  min-[451px]:text-[14px] min-[750px]:text-[18px]  font-semibold  flex items-center justify-start gap-1  w-full h-full ">
                                  university status
                                  <FaChevronRight className="  text-[9px]  min-[451px]:text-[11px]  group-hover:translate-x-2.5  transition duration-500 " />
                                </p>
                              </div>
                              <div className="relative w-full rounded-md overflow-hidden group ">
                                <img src={category1} className="w-full h-15" />
                                <p className=" hover:text-blue-600  transition duration-300  cursor-pointer absolute top-0 inset-s-0 ps-2 min-[451px]:ps-4 text-[11px]  min-[451px]:text-[14px] min-[750px]:text-[18px]  font-semibold  flex items-center justify-start gap-1  w-full h-full ">
                                  course school
                                  <FaChevronRight className="  text-[9px]  min-[451px]:text-[11px]  group-hover:translate-x-2.5  transition duration-500 " />
                                </p>
                              </div>
                              <div className="relative w-full rounded-md overflow-hidden group ">
                                <img src={category9} className="w-full h-15" />
                                <p className=" hover:text-blue-600  transition duration-300  cursor-pointer absolute top-0 inset-s-0 ps-2 min-[451px]:ps-4 text-[11px]  min-[451px]:text-[14px] min-[750px]:text-[18px]  font-semibold  flex items-center justify-start gap-1  w-full h-full ">
                                  academy
                                  <FaChevronRight className="  text-[9px]  min-[451px]:text-[11px]  group-hover:translate-x-2.5  transition duration-500 " />
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* 5 */}
                        <div className="relative w-full border-b border-gray-300 pt-0 pb-2">
                          <div
                            onClick={() => toggleMenu("elementsMobile")}
                            className="flex justify-between items-center hover:text-blue-600 transition duration-300 cursor-pointer"
                          >
                            <span className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold">
                              Elements
                            </span>
                            {menus.elementsMobile ? (
                              <FaMinus className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold" />
                            ) : (
                              <FaPlus className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold" />
                            )}
                          </div>
                          <div
                            className={`max-h-0 overflow-hidden w-[96%] ms-auto top-full inset-s-0 ${menus.elementsMobile ? "overflow-y-auto max-h-475" : "max-h-0 overflow-hidden"}   transition-all duration-600`}
                          >
                            <div className="flex flex-col justify-center items-center gap-2 w-full py-2 ">
                              <p className="flex justify-start items-center gap-2 hover:text-blue-600 transition duration-300 border-b border-neutral-300  pb-2 min-[451px]:pb-3 pt-1 min-[451px]:pt-2  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Style Guide
                                <span className="  text-[9px]  min-[451px]:text-[11px]  bg-linear-90 from-fuchsia-300 to-indigo-300  px-1.5 min-[451px]:px-3  py-0.5 flex justify-center items-center text-white cursor-pointer rounded-full">
                                  Hot
                                </span>
                              </p>
                              <p className=" hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Accordion
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Advance Tab
                              </p>
                              <p className="flex justify-start items-center gap-1 min-[451px]:gap-2 hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                About
                                <span className="  text-[9px]  min-[451px]:text-[11px]  bg-linear-90 from-fuchsia-300 to-indigo-300  px-1.5 min-[451px]:px-3  py-0.5 flex justify-center items-center text-white cursor-pointer rounded-full">
                                  New
                                </span>
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Brand
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Button
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Badge
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Card
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Call To Action
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Counter
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Categories
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Header Style
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Newsletter
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Team
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Social
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                List Style
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Gallery
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Pricing
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Progressbar
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Testimonial
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Service
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Split Area
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Search Style
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Instagram Style
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                & More Coming
                              </p>
                            </div>
                          </div>
                        </div>
                        {/* 6 */}
                        <div className="relative w-full  pt-0 pb-2">
                          <div
                            onClick={() => toggleMenu("blogMobile")}
                            className="flex justify-between items-center hover:text-blue-600 transition duration-300 cursor-pointer"
                          >
                            <span className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold">
                              Blog
                            </span>
                            {menus.blogMobile ? (
                              <FaMinus className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold" />
                            ) : (
                              <FaPlus className="text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]  font-semibold" />
                            )}
                          </div>
                          <div
                            className={`max-h-0 overflow-hidden w-[96%] ms-auto top-full inset-s-0 ${menus.blogMobile ? "overflow-y-auto max-h-475" : "max-h-0 overflow-hidden"}   transition-all duration-600`}
                          >
                            <div className="flex flex-col justify-center items-center gap-2 w-full py-2 ">
                              <p className=" uppercase text-neutral-400 transition duration-300 border-b border-neutral-300  pb-2 min-[451px]:pb-3 pt-1 min-[451px]:pt-2  w-full font-semibold   text-[11px]   min-[451px]:text-[14px] min-[750px]:text-[15px]     cursor-pointer ">
                                Blog Styles
                              </p>
                              <p className=" hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Blog List
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Blog Grid
                              </p>
                              <p className=" hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Blog Grid Minimal
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Blog With Sidebar
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Blog Details
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Post Format Standard
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Post Format Gallery
                              </p>
                            </div>
                            <div className="flex flex-col justify-center items-center gap-2 w-full py-2 ">
                              <p className=" uppercase text-neutral-400 transition duration-300 border-b border-neutral-300  pb-2 min-[451px]:pb-3 pt-1 min-[451px]:pt-2  w-full font-semibold   text-[11px]   min-[451px]:text-[14px] min-[750px]:text-[15px]     cursor-pointer ">
                                Get Started
                              </p>
                              <p className=" hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1 w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Post Format Quote
                              </p>
                              <p className="hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Post Format Audio
                              </p>
                              <p className=" hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Post Format Video
                              </p>
                              <p className="flex justify-start items-center gap-2 hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Media Under Title
                                <span className="  text-[9px]  min-[451px]:text-[11px]  bg-linear-90 from-fuchsia-300 to-indigo-300  px-1.5 min-[451px]:px-3  py-0.5 flex justify-center items-center text-white cursor-pointer rounded-full">
                                  Coming
                                </span>
                              </p>
                              <p className="flex justify-start items-center gap-2 hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Sticky Sidebar
                                <span className="  text-[9px]  min-[451px]:text-[11px]  bg-linear-90 from-fuchsia-300 to-indigo-300  px-1.5 min-[451px]:px-3  py-0.5 flex justify-center items-center text-white cursor-pointer rounded-full">
                                  Coming
                                </span>
                              </p>
                              <p className="flex justify-start items-center gap-2 hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Auto Masonry
                                <span className="  text-[9px]  min-[451px]:text-[11px]  bg-linear-90 from-fuchsia-300 to-indigo-300  px-1.5 min-[451px]:px-3  py-0.5 flex justify-center items-center text-white cursor-pointer rounded-full">
                                  Coming
                                </span>
                              </p>
                              <p className="flex justify-start items-center gap-2  hover:text-blue-600 transition duration-300 border-b border-gray-300 pb-1.5 min-[451px]:pb-3 pt-1  w-full font-semibold text-[11px]  min-[451px]:text-[15px] min-[750px]:text-[17px]  cursor-pointer ">
                                Meta Overlaid
                                <span className="  text-[9px]  min-[451px]:text-[11px]  bg-linear-90 from-fuchsia-300 to-indigo-300  px-1.5 min-[451px]:px-3  py-0.5 flex justify-center items-center border-b  border-gray-300 text-white cursor-pointer rounded-full">
                                  Coming
                                </span>
                              </p>
                            </div>
                            <div className=" w-full py-2 min-[451px]:py-5  ">
                              <img
                                src={mobileCat}
                                className="w-full rounded-xl"
                              />
                            </div>
                          </div>
                        </div>
                        {/* 7 */}
                        <div className=" w-full  py-1 min-[451px]:py-2">
                          <div className="   cursor-pointer p-0.5 min-[451px]:p-1 w-full bg-linear-to-r from-purple-400 to-blue-500 rounded-4xl ">
                            <div className="bg-white w-full py-1 min-[451px]:py-2 text-[12px]  min-[451px]:text-[16px] min-[750px]:text-[18px]   flex justify-center align-center  font-semibold rounded-4xl">
                              Enroll Now
                            </div>
                          </div>
                        </div>
                        {/* 8 */}
                        <div className=" w-full   py-1 min-[451px]:py-2">
                          <p className=" uppercase text-neutral-400 transition duration-300 border-b border-neutral-300 pb-1 min-[451px]:pb-3 pt-1 min-[451px]:pt-2 w-full font-semibold   text-[11px] min-[451px]:text-[15px]   cursor-pointer ">
                            Find With Us
                          </p>
                          <div className="flex justify-start items-center gap-0.5 min-[451px]:gap-2 pt-3 min-[451px]:pt-5 pb-1">
                            <div className=" relative before:absolute before:content-[''] before:bg-blue-600 before:rounded-full before:w-full before:h-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-50 hover:before:scale-100 before:transition-all before:duration-300 before:border-2 before:border-blue-600 before:opacity-0 hover:before:opacity-100 hover:text-white hover:border-transparent before:z-[-1] z-99 text-[11px] min-[451px]:text-[20px] text-gray-400  transition duration-300 rounded-full cursor-pointer py-1.5 min-[451px]:py-3 px-1.5 min-[451px]:px-3 border-2 border-gray-300">
                              <LuFacebook />
                            </div>
                            <div className=" relative before:absolute before:content-[''] before:bg-blue-600 before:rounded-full before:w-full before:h-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-50 hover:before:scale-100 before:transition-all before:duration-300 before:border-2 before:border-blue-600 before:opacity-0 hover:before:opacity-100 hover:text-white hover:border-transparent before:z-[-1] z-99 text-[11px] min-[451px]:text-[20px] text-gray-400  transition duration-300 rounded-full cursor-pointer py-1.5 min-[451px]:py-3 px-1.5 min-[451px]:px-3 border-2 border-gray-300">
                              <SlSocialTwitter />
                            </div>
                            <div className=" relative before:absolute before:content-[''] before:bg-blue-600 before:rounded-full before:w-full before:h-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-50 hover:before:scale-100 before:transition-all before:duration-300 before:border-2 before:border-blue-600 before:opacity-0 hover:before:opacity-100 hover:text-white hover:border-transparent before:z-[-1] z-99 text-[11px] min-[451px]:text-[20px] text-gray-400  transition duration-300 rounded-full cursor-pointer py-1.5 min-[451px]:py-3 px-1.5 min-[451px]:px-3 border-2 border-gray-300">
                              <LuLinkedin />
                            </div>
                            <div className=" relative before:absolute before:content-[''] before:bg-blue-600 before:rounded-full before:w-full before:h-full before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:scale-50 hover:before:scale-100 before:transition-all before:duration-300 before:border-2 before:border-blue-600 before:opacity-0 hover:before:opacity-100 hover:text-white hover:border-transparent before:z-[-1] z-99 text-[11px] min-[451px]:text-[20px] text-gray-400  transition duration-300 rounded-full cursor-pointer py-1.5 min-[451px]:py-3 px-1.5 min-[451px]:px-3 border-2 border-gray-300">
                              <GrInstagram />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
