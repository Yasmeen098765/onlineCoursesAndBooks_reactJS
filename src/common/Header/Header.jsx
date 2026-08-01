import { useEffect, useState } from "react";
import "./Header.css";
import Info from "./Info/Info";
import NavBar from "./NavBar/NavBar";

export default function Header() {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`header top-0 left-0 right-0 z-50   w-full flex flex-col justify-center items-center transition-all duration-300 
     ${isScroll ? "fixed" : "relative"}`}
    >
      <Info isScroll={isScroll} />
      <NavBar isScroll={isScroll} />
    </section>
  );
}
