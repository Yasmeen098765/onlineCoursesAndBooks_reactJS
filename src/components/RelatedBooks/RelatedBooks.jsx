import "./RelatedBooks.css";
import BookCard from "../../components/BookCard/BookCard.jsx";
import { useState, useContext, useEffect } from "react";
import { DisplayContextBooks } from "../../context/DisplayBooksContext.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { useMediaQuery } from "react-responsive";
import { RiErrorWarningLine } from "react-icons/ri";
import { BiLoaderAlt } from "react-icons/bi";
import Title from "../../common/Title/Title.jsx";

function RelatedBooks() {
  const { booksData, booksErr, booksLoader } = useContext(DisplayContextBooks);
  const bookRelaited = booksData.slice(0, 3);
  const isDesktop = useMediaQuery({ minWidth: 900 });
  const isTablet = useMediaQuery({ minWidth: 500, maxWidth: 899 });
  const isMobile = useMediaQuery({ maxWidth: 499 });

  // تحديد عدد المنتجات حسب الجهاز
  const getItemsPerPage = () => {
    if (isDesktop) return 3;
    if (isTablet) return 4;
    return 3;
  };
  const [itemsPerPage, setItemsPerPage] = useState(getItemsPerPage());
  // State للـ Pagination
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    setItemsPerPage(getItemsPerPage());
    setCurrentPage(1);
  }, [isDesktop, isTablet, isMobile]);

  // حساب البيانات
  const totalPages = Math.ceil(bookRelaited.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = bookRelaited.slice(startIndex, endIndex);

  // دوال المساعدة
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative py-4">
      <Title
        MainText={"Related Book"}
        subText={"Similar Books."}
        colorText={"text-purple-500"}
        bgText={"bg-purple-100"}
        width1={true}
        items={"items-center"}
        topOffset={"text-center"}
      />
      {/* عرض المنتجات */}
      {/* لازم يتم معالجة ثلاثة حالات : التحميل والأخطاء وجلب البيانات */}
      {booksLoader ? (
        <div
          style={{ lineHeight: "1.5" }}
          className="py-8 text-2xl text-blue-500  w-[50%] mx-auto flex flex-col justify-center items-center text-center gap-3"
        >
          <BiLoaderAlt className="text-4xl min-[350px]:text-6xl min-[550px]:text-6xl  md:text-7xl animate-spin" />
          <span className="animate-bounce text-xs min-[350px]:text-lg min-[550px]:text-lg md:text-xl font-bold mt-1">
            {" "}
            Loading....
          </span>
        </div>
      ) : booksErr ? (
        <div
          style={{ lineHeight: "1.5" }}
          className="px-3  py-3 sm:py-4 md:py-6 lg:py-8 rounded-md md:rounded-lg lg:rounded-xl shadow-[0_0_20px_rgb(254,102,105)] text-xs min-[550px]:text-lg md:text-xl text-red-500 bg-white border-1 border-red-400  w-[98%] min-[300px]:w-[70%] md:w-[65%]  lg:w-[50%] mx-auto flex flex-col justify-center items-center text-center gap-3 errorZoom"
        >
          <RiErrorWarningLine className="text-5xl min-[550px]:text-6xl  md:text-7xl" />
          <span>{booksErr}</span>
        </div>
      ) : (
        <div className="mt-8 min-[450px]:mt-16  grid grid-cols-1 min-[500px]:grid-cols-2 min-[900px]:grid-cols-3 gap-5 min-[600px]:gap-7">
          {currentItems.map((val, index) => (
            <BookCard key={index} val={val} />
          ))}
        </div>
      )}

      {/* الـ Pagination - يظهر فقط إذا كان فيه أكثر من صفحة */}
      {totalPages > 1 && (
        <Pagination
          booksDataLength={bookRelaited.length}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
          totalPages={totalPages}
          startIndex={startIndex}
          endIndex={endIndex}
        />
      )}
    </div>
  );
}

export default RelatedBooks;
