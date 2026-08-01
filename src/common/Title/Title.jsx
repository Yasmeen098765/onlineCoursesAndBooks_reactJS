import "./title.css";

function Title({
  MainText,
  subText,
  colorText,
  bgText,
  width1,
  items,
  topOffset,
  colorText2
}) {
  // تحديد الـ width بناءً على الشرط
  const widthClass = width1 ? 'min-[1200px]:w-[43%]' : 'min-[1200px]:w-[60%]';
  
  return (
    <div
      className={`title  flex flex-col justify-center ${items} gap-4 text-center  w-full`}
    >
      <h3
        className={`text-[10px] min-[350px]:text-[13px] min-[450px]:text-[14px] min-[600px]:text-[17px] min-[900px]:text-[17px] ${colorText} ${bgText}  rounded-4xl font-semibold py-2 px-4 min-[350px]:px-7 uppercase `}
      >
        {MainText}
      </h3>
      <h2
        className={`${colorText2}  ${topOffset}  text-[14px] min-[270px]:text-[16px] min-[350px]:text-[18px] min-[450px]:text-[22px] min-[600px]:text-[27px] min-[900px]:text-[31px] min-[1200px]:text-[36px] font-bold w-[86%] min-[470px]:w-[70%] min-[600px]:w-[75%] min-[800px]:w-[53%]  ${widthClass} text-gray-800 `}
        style={{ lineHeight: "1.5" }}
      >
        {subText}
      </h2>
    </div>
  );
}

export default Title;
