import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { FaArrowRight, FaChevronRight } from "react-icons/fa";
import { TextField } from "@mui/material";
import { useContext, useState } from "react";
import { LuLoaderCircle } from "react-icons/lu";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthContext } from "../../context/AuthContext";
import { LoginSchema } from "../../validations/LoginValidation";

function Login() {
  const navigate = useNavigate();
  const [LoadingBtn, setLoadingBtn] = useState(false);
  const { LoginWithSupabase } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    resolver: zodResolver(LoginSchema), // تم تحديد ال schema
    mode: "all", //في جميع الحالات اريد ان يشتغل التحقق من القيم المدخلة
  });

  const LoginHande = async (data) => {
    try {
      setLoadingBtn(true);
      await LoginWithSupabase(data).then(() => navigate("/profile"));
    } catch (error) {
      console.log("error sign in " + error);
    } finally {
      setLoadingBtn(false);
    }
  };
  return (
    <section className="Auth">
      {/* ===== Header ===== */}
      <div className="auth-heading py-20 flex flex-col items-center gap-2 min-[450px]:gap-5">
        <h2 className="pb-2 text-2xl  min-[400px]:text-3xl min-[500px]:text-4xl  min-[600px]:text-5xl font-semibold bg-linear-65 bg-clip-text from-blue-600 to-purple-600 w-max text-transparent">
          Login
        </h2>
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <Link to={"/"} className="font-semibold text-gray-600 ">
            Home
          </Link>
          <FaChevronRight className="text-gray-400" />
          <span className=" bg-linear-65 bg-clip-text from-blue-600 to-purple-600 w-max text-transparent">
            Login
          </span>
        </div>
      </div>
      {/* ===== Body ===== */}
      <div className=" mx-auto px-4 min-[300px]:px-8 min-[400px]:px-10 min-[500px]:px-14 min-[700px]:px-20 py-8 min-[400px]:py-16">
        <div className="bg-white shadow-lg p-4 min-[400px]:p-8 min-[600px]:p-10 my-8 min-[400px]:my-10 rounded-lg min-[400px]:rounded-2xl border border-gray-200">
          <form onSubmit={handleSubmit(LoginHande)}>
            <h3 className="mb-4 min-[450px]:mb-8 mx-auto pb-2 text-lg min-[300px]:text-xl min-[400px]:text-3xl font-semibold bg-clip-text bg-linear-65 from-blue-600 to-purple-600 text-transparent w-max">
              Login
            </h3>

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

            <div className=" flex items-center justify-center mt-5">
              <button
                disabled={!isDirty || !isValid || LoadingBtn}
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
                    <span className="text-nowrap ">Login</span>
                    <div className="flex justify-start items-center pt-0 min-[451px]:pt-1 flex-1 self-stretch text-[9px] min-[350px]:text-[13px] min-[600px]:text-[15px] opacity-100 transition duration-300 ">
                      <FaArrowRight className="" />
                    </div>
                  </div>
                )}
              </button>
            </div>

            <p
              onClick={() => navigate("/register")}
              className="mt-3 min-[400px]:mt-5  text-center cursor-pointer text-[10px] min-[400px]:text-sm text-gray-500 hover:text-gray-700 cursor-pointer transition-colors"
            >
              Don't have an account?
              <span className="ml-1 font-medium text-blue-600 hover:text-blue-800 hover:underline">
                Sign Up
              </span>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
