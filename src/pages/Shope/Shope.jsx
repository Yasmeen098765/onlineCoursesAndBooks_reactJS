import { Link } from "react-router-dom";
import "./Shope.css";
import { IoChevronForward } from "react-icons/io5";
import BookCard from "../../components/BookCard/BookCard";
import { useState, useContext, useEffect } from "react";
import { DisplayContextBooks } from "../../context/DisplayBooksContext.jsx";
import Select from "react-select";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { useMediaQuery } from "react-responsive";
import { RiErrorWarningLine } from "react-icons/ri";
import { BiLoaderAlt } from "react-icons/bi";

function Shope() {
  const { booksData, booksErr, booksLoader } = useContext(DisplayContextBooks);

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
  const totalPages = Math.ceil(booksData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = booksData.slice(startIndex, endIndex);

  // دوال المساعدة
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // خيارات الـ Select
  const options = [
    { value: "Default", label: "Default" },
    { value: "Latest", label: "Latest" },
    { value: "Popularity", label: "Popularity" },
    { value: "Trending", label: "Trending" },
    { value: "PriceLowToHieh", label: "Price: low to high" },
    { value: "PriceHeighToLow", label: "Price: high to low" },
  ];

  return (
    <section className="shope">
      <div className="shope-heading min-h-[75vh]">
        <div className="mx-auto py-10 min-[400px]:py-14 px-3 min-[220px]:px-5 min-[350px]:px-10 min-[800px]:py-16 min-[800px]:px-16 min-[900px]:px-10 min-[1200px]:p-16">
          {/* Breadcrumb */}
          <div className="indicator flex items-center gap-1 text-xs min-[350px]:text-sm capitalize text-gray-400">
            <Link className="text-gray-500" to={"/"}>
              Home
            </Link>
            <IoChevronForward />
            <span>All Products</span>
          </div>

          {/* العنوان */}
          <div className="flex flex-wrap justify-start items-center gap-2 min-[350px]:gap-3 min-[450px]:gap-5 title my-5">
            <h2 className="capitalize text-gray-800 font-bold text-xl min-[350px]:text-3xl min-[560px]:text-4xl min-[800px]:text-5xl">
              All Products
            </h2>
            <div className="cursor-pointer hover:text-blue-600 duration-300 transition py-2 min-[350px]:py-3 px-3 min-[350px]:px-6 mt-1 capitalize rounded-4xl font-semibold text-xs min-[560px]:text-sm flex justify-center items-center gap-0.5 min-[350px]:gap-1.5 border-2 border-white bg-violet-200">
              <span>🎉</span>
              <span>{booksData.length} products</span>
            </div>
          </div>

          <p className="text-xs min-[350px]:text-[15px] min-[560px]:text-lg">
            Products that help beginner designers become true unicorns.
          </p>

          {/* الـ Filters */}
          <div className="relative">
            <div className="grid grid-cols-1 min-[700px]:grid-cols-2 gap-4 min-[800px]:gap-0 w-full py-10 min-[350px]:pt-10 min-[430px]:pt-14 min-[350px]:pb-16 min-[700px]:pt-16 min-[700px]:pb-20">
              <p className="text-xs min-[350px]:text-[14px] min-[480px]:text-md min-[560px]:text-lg">
                Showing {startIndex + 1}-{Math.min(endIndex, booksData.length)}{" "}
                of {booksData.length} results
              </p>
              <div className="flex flex-col justify-start items-start min-[700px]:items-end gap-1 w-full">
                <span className="w-[120px] min-[350px]:w-[200px] min-[900px]:w-[250px] text-start uppercase font-semibold text-xs min-[350px]:text-sm">
                  Sort By
                </span>
                <Select
                  className="w-[120px] min-[350px]:w-[200px] min-[900px]:w-[250px] text-[12px] min-[350px]:text-[16px]"
                  options={options}
                  defaultValue={options[0]}
                />
              </div>
            </div>

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
              <div className="grid grid-cols-1 min-[500px]:grid-cols-2 min-[900px]:grid-cols-3 gap-5 min-[600px]:gap-7">
                {currentItems.map((val, index) => (
                  <BookCard key={index} val={val} />
                ))}
              </div>
            )}

            {/* الـ Pagination - يظهر فقط إذا كان فيه أكثر من صفحة */}
            {totalPages > 1 && (
              <Pagination
                booksDataLength={booksData.length}
                handlePageChange={handlePageChange}
                currentPage={currentPage}
                totalPages={totalPages}
                startIndex={startIndex}
                endIndex={endIndex}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Shope;
