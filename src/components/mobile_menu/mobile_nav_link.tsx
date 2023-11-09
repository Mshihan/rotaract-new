import { motion } from "framer-motion";
import { linkVariant } from "../../animations/menu_variants";

const MobileNavLink = ({ title }: { title: string }) => {
  return (
    <motion.div
      variants={linkVariant}
      className="uppercase text-4xl text-white italic"
    >
      <p>{title}</p>
    </motion.div>
  );
};
export default MobileNavLink;
