import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DisplayContextBooks = createContext();

export const DisplayContextBooksProvider = ({ children }) => {
  const [booksData, setBooksData] = useState([]); //state success
  const [booksErr, setBooksErr] = useState(null); //state error
  const [booksLoader, setBooksLoader] = useState(false); //state loader
  const API_URL = import.meta.env.VITE_API_URL;
  const displayBooksData = async () => {
    try {
      setBooksLoader(true);
      let { data } = await axios.get(`${API_URL}/products?category=books`);
      setBooksData(data);
    } catch (error) {
      const messageError = (
        <>
          {error?.message}
          <br />
          An error occurred while loading books...
        </>
      );
      setBooksErr(messageError);
    } finally {
      setBooksLoader(false);
    }
  };
  useEffect(() => {
    displayBooksData();
  }, []);
  return (
    <DisplayContextBooks.Provider value={{ booksData, booksErr, booksLoader }}>
      {children}
    </DisplayContextBooks.Provider>
  );
};
