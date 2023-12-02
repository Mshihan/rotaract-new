import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import { bottomVariants } from "../../animations/bottom_sheet_varients";
import { GroupEventInterface, initialGroupFormData } from "../../data/data";
import RegistrationForm from "./components/form/registration_form";

function BottomSheet({
  bottomState,
  bottomToggler,
}: Readonly<{
  bottomState: boolean;
  bottomToggler: () => void;
}>) {
  const handleSubmit = (values: GroupEventInterface) => {
    setFormData({ ...formData, ...values });
  };

  const [formData, setFormData] =
    useState<GroupEventInterface>(initialGroupFormData);

  return (
    <AnimatePresence>
      {bottomState && (
        <motion.div
          variants={bottomVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={() => {}}
          className="bg-black bg-opacity-40 h-screen w-screen absolute bottom-0 left-0 origin-bottom flex flex-col justify-end"
        >
          <div className="bg-[#353945] z-50 w-screen lg:h-[700px] h-[97vh] overflow-y-scroll  px-5 py-8 rounded-t-xl transition-all duration-300 ease-in">
            <div className="text-white">
              <div className="flex flex-row justify-between items-center mb-2 ">
                <h2 className="text-[18px] font-medium  md:text-[20px] md:leading-relaxed lg:text-[22px] xl:text-[28px] lg:mb-3">
                  Group Events
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
              <RegistrationForm
                formData={formData}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default BottomSheet;
