import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DisplayContextBooks = createContext();

export const DisplayContextBooksProvider = ({ children }) => {
  const [booksData, setBooksData] = useState([]); //state success
  const [booksErr, setBooksErr] = useState(null); //state error
  const [booksLoader, setBooksLoader] = useState(false); //state loader
  const displayBooksData = async () => {
    try {
      setBooksLoader(true);
      let { data } = await axios.get(
        "http://localhost:3000/products?category=books",
      );
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
