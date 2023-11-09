import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import { bottomVariants } from "../../animations/bottom_sheet_varients";

function BottomSheet({
  bottomState,
  bottomToggler,
}: Readonly<{
  bottomState: boolean;
  bottomToggler: () => void;
}>) {
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
          <div className="bg-[#353945]  w-screen h-[90vh] px-5 py-8 rounded-t-xl">
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
              <div className="">
                <h4 className="text-[13px] font-normal leading-relaxed">
                  Organization and captain details
                </h4>
                <p className="text-[#AFAFAF] text-[11px] ">Step 1</p>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
export default BottomSheet;
