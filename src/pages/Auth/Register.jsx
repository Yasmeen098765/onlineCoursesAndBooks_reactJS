import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { FaArrowRight, FaChevronRight, FaFileUpload } from "react-icons/fa";
import { InputAdornment, TextField } from "@mui/material";
import { useContext, useState } from "react";
import axios from "axios";
import { LuLoaderCircle } from "react-icons/lu";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../context/AuthContext";
import { RegisterSchema } from "../../validations/RegisterValidation";

function Register() {
  const [imgUrl, setImgUrl] = useState("");
  const [imgUrlLoading, setImgUrlLoading] = useState(false);
  const [LoadingBtn, setLoadingBtn] = useState(false);
  const [imgUrlError, setImgUrlError] = useState(false);
  const { RegisterWithSupabase } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleImgGetURL = async (img) => {
    const formData = new FormData();
    formData.append("image", img);
    try {
      setImgUrlLoading(true);
      const { data } = await axios.post(
        `https://api.imgbb.com/1/upload?key=c2ef88bd0dbcd98075885a8f3c0196bc`,
        formData,
      );
      if (data) {
        setImgUrl(data.data.url);
      }
    } catch (error) {
      setImgUrlError(error);
      toast.error("error in connect to API for processing image", {
        duration: 1200,
      });
      console.log(error);
    } finally {
      setImgUrlLoading(false);
    }
  };

  // register => name in input
  //handleSubmit => مسكت كل قيم حقول الادخال ومنعت عملها الافتراضي  التي هي منع الريفرش
  // حلقة الوصل ما بين مكتبتين هما zod , react-hook-form => is hookForm/Resolver
  //errors هي التي اخزن فيها الerror  schema
  //isDirty == true كل حقول الادخال فيها بيانات
  //isValid == true كل  حقول الادخال قيمها صالحة

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(RegisterSchema), // تم تحديد ال schema
    mode: "all", //في جميع الحالات اريد ان يشتغل التحقق من القيم المدخلة
  });

  const registerHande = async (data) => {
    try {
      setLoadingBtn(true);
      const { firstName, lastName, phone, email, password } = data;

      const newData = {
        phone: phone,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        image: imgUrl,
      };
      await RegisterWithSupabase(newData).then(() => navigate("/profile"));
    } catch (error) {
      console.log("error signup" + error);
    } finally {
      setLoadingBtn(false);
    }
  };
  return (
    <section className="Auth">
      {/* ===== Header ===== */}
      <div className="auth-heading py-20 flex flex-col items-center gap-2 min-[450px]:gap-5">
        <h2 className="pb-2 text-2xl  min-[400px]:text-3xl min-[500px]:text-4xl  min-[600px]:text-5xl font-semibold bg-linear-65 bg-clip-text from-blue-600 to-purple-600 w-max text-transparent">
          Register
        </h2>
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <Link to={"/"} className="font-semibold text-gray-600 ">
            Home
          </Link>
          <FaChevronRight className="text-gray-400" />
          <span className=" bg-linear-65 bg-clip-text from-blue-600 to-purple-600 w-max text-transparent">
            Register
          </span>
        </div>
      </div>
      {/* ===== Body ===== */}
      <div className=" mx-auto px-4 min-[300px]:px-8 min-[400px]:px-10 min-[500px]:px-14 min-[700px]:px-20 py-8 min-[400px]:py-16">
        <div className="bg-white shadow-lg p-4 min-[400px]:p-8 min-[600px]:p-10 my-8 min-[400px]:my-10 rounded-lg min-[400px]:rounded-2xl border border-gray-200">
          <form onSubmit={handleSubmit(registerHande)}>
            <h3 className="mb-4 min-[450px]:mb-8 mx-auto pb-2   text-lg  min-[300px]:text-xl min-[400px]:text-3xl font-semibold bg-clip-text bg-linear-65 from-blue-600 to-purple-600 text-transparent w-max">
              Register
            </h3>
            <TextField
              type="text"
              {...register("firstName")}
              error={errors.firstName}
              helperText={errors.firstName && errors?.firstName?.message} //لعرض رسالة الغلط
              label="firstName"
              variant="outlined"
              required
              fullWidth
              sx={{
                mb: "12px",
                "@media (min-width: 700px)": {
                  marginBottom: "15px !important",
                },
                "@media (min-width: 900px)": {
                  marginBottom: "20px !important",
                },
                "& .MuiInputBase-input": {
                  py: "12px  !important",
                  fontSize: "11px",
                  color: "rgb(115, 118, 119) !important",
                  fontWeight: "normal !important",
                  "@media (min-width: 400px)": {
                    paddingBottom: "10px !important ",
                    paddingTop: "10px !important ",
                    fontSize: "13px",
                  },
                  "@media (min-width: 450px)": {
                    paddingBottom: "10px !important ",
                    paddingTop: "12px !important ",
                  },
                  "@media (min-width: 500px)": {
                    fontSize: "15px",
                    paddingBottom: "12px !important ",
                    paddingTop: "12px !important ",
                  },
                  "@media (min-width: 600px)": {
                    paddingBottom: "14px !important ",
                    paddingTop: "14px !important ",
                    fontSize: "16px",
                  },
                },
                "& .MuiInputLabel-root": {
                  fontSize: "11px",
                  color: "#6b7280",
                  "@media (min-width: 400px)": {
                    fontSize: "12px",
                  },
                  "@media (min-width: 500px)": {
                    fontSize: "16px",
                  },
                },
              }}
            />
            <TextField
              type="text"
              {...register("lastName")}
              error={errors.lastName}
              helperText={errors.lastName && errors?.lastName?.message} //لعرض رسالة الغلط
              label="lastName"
              required
              variant="outlined"
              fullWidth
              sx={{
                mb: "12px",
                "@media (min-width: 700px)": {
                  marginBottom: "15px !important",
                },
                "@media (min-width: 900px)": {
                  marginBottom: "20px !important",
                },
                "& .MuiInputBase-input": {
                  py: "12px  !important",
                  fontSize: "11px",
                  color: "rgb(115, 118, 119) !important",
                  fontWeight: "normal !important",
                  "@media (min-width: 400px)": {
                    paddingBottom: "10px !important ",
                    paddingTop: "10px !important ",
                    fontSize: "13px",
                  },
                  "@media (min-width: 450px)": {
                    paddingBottom: "10px !important ",
                    paddingTop: "12px !important ",
                  },
                  "@media (min-width: 500px)": {
                    fontSize: "15px",
                    paddingBottom: "12px !important ",
                    paddingTop: "12px !important ",
                  },
                  "@media (min-width: 600px)": {
                    paddingBottom: "14px !important ",
                    paddingTop: "14px !important ",
                    fontSize: "16px",
                  },
                },
                "& .MuiInputLabel-root": {
                  fontSize: "11px",
                  color: "#6b7280",
                  "@media (min-width: 400px)": {
                    fontSize: "12px",
                  },
                  "@media (min-width: 500px)": {
                    fontSize: "16px",
                  },
                },
              }}
            />
            <TextField
              type="number"
              {...register("phone")}
              error={errors.phone}
              helperText={errors.phone && errors?.phone?.message} //لعرض رسالة الغلط
              label="phone"
              required
              variant="outlined"
              fullWidth
              sx={{
                mb: "12px",
                "@media (min-width: 700px)": {
                  marginBottom: "15px !important",
                },
                "@media (min-width: 900px)": {
                  marginBottom: "20px !important",
                },
                "& .MuiInputBase-input": {
                  py: "12px  !important",
                  fontSize: "11px",
                  color: "rgb(115, 118, 119) !important",
                  fontWeight: "normal !important",
                  "@media (min-width: 400px)": {
                    paddingBottom: "10px !important ",
                    paddingTop: "10px !important ",
                    fontSize: "13px",
                  },
                  "@media (min-width: 450px)": {
                    paddingBottom: "10px !important ",
                    paddingTop: "12px !important ",
                  },
                  "@media (min-width: 500px)": {
                    fontSize: "15px",
                    paddingBottom: "12px !important ",
                    paddingTop: "12px !important ",
                  },
                  "@media (min-width: 600px)": {
                    paddingBottom: "14px !important ",
                    paddingTop: "14px !important ",
                    fontSize: "16px",
                  },
                },
                "& .MuiInputLabel-root": {
                  fontSize: "11px",
                  color: "#6b7280",
                  "@media (min-width: 400px)": {
                    fontSize: "12px",
                  },
                  "@media (min-width: 500px)": {
                    fontSize: "16px",
                  },
                },
              }}
            />
            <TextField
              type="email"
              {...register("email")}
              error={errors.email}
              helperText={errors.email && errors?.email?.message} //لعرض رسالة الغلط
              label="email"
              required
              variant="outlined"
              fullWidth
              sx={{
                mb: "12px",
                "@media (min-width: 700px)": {
                  marginBottom: "15px !important",
                },
                "@media (min-width: 900px)": {
                  marginBottom: "20px !important",
                },
                "& .MuiInputBase-input": {
                  py: "12px  !important",
                  fontSize: "11px",
                  color: "rgb(115, 118, 119) !important",
                  fontWeight: "normal !important",
                  "@media (min-width: 400px)": {
                    paddingBottom: "10px !important ",
                    paddingTop: "10px !important ",
                    fontSize: "13px",
                  },
                  "@media (min-width: 450px)": {
                    paddingBottom: "10px !important ",
                    paddingTop: "12px !important ",
                  },
                  "@media (min-width: 500px)": {
                    fontSize: "15px",
                    paddingBottom: "12px !important ",
                    paddingTop: "12px !important ",
                  },
                  "@media (min-width: 600px)": {
                    paddingBottom: "14px !important ",
                    paddingTop: "14px !important ",
                    fontSize: "16px",
                  },
                },
                "& .MuiInputLabel-root": {
                  fontSize: "11px",
                  color: "#6b7280",
                  "@media (min-width: 400px)": {
                    fontSize: "12px",
                  },
                  "@media (min-width: 500px)": {
                    fontSize: "16px",
                  },
                },
              }}
            />
            <TextField
              type="password"
              {...register("password")}
              error={errors.password}
              helperText={errors.password && errors?.password?.message} //لعرض رسالة الغلط
              label="password"
              required
              variant="outlined"
              autoComplete="current-password"
              fullWidth
              sx={{
                mb: "12px",
                "@media (min-width: 700px)": {
                  marginBottom: "15px !important",
                },
                "@media (min-width: 900px)": {
                  marginBottom: "20px !important",
                },
                "& .MuiInputBase-input": {
                  py: "12px  !important",
                  fontSize: "11px",
                  color: "rgb(115, 118, 119) !important",
                  fontWeight: "normal !important",
                  "@media (min-width: 400px)": {
                    paddingBottom: "10px !important ",
                    paddingTop: "10px !important ",
                    fontSize: "13px",
                  },
                  "@media (min-width: 450px)": {
                    paddingBottom: "10px !important ",
                    paddingTop: "12px !important ",
                  },
                  "@media (min-width: 500px)": {
                    fontSize: "15px",
                    paddingBottom: "12px !important ",
                    paddingTop: "12px !important ",
                  },
                  "@media (min-width: 600px)": {
                    paddingBottom: "14px !important ",
                    paddingTop: "14px !important ",
                    fontSize: "16px",
                  },
                },
                "& .MuiInputLabel-root": {
                  fontSize: "11px",
                  color: "#6b7280",
                  "@media (min-width: 400px)": {
                    fontSize: "12px",
                  },
                  "@media (min-width: 500px)": {
                    fontSize: "16px",
                  },
                },
              }}
            />
            <TextField
              type="password"
              {...register("confirmPassword")}
              error={errors.confirmPassword}
              helperText={
                errors.confirmPassword && errors?.confirmPassword?.message
              } //لعرض رسالة الغلط
              required
              label="confirmPassword"
              variant="outlined"
              autoComplete="current-password"
              fullWidth
              sx={{
                mb: "12px",
                "@media (min-width: 700px)": {
                  marginBottom: "15px !important",
                },
                "@media (min-width: 900px)": {
                  marginBottom: "20px !important",
                },
                "& .MuiInputBase-input": {
                  py: "12px  !important",
                  fontSize: "11px",
                  color: "rgb(115, 118, 119) !important",
                  fontWeight: "normal !important",
                  "@media (min-width: 400px)": {
                    paddingBottom: "10px !important ",
                    paddingTop: "10px !important ",
                    fontSize: "13px",
                  },
                  "@media (min-width: 450px)": {
                    paddingBottom: "10px !important ",
                    paddingTop: "12px !important ",
                  },
                  "@media (min-width: 500px)": {
                    fontSize: "15px",
                    paddingBottom: "12px !important ",
                    paddingTop: "12px !important ",
                  },
                  "@media (min-width: 600px)": {
                    paddingBottom: "14px !important ",
                    paddingTop: "14px !important ",
                    fontSize: "16px",
                  },
                },
                "& .MuiInputLabel-root": {
                  fontSize: "11px",
                  color: "#6b7280",
                  "@media (min-width: 400px)": {
                    fontSize: "12px",
                  },
                  "@media (min-width: 500px)": {
                    fontSize: "16px",
                  },
                },
              }}
            />

            <input
              {...register("image", {
                onChange: (e) => handleImgGetURL(e.target.files[0]),
              })}
              type="file"
              className="hidden"
              id="uploadImage"
              accept="image/*"
            />

            {imgUrl == "" ? (
              ""
            ) : (
              <div className="mb-5 p-1 flex items-center justify-center overflow-hidden border-2 border-blue-500 rounded-full w-max">
                <img
                  src={imgUrl}
                  className="w-8 h-8  min-[350px]:w-10 min-[350px]:h-10 min-[600px]:w-14 min-[600px]:h-14 object-cover rounded-full"
                />
              </div>
            )}

            <TextField
              type="text"
              required
              label="UploadImage"
              error={errors.image}
              helperText={errors.image && errors?.image?.message} //لعرض رسالة الغلط
              value={imgUrlLoading ? "Processing..." : imgUrl}
              fullWidth
              variant="outlined"
              slotProps={{
                input: {
                  readOnly: true,
                  endAdornment: (
                    <InputAdornment>
                      <label
                        htmlFor="uploadImage"
                        className="text-xs min-[600px]:text-xl cursor-pointer  "
                      >
                        <FaFileUpload />
                      </label>
                    </InputAdornment>
                  ),
                },
              }}
              sx={{
                mb: "12px",
                "@media (min-width: 700px)": {
                  marginBottom: "15px !important",
                },
                "@media (min-width: 900px)": {
                  marginBottom: "20px !important",
                },
                "& .MuiInputBase-input": {
                  py: "12px  !important",
                  fontSize: "11px",
                  color: "rgb(115, 118, 119) !important",
                  fontWeight: "normal !important",
                  "@media (min-width: 400px)": {
                    paddingBottom: "10px !important ",
                    paddingTop: "10px !important ",
                    fontSize: "13px",
                  },
                  "@media (min-width: 450px)": {
                    paddingBottom: "10px !important ",
                    paddingTop: "12px !important ",
                  },
                  "@media (min-width: 500px)": {
                    fontSize: "15px",
                    paddingBottom: "12px !important ",
                    paddingTop: "12px !important ",
                  },
                  "@media (min-width: 600px)": {
                    paddingBottom: "14px !important ",
                    paddingTop: "14px !important ",
                    fontSize: "16px",
                  },
                },
                "& .MuiInputLabel-root": {
                  fontSize: "11px",
                  color: "#6b7280",
                  "@media (min-width: 400px)": {
                    fontSize: "12px",
                  },
                  "@media (min-width: 500px)": {
                    fontSize: "16px",
                  },
                },
              }}
            />
            {imgUrlLoading && (
              <div className="flex items-center gap-2 text-blue-500 ">
                <LuLoaderCircle className="animate-spin " />
                <span className=" ">Processing...</span>
              </div>
            )}

            <div className=" flex items-center justify-center mt-5">
              <button
                disabled={
                  imgUrlLoading ||
                  !isDirty ||
                  !isValid ||
                  imgUrlError ||
                  LoadingBtn
                }
                type="submit"
                className=" group  text-[9px] min-[350px]:text-[13px] min-[600px]:text-[17px]  transition duration-300  btn5 w-[70%]  min-[600px]:w-[50%]  px-1.5 min-[600px]:px-3  py-2.5! min-[350px]:py-3!  min-[400px]:py-3! min-[1200px]:py-4!  text-white cursor-pointer
                 disabled:opacity-50! disabled:cursor-not-allowed! disabled:pointer-events-none!"
              >
                {LoadingBtn ? (
                  <div className="flex items-center justify-center items-center gap-2 text-white ">
                    <LuLoaderCircle className="animate-spin " />
                    <span className=" ">Processing...</span>
                  </div>
                ) : (
                  <div className=" flex justify-center items-center gap-2 text-center w-full transition duration-300 disabled:translate-x-0 disabled:group-hover:translate-x-0 -translate-x-2 group-hover:translate-x-2 ">
                    <div className="flex justify-end items-center self-stretch pt-0 min-[451px]:pt-1 flex-1  text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px] opacity-0 text-white  transition duration-300">
                      <FaArrowRight className=" " />
                    </div>
                    <span className="text-nowrap ">Register</span>
                    <div className="flex justify-start items-center pt-0 min-[451px]:pt-1 flex-1 self-stretch text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px] opacity-100 transition duration-300 ">
                      <FaArrowRight className="" />
                    </div>
                  </div>
                )}
              </button>
            </div>

            <p
              onClick={() => navigate("/login")}
              className="mt-3 min-[400px]:mt-5 cursor-pointer text-center text-[10px] min-[400px]:text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors"
            >
              You Already have an account?
              <span className="ml-1 font-medium text-blue-600 hover:text-blue-800 hover:underline">
                Sign In
              </span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Register;
