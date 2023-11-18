import { FiArrowRight } from "react-icons/fi";
import MainEvent from "../../assets/images/Main Event.svg";
import SupportEvent from "../../assets/images/SupportEvent.svg";
import { sportCategories } from "../../data/data";

function Registrations({
  bottomToggler,
}: Readonly<{ bottomToggler: () => void }>) {
  return (
    <div className="mt-28 pt-12 relative" id="registration">
      <h2 className="text-white text-center font-medium text-xl mb-8 md:text-[25px] md:leading-relaxed lg:text-[40px]">
        Registrations Started
      </h2>
      <img
        src={MainEvent}
        alt="main event logo"
        className="absolute scale-[150%] top-32 -translate-x-[45%] md:translate-x-[10%] md:scale-[250%] md:top-48 xl:hidden"
      />
      <img
        src={SupportEvent}
        alt="support event logo"
        className="absolute scale-150 right-0  top-96 translate-x-[40%] md:-translate-x-[20%] md:scale-[200%] md:top-80 xl:hidden"
      />
      <div className="container mx-auto md:max-w-[80vw] xl:max-w-[1150px]">
        <div className=" bg-[#353945] mx-10 px-12 py-10 mb-5 md:px-24">
          <section className="sm:mb-10 md:mb-0">
            <h3 className="text-lg text-white font-medium leading- mb-5  md:text-[20px] md:leading-relaxed lg:text-[22px] xl:text-[28px] ">
              The Bisons League 23-24 - The Ultimate Basketball Championship!
            </h3>
            <p className="  text-[14px] font-normal text-[#D4D5E1] mb-4 leading-loose md:text-[15px] lg:text-[17px] xl:text-[19px]">
              Get ready to battle it out, as teams vie for the coveted title of
              the Ultimate Championship of the Year!
            </p>
            <p className="  text-[14px] font-normal text-[#D4D5E1] mb-4 leading-loose md:text-[15px] lg:text-[17px] xl:text-[19px]">
              Whether you're a Rotaract club, a university powerhouse, or a
              force to be reckoned with, this is your platform to display the
              finesse that sets you apart.
            </p>
            <p className="  text-[14px] font-normal text-[#D4D5E1] mb-4 leading-loose md:text-[15px] lg:text-[17px] xl:text-[19px]">
              Don't miss out on the action; reserve your team's spot today and
              be part of the excitement.
            </p>
          </section>
          <section className="mb-10 md:hidden">
            <h3 className="text-lg text-white font-medium leading-relaxed mb-2">
              Event Overview
            </h3>
            <p className="text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose ">
              <span className="font-semibold">Date: </span>Saturday, 21st
              October, 2023
              <br />
              <span className="font-semibold">Time: </span>7am-6pm
              <br />
              <span className="font-semibold">Venue: </span>St. Joseph's
              College, Maradana
            </p>
          </section>
          <section className="mb-10 md:hidden">
            <h3 className="text-lg text-white font-medium leading-relaxed mb-2">
              Categories
            </h3>
            <div className="text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose">
              {sportCategories.map((category) => (
                <div
                  className="flex flex-row gap-5 items-center"
                  key={category.title}
                >
                  <div className="w-2 h-2 bg-[#D4D5E1]"></div> {category.title}
                </div>
              ))}
            </div>
          </section>
          <section className="mb-10 md:hidden">
            <h3 className="text-lg text-white font-medium leading-relaxed mb-2">
              Registration Fee
            </h3>
            <p className="text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose">
              Per Team: LKR 7000.00 (Which translate to LKR 875.00 per player)
            </p>
          </section>
          <section className=" flex flex-row  items-stretch justify-stretch md:hidden">
            <div className="h-200 w-3 bg-[#D4D5E1] mr-5 rounded-xl"></div>
            <p className="text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose">
              So, gear up, practice those dribbles and get your shot in!, and
              get ready for a high-octane championship that promises to be
              nothing short of electrifying. Let’s make history on the court!
              ...
            </p>
          </section>
        </div>

        <div className=" flex-row mx-10 gap-6 md:flex hidden ">
          <div className=" bg-[#353945] px-12 py-10 mb-5 md:px-10 w-1/2">
            <section className="">
              <h3 className="text-lg text-white font-medium leading-relaxed mb-2 lg:text-[22px] xl:text-[24px]">
                Event Overview
              </h3>
              <p className="text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose xl:text-[17px] ">
                <span className="font-semibold">Date: </span>Saturday, 21st
                October, 2023
                <br />
                <span className="font-semibold">Time: </span>7am-6pm
                <br />
                <span className="font-semibold">Venue: </span>St. Joseph's
                College, Maradana
              </p>
            </section>
          </div>
          <div className=" bg-[#353945]  px-12 py-10 mb-5 md:px-10 w-1/2">
            <section className="">
              <h3 className="text-lg text-white font-medium leading-relaxed mb-2 lg:text-[22px]  xl:text-[24px]">
                Categories
              </h3>
              <div className="text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose xl:text-[17px]">
                {sportCategories.map((category) => (
                  <div
                    className="flex flex-row gap-5 items-center"
                    key={category.title}
                  >
                    <div className="w-2 h-2 bg-[#D4D5E1]"></div>{" "}
                    {category.title}
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className="md:flex flex-row mx-10 gap-6 hidden">
          <div className=" bg-[#353945] px-12 py-10 mb-5 md:px-10 w-1/2">
            <section className="">
              <h3 className="text-lg text-white font-medium leading-relaxed mb-2 lg:text-[22px] xl:text-[24px]">
                Registration Fee
              </h3>
              <p className="text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose xl:text-[17px]">
                Per Team: LKR 7000.00 (Which translate to LKR 875.00 per player)
              </p>
            </section>
          </div>
          {/* <div className=" bg-[#353945]  px-12 py-10 mb-5 md:px-24 w-1/2"></div> */}
          <section className=" flex flex-row items-start justify-center w-1/2 ">
            <p className="text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose md:text-[14px] mt-5 lg:text-[15px] xl:text-[17px]">
              So, gear up, practice those dribbles and get your shot in!, and
              get ready for a high-octane championship that promises to be
              nothing short of electrifying. Let’s make history on the court!
              ...
            </p>
          </section>
        </div>

        <div className="flex justify-center mb-10 mt-5">
          <div
            className=" bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-4 px-5 cursor-pointer"
            onClick={() => {
              bottomToggler();
            }}
            onKeyDown={() => {
              bottomToggler();
            }}
          >
            <div className="text-white text-xs font-medium flex flex-row items-center md:text-[14px] lg:text-[15px] xl:text-[17px]">
              Register Now &nbsp; &nbsp; <FiArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registrations;
