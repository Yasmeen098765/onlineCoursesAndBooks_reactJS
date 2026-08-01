import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthContext";

export const cartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cartIDS, setCartIDS] = useState({}); //{idProduct : amountProduct} => {1:7 , 6:8}
  const [records, setRecords] = useState([]); //state success
  const [cartErr, setCartErr] = useState(null); //state error
  const [cartLoader, setCartLoader] = useState(false); //state loader
  const [cartItemsAmount, setCartItemsAmount] = useState(0);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("cartIDS")) || {};
    setCartIDS(storedData);
  }, []);

  function addToCart(id) {
    if (!cartIDS[id]) {
      cartIDS[id] = 1;
    } else {
      cartIDS[id]++;
    }
    setCartIDS({ ...cartIDS });
  }
  function addToCart2(id, title, navigate) {
    if (!currentUser) {
      toast.error(
        `You must log in first to add "${title}" course to your cart.`,
        {
          duration: 1500,
        },
      );
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      //إضافة المنتج ب كمية ثابتة هي  واحد
      if (!cartIDS[id]) {
        cartIDS[id] = 1;
        toast.success(`Added course (${title}) to cart successfully!`, {
          duration: 1200,
        });
      } else {
        toast.error(`This course (${title}) is already in your cart`, {
          duration: 1200,
        });
      }
      setCartIDS({ ...cartIDS });
    }
  }
  async function getCardData() {
    try {
      setCartLoader(true);
      const allCartIds = Object.keys(cartIDS);
      const concatenatedIDS = allCartIds.map((id) => `id=${id}`).join("&");
      if (allCartIds.length > 0) {
        let { data } = await axios.get(
          `http://localhost:3000/products?${concatenatedIDS}`,
        );
        setRecords(data);
      }
    } catch (error) {
      const messageError = (
        <>
          {error?.message}
          <br />
          An error occurred while loading products in cart...
        </>
      );
      setCartErr(messageError);
    } finally {
      setCartLoader(false);
    }
  }

  const changeAmount = (id, amount) => {
    cartIDS[id] = amount;
    setRecords([...records]);
    setCartIDS({ ...cartIDS });
  };

  const deleteProduct = (pro) => {
    Swal.fire({
      html: `
    <div class="flex flex-col items-center gap-3 text-center">
      <!-- SVG أيقونة تحذير -->
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L1 21H23L12 2ZM12 9V14M12 18H12.01" stroke="#fbbf24" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 2L1 21H23L12 2Z" fill="#fbbf24" opacity="0.25"/>
      </svg>
      
      <div class="flex flex-col items-center gap-1 text-xs min-[250px]:text-[14px] min-[270px]:text-[16px] min-[500px]:text-lg min-[600px]:text-xl min-[900px]:text-2xl p-0 m-0">
        <span class="">Are you sure to delete this product</span>
        <span style="background-clip:text" class=" bg-linear-65 from-blue-500 to-purple-500 w-max  text-transparent font-bold ">(${pro.title})</span>
        <span class=" text-xs min-[250px]:text-sm min-[500px]:text-lg">You won't be able to revert this!</span>
      </div>
    </div>
  `,
      width: 350,
      padding: "0.8rem",
      icon: undefined,
      showCancelButton: true,
      confirmButtonColor: "#f59e0b", // لون أصفر متناسق
      cancelButtonColor: "rgb(69, 123, 255)", // لون رمادي
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
      timerProgressBar: true, // شريط تقدم جميل
      timer: false,
      customClass: {
        popup:
          "book-card-swal-popup book-card-swal-popup1 book-card-swal-popup-warning",
        htmlContainer: "book-card-swal-html",
        confirmButton: "swal-confirm-btn",
        cancelButton: "swal-cancel-btn",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        delete cartIDS[pro.id];
        let newRecords = records.filter((val) => val.id !== pro.id);
        setRecords(newRecords);
        Swal.fire({
          html: `
    <div class="flex flex-col items-center gap-3 text-center">
      <!-- SVG أيقونة نجاح -->
      <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#22c55e"/>
      </svg>
      
      <div class=" flex flex-col items-center gap-1 text-xs min-[250px]:text-[14px] min-[270px]:text-[16px] min-[500px]:text-lg min-[600px]:text-xl min-[900px]:text-2xl p-0 m-0">
        <span class="text-red-400 ">Deleted!</span>
        <span class=" ">Your product</span>
        <span class="text-red-400 font-bold">(${pro.title})</span>
        <span class="">has been deleted successfully </span>
      </div>
    </div>
  `,
          width: 350,
          padding: "0.8rem",
          timerProgressBar: false, // شريط تقدم جميل
          icon: undefined,
          confirmButtonColor: "red", // لون أصفر متناسق
          customClass: {
            popup: "book-card-swal-popup book-card-swal-popup-error",
            htmlContainer: "book-card-swal-html",
            confirmButton: "swal-confirm-btn",
          },
        });
      }
    });
  };
  const addToCartFromDetails = (pro, counter, navigate) => {
    if (!currentUser) {
      toast.error(
        `You must log in first to add "${pro.title}" book  to your cart.`,
        {
          duration: 1500,
        },
      );
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } else {
      const currentAmount = cartIDS[pro.id] || 0;
      const newAmount = currentAmount + counter;
      const maxStock = pro.stock;

      if (newAmount <= maxStock) {
        cartIDS[pro.id] = newAmount;
        setCartIDS({ ...cartIDS });
        toast.success(
          `Added ${counter} ${counter === 1 ? "book" : "books"} of ${pro.title} to cart`,
        );
      } else {
        toast.error(
          `Only ${maxStock} ${maxStock === 1 ? "book" : "books"} available in stock , can't add  ${pro.title} to cart`,
        );
      }
    }
  };

  const cartAmount = () => {
    let amounts = Object.values(cartIDS);
    if (amounts.length > 0) {
      let amountCart = amounts.reduce((acc, val) => acc + val, 0);
      if (amountCart) {
        setCartItemsAmount(amountCart);
      } else {
        setCartItemsAmount(0);
      }
    } else {
      setCartItemsAmount(0);
    }
  };

  useEffect(() => {
    localStorage.setItem("cartIDS", JSON.stringify(cartIDS));
  }, [cartIDS, records]);

  return (
    <cartContext.Provider
      value={{
        addToCartFromDetails,
        addToCart,
        cartIDS,
        getCardData,
        records,
        cartErr,
        cartLoader,
        changeAmount,
        deleteProduct,
        addToCart2,
        cartItemsAmount,
        cartAmount,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};
