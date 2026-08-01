import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DisplayCoursesContext = createContext();

export const DisplayCoursesContextProvider = ({ children }) => {
  const [coursesData, setCoursesData] = useState([]);
  const API_URL = import.meta.env.VITE_API_URL;

  const displayCourses = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/products?category=courses`);
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
