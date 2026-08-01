import { IoCloseSharp } from "react-icons/io5";
import "./CartItem.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { cartContext } from "../../context/CartContext";
import { useContext } from "react";

function CartItem({ val }) {
  const { changeAmount, deleteProduct } = useContext(cartContext);

  // حساب السعر بعد الخصم
  const finalPrice = val.price - (val.price * val.discount) / 100;
  const totalItemPrice = (finalPrice * val.amount).toFixed(2);

  // خيارات الكمية
  let maxCount = Array(val.stock)
    .fill(0)
    .map((_, num) => {
      const index = ++num;
      return (
        <MenuItem key={index} value={index}>
          {index}
        </MenuItem>
      );
    });

  return (
    <tr className="cart-item-row border-b hover:bg-gray-50 transition duration-200">
      {/* ===== الصورة ===== */}
      <td className=" p-2 text-center">
        <img
          src={val.image}
          alt={val.title}
          className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-lg shadow mx-auto object-cover"
        />
      </td>

      {/* ===== اسم المنتج ===== */}
      <td className="p-2 text-center">
        <span className="text-xs sm:text-sm md:text-base font-semibold text-blue-600 capitalize ">
          {val.title}
        </span>
      </td>

      {/* ===== السعر ===== */}
      <td className="p-2 text-center">
        <span className="text-sm sm:text-base md:text-lg font-bold text-red-400">
          ${val.price.toFixed(2)}
        </span>
        {val.discount > 0 && (
          <span className="block text-[10px] sm:text-xs text-green-500">
            -{val.discount}%
          </span>
        )}
      </td>

      {/* ===== الكمية ===== */}
      <td className="p-2 text-center">
        <Box
          sx={{
            minWidth: { xs: 60, sm: 80, md: 100 },
            maxWidth: { xs: 80, sm: 100, md: 120 },
            mx: "auto",
          }}
        >
          <FormControl fullWidth size="small">
            <InputLabel id={`amount-label-${val.id}`}>Qty</InputLabel>
            <Select
              labelId={`amount-label-${val.id}`}
              id={`amount-select-${val.id}`}
              value={val.amount}
              label="Qty"
              onChange={(e) => changeAmount(val.id, e.target.value)}
              sx={{
                fontSize: { xs: "0.7rem", sm: "0.8rem", md: "0.9rem" },
                "& .MuiSelect-select": {
                  py: { xs: 0.5, sm: 1 },
                },
              }}
            >
              {maxCount}
            </Select>
          </FormControl>
        </Box>
      </td>

      {/* ===== المجموع ===== */}
      <td className="p-2 text-center">
        <span className="text-sm sm:text-base md:text-lg font-bold text-green-500">
          ${totalItemPrice}
        </span>
      </td>

      {/* ===== زر الحذف ===== */}
      <td className=" p-2 text-center">
        <button
          onClick={() => deleteProduct(val)}
          className="text-xl lg:text-2xl text-gray-400 hover:text-red-500 transition duration-300 hover:scale-110"
          title="Remove product"
        >
          <IoCloseSharp />
        </button>
      </td>
    </tr>
  );
}

export default CartItem;
