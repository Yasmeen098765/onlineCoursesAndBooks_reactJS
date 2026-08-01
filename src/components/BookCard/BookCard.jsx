import { FaArrowRight, FaStar } from "react-icons/fa";
import "./BookCard.css";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/CartContext";
import { LuLoaderCircle } from "react-icons/lu";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function BookCard({ val }) {
  const { addToCart, cartIDS } = useContext(cartContext);
  console.log(cartIDS);
  const [isDisabledBtn, setIsDisabledBtn] = useState(false);
  let productInfo = {
    ...val,
    amount: cartIDS[val.id] ? cartIDS[val.id] : 0,
  };
  const handleAddToCart = (pro) => {
    addToCart(pro.id);
    setIsDisabledBtn(true);
    if (cartIDS[pro.id] == 1) {
      Swal.fire({
        html: `
      <div class="flex flex-col items-center gap-3 text-center">
        <!-- SVG أيقونة -->
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#22c55e"/>
        </svg>
        
        <div class="flex flex-col items-center gap-1 text-xs min-[250px]:text-[14px]  min-[270px]:text-[16px] min-[500px]:text-lg min-[600px]:text-xl min-[900px]:text-2xl p-0 m-0 ">
          <span class="text-green-500 font-semibold ">You Added</span>
          <span style="background-clip:text" class=" bg-linear-65 from-blue-500 to-purple-500 w-max font-bold text-transparent font-semibold ">(${pro.title})</span>
          <span class="">To Your Cart Successfully</span>
        </div>
      </div>
    `,
        showConfirmButton: false,
        timer: 2000,
        width: 350,
        padding: "0.8rem",
        timerProgressBar: true, // شريط تقدم جميل
        icon: undefined,
        customClass: {
          popup: "book-card-swal-popup book-card-swal-popup-success", // كلاس خاص بالـ popup
          htmlContainer: "book-card-swal-html", // كلاس خاص بالمحتوى
        },
      });
    } else {
      toast.success(`You have (${pro.amount}) of (${pro.title})`, {
        duration: 1200,
      });
    }
  };
  useEffect(() => {
    if (!isDisabledBtn) {
      return;
    }
    setIsDisabledBtn(true);
    const x = setTimeout(() => {
      setIsDisabledBtn(false);
    }, 1000);
    return () => clearTimeout(x);
  }, [isDisabledBtn]);
  let validStock = productInfo.stock - productInfo.amount;
  const navigate = useNavigate();
  return (
    <div className="bookCard1 border border-gray-100 bg-white px-3 min-[350px]:px-6 min-[500px]:px-4 min-[540px]:px-5 min-[588px]:px-6 min-[700px]:px-8 min-[900px]:px-6 py-6 min-[350px]:py-8 rounded-lg  text-center shadow-lg duration-300 transition hover:-translate-y-1">
      <h3 className=" book-title text-lg min-[350px]:text-2xl min-[500px]:text-xl min-[588px]:text-2xl min-[723px]:text-3xl min-[900px]:text-2xl min-[1200px]:text-3xl font-bold capitalize cursor-pointer transition duration-300 hover:text-blue-600">
        {productInfo.title.slice(0, 12) + "..."}
      </h3>
      <p className="author py-2 min-[350px]:my-1 min-[1200px]:my-4 italic text-gray-400 capitalize text-[14px] min-[350px]:text-[18px]  min-[500px]:text-[16px]">
        By {productInfo.author}
      </p>
      <div className="rounded-lg overflow-hidden shadow ">
        <img
          onClick={() => navigate(`/bookDetails/${productInfo.id}`)}
          src={productInfo.image}
          alt=""
          className="w-full cursor-pointer h-[200px] min-[350px]:h-[250px] min-[420px]:h-[280px] min-[500px]:h-[250px]   min-[950px]:h-[320px]  min-[1024px]:h-[330px] "
        />
      </div>
      <div className="w-full mx-auto text-center mt-3 flex flex-wrap justify-center items-center gap-2 min-[1200px]:gap-2 text-xs min-[350px]:text-[16px] min-[500px]:text-[14px] min-[588px]:text-[15px] min-[1024px]:text-[13px] min-[1200px]:text-[14px] font-semibold">
        <div className="rating flex justify-center items-center gap-0.5 text-orange-400">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>
        <span className="text-neutral-500 capitalize ">
          (15) - 100% Positive Reviews
        </span>
      </div>
      <div className=" flex justify-center items-center gap-3 text-md min-[350px]:text-xl min-[500px]:text-lg min-[588px]:text-xl min-[700px]:text-2xl my-3">
        <div className="price bg-linear-65 from-blue-600 to-purple-600 w-max font-bold text-transparent">
          $
          {(
            productInfo.price -
            (productInfo.discount * productInfo.price) / 100
          ).toFixed(2)}
        </div>
        <div className="text-gray-300 line-through">
          ${productInfo.price.toFixed(2)}
        </div>
      </div>

      <div className=" text-crnter  text-xs min-[300px]:text-sm min-[350px]:text-[16px] min-[588px]:text-md min-[450px]:text-lg min-[500px]:text-sm min-[670px]:text-md  min-[900px]:text-lg  font-semibold text-gray-500 my-2">
        You can Add
        <span
          className="bg-linear-65 from-blue-600 to-purple-600 w-max text-transparent"
          style={{ backgroundClip: "text" }}
        >
          {" "}
          ({validStock})
        </span>{" "}
        from
        <span
          className="bg-linear-65 from-blue-600 to-purple-600 w-max text-transparent"
          style={{ backgroundClip: "text" }}
        >
          {" "}
          ({productInfo.stock})
        </span>
      </div>

      <button
        disabled={isDisabledBtn || !validStock}
        onClick={() => handleAddToCart(productInfo)}
        className="
         disabled:opacity-50! disabled:cursor-not-allowed! disabled:pointer-events-none!  group mt-1 text-[12px] min-[270px]:text-[13px] min-[600px]:text-[17px]  transition duration-300  btn w-[120px]!  min-[270px]:w-[140px]! min-[600px]:w-[170px]!  px-1.5! min-[600px]:px-3!  py-2.5!  min-[600px]:py-3! min-[1200px]:py-4!  text-white cursor-pointer"
      >
        {isDisabledBtn ? (
          <div className="flex justify-center items-center gap-2">
            <LuLoaderCircle className="animate-spin" />
            <span className=" ">Processing...</span>
          </div>
        ) : (
          <>
            <div className="transition duration-300 -translate-x-2 group-hover:translate-x-2 flex justify-center items-center gap-2 text-center w-full">
              <div className="flex justify-center items-center self-stretch pt-1 flex-1  text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px] opacity-0 text-white  transition duration-300">
                <FaArrowRight />
              </div>
              <span className="text-nowrap capitalize ">Add to cart</span>
              <div className="flex justify-center items-center self-stretch pt-1 flex-1 text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px] opacity-100 transition duration-300 ">
                <FaArrowRight className="" />
              </div>
            </div>
          </>
        )}
      </button>
    </div>
  );
}

export default BookCard;
