// import BannerImage from "../../assets/images/Sport Banner.svg";
import BannerImage2 from "../../assets/images/Sport Banner2.png";

function Landing() {
  return (
    <div className="container px-10  mx-auto">
      <div className="">
        <div className="">
          <h1 className="text-white font-medium   mt-5 mb-5 text-xl">
            The Bisons League (TBL)
          </h1>
          <p className="text-[#D4D5E1] font-light text-[14px]  leading-[30px] w-[90%]">
            Get ready to battle it out, as teams vie for the coveted title of
            the Ultimate Championship of the Year! Whether you're a Rotaract
            club, a university powerhouse, or a force to be reckoned with, this
            is your platform to display the finesse that sets you apart.
          </p>
        </div>
        <div className="scale-115">
          <img src={BannerImage2} alt="banner image" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
