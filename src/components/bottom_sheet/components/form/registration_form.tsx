import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { formVariants } from "../../../../animations/form_variants";
import { StepOneFields } from "../../../../data/data";
import FormOne from "./form_one";
import FormTwo from "./form_two";
// import FormThree from "./form_three";
// import FormFour from "./form_four";

function RegistrationForm({
  formData,
  handleSubmit,
}: Readonly<{
  formData: StepOneFields;
  handleSubmit: (values: StepOneFields) => void;
}>) {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const handleSelectedStep = (step: number) => {
    setSelectedStep(step);
  };

  return (
    <AnimatePresence>
      {selectedStep === 0 && (
        <motion.div
          key={"form_one"}
          variants={formVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <FormOne
            formData={formData}
            handleSubmit={handleSubmit}
            handleSelectedStep={handleSelectedStep}
          />
        </motion.div>
      )}

      {selectedStep === 1 && (
        <motion.div
          key={"form_two"}
          variants={formVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <FormTwo
            formData={formData}
            handleSubmit={handleSubmit}
            handleSelectedStep={handleSelectedStep}
          />
        </motion.div>
      )}
      {/* 
      {selectedStep === 2 && (
        <motion.div
          key={"form_three"}
          variants={formVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <FormThree
            formData={formData}
            handleSubmit={handleSubmit}
            handleSelectedStep={handleSelectedStep}
          />
        </motion.div>
      )}

      {selectedStep === 3 && (
        <motion.div
          key={"form_four"}
          variants={formVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <FormFour
            formData={formData}
            handleSelectedStep={handleSelectedStep}
          />
        </motion.div>
      )} */}
    </AnimatePresence>
  );
}
export default RegistrationForm;
