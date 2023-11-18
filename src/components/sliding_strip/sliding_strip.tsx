import { bannerText } from "../../data/data";

function SlidingStrip() {
  return (
    <div className="overflow-hidden py-[20px] md:py-[25px] px-0 bg-[#353945] whitespace-nowrap relative -rotate-12 scale-110 z-10 md:-rotate-6">
      <div className="banner-slide">
        {bannerText.map((item, index) => {
          if (item.title === ".") {
            return (
              <div
                className="w-2 h-2 rounded-full bg-red-500 inline-block ml-5 mr-5 md:w-2 md:h-2"
                key={item.title + index}
              ></div>
            );
          }
          return (
            <p
              className="text-xs text-[#D6D6D6] margin inline-block md:text-[12px]"
              key={item.title}
            >
              {item.title}
            </p>
          );
        })}
      </div>

      <div className="banner-slide">
        {bannerText.map((item, index) => {
          if (item.title === ".") {
            return (
              <div
                className="w-2 h-2 rounded-full bg-red-500 inline-block ml-5 mr-5  md:w-2 md:h-2"
                key={item.title + index}
              ></div>
            );
          }
          return (
            <p
              className="text-xs text-[#D6D6D6] margin inline-block md:text-[12px]"
              key={item.title}
            >
              {item.title}
            </p>
          );
        })}
      </div>
    </div>
  );
}
export default SlidingStrip;
