import Footer from "../common/Footer/Footer";
import Header from "../common/Header/Header";
import "./Layout.css";
import BackToUp from "@uiw/react-back-to-top";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

function Layout() {
  const [size, setSize] = useState(50);
  const [iconSize, setIconSize] = useState(24);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newSize;
      let newIconSize;

      if (width < 480) {
        newSize = 38; // موبايل صغير
        newIconSize = 18;
      } else if (width < 768) {
        newSize = 44; // تابلت
        newIconSize = 20;
      } else if (width < 1024) {
        newSize = 50; // شاشة متوسطة
        newIconSize = 24;
      } else {
        newSize = 55; // شاشة كبيرة
        newIconSize = 26;
      }

      setSize(newSize);
      setIconSize(newIconSize);
    };

    handleResize(); // تعيين الحجم عند التحميل
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <Outlet/>
      <Footer />
      <BackToUp
        top={200}
        size={size}
        strokeWidth={4}
        className="my-back-to-top z-[30]"
      >
        <FaArrowUp
          style={{
            fontSize: iconSize + "px",
            color: "rgb(64, 88, 238)",
            width: iconSize + "px",
            height: iconSize + "px",
          }}
        />
      </BackToUp>
    </>
  );
}

export default Layout;
