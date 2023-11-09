import { FiArrowLeft } from "react-icons/fi";
import { floatingEvent } from "../../data/data";

function FloatingEvent() {
  return (
    <a
      className="bg-gradient-to-r from-teal-500 to-indigo-800 px-5 py-2 whitespace-nowrap absolute origin-top-right -rotate-90 rounded-tr-2xl rounded-tl-2xl right-0 top-28 -translate-x-[30px] h-[30px] flex flex-row z-20 cursor-pointer items-center"
      onClick={() =>
        document
          .getElementById("registration")
          ?.scrollIntoView({ behavior: "smooth" })
      }
      onKeyDown={() =>
        document
          .getElementById("registration")
          ?.scrollIntoView({ behavior: "smooth" })
      }
    >
      <FiArrowLeft color="white" />
      <div className=" text-[10px] ml-3 text-white">{floatingEvent}</div>
      <div className="" />
    </a>
  );
}
export default FloatingEvent;
