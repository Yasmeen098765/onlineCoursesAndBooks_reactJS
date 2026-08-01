import { Link } from "react-router-dom";
import "./Cart.css";
import { FaArrowRight, FaChevronRight } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { cartContext } from "../../context/CartContext";
import { BiLoaderAlt } from "react-icons/bi";
import { RiErrorWarningLine } from "react-icons/ri";
import CartItem from "../../components/CartItem/CartItem";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Cart() {
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };
  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const { cartIDS, getCardData, records, cartErr, cartLoader } =
    useContext(cartContext);

  const ProductsFullInfo = records.map((value) => ({
    ...value,
    amount: cartIDS[value.id],
  }));

  useEffect(() => {
    getCardData();
  }, [cartIDS]);

  // حساب المجموع الكلي
  const totalPrice = ProductsFullInfo.reduce((acc, val) => {
    const price = val.price - (val.price * val.discount) / 100;
    return acc + price * val.amount;
  }, 0);

  return (
    <section className="cart">
      {/* ===== Header ===== */}
      <div className="cart-heading py-20 flex flex-col items-center gap-2 min-[450px]:gap-5">
        <h2 className="text-3xl  sm:text-4xl  md:text-5xl font-semibold bg-linear-65 bg-clip-text from-blue-600 to-purple-600 w-max text-transparent">
          Cart
        </h2>
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <Link to={"/"} className="font-semibold text-gray-600 ">
            Home
          </Link>
          <FaChevronRight className="text-gray-400" />
          <span className=" bg-linear-65 bg-clip-text from-blue-600 to-purple-600 w-max text-transparent">
            Cart
          </span>
        </div>
      </div>

      {/* ===== Body ===== */}
      <div className=" mx-auto px-4 min-[500px]:px-9 min-[700px]:px-12 min-[900px]:px-16 pb-0">
        <div className="w-full overflow-x-auto mb-5 md:mb-10">
          {/* ===== حالات التحميل والخطأ والفارغ ===== */}
          {cartLoader ? (
            <div className="py-8 text-2xl text-blue-500 w-[50%] mx-auto flex flex-col justify-center items-center text-center gap-3">
              <BiLoaderAlt className="text-4xl min-[450px]:text-6xl md:text-7xl animate-spin" />
              <span className="animate-bounce text-xs min-[450px]:text-lg md:text-xl font-bold mt-1">
                Loading....
              </span>
            </div>
          ) : cartErr ? (
            <div className="px-3 py-3 sm:py-4 md:py-6 lg:py-8 rounded-md md:rounded-lg lg:rounded-xl shadow-[0_0_20px_rgb(254,102,105)] text-xs min-[550px]:text-lg md:text-xl text-red-500 bg-white border-1 border-red-400 w-[98%] min-[300px]:w-[70%] md:w-[65%] lg:w-[50%] mx-auto flex flex-col justify-center items-center text-center gap-3 errorZoom">
              <RiErrorWarningLine className="text-5xl min-[550px]:text-6xl md:text-7xl" />
              <span>{cartErr}</span>
            </div>
          ) : ProductsFullInfo.length === 0 ? (
            <div className=" rounded-xl py-10   mt-10 mb-2  flex flex-col items-center gap-2 min-[250px]:gap-2 min-[450px]:gap-3 min-[500px]:gap-3">
              <MdOutlineRemoveShoppingCart className="m-0 text-center text-red-500 capitalize text-2xl  min-[450px]:text-3xl lg:text-4xl" />
              <p className="m-0 text-center text-red-500 capitalize text-xs min-[250px]:text-sm min-[450px]:text-md min-[400px]:text-lg min-[500px]:text-xl lg:text-2xl">
                your cart is empty :(
              </p>
              <Link
                to="/shope"
                className="capitalize text-center underline text-blue-500 text-xs min-[250px]:text-sm min-[450px]:text-md min-[400px]:text-lg min-[500px]:text-xl lg:text-2xl"
              >
                what about go get some products?
              </Link>
            </div>
          ) : (
            /* ===== عرض الجدول ===== */
            <div className="mt-10 md:mt-20 ">
              <table className="w-full min-w-[600px] md:min-w-full">
                {/* ===== رأس الجدول ===== */}
                <thead>
                  <tr className="cart-head rounded shadow text-white bg-linear-to-r from-indigo-600 via-violet-500 to-purple-500">
                    <th className="  p-3 text-center text-sm md:text-base font-semibold">
                      Image
                    </th>
                    <th className="p-3 text-center text-sm md:text-base font-semibold">
                      Product
                    </th>
                    <th className="p-3 text-center text-sm md:text-base font-semibold">
                      Price
                    </th>
                    <th className="p-3 text-center text-sm md:text-base font-semibold">
                      Quantity
                    </th>
                    <th className="p-3 text-center text-sm md:text-base font-semibold">
                      Total
                    </th>
                    <th className=" p-3 text-center text-sm md:text-base font-semibold">
                      Remove
                    </th>
                  </tr>
                </thead>

                {/* ===== جسم الجدول ===== */}
                <tbody>
                  {ProductsFullInfo.map((val, index) => (
                    <CartItem key={index} val={val} />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
      {ProductsFullInfo.length != 0 && (
        <div className=" mx-auto px-4 min-[500px]:px-9 min-[700px]:px-12 min-[900px]:px-16 py-2 pb-15 min-[450px]:pb-30">
          <div className="w-full grid grid-cols-1  min-[900px]:grid-cols-2 gap-6 min-[1200px]:gap-30 mt-5 min-[450px]:mt-10">
            <div className="flex flex-col items-start justify-start gap-5">
              <div className="w-full flex flex-col items-center justify-center gap-3 min-[450px]:gap-6 bg-white shadow shadow-xl px-3 min-[450px]:px-6 py-4 min-[450px]:py-8 border border-gray-200 rounded-lg min-[450px]:rounded-xl ">
                <h2 className="w-full text-sm min-[450px]:text-3xl text-black font-bold pb-2 min-[450px]:pb-4 border-b border-gray-300">
                  Calculate Shipping
                </h2>
                <div className="w-full grid grid-cols-2 gap-2 min-[450px]:gap-5 ">
                  <FormControl size="small" className="w-full text-[10px]! ">
                    <InputLabel
                      id="demo-select-small-label"
                      className="text-gray-500 text-[10px]! min-[450px]:text-base! "
                    >
                      country
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={country}
                      label="country"
                      onChange={handleChangeCountry}
                      className="text-gray-500!  p-0!"
                    >
                      <MenuItem
                        value="country"
                        className="text-xs! min-[450px]:text-base! hover:text-blue-600! text-gray-500! hover:bg-neutral-100!  mx-1! my-0.5!  min-[450px]:mx-2!  min-[450px]:my-1!"
                      >
                        <em>country</em>
                      </MenuItem>
                      <MenuItem
                        className="text-xs! min-[450px]:text-base! hover:text-blue-600! text-gray-500! hover:bg-neutral-100! mx-1! my-0.5!  min-[450px]:mx-2!  min-[450px]:my-1!"
                        value="China"
                      >
                        China
                      </MenuItem>
                      <MenuItem
                        className="text-xs! min-[450px]:text-base! hover:text-blue-600! text-gray-500! hover:bg-neutral-100! mx-1! my-0.5!  min-[450px]:mx-2!  min-[450px]:my-1!"
                        value="Bangladesh"
                      >
                        Bangladesh
                      </MenuItem>
                      <MenuItem
                        className="text-xs! min-[450px]:text-base! hover:text-blue-600! text-gray-500! hover:bg-neutral-100! mx-1! my-0.5!  min-[450px]:mx-2!  min-[450px]:my-1!"
                        value="India"
                      >
                        India
                      </MenuItem>
                      <MenuItem
                        className="text-xs! min-[450px]:text-base! hover:text-blue-600! text-gray-500! hover:bg-neutral-100! mx-1! my-0.5!  min-[450px]:mx-2!  min-[450px]:my-1!"
                        value="Japan"
                      >
                        Japan
                      </MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl size="small" className="w-full  ">
                    <InputLabel
                      id="demo-select-small-label"
                      className="text-gray-500 text-xs! min-[450px]:text-base!"
                    >
                      city
                    </InputLabel>
                    <Select
                      labelId="demo-select-small-label"
                      id="demo-select-small"
                      value={city}
                      label="city"
                      onChange={handleChangeCity}
                      className="text-gray-500!  "
                    >
                      <MenuItem
                        value="city"
                        className="text-xs! min-[450px]:text-base! hover:text-blue-600! text-gray-500! hover:bg-neutral-100!  mx-1! my-0.5!  min-[450px]:mx-2!  min-[450px]:my-1!"
                      >
                        <em>city</em>
                      </MenuItem>
                      <MenuItem
                        className="text-xs! min-[450px]:text-base! hover:text-blue-600! text-gray-500! hover:bg-neutral-100! mx-1! my-0.5!  min-[450px]:mx-2!  min-[450px]:my-1!"
                        value="Dhaka"
                      >
                        Dhaka
                      </MenuItem>
                      <MenuItem
                        className="text-xs! min-[450px]:text-base! hover:text-blue-600! text-gray-500! hover:bg-neutral-100! mx-1! my-0.5!  min-[450px]:mx-2!  min-[450px]:my-1!"
                        value="Barisal"
                      >
                        Barisal
                      </MenuItem>
                      <MenuItem
                        className="text-xs! min-[450px]:text-base! hover:text-blue-600! text-gray-500! hover:bg-neutral-100! mx-1! my-0.5!  min-[450px]:mx-2!  min-[450px]:my-1!"
                        value="Khulna"
                      >
                        Khulna
                      </MenuItem>
                      <MenuItem
                        className="text-xs! min-[450px]:text-base! hover:text-blue-600! text-gray-500! hover:bg-neutral-100! mx-1! my-0.5!  min-[450px]:mx-2!  min-[450px]:my-1!"
                        value="Comilla"
                      >
                        Comilla
                      </MenuItem>
                      <MenuItem
                        className="text-xs! min-[450px]:text-base! hover:text-blue-600! text-gray-500! hover:bg-neutral-100! mx-1! my-0.5!  min-[450px]:mx-2!  min-[450px]:my-1!"
                        value="Chittagong"
                      >
                        Chittagong
                      </MenuItem>
                    </Select>
                  </FormControl>
                </div>

                <div className="w-full grid grid-cols-2 gap-2 min-[450px]:gap-5">
                  <input
                    type="text"
                    placeholder="PostCode/Zip"
                    className=" text-[10px]!   min-[450px]:text-[14px]!  min-[600px]:text-base!   py-1 px-2 min-[450px]:py-2  min-[450px]:px-3 transition duration-300 rounded outline-0 border-1 border-neutral-400 focus:border-2 focus:border-sky-600 placeholder:text-gray-400 text-gray-500"
                  />
                  <button className="group  text-[10px] min-[270px]:text-[13px] min-[600px]:text-[17px]  transition duration-300 font-semibold btn5 w-[80px]!  min-[270px]:w-[100px]! min-[350px]:w-full!  px-1.5! min-[600px]:px-3!  py-2!   min-[1200px]:py-2!  text-white cursor-pointer">
                    <div className="transition duration-300 -translate-x-2 group-hover:translate-x-2 flex justify-center items-center gap-1 min-[450px]:gap-2 text-center w-full">
                      <div className="flex justify-center items-center self-stretch pt-1 flex-1  text-[9px] min-[450px]:text-[13px] min-[600px]:text-[15px] opacity-0 text-white  transition duration-300">
                        <FaArrowRight />
                      </div>
                      <span className="text-nowrap capitalize ">Estimate</span>
                      <div className="flex justify-center items-center self-stretch pt-1 flex-1 text-[9px] min-[450px]:text-[13px] min-[600px]:text-[15px] opacity-100 transition duration-300 ">
                        <FaArrowRight className="" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>

              <div className="w-full flex flex-col items-center justify-center gap-3 min-[450px]:gap-6 bg-white shadow shadow-xl px-3 min-[450px]:px-6 py-4 min-[450px]:py-8 border border-gray-200 rounded-lg min-[450px]:rounded-xl ">
                <h2 className="w-full text-sm min-[450px]:text-3xl text-black font-bold pb-2 min-[450px]:pb-4 border-b border-gray-300">
                  Discount Coupon Code
                </h2>
                <div className="w-full grid grid-cols-2 gap-2 min-[450px]:gap-5">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className=" text-[10px]! min-[450px]:text-[14px]!  min-[600px]:text-base!    py-1 px-2 min-[450px]:py-2  min-[450px]:px-3 transition duration-300 rounded outline-0 border-1 border-neutral-400 focus:border-2 focus:border-sky-600 placeholder:text-gray-400 text-gray-500"
                  />
                  <button className="  group  text-[10px] min-[270px]:text-[13px] min-[600px]:text-[17px]  transition duration-300 font-semibold btn5 w-[80px]!  min-[270px]:w-[100px]! min-[350px]:w-full!  px-1.5! min-[600px]:px-3!  py-2!   min-[1200px]:py-2!  text-white cursor-pointer">
                    <div className="transition duration-300 -translate-x-2 group-hover:translate-x-2 flex justify-center items-center gap-1 min-[450px]:gap-2 text-center w-full">
                      <div className="flex justify-center items-center self-stretch pt-1 flex-1  text-[9px] min-[450px]:text-[13px] min-[600px]:text-[15px] opacity-0 text-white  transition duration-300">
                        <FaArrowRight />
                      </div>
                      <span className="text-nowrap capitalize ">
                        Apply Code
                      </span>
                      <div className="flex justify-center items-center self-stretch pt-1 flex-1 text-[9px] min-[450px]:text-[13px] min-[600px]:text-[15px] opacity-100 transition duration-300 ">
                        <FaArrowRight className="" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 min-[450px]:gap-8">
              <div className="w-full flex flex-col items-center justify-center gap-3 min-[450px]:gap-6 bg-white shadow shadow-xl px-3 min-[450px]:px-6 py-4 min-[450px]:py-8 border border-gray-200 rounded-lg min-[450px]:rounded-xl ">
                <h2 className="w-full text-sm min-[450px]:text-3xl text-black font-bold pb-2 min-[450px]:pb-4 border-b border-gray-300">
                  Cart Summary
                </h2>
                <div className="w-full flex justify-between items-center pb-4 border-b border-gray-300">
                  <span className="text-xs  min-[450px]:text-lg font-bold text-gray-500">
                    Total Items:
                  </span>
                  <span className="text-xs  min-[450px]:text-lg font-bold text-gray-500">
                    {ProductsFullInfo.reduce((acc, val) => acc + val.amount, 0)}
                  </span>
                </div>
                <div className="w-full flex justify-between items-center pb-4 border-b border-gray-300">
                  <span className="text-xs  min-[450px]:text-lg font-bold text-gray-500">
                    Sub Total
                  </span>
                  <span className="text-xs  min-[450px]:text-lg font-bold text-gray-500">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="w-full flex justify-between items-center pb-4 border-b-2 border-gray-300">
                  <span className="text-xs  min-[450px]:text-lg font-bold text-gray-500">
                    Shipping Cost
                  </span>
                  <span className="text-xs  min-[450px]:text-lg font-bold text-gray-500">
                    $00.00
                  </span>
                </div>

                <div className="w-full flex justify-between items-center pb-4 ">
                  <span className="text-xs  min-[450px]:text-xl font-bold text-gray-700">
                    Grand Total
                  </span>
                  <span className="text-xs  min-[450px]:text-xl font-bold text-gray-700">
                    ${totalPrice.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="w-full grid grid-cols-2 gap-5 ">
                <button className="group mt-1 text-[10px] min-[270px]:text-[13px] min-[600px]:text-[17px]  transition duration-300  btn5 w-full font-semibold  px-1.5! min-[600px]:px-3!  py-2.5!  min-[600px]:py-3! min-[1200px]:py-4!  text-white cursor-pointer">
                  <div className="transition duration-300 -translate-x-2 group-hover:translate-x-2 flex justify-center items-center gap-1 min-[450px]:gap-2 text-center w-full">
                    <div className="flex justify-center items-center self-stretch pt-1 flex-1  text-[9px] min-[450px]:text-[13px] min-[600px]:text-[15px] opacity-0 text-white  transition duration-300">
                      <FaArrowRight />
                    </div>
                    <span className="text-nowrap capitalize ">CheckOut</span>
                    <div className="flex justify-center items-center self-stretch pt-1 flex-1 text-[9px] min-[450px]:text-[13px] min-[600px]:text-[15px] opacity-100 transition duration-300 ">
                      <FaArrowRight className="" />
                    </div>
                  </div>
                </button>
                <button className="group mt-1 text-[10px] min-[270px]:text-[13px] min-[600px]:text-[17px]  transition duration-300  bg-white text-gray-50 border-2 border-gray-400 hover:border-blue-600 font-semibold rounded-lg hover:bg-blue-600  w-full  px-1.5! min-[600px]:px-3!  py-2.5!  min-[600px]:py-3! min-[1200px]:py-4!  text-white cursor-pointer">
                  <div className="transition duration-300 -translate-x-2 group-hover:translate-x-2 flex justify-center items-center gap-1 min-[450px]:gap-2 text-center w-full">
                    <div className="flex justify-center items-center self-stretch pt-1 flex-1  text-[9px] min-[450px]:text-[13px] min-[600px]:text-[15px] opacity-0 group-hover:opacity-100 text-gray-500 group-hover:text-white   transition duration-300">
                      <FaArrowRight />
                    </div>
                    <span className="text-nowrap capitalize text-gray-500 group-hover:text-white  ">
                      Updae Cart
                    </span>
                    <div className="flex justify-center items-center self-stretch pt-1 flex-1 text-[9px] min-[450px]:text-[13px] min-[600px]:text-[15px] opacity-100 transition duration-300 text-gray-500 group-hover:text-white ">
                      <FaArrowRight className="" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Cart;
