import { FiArrowRight } from "react-icons/fi";
import MainEvent from "../../assets/images/Main Event.svg";
import SupportEvent from "../../assets/images/SupportEvent.svg";
import { sportCategories } from "../../data/data";

function Registrations({
  bottomToggler,
}: Readonly<{ bottomToggler: () => void }>) {
  return (
    <div className="mt-28 pt-12 relative" id="registration">
      <h2 className="text-white text-center font-medium text-xl mb-8">
        Registrations Started
      </h2>
      <img
        src={MainEvent}
        alt="main event logo"
        className="absolute scale-150 top-20 -translate-x-[45%]"
      />
      <img
        src={SupportEvent}
        alt="support event logo"
        className="absolute scale-150 right-0  top-96 translate-x-[40%]"
      />
      <div className="container mx-auto">
        <div className=" bg-[#353945] mx-10 px-12 py-10 mb-5">
          <section className="mb-10">
            <h3 className="text-lg text-white font-medium leading- mb-5">
              The Bisons League 23-24 - The Ultimate Basketball Championship!
            </h3>
            <p className="  text-[14px] font-normal text-[#D4D5E1] mb-4 leading-loose">
              Get ready to battle it out, as teams vie for the coveted title of
              the Ultimate Championship of the Year!
            </p>
            <p className="  text-[14px] font-normal text-[#D4D5E1] mb-4 leading-loose">
              Whether you're a Rotaract club, a university powerhouse, or a
              force to be reckoned with, this is your platform to display the
              finesse that sets you apart.
            </p>
            <p className="  text-[14px] font-normal text-[#D4D5E1] mb-4 leading-loose">
              Don't miss out on the action; reserve your team's spot today and
              be part of the excitement.
            </p>
          </section>
          <section className="mb-10">
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
          <section className="mb-10">
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
          <section className="mb-10">
            <h3 className="text-lg text-white font-medium leading-relaxed mb-2">
              Registration Fee
            </h3>
            <p className="text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose">
              Per Team: LKR 7000.00 (Which translate to LKR 875.00 per player)
            </p>
          </section>
          <section className=" flex flex-row  items-stretch justify-stretch">
            <div className="h-200 w-3 bg-[#D4D5E1] mr-5 rounded-xl"></div>
            <p className="text-[14px] font-normal text-[#D4D5E1] tracking-wide leading-loose">
              So, gear up, practice those dribbles and get your shot in!, and
              get ready for a high-octane championship that promises to be
              nothing short of electrifying. Let’s make history on the court!
              ...
            </p>
          </section>
        </div>
        <div className="flex justify-center mb-5">
          <div
            className=" bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-4 px-5 cursor-pointer"
            onClick={() => {
              bottomToggler();
            }}
            onKeyDown={() => {
              bottomToggler();
            }}
          >
            <div className="text-white text-xs font-medium flex flex-row items-center ">
              Register Now &nbsp; &nbsp; <FiArrowRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Registrations;
