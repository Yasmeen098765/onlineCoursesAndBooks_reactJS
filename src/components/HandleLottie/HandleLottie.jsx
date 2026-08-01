import Lottie from "react-lottie-player";
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'
import SecondaryPageLoader from "../../assets/lottieFiles/secondaryLoader.json";
import MainPageLoader from "../../assets/lottieFiles/mainLoader.json";
import ErrorPageLoader from "../../assets/lottieFiles/errorLoader.json";
import { useNavigate } from "react-router-dom";
function HandleLottie({ state }) {
  const navigate = useNavigate();
  return (
    <div className=" handleLottie flex flex-col gap-2 justify-center items-center min-h-[90vh]">
      <div className="mx-auto px-2 sm:px-3 md:px-4  lg:px-5">
        {state == "main" ? (
          <>
            <Lottie
              loop
              animationData={MainPageLoader}
              play
              className="mx-auto w-auto min-[900px]:w-[70%]"
            />
            <p className="text-blue-600 capitalize  text-xs min-[230px]:text-sm min-[270px]:text-md min-[350px]:text-lg  min-[600px]:text-xl min-[900px]:text-2xl cursor-pointer text-center mx-auto">
              loading.....
            </p>
          </>
        ) : state == "secondary" ? (
          <>
            <Lottie
              loop
              animationData={SecondaryPageLoader}
              play
              className=" w-[100%] min-[500px]:w-[80%] min-[700px]:w-[70%] min-[800px]:w-[60%] min-[900px]:w-[55%] mx-auto "
            />
            <p className="text-blue-600 capitalize  text-xs min-[230px]:text-sm min-[270px]:text-md min-[350px]:text-lg  min-[600px]:text-xl min-[900px]:text-2xl cursor-pointer text-center mx-auto">
              loading.....
            </p>
          </>
        ) : (
          <>
            <Lottie
              loop
              animationData={ErrorPageLoader}
              play
              className="w-[100%] min-[300px]:w-[70%] min-[500px]:w-[60%] min-[600px]:w-[60%] min-[900px]:w-[55%] mx-auto "
            />
            <p
              onClick={() => navigate("/")}
              className="text-blue-600 capitalize  text-xs min-[230px]:text-sm min-[270px]:text-md min-[350px]:text-lg  min-[600px]:text-xl min-[900px]:text-2xl cursor-pointer text-center mx-auto"
            >
              what about going back to safity?
            </p>
          </>
        )}
      </div>
    </div>
  );
}

export default HandleLottie;
