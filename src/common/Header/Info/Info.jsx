import "./Info.css";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { LuPhoneCall } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import hand from "../../../assets/OnlineCourses/hand-emojji.svg";
import en from "../../../assets/OnlineCourses/en-us.png";
import fr from "../../../assets/OnlineCourses/fr.png";
import de from "../../../assets/OnlineCourses/de.png";
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

function Info({ isScroll }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("en");
  const [chevron, setChevron] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [selectedLang1, setSelectedLang1] = useState("USD");
  const [chevron1, setChevron1] = useState(false);
  const [isClose, setIsClose] = useState(false);
  return (
    <section
      className={` ${isScroll ? "hidden" : "block"}  info relative w-full z-9999 bg-gray-700 py-1.5 min-[351px]:py-2  text-gray-300 transition-all duration-300 ${isClose ? "hidden" : "block"}`}
    >
      <div className=" mx-auto px-2 sm:px-2 md:px-3  lg:px-5 ">
        <div className="flex justify-between items-center  ">
          {/* 1 */}
          <div className="hidden min-[1200px]:flex justify-between items-center gap-3 text-[14px] ">
            <div className="flex justify-center items-center gap-1 cursor-pointer hover:text-white transition duration-300">
              <FaInstagram />
              <span>100k Followers</span>
            </div>
            <div className="flex justify-center items-center gap-1 cursor-pointer hover:text-white transition duration-300">
              <FaFacebookSquare />
              <span>500k Followers</span>
            </div>
            <div className="flex justify-center items-center gap-1 cursor-pointer hover:text-white transition duration-300">
              <LuPhoneCall />
              <span>+1-202-555-0174</span>
            </div>
          </div>

          {/* 2 */}
          <div className="flex justify-center items-center gap-2">
            <span className="bg-blue-600 text-sm px-4 py-1 rounded-4xl text-[12px]  min-[351px]:text-[16px]">
              Hot
            </span>
            <img
              src={hand}
              width={25}
              alt="hand"
              className="hidden min-[440px]:block"
            />
            <p className="text-sm hover:text-white transition duration-300 cursor-pointer hidden min-[440px]:block">
              Intro price. Get Histudy for Big Sale -95% off.
            </p>
          </div>

          {/* 3 */}
          <div className="hidden min-[990px]:flex items-center justify-center">
            <div className="hidden min-[1200px]:flex  items-center gap-2 justify-center pe-3  border-e border-gray-300">
              <div className="p-1 text-sm hover:bg-gray-300  transition duration-300 rounded-full cursor-pointer hover:text-white">
                <FaFacebookF />
              </div>
              <div className="p-1 text-sm hover:bg-gray-300  transition duration-300 rounded-full cursor-pointer hover:text-white">
                <FaTwitter />
              </div>
              <div className="p-1 text-sm hover:bg-gray-300  transition duration-300 rounded-full cursor-pointer hover:text-white">
                <FaLinkedinIn />
              </div>
              <div className="p-1 text-sm hover:bg-gray-300  transition duration-300 rounded-full cursor-pointer hover:text-white">
                <FaInstagram />
              </div>
            </div>
            <div className="relative flex  items-center gap-2 justify-center ps-3 cursor-pointer hover:text-white transition duration-300">
              <div
                onMouseEnter={() => {
                  setIsOpen(true);
                  setChevron(true);
                }}
                onMouseLeave={() => {
                  setIsOpen(false);
                  setChevron(false);
                }}
                className="flex justify-start items-center gap-2 text-sm  w-27.5"
              >
                {selectedLang == "en" ? (
                  <>
                    <img src={en} width={25} alt="flag" />
                    <span>English</span>
                  </>
                ) : selectedLang == "fr" ? (
                  <>
                    <img src={fr} width={25} alt="flag" />
                    <span>France</span>
                  </>
                ) : (
                  <>
                    <img src={de} width={25} alt="flag" />
                    <span>Deutsch</span>
                  </>
                )}
                {chevron ? <FaChevronUp /> : <FaChevronDown />}

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        scale: 0.9,
                        overflow: "hidden",
                      }}
                      animate={{ height: "auto", opacity: 1, scale: 1 }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        overflow: "hidden",
                        scale: 0.9,
                      }}
                      transition={{ duration: 0.3 }}
                      className="dropDown-lang z-9999 rounded-br-md rounded-bl-md overflow-hidden  w-27.5 shadow text-black bg-white absolute top-[159%] inset-s-0"
                    >
                      <div
                        onClick={() => {
                          setSelectedLang("fr");
                          setIsOpen(false);
                        }}
                        className="flex justify-start items-center gap-2 py-2 px-3 hover:bg-gray-300 transition duration-300"
                      >
                        <img src={fr} width={25} alt="" />
                        <span>France</span>
                      </div>
                      <div
                        onClick={() => {
                          setSelectedLang("de");
                          setIsOpen(false);
                        }}
                        className="flex justify-start items-center gap-2 py-2 px-3  hover:bg-gray-300 transition duration-300"
                      >
                        <img src={de} width={25} alt="" />
                        <span>Deutsch</span>
                      </div>
                      <div
                        onClick={() => {
                          setSelectedLang("en");
                          setIsOpen(false);
                        }}
                        className="flex justify-start items-center gap-2 py-2 px-3  hover:bg-gray-300 transition duration-300"
                      >
                        <img src={en} width={25} alt="" />
                        <span>English</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div
                onMouseEnter={() => {
                  setIsOpen1(true);
                  setChevron1(true);
                }}
                onMouseLeave={() => {
                  setIsOpen1(false);
                  setChevron1(false);
                }}
                className="flex justify-start items-center gap-2 text-sm  w-auto"
              >
                {selectedLang1 == "USD" ? (
                  <span>USD</span>
                ) : selectedLang1 == "GBP" ? (
                  <span>GBP</span>
                ) : (
                  <span>EUR</span>
                )}
                {chevron1 ? <FaChevronUp /> : <FaChevronDown />}

                <AnimatePresence>
                  {isOpen1 && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                        scale: 0.9,
                        overflow: "hidden",
                      }}
                      animate={{ height: "auto", opacity: 1, scale: 1 }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        overflow: "hidden",
                        scale: 0.9,
                      }}
                      transition={{ duration: 0.3 }}
                      className="dropDown-lang z-9999 rounded-br-md rounded-bl-md overflow-hidden  w-27.5 shadow text-black bg-white absolute top-[159%] inset-e-0"
                    >
                      <div
                        onClick={() => {
                          setSelectedLang1("EUR");
                          setIsOpen1(false);
                        }}
                        className="flex justify-start items-center gap-2 py-2 px-3 hover:bg-gray-300 transition duration-300"
                      >
                        <span>EUR</span>
                      </div>
                      <div
                        onClick={() => {
                          setSelectedLang1("GBP");
                          setIsOpen1(false);
                        }}
                        className="flex justify-start items-center gap-2 py-2 px-3  hover:bg-gray-300 transition duration-300"
                      >
                        <span>GBP</span>
                      </div>
                      <div
                        onClick={() => {
                          setSelectedLang1("USD");
                          setIsOpen1(false);
                        }}
                        className="flex justify-start items-center gap-2 py-2 px-3  hover:bg-gray-300 transition duration-300"
                      >
                        <span>USD</span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
          {/* 4 */}
          <IoClose
            onClick={() => setIsClose(true)}
            className="block min-[990px]:hidden cursor-pointer text-[25px] min-[351px]:text-[30px] hover:text-white transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Info;
