import "./Footer.css";
import logodark from "../../assets/OnlineCourses/logo.png";
import { FaArrowRight } from "react-icons/fa";
import { LuFacebook } from "react-icons/lu";
import { SlSocialTwitter } from "react-icons/sl";
import { GrInstagram } from "react-icons/gr";
import { LuLinkedin } from "react-icons/lu";

function Footer() {
  return (
    <footer className="footer shadow shadow-2xl border-t border-gray-200 relative left-0 bottom-0 right-0">
      <div className="mx-auto px-2 sm:px-3 md:px-4 lg:px-5">
        <div className="flex flex-col items-center gap-5 min-[500px]:gap-10 w-[92%] mx-auto text-white">
          <div className="footer-top w-full pt-16 pb-14 min-[500px]:pt-20 min-[500px]:pb-16 ">
            <div className="grid grid-cols-1 min-[290px]:grid-cols-2 min-[500px]:grid-cols-12 min-[980px]:grid-cols-13 gap-9 min-[980px]:gap-0">
              <div className="col-span-1 min-[290px]:col-span-2 min-[500px]:col-span-12 min-[659px]:col-span-6 min-[980px]:col-span-6   ">
                <div className="flex flex-col justify-start items-start gap-5 h-full">
                  <img
                    src={logodark}
                    className="w-[100px] min-[400px]:w-[130px] min-[500px]:w-[170px min-[800px]:w-[170px]"
                  />
                  <div className="flex flex-col justify-start items-start gap-8">
                    <p className="text-gray-500 text-sm min-[500px]:text-lg w-[100%]  min-[500px]:w-[95%] min-[980px]:w-[75%] ">
                      We’re always in search for talented and motivated people.
                      Don’t be shy introduce yourself!
                    </p>
                    <div className="hover:translate-y-[-2px] duration-300 transition cursor-pointer  p-1 w-[130px] min-[500px]:w-[200px] bg-linear-to-r from-purple-400 to-blue-500 rounded-4xl ">
                      <div className="relative overflow-hidden group flex justify-center items-center bg-white text-black  w-full p-1.5 min-[500px]:p-3 font-semibold rounded-4xl ">
                        <div className=" flex justify-center items-center gap-0.5 min-[500px]:gap-1.5 -translate-x-2 group-hover:translate-x-0 duration-300 transition">
                          <div className="flex justify-center items-center self-stretch pt-0 min-[451px]:pt-1 flex-1  text-[9px] min-[500px]:text-[13px] min-[600px]:text-[15px] opacity-0 group-hover:opacity-100  .5 transition duration-300">
                            <FaArrowRight className=" " />
                          </div>
                          <span className="text-[11px] min-[500px]:text-[13px] min-[600px]:text-[15px]">
                            Contact With Us
                          </span>
                          <div className="flex justify-center items-center pt-0 min-[451px]:pt-1 flex-1 self-stretch text-[9px] min-[500px]:text-[13px] min-[600px]:text-[15px] opacity-100 group-hover:opacity-0 transition duration-300 ">
                            <FaArrowRight className="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-1 min-[290px]:col-span-1 min-[500px]:col-span-6 min-[980px]:col-span-2  ps-0 min-[980px]:ps-2 ">
                <div className="flex flex-col items-start justify-start gap-3 px-2">
                  <h2 className="text-black font-bold  text-md min-[500px]:text-xl text-nowrap">
                    Useful Links
                  </h2>
                  <div className="flex flex-col items-start justify-start gap-2">
                    <p className="text-sm min-[500px]:text-lg text-neutral-500 viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer ">
                      Marketplace
                    </p>
                    <p className="text-sm min-[500px]:text-lg text-neutral-500 viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer ">
                      kindergarten
                    </p>
                    <p className="text-sm min-[500px]:text-lg text-neutral-500 viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer ">
                      University
                    </p>
                    <p className=" text-sm min-[500px]:text-lg text-neutral-500 viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer ">
                      GYM Coaching
                    </p>
                    <p className="text-sm min-[500px]:text-lg text-neutral-500 viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer ">
                      FAQ
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 min-[290px]:col-span-1 min-[500px]:col-span-6 min-[980px]:col-span-2  ps-0 min-[980px]:ps-2">
                <div className="flex flex-col items-start justify-start gap-3 px-2">
                  <h2 className="text-black font-bold  text-md min-[500px]:text-xl text-nowrap">
                    Our Company
                  </h2>
                  <div className="flex flex-col items-start justify-start gap-2">
                    <p className="text-sm min-[500px]:text-lg text-neutral-500 viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer ">
                      Contact Us
                    </p>
                    <p className=" text-sm min-[500px]:text-lg text-neutral-500 viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer ">
                      Become Teacher
                    </p>
                    <p className="text-sm min-[500px]:text-lg text-neutral-500 viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer ">
                      Blog
                    </p>
                    <p className="text-sm min-[500px]:text-lg text-neutral-500 viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer ">
                      Instructor
                    </p>
                    <p className="text-sm min-[500px]:text-lg text-neutral-500 viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer ">
                      Events
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-span-1 min-[290px]:col-span-2 min-[500px]:col-span-12 min-[659px]:col-span-6 min-[980px]:col-span-3 ps-0 min-[980px]:ps-6  min-[1200px]:ps-1">
                <div className="flex  flex-col items-start justify-start gap-3 px-2">
                  <h2 className="text-black font-bold text-md min-[500px]:text-xl">
                    Get Contact
                  </h2>
                  <div className="flex flex-col items-start justify-start gap-2">
                    <p className="flex flex-col min-[250px]:flex-row min-[980px]:flex-col min-[1200px]:flex-row justify-start gap-1 items-start min-[1200px]:items-center text-sm min-[500px]:text-lg">
                      <span className="font-semibold text-neutral-600">
                        Phone:
                      </span>
                      <span className=" text-neutral-500 viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer  ">
                        (406) 555-0120
                      </span>
                    </p>
                    <p className="flex flex-col min-[250px]:flex-row min-[980px]:flex-col min-[1200px]:flex-row justify-start gap-1 items-start min-[1200px]:items-center text-sm min-[500px]:text-lg">
                      <span className="font-semibold text-neutral-600">
                        E-mail:
                      </span>
                      <span className=" text-neutral-500 viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer text-sm min-[500px]:text-lg">
                        pixcels@example.com
                      </span>
                    </p>
                    <p className="flex flex-col min-[250px]:flex-row min-[980px]:flex-col min-[1200px]:flex-row justify-start gap-1 items-start min-[1200px]:items-center text-sm min-[500px]:text-lg">
                      <span className="font-semibold text-neutral-600">
                        Location:
                      </span>
                      <span className=" text-neutral-500 viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer  ">
                        North America, USA
                      </span>
                    </p>
                  </div>
                  <div className="flex gap-3 min-[500px]:gap-5 justify-start items-center pt-4 text-md min-[500px]:text-lg font-bold text-neutral-500  ">
                    <LuFacebook className="cursor-pointer hover:text-blue-600 duration-300 transition" />
                    <SlSocialTwitter className="cursor-pointer hover:text-blue-600 duration-300 transition" />
                    <GrInstagram className="cursor-pointer hover:text-blue-600 duration-300 transition" />
                    <LuLinkedin className="cursor-pointer hover:text-blue-600 duration-300 transition" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom py-6 flex flex-col min-[1016px]:flex-row justify-between items-center gap-3 w-full border-t border-neutral-300">
            <p className="text-neutral-500 text-center text-sm min-[500px]:text-[16.5px] min-[1016px]:text-[15px] min-[1200px]:text-[16.5px]">
              Copyright © 2026{" "}
              <span className="text-black viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer">
                Pixcels Themes.
              </span>
              All Rights Reserved
            </p>
            <div className="flex flex-wrap justify-center items-center gap-1.5 min-[500px]:gap-3 min-[630px]:gap-0 text-neutral-500 text-sm min-[500px]:text-[16.5px] min-[1016px]:text-[15px]  min-[1200px]:text-[16.5px]">
              <p className="px-4  border-e border-neutral-400  ">
                <span className="viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer">
                  Terms of service
                </span>
              </p>
              <p className="px-4  border-e border-neutral-400  ">
                <span className="viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer">
                  {" "}
                  Privacy policy
                </span>
              </p>
              <p className="px-4  border-e border-neutral-400  ">
                <span className="viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer">
                  {" "}
                  Subscription
                </span>
              </p>
              <p className="ps-4 ">
                <span className="viewProfile relative hover:text-blue-600 duration-300 transition cursor-pointer">
                  {" "}
                  Login & Register
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
