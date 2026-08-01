import "./AcordionCourseDetails.css";
import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { FaRegCirclePlay } from "react-icons/fa6";
import Typography from "@mui/material/Typography";
import { FaRegFileAlt } from "react-icons/fa";
import { IoEyeOutline, IoLockClosedOutline } from "react-icons/io5";

//start Accordion
const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&::before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{
          fontSize: "0.7rem",
          fontWeight: "bold",
          alignSelf: "start",
          // Media query for min-width: 500px
          "@media (min-width: 500px)": {
            fontSize: "0.8rem",
          },
          // Media query for min-width: 600px
          "@media (min-width: 600px)": {
            fontSize: "0.9rem",
          },
          // Media query for min-width: 768px
          "@media (min-width: 768px)": {
            fontSize: "1.3rem",
          },

          // Media query for min-width: 1200px
          "@media (min-width: 1200px)": {
            fontSize: "1.2rem",
          },
        }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: "rotate(90deg)",
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles("dark", {
    backgroundColor: "rgba(255, 255, 255, .05)",
  }),
}));
const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));
// end Accordion

function AcordionCourseDetails() {
  // start Accordion
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  // end Accordion

  return (
    <>
      <p className="w-full  border-b border-gray-300 text-sm min-[350px]:text-lg min-[500px]:text-xl min-[670px]:text-2xl min-[1000px]:text-xl min-[1200px]:text-2xl font-black pb-4">
        What you'll learn
      </p>

      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="border-l-0! border-t-0! border-r-0! "
        sx={{
          py: "2px",
          fw: "bold",
          "& .MuiAccordionSummary-content": {
            color: expanded === "panel1" ? "#2563eb" : "black",
            transition: "color 0.3s ease",
          },
          "& .MuiAccordionSummary-expandIconWrapper": {
            color: expanded === "panel1" ? "#2563eb" : "rgba(0, 0, 0, 0.54)",
            transition: "color 0.3s ease",
          },
        }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          className=" bg-white! p-0!   "
        >
          <Typography
            component="span"
            className={` flex flex-wrap  items-start min-[300px]:items-center! gap-1! min-[350px]:gap-3! text-[10px]! min-[300px]:text-xs! min-[350px]:text-sm! min-[500px]:text-[15px]! min-[670px]:text-[17px]! min-[1000px]:text-[15px]! min-[1200px]:text-[17px]! font-semibold! `}
          >
            <span> Intro to Course and Histudy </span>
            <span className="py-1 px-2 rounded-lg text-[8px] min-[300px]:text-xs min-[350px]:text-sm bg-gray-100  ">
              1hr 30min
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="p-0!">
          <div className="flex flex-col  gap-1.5 min-[350px]:gap-3 items-start justify-center my-1 text-[10px]! min-[300px]:text-xs! min-[350px]:text-sm! min-[670px]:text-base! min-[1000px]:text-sm! min-[1200px]:text-base!">
            <div className="w-full flex flex-wrap justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer ">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegCirclePlay />
                <span>Course Intro</span>
              </div>
              <div className="flex items-center gap-1 min-[350px]:gap-2">
                <span>30 min</span>
                <p className="flex gap-1 items-center justify-center text-indigo-600 bg-indigo-100 rounded py-0.5 min-[350px]:py-1 px-2 min-[350px]:px-3">
                  <IoEyeOutline />
                  <span>Preview</span>
                </p>
              </div>
            </div>
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegCirclePlay />
                <span>Watch Before Start</span>
              </div>
              <div className="flex items-center gap-1 min-[350px]:gap-2">
                <span>0.5 min</span>
                <p className="flex gap-1 items-center justify-center text-indigo-600 bg-indigo-100 rounded py-0.5 min-[350px]:py-1 px-2 min-[350px]:px-3">
                  <IoEyeOutline />
                  <span>Preview</span>
                </p>
              </div>
            </div>
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegCirclePlay />
                <span>Read Before You Start</span>
              </div>
              <IoLockClosedOutline />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className="border-l-0!  border-r-0! "
        sx={{
          py: "2px",
          fw: "bold",
          "& .MuiAccordionSummary-content": {
            color: expanded === "panel2" ? "#2563eb" : "black",
            transition: "color 0.3s ease",
          },
          "& .MuiAccordionSummary-expandIconWrapper": {
            color: expanded === "panel2" ? "#2563eb" : "rgba(0, 0, 0, 0.54)",
            transition: "color 0.3s ease",
          },
        }}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          className=" bg-white! p-0!  "
        >
          <Typography
            component="span"
            className={` flex flex-wrap  items-start min-[300px]:items-center! gap-1! min-[350px]:gap-3! text-[10px]! min-[300px]:text-xs! min-[350px]:text-sm! min-[500px]:text-[15px]! min-[670px]:text-[17px]! min-[1000px]:text-[15px]! min-[1200px]:text-[17px]! font-semibold! `}
          >
            <span> Course Fundamentals </span>
            <span className="py-1 px-2 rounded-lg text-[8px] min-[300px]:text-xs min-[350px]:text-sm bg-gray-100  ">
              2hr 30min
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="p-0!">
          <div className="flex flex-col  gap-1.5 min-[350px]:gap-3 items-start justify-center my-1 text-[10px]! min-[300px]:text-xs! min-[350px]:text-sm! min-[670px]:text-base! min-[1000px]:text-sm! min-[1200px]:text-base!">
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegCirclePlay />
                <span>Course Intro</span>
              </div>
              <IoLockClosedOutline />
            </div>
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegFileAlt />
                <span>Read Before You Start</span>
              </div>
              <IoLockClosedOutline />
            </div>

            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-start justify-start gap-0.5 min-[350px]:gap-1">
                <FaRegCirclePlay />
                <span>Why You Should Not Go To Education.</span>
              </div>
              <IoLockClosedOutline />
            </div>
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegFileAlt />
                <span>Read Before You Start</span>
              </div>
              <IoLockClosedOutline />
            </div>

            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-start gap-0.5 min-[350px]:gap-1">
                <FaRegCirclePlay />
                <span>Ten Factors That Affect Education's Longevity.</span>
              </div>
              <IoLockClosedOutline />
            </div>
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegFileAlt />
                <span>Read Before You Start</span>
              </div>
              <IoLockClosedOutline />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className="border-l-0!  border-r-0! "
        sx={{
          py: "2px",
          fw: "bold",
          "& .MuiAccordionSummary-content": {
            color: expanded === "panel3" ? "#2563eb" : "black",
            transition: "color 0.3s ease",
          },
          "& .MuiAccordionSummary-expandIconWrapper": {
            color: expanded === "panel3" ? "#2563eb" : "rgba(0, 0, 0, 0.54)",
            transition: "color 0.3s ease",
          },
        }}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          className=" bg-white! p-0! "
        >
          <Typography
            component="span"
            className={` flex flex-wrap  items-start min-[300px]:items-center! gap-1! min-[350px]:gap-3! text-[10px]! min-[300px]:text-xs! min-[350px]:text-sm! min-[500px]:text-[15px]! min-[670px]:text-[17px]! min-[1000px]:text-[15px]! min-[1200px]:text-[17px]! font-semibold! `}
          >
            <span> You can develop skill and setup </span>
            <span className="py-1 px-2 rounded-lg text-[8px] min-[300px]:text-xs min-[350px]:text-sm bg-gray-100  ">
              1hr 50min
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="p-0!">
          <div className="flex flex-col  gap-1.5 min-[350px]:gap-3 items-start justify-center my-1 text-[10px]! min-[300px]:text-xs! min-[350px]:text-sm! min-[670px]:text-base! min-[1000px]:text-sm! min-[1200px]:text-base!">
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegCirclePlay />
                <span>Course Intro</span>
              </div>
              <IoLockClosedOutline />
            </div>
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegFileAlt />
                <span>Read Before You Start</span>
              </div>
              <IoLockClosedOutline />
            </div>

            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-start justify-start gap-0.5 min-[350px]:gap-1">
                <FaRegCirclePlay />
                <span>Why You Should Not Go To Education.</span>
              </div>
              <IoLockClosedOutline />
            </div>
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegFileAlt />
                <span>Read Before You Start</span>
              </div>
              <IoLockClosedOutline />
            </div>

            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-start gap-0.5 min-[350px]:gap-1">
                <FaRegCirclePlay />
                <span>Ten Factors That Affect Education's Longevity.</span>
              </div>
              <IoLockClosedOutline />
            </div>
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegFileAlt />
                <span>Read Before You Start</span>
              </div>
              <IoLockClosedOutline />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        className="border-l-0!  border-r-0! "
        sx={{
          py: "2px",
          fw: "bold",
          "& .MuiAccordionSummary-content": {
            color: expanded === "panel4" ? "#2563eb" : "black",
            transition: "color 0.3s ease",
          },
          "& .MuiAccordionSummary-expandIconWrapper": {
            color: expanded === "panel4" ? "#2563eb" : "rgba(0, 0, 0, 0.54)",
            transition: "color 0.3s ease",
          },
        }}
      >
        <AccordionSummary
          aria-controls="panel4d-content"
          id="panel4d-header"
          className=" bg-white! p-0!  "
        >
          <Typography
            component="span"
            className={` flex flex-wrap  items-start min-[300px]:items-center! gap-1! min-[350px]:gap-3! text-[10px]! min-[300px]:text-xs! min-[350px]:text-sm! min-[500px]:text-[15px]! min-[670px]:text-[17px]! min-[1000px]:text-[15px]! min-[1200px]:text-[17px]! font-semibold! `}
          >
            <span> 15 Things To Know About Education? </span>
            <span className="py-1 px-2 rounded-lg text-[8px] min-[300px]:text-xs min-[350px]:text-sm bg-gray-100  ">
              2hr 60min
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="p-0!">
          <div className="flex flex-col  gap-1.5 min-[350px]:gap-3 items-start justify-center my-1 text-[10px]! min-[300px]:text-xs! min-[350px]:text-sm! min-[670px]:text-base! min-[1000px]:text-sm! min-[1200px]:text-base!">
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegCirclePlay />
                <span>Course Intro</span>
              </div>
              <IoLockClosedOutline />
            </div>
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegFileAlt />
                <span>Read Before You Start</span>
              </div>
              <IoLockClosedOutline />
            </div>

            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-start justify-start gap-0.5 min-[350px]:gap-1">
                <FaRegCirclePlay />
                <span>Why You Should Not Go To Education.</span>
              </div>
              <IoLockClosedOutline />
            </div>
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegFileAlt />
                <span>Read Before You Start</span>
              </div>
              <IoLockClosedOutline />
            </div>

            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-start gap-0.5 min-[350px]:gap-1">
                <FaRegCirclePlay />
                <span>Ten Factors That Affect Education's Longevity.</span>
              </div>
              <IoLockClosedOutline />
            </div>
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegFileAlt />
                <span>Read Before You Start</span>
              </div>
              <IoLockClosedOutline />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        className="border-l-0!  border-r-0! "
        sx={{
          py: "2px",
          fw: "bold",
          "& .MuiAccordionSummary-content": {
            color: expanded === "panel5" ? "#2563eb" : "black",
            transition: "color 0.3s ease",
          },
          "& .MuiAccordionSummary-expandIconWrapper": {
            color: expanded === "panel5" ? "#2563eb" : "rgba(0, 0, 0, 0.54)",
            transition: "color 0.3s ease",
          },
        }}
      >
        <AccordionSummary
          aria-controls="panel5d-content"
          id="panel5d-header"
          className=" bg-white! p-0! "
        >
          <Typography
            component="span"
            className={` flex flex-wrap  items-start min-[300px]:items-center! gap-1! min-[350px]:gap-3! text-[10px]! min-[300px]:text-xs! min-[350px]:text-sm! min-[500px]:text-[15px]! min-[670px]:text-[17px]! min-[1000px]:text-[15px]! min-[1200px]:text-[17px]! font-semibold! `}
          >
            <span> Course Description </span>
            <span className="py-1 px-2 rounded-lg text-[8px] min-[300px]:text-xs min-[350px]:text-sm bg-gray-100  ">
              2hr 20min
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails className="p-0!">
          <div className="flex flex-col  gap-1.5 min-[350px]:gap-3 items-start justify-center my-1 text-[10px]! min-[300px]:text-xs! min-[350px]:text-sm! min-[670px]:text-base! min-[1000px]:text-sm! min-[1200px]:text-base!">
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegCirclePlay />
                <span>Course Intro</span>
              </div>
              <IoLockClosedOutline />
            </div>
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegFileAlt />
                <span>Read Before You Start</span>
              </div>
              <IoLockClosedOutline />
            </div>

            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-start justify-start gap-0.5 min-[350px]:gap-1">
                <FaRegCirclePlay />
                <span>Why You Should Not Go To Education.</span>
              </div>
              <IoLockClosedOutline />
            </div>
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegFileAlt />
                <span>Read Before You Start</span>
              </div>
              <IoLockClosedOutline />
            </div>

            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-start gap-0.5 min-[350px]:gap-1">
                <FaRegCirclePlay />
                <span>Ten Factors That Affect Education's Longevity.</span>
              </div>
              <IoLockClosedOutline />
            </div>
            <div className="w-full flex flex-wrap  justify-between items-center gap-2 hover:text-blue-600 transition duration-300 cursor-pointer">
              <div className="flex items-center gap-0.5 min-[350px]:gap-1">
                <FaRegFileAlt />
                <span>Read Before You Start</span>
              </div>
              <IoLockClosedOutline />
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </>
  );
}

export default AcordionCourseDetails;
