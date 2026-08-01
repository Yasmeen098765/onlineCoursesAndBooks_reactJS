import "./counter.css";
import * as CountUpModule from "react-countup";
const CountUp = CountUpModule.default.default;

function Counter({ img, count, content, translate, translate1 }) {
  // تحديد كلاس الـ hover بناءً على الشرط
  const hoverClass = translate1
    ? "hover:translate-y-[-9%]"
    : "hover:translate-y-[-3.5%]";

  // تحديد كلاس الـ translate الأساسي
  const translateClass = translate ? "translate-y-[-8%]" : "translate-y-[-2%]";
  return (
    <div className="pt-16 counterCircle  relative  ">
      <div
        className={`counterOut relative  ${translateClass} ${hoverClass} transition duration-300 `}
      >
        <div
          className={` transition duration-300   counterBottom shadow-2xl shadow-gray-300 rounded-lg relative overflow-hidden   `}
        >
          <div
            className={`counter1   relative   flex flex-col items-center gap-3  min-[400px]:gap-5 rounded-lg bg-white p-5 min-[300px]:p-6  min-[479px]:px-2 min-[900px]:p-10 overflow-hidden `}
          >
            <div className="relative  counterImg  w-full flex items-center justify-center ">
              <div className="bg-white p-2 min-[300px]:p-3  min-[900px]:p-5 shadow-xl rounded-full relative ">
                <img src={img} className="w-[60px]" />
              </div>
            </div>
            <span className="text-gray-800 text-xl min-[300px]:text-2xl min-[400px]:text-3xl min-[900px]:text-4xl min-[1200px]:text-5xl font-bold text-nowrap hover:text-blue-600 transition duration-300 cursor-pointer">
              <CountUp start={0} end={count} duration={3} />+
            </span>
            <p className="capitalize text-center text-sm min-[300px]:text-md min-[400px]:text-lg min-[900px]:text-lg text-gray-500  ">
              {content}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
