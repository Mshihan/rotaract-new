import BannerImage2 from "../../assets/images/Sport Banner2.png";

function Landing() {
  return (
    <div className="container px-10  mx-auto">
      <div className="md:flex md:flex-row md:justify-between">
        <div className="md:w-[50%] xl:mt-16">
          <h1 className="text-white font-medium sm:mt-5 mb-5 text-xl md:text-[25px] md:leading-relaxed lg:text-[40px]">
            The Bisons League (TBL)
          </h1>
          <p className="text-[#D4D5E1] font-light text-[14px]  leading-[30px] w-[90%] md:w-[100%] md:text-[14px] md:leading-loose lg:text-[18px] xl:text-[20px]">
            Get ready to battle it out, as teams vie for the coveted title of
            the Ultimate Championship of the Year! Whether you're a Rotaract
            club, a university powerhouse, or a force to be reckoned with, this
            is your platform to display the finesse that sets you apart.
          </p>
        </div>
        <div className="sm:scale-115 md:w-[50%] mb-10 max-w-[600px]">
          <img src={BannerImage2} alt="banner image" width={"100%"} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
