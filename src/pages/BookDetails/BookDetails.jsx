import { FaArrowRight, FaChevronRight, FaStar } from "react-icons/fa";
import "./BookDetails.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/CartContext";
import { RiErrorWarningLine } from "react-icons/ri";
import LabTabs from "../../components/LabTabs/LabTabs";
import RelatedBooks from "../../components/RelatedBooks/RelatedBooks";
import HandleLottie from "../../components/HandleLottie/HandleLottie";

function BookDetails() {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const { addToCartFromDetails, cartIDS } = useContext(cartContext);
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);
  const { id } = useParams();
  const [singleProductData, setSingleProductData] = useState({});
  const [counter, setCounter] = useState(1);
  const [loading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const existingAmount = cartIDS[id] || 0;
  const maxAvailable = singleProductData?.stock
    ? singleProductData.stock - existingAmount
    : 0;

  const handleCounter = (action) => {
    if (action === "plus") {
      if (counter < maxAvailable) {
        setCounter((prev) => prev + 1);
      }
    } else {
      if (counter > 1) {
        setCounter((prev) => prev - 1);
      }
    }
  };

  const getSingleProduct = async () => {
    try {
      setLoading(true);
      setIsError(false);
      const { data } = await axios.get(`${API_URL}/products?id=${id}`);
      if (data && data.length > 0) {
        setSingleProductData(data[0]);
      } else {
        setIsError(true);
      }
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (product, counter, navigate) => {
    addToCartFromDetails(product, counter, navigate);
    setIsDisabledBtn(true);
    setCounter(1);
  };

  useEffect(() => {
    if (id) {
      getSingleProduct();
    } else {
      setIsError(true);
    }
  }, [id]);

  useEffect(() => {
    setCounter(1);
  }, [id]);

  useEffect(() => {
    if (!isDisabledBtn) return;
    const timer = setTimeout(() => {
      setIsDisabledBtn(false);
    }, 700);
    return () => clearTimeout(timer);
  }, [isDisabledBtn]);

  return (
    <section className="bookDetails z-[1]">
      {loading ? (
        <HandleLottie state="secondary" />
      ) : isError ? (
        <div className="my-20   px-3 py-3 sm:py-4 md:py-6 lg:py-8 rounded-md md:rounded-lg lg:rounded-xl shadow-[0_0_20px_rgb(254,102,105)] text-xs min-[600px]:text-lg md:text-xl text-red-500 bg-white border-1 border-red-400 w-[98%] min-[350px]:w-[70%] md:w-[65%] lg:w-[50%] mx-auto flex flex-col justify-center items-center text-center gap-3 errorZoom">
          <RiErrorWarningLine className="text-5xl min-[600px]:text-6xl md:text-7xl" />
          <span> Course not found </span>
        </div>
      ) : (
        singleProductData && (
          <>
            <div className="bookdetails-heading py-20 flex flex-col items-center gap-2 min-[600px]:gap-5">
              <h2 className="text-xl pb-2 sm:text-3xl md:text-4xl font-semibold bg-linear-65 bg-clip-text from-blue-600 to-purple-600 w-max text-transparent">
                Single Product
              </h2>
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <Link to={"/"} className="font-semibold text-gray-600">
                  Home
                </Link>
                <FaChevronRight className="text-gray-400" />
                <span className="bg-linear-65 bg-clip-text from-blue-600 to-purple-600 w-max text-transparent">
                  Single Product
                </span>
              </div>
            </div>
            <div className="mx-auto my-10 min-[350px]:my-16 min-[600px]:my-20 px-4 min-[350px]:px-6  min-[600px]:px-7 min-[600px]:px-9 min-[700px]:px-12 min-[900px]:px-16">
              <div className="grid grid-cols-1 min-[860px]:grid-cols-2 gap-5 items-center">
                <div className="pro-img overflow-hidden rounded-2xl shadow mx-auto relative  w-[85%] min-[860px]:w-full h-60 min-[600px]:h-96 min-[860px]:h-150">
                  <img
                    src={singleProductData?.image}
                    className="w-full object-center min-[900px]:object-cover h-full w-full absolute top-0 left-0 "
                    alt={singleProductData?.title}
                  />
                </div>
                <div className="pro-details">
                  <div className="flex flex-col min-[350px]:flex-row items-start min-[350px]:items-center gap-1.5 min-[350px]:gap-3 mb-3 min-[600px]:mb-5 mt-2 text-xs min-[350px]:text-base">
                    <div className="stars text-orange-400 flex gap-0.5 min-[350px]:gap-1 ">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </div>
                    <p className="text-gray-600 font-semibold text-sm  min-[600px]:text-base ">
                      (75) - 100% Positive Reviews
                    </p>
                  </div>
                  <p className="pro-title text-lg min-[350px]:text-2xl min-[600px]:text-4xl font-bold mb-3 min-[600px]:mb-5">
                    {singleProductData?.title}
                  </p>
                  <p className="pro-author text-gray-400 font-semibold text-xs min-[350px]:text-sm mb-3 min-[600px]:mb-5">
                    By {singleProductData?.author}
                  </p>
                  <div className="pro-price flex items-center gap-2 text-md min-[350px]:text-lg min-[600px]:text-2xl font-black mb-2 min-[600px]:mb-5">
                    <span className="bg-linear-65 bg-clip-text from-blue-600 to-purple-600 w-max text-transparent">
                      $
                      {(
                        singleProductData?.price -
                        (singleProductData?.price *
                          singleProductData?.discount) /
                          100
                      ).toFixed(2)}
                    </span>
                    <del className="text-gray-300">
                      ${singleProductData?.price?.toFixed(2)}
                    </del>
                  </div>
                  <p className="text-gray-400 font-semibold text-xs min-[350px]:text-[14px] min-[600px]:text-base mb-4 min-[600px]:mb-5">
                    {singleProductData?.description}
                  </p>

                  <div className="mb-3 min-[600px]:mb-5 flex items-center gap-3 flex-wrap">
                    <div className="flex items-center border border-gray-300 rounded counter w-max">
                      <button
                        disabled={counter === 1}
                        className="disabled:opacity-50 disabled:cursor-not-allowed text-sm min-[600px]:text-base py-1 px-2 min-[350px]:py-2 min-[350px]:px-3 min-[600px]:py-3 min-[600px]:px-4 cursor-pointer bg-linear-65 from-blue-600 to-purple-600 text-white font-bold counterBtn transition duration-500"
                        onClick={() => handleCounter("minus")}
                      >
                        -
                      </button>
                      <span className="text-xs min-[600px]:text-base py-1 px-2 min-[350px]:py-2 min-[350px]:px-3 min-[600px]:py-3 min-[600px]:px-5 border-t-0 border-b-0 border border-gray-300 min-w-[30px] min-[350px]:min-w-[50px] text-center">
                        {counter}
                      </span>
                      <button
                        className="disabled:opacity-50 disabled:cursor-not-allowed text-sm min-[600px]:text-base py-1 px-2 min-[350px]:py-2 min-[350px]:px-3 min-[600px]:py-3 min-[600px]:px-4 cursor-pointer bg-linear-65 from-blue-600 to-purple-600 text-white font-bold counterBtn transition duration-500"
                        disabled={counter >= maxAvailable || maxAvailable <= 0}
                        onClick={() => handleCounter("plus")}
                      >
                        +
                      </button>
                    </div>
                    <div className="flex flex-col text-gray-400 text-[10px] min-[350px]:text-sm min-[600px]:text-base">
                      <span>
                        Available Stock: {singleProductData?.stock || 0}
                      </span>
                      <span>
                        You can add: ({maxAvailable > 0 ? maxAvailable : 0})
                      </span>
                    </div>
                  </div>

                  <div className="mb-10 min-[350px]:mb-14 min-[600px]:mb-16">
                    <button
                      disabled={maxAvailable <= 0 || isDisabledBtn}
                      onClick={() =>
                        handleAddToCart(singleProductData, counter, navigate)
                      }
                      className="disabled:cursor-not-allowed! disabled:opacity-50! disabled:pointer-events-none! group mt-1 text-[12px] min-[270px]:text-[13px] min-[600px]:text-[17px] transition duration-300 btn5 w-[120px]! min-[270px]:w-[140px]! min-[600px]:w-[170px]! px-1.5! min-[600px]:px-3! py-2.5! min-[600px]:py-3! min-[1200px]:py-4! text-white cursor-pointer"
                    >
                      <div className="transition duration-300 -translate-x-2 group-hover:translate-x-2 flex justify-center items-center gap-2 text-center w-full">
                        <div className="flex justify-center items-center self-stretch pt-1 flex-1 text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px] opacity-0 text-white transition duration-300">
                          <FaArrowRight />
                        </div>
                        <span className="text-nowrap capitalize">
                          {maxAvailable <= 0 ? "Out of Stock" : "Add to Cart"}
                        </span>
                        <div className="flex justify-center items-center self-stretch pt-1 flex-1 text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px] opacity-100 transition duration-300">
                          <FaArrowRight />
                        </div>
                      </div>
                    </button>
                  </div>

                  <div className="pro-info">
                    <p className="mb-2 flex flex-wrap items-center gap-1 text-xs min-[350px]:text-sm min-[600px]:text-base">
                      <b>SKU:</b>
                      <span className="text-gray-400">
                        book-{singleProductData?.id}
                      </span>
                    </p>
                    <p className="mb-2 flex flex-wrap items-center gap-1 text-xs min-[350px]:text-sm min-[600px]:text-base">
                      <b>Categories:</b>
                      <span className="text-gray-400">Motivation</span>
                    </p>
                    <p className="mb-2 flex flex-wrap items-center gap-1 text-xs min-[350px]:text-sm min-[600px]:text-base">
                      <b>Tag:</b>
                      <span className="text-gray-400">
                        Book Store Self Development
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <LabTabs />

              <RelatedBooks />
            </div>
          </>
        )
      )}
    </section>
  );
}

export default BookDetails;
