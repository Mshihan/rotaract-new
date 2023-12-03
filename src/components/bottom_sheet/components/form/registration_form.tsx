import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { formVariants } from "../../../../animations/form_variants";
import {
  IndividualEventsInterface,
  StepOneFields,
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
  formData: StepOneFields;
  handleSubmit: (values: StepOneFields) => void;
}>) {
  const [selectedStep, setSelectedStep] = useState<number>(0);
  const handleSelectedStep = (step: number) => {
    setSelectedStep(step);
  };

  const [individualEventSubmit, setIndividualEventSubmit] =
    useState<IndividualEventsInterface>(individualEvents);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeIndividualEvents = (key: any, state: boolean) => {
    const tempState = { ...individualEventSubmit };
    const placeholder = key as keyof typeof individualEventSubmit;
    tempState[placeholder] = state;
    // console.log(tempState);
    setIndividualEventSubmit(tempState);
  };

  const [eventsView, setEventsView] = useState<boolean>(false);

  const setEventsViewHandler = (value: boolean) => {
    setEventsView(value);
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
            eventsView={eventsView}
            handleSubmit={handleSubmit}
            handleSelectedStep={handleSelectedStep}
            individualEventSubmit={individualEventSubmit}
            setEventsViewHandler={setEventsViewHandler}
            changeIndividualEvents={changeIndividualEvents}
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
