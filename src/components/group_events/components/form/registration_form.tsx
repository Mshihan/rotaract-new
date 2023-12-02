import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { formVariants } from "../../../../animations/form_variants";
import {
  GroupEventInterface,
  GroupEventsInterface,
  groupEvents,
  individualEvents,
} from "../../../../data/data";
import FormOne from "./form_one";
import FormTwo from "./form_two";
// import FormThree from "./form_three";
// import FormFour from "./form_four";

function RegistrationForm({
  formData,
  handleSubmit,
}: Readonly<{
  formData: GroupEventInterface;
  handleSubmit: (values: GroupEventInterface) => void;
}>) {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const handleSelectedStep = (step: number) => {
    setSelectedStep(step);
  };

  const [groupEventSubmit, setGroupEventSubmit] =
    useState<GroupEventsInterface>(groupEvents);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeGroupEvents = (key: any, state: boolean) => {
    const tempState = { ...groupEventSubmit };
    tempState[key] = state;
    setGroupEventSubmit(tempState);
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
            groupEventSubmit={groupEventSubmit}
            changeGroupEvents={changeGroupEvents}
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
