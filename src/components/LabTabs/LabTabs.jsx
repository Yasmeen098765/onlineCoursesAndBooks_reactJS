import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import client1 from "../../assets/OnlineCourses/client-01.png";
import client2 from "../../assets/OnlineCourses/client-02.png";
import TextField from "@mui/material/TextField";

import { FaArrowRight, FaStar } from "react-icons/fa";
import { useMediaQuery, useTheme } from "@mui/material";

export default function LabTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // < 600px
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md")); // 600-900px

  // تحديد عدد الصفوف حسب حجم الشاشة
  const getRows = () => {
    if (isMobile) return 2;
    if (isTablet) return 3;
    return 4; // Desktop
  };

  return (
    <div className=" max-w-xs min-[300px]:max-w-4xl mx-auto my-10 min-[350px]:my-16 min-[600px]:my-20">
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="tabs example"
            centered
            className="flex gap-2 "
          >
            <Tab
              label="Description"
              className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              sx={{
                fontSize: "10px",
                "&.Mui-selected": {
                  color: "#2563eb",
                  fontWeight: 350,
                },
                "@media (min-width: 300px)": {
                  fontSize: "12px",
                },
                "@media (min-width: 350px)": {
                  fontSize: "13px",
                },
                "@media (min-width: 500px)": {
                  fontSize: "16px",
                },
              }}
            />
            <Tab
              label="Reviews"
              className="px-4 py-2 text-gray-600 hover:text-blue-600 transition-colors"
              sx={{
                fontSize: "10px",
                "&.Mui-selected": {
                  color: "#2563eb",
                  fontWeight: 350,
                },
                "@media (min-width: 300px)": {
                  fontSize: "12px",
                },
                "@media (min-width: 350px)": {
                  fontSize: "13px",
                },
                "@media (min-width: 500px)": {
                  fontSize: "16px",
                },
              }}
            />
          </Tabs>
        </Box>

        {/* عرض المحتوى حسب التبويب النشط */}
        <div className="mt-1.5 min-[450px]:mt-5 ">
          {value === 0 && (
            <div className="flex flex-col items-center justify-center gap-5 text-gray-500 text-xs min-[350px]:text-base">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Ut enim ad minim
                veniam, quis nostrud.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore.
              </p>
            </div>
          )}
          {value === 1 && (
            <div className="flex flex-col items-center justify-center gap-5 ">
              <div className="reviewsUsers">
                <div className="flex flex-col min-[450px]:flex-row gap-3 min-[450px]:gap-6 px-3 min-[450px]:px-0 pt-5 pb-6 border-b border-gray-300">
                  <img
                    src={client1}
                    className=" text-[14px] w-[45px] h-[45px] min-[450px]:w-[70px] min-[450px]:h-[70px] rounded-full border-gray-300 border-2 p-0.5 "
                  />
                  <div className="flex flex-col  gap-3">
                    <p className="pro-title text-md min-[450px]:text-2xl  font-bold hover:text-blue-600 transition duration-300 cursor-pointer">
                      Cameron Williamson
                    </p>
                    <p className="pro-author text-gray-400 font-semibold text-xs min-[450px]:text-md ">
                      Nov 23, 2018 at 12:23 pm
                    </p>
                    <div className="stars text-orange-400 flex gap-0.5 min-[450px]:gap-1 text-xs min-[450px]:text-base">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-gray-400 font-semibold text-xs min-[450px]:text-[14px] min-[600px]:text-lg ">
                      Duis hendrerit velit scelerisque felis tempus, id porta
                      libero venenatis. Nulla facilisi. Phasellus viverra magna
                      commodo dui lacinia tempus. Donec malesuada nunc non dui
                      posuere, fringilla vestibulum urna mollis. Integer
                      condimentum ac sapien quis maximus.
                    </p>
                  </div>
                </div>
                <div className="flex flex-col min-[450px]:flex-row gap-3 min-[450px]:gap-6 px-3 min-[450px]:px-0 pt-5 pb-6 border-b border-gray-300">
                  <img
                    src={client2}
                    className=" text-[14px] w-[45px] h-[45px] min-[450px]:w-[70px] min-[450px]:h-[70px] rounded-full border-gray-300 border-2 p-0.5 "
                  />
                  <div className="flex flex-col  gap-3">
                    <p className="pro-title text-md min-[450px]:text-2xl  font-bold hover:text-blue-600 transition duration-300 cursor-pointer">
                      Rafin Shuvo
                    </p>
                    <p className="pro-author text-gray-400 font-semibold text-xs min-[450px]:text-md ">
                      Nov 23, 2018 at 12:23 pm
                    </p>
                    <div className="stars text-orange-400 flex gap-0.5 min-[450px]:gap-1 text-xs min-[450px]:text-base">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-gray-400 font-semibold text-xs min-[450px]:text-[14px] min-[600px]:text-lg ">
                      Duis hendrerit velit scelerisque felis tempus, id porta
                      libero venenatis. Nulla facilisi. Phasellus viverra magna
                      commodo dui lacinia tempus. Donec malesuada nunc non dui
                      posuere, fringilla vestibulum urna mollis. Integer
                      condimentum ac sapien quis maximus.
                    </p>
                  </div>
                </div>
                <div className="mt-8 min-[450px]:mt-10 shadow bg-white rounded-lg p-4 min-[450px]:p-8 flex flex-col gap-3 ">
                  <p className="pro-title text-md min-[450px]:text-2xl min-[600px]:text-4xl font-bold ">
                    Add Review
                  </p>
                  <p className="text-gray-400 font-semibold text-xs min-[450px]:text-[14px] min-[600px]:text-lg ">
                    Your email address will not be published. Required fields
                    are marked *
                  </p>
                  <div className="flex gap-1 min-[450px]:gap-3 items-center">
                    <p className="pro-author  font-semibold text-xs min-[450px]:text-lg">
                      Your Rating
                    </p>
                    <div className="stars text-orange-400 flex gap-0.5 min-[350px]:gap-1 text-xs min-[450px]:text-base ">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                  </div>
                  <div className="grid  grid-cols-3 gap-1.5 min-[450px]:gap-3  w-full">
                    <TextField
                      id="Name"
                      type="text"
                      label="Your Name"
                      variant="standard"
                      className="col-span-3  min-[900px]:col-span-1 "
                      sx={{
                        backgroundColor: "white",
                        padding: "2px 2px",
                        borderRadius: "4px",
                        "& .MuiInputBase-input": {
                          fontSize: "11px",
                          padding: "6px 0",
                          "@media (min-width: 450px)": {
                            fontSize: "16px",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: "11px",
                          color: "#6b7280",
                          "@media (min-width: 450px)": {
                            fontSize: "16px",
                          },
                        },
                      }}
                    />
                    <TextField
                      id="Email"
                      type="email"
                      label="Your Email"
                      variant="standard"
                      className="col-span-3  min-[900px]:col-span-1 "
                      sx={{
                        backgroundColor: "white",
                        padding: "2px 2px",
                        borderRadius: "4px",
                        "& .MuiInputBase-input": {
                          fontSize: "11px",
                          padding: "6px 0",
                          "@media (min-width: 450px)": {
                            fontSize: "16px",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: "11px",
                          color: "#6b7280",
                          "@media (min-width: 450px)": {
                            fontSize: "16px",
                          },
                        },
                      }}
                    />
                    <TextField
                      id="Website"
                      type="text"
                      label="Your Website"
                      variant="standard"
                      className="col-span-3  min-[900px]:col-span-1 "
                      sx={{
                        backgroundColor: "white",
                        padding: "2px 2px",
                        borderRadius: "4px",
                        "& .MuiInputBase-input": {
                          fontSize: "11px",
                          padding: "6px 0",
                          "@media (min-width: 450px)": {
                            fontSize: "16px",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: "11px",
                          color: "#6b7280",
                          "@media (min-width: 450px)": {
                            fontSize: "16px",
                          },
                        },
                      }}
                    />
                    <TextField
                      id="Reply"
                      label="Leave a Reply"
                      variant="standard"
                      multiline // هالسطر يخليه textarea
                      rows={getRows()} // عدد الصفوف المرئية
                      className="col-span-3 "
                      sx={{
                        backgroundColor: "white",
                        padding: "2px 2px",
                        borderRadius: "4px",
                        "& .MuiInputBase-input": {
                          fontSize: "11px",
                          padding: "6px 0", // زيد padding عشان يريح العين
                          "@media (min-width: 450px)": {
                            fontSize: "16px",
                          },
                        },
                        "& .MuiInputLabel-root": {
                          fontSize: "11px",
                          "@media (min-width: 450px)": {
                            fontSize: "16px",
                          },
                        },
                      }}
                    />
                  </div>
                  <div className="flex items-start justify-start gap-0.5 min-[450px]:gap-1 my-1.5 min-[450px]:my-3 ">
                    <input
                      type="checkbox"
                      id="emailcheck"
                      className="h-2 w-2  min-[450px]:h-4 min-[450px]:w-4 mt-1 min-[450px]:mt-2 min-[819px]:mt-1.5 "
                    />
                    <label
                      className="cursor-pointer text-gray-500 text-xs min-[450px]:text-lg"
                      htmlFor="emailcheck"
                    >
                      Save my name, email, and website in this browser for the
                      next time I comment.
                    </label>
                  </div>

                  <button className="group text-[9px] min-[350px]:text-[13px] min-[600px]:text-[17px]  transition duration-300  btn5 w-[105px] min-[350px]:w-[140px] min-[600px]:w-[170px]  px-1.5 min-[600px]:px-3  py-2.5! min-[350px]:py-3!  min-[400px]:py-3! min-[1200px]:py-4!  text-white cursor-pointer">
                    <div className=" flex justify-center items-center gap-2 text-center w-full transition duration-300 -translate-x-2 group-hover:translate-x-2">
                      <div className="flex justify-center items-center self-stretch pt-0 min-[451px]:pt-1 flex-1  text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px] opacity-0 text-white  transition duration-300">
                        <FaArrowRight className=" " />
                      </div>
                      <span className="text-nowrap ">Post Comment</span>
                      <div className="flex justify-center items-center pt-0 min-[451px]:pt-1 flex-1 self-stretch text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px] opacity-100 transition duration-300 ">
                        <FaArrowRight className="" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </Box>
    </div>
  );
}
