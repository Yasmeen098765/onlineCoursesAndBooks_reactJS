import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DisplayCoursesContext = createContext();

export const DisplayCoursesContextProvider = ({ children }) => {
  const [coursesData, setCoursesData] = useState([]);
  const displayCourses = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:3000/products?category=courses",
      );
      setCoursesData(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    displayCourses();
  }, []);

  return (
    <DisplayCoursesContext.Provider value={{ coursesData }}>
      {children}
    </DisplayCoursesContext.Provider>
  );
};
