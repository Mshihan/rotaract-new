import { AnimatePresence, motion } from "framer-motion";
import { FiX } from "react-icons/fi";
import {
  buttonVariant,
  linkVariant,
  menuVariants,
  staggerVariant,
} from "../../animations/menu_variants";
import BrandLogo from "../../assets/logo/brand_logo.svg";
import { navLinks } from "../../data/data";
import MobileNavLink from "./mobile_nav_link";

function MobileMenu({
  menuState,
  menuToggler,
}: Readonly<{
  menuState: boolean;
  menuToggler: () => void;
}>) {
  return (
    <AnimatePresence>
      {menuState && (
        <motion.div
          variants={menuVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="bg-[#353945] absolute top-0 left-0 h-[100vh] w-screen origin-right flex flex-col justify-between z-30"
        >
          <div className="flex mx-auto px-10 container flex-row items-center justify-between ">
            <img
              src={BrandLogo}
              alt="brand logo"
              className="p-0 w-1/2 max-w-[200px] min-w-[150px] invisible"
            />
            <motion.div
              variants={buttonVariant}
              initial="initial"
              animate="animate"
              exit="initial"
              onClick={menuToggler}
              onKeyDown={menuToggler}
            >
              <FiX color="white" size={22} />
            </motion.div>
          </div>
          <motion.div
            className="flex flex-col justify-center  font-lora items-center gap-4 mb-32"
            variants={staggerVariant}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {navLinks.map((link) => {
              return (
                <div key={link.title} className="overflow-hidden">
                  <MobileNavLink title={link.title} />
                </div>
              );
            })}
          </motion.div>
          <motion.div
            className=" text-white  mb-10 flex flex-row px-10"
            variants={staggerVariant}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="overflow-hidden flex flex-row justify-between w-[100%]">
              <motion.div
                className="text-[#D4D5E1] italic text-sm"
                variants={linkVariant}
              >
                All rights reserved
              </motion.div>
              <motion.div
                className="text-[#D4D5E1] italic text-sm"
                variants={linkVariant}
              >
                Rotaract Midtown
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default MobileMenu;
