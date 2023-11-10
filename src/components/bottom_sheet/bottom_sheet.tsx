import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { bottomVariants } from "../../animations/bottom_sheet_varients";
import { FormEvent, useState } from "react";
import { InitialFormData, StepOneFields } from "../../data/data";
import { Form, Formik } from "formik";

function BottomSheet({
  bottomState,
  bottomToggler,
}: Readonly<{
  bottomState: boolean;
  bottomToggler: () => void;
}>) {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataEntries = Object.fromEntries(formData);
    console.log(formDataEntries);
  };

  const [formData, setFormData] = useState<StepOneFields>(InitialFormData);

  return (
    <AnimatePresence>
      {bottomState && (
        <motion.div
          variants={bottomVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="bg-black bg-opacity-40 h-screen w-screen absolute bottom-0 left-0 origin-bottom flex flex-col justify-end"
        >
          <div className="bg-[#353945]  w-screen h-auto px-5 py-8 rounded-t-xl">
            <div className="text-white">
              <div className="flex flex-row justify-between items-center mb-2">
                <h2 className="text-[18px] font-medium">
                  Get Your Self Registered
                </h2>
                <FiX
                  className="cursor-pointer"
                  color="white"
                  size={20}
                  onClick={() => {
                    bottomToggler();
                  }}
                />
              </div>
              <section className="">
                <h4 className="text-[13px] font-normal leading-relaxed">
                  Organization and captain details
                </h4>
                <p className="text-[#AFAFAF] text-[11px] ">Step 1</p>
              </section>

              <form onSubmit={handleSubmit} className="mt-5">
                {/* Organizational Data */}
                <section className="mb-5">
                  <select
                    id="organization"
                    name="organization"
                    className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white mb-2"
                  >
                    <option selected value=" ">
                      Select Organization
                    </option>
                    <option value="rotaract">Rotaract Club</option>
                    <option value="uni">Univeristy</option>
                  </select>

                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Club Name / University Name"
                    className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white mb-2"
                  />

                  <select
                    id="playingCategory"
                    name="playingCategory"
                    className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white mb-2"
                  >
                    <option selected value=" ">
                      Select Playing Category
                    </option>
                    <option value="uni_men">University Men</option>
                    <option value="uni_women">University Women</option>
                    <option value="rot_men">Rotaract Men</option>
                    <option value="rot_women">Rotaract Women</option>
                  </select>
                </section>

                {/* Captain Data */}
                <section className="mb-3">
                  <h4 className="text-[13px] font-normal leading-relaxed">
                    Captain Details
                  </h4>
                </section>

                <input
                  type="text"
                  id="captainName"
                  name="captainName"
                  placeholder="Full Name"
                  className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white mb-2"
                />

                <input
                  type="text"
                  id="captainPhone"
                  name="captainPhone"
                  placeholder="Phone Number"
                  className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white mb-2"
                />

                <input
                  type="text"
                  id="captainNic"
                  name="captainNic"
                  placeholder="NIC Number"
                  className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white mb-2"
                />

                <input
                  type="text"
                  id="captainEmail"
                  name="captainEmail"
                  placeholder="Email Address"
                  className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white mb-2"
                />

                <p className="text-[12px] text-[#B5B5B5]">
                  Please use an active email. This mail used to send you the
                  booking confirmations
                </p>

                {/* <input type="text" name="lastName" placeholder="Last Name" /> */}
                {/* <button type="submit">Submit</button> */}
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default BottomSheet;
