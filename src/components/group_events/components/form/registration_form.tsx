import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { formVariants } from "../../../../animations/form_variants";
import {
  GroupEventInterface,
  GroupEventsInterface,
  groupEvents,
  // individualEvents,
} from "../../../../data/data";
import FormOne from "./form_one";
import FormTwo from "./form_two";
import FormThree from "./form_three";
import FormFour from "./form_four";
import FormFive from "./form_five";
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

  const [eventsView, setEventsView] = useState<boolean>(false);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeGroupEvents = (key: any, state: boolean) => {
    const tempState = { ...groupEventSubmit };
    const placeholder = key as keyof typeof groupEventSubmit;
    tempState[placeholder] = state;
    console.log({ placeholder, type: typeof placeholder });
    if ("G_100_4" === placeholder && !state) {
      const tempData = {
        ...formData,
        player1_name_100_4: "",
        player1_phone_100_4: "",
        player1_nic_100_4: "",
        player1_email_100_4: "",
        player1_uni_id_100_4: "",
        player2_name_100_4: "",
        player2_nic_100_4: "",
        player2_uni_id_100_4: "",
        player3_name_100_4: "",
        player3_nic_100_4: "",
        player3_uni_id_100_4: "",

        player4_name_100_4: "",
        player4_nic_100_4: "",
        player4_uni_id_100_4: "",

        sub_name_100_4: "",
        sub_nic_100_4: "",
        sub_uni_id_100_4: "",
      };
      handleSubmit(tempData);
    } else if ("G_100_4_mix" === placeholder && !state) {
      const tempData = {
        ...formData,
        player1_name_100_4_mix: "",
        player1_phone_100_4_mix: "",
        player1_nic_100_4_mix: "",
        player1_email_100_4_mix: "",
        player1_uni_id_100_4_mix: "",
        player2_name_100_4_mix: "",
        player2_nic_100_4_mix: "",
        player2_uni_id_100_4_mix: "",
        player3_name_100_4_mix: "",
        player3_nic_100_4_mix: "",
        player3_uni_id_100_4_mix: "",

        player4_name_100_4_mix: "",
        player4_nic_100_4_mix: "",
        player4_uni_id_100_4_mix: "",

        sub_name_100_4_mix: "",
        sub_nic_100_4_mix: "",
        sub_uni_id_100_4_mix: "",
      };

      handleSubmit(tempData);
    } else if ("G_200_4" === placeholder && !state) {
      const tempData = {
        ...formData,
        player1_name_200_4: "",
        player1_phone_200_4: "",
        player1_nic_200_4: "",
        player1_email_200_4: "",
        player1_uni_id_200_4: "",
        player2_name_200_4: "",
        player2_nic_200_4: "",
        player2_uni_id_200_4: "",
        player3_name_200_4: "",
        player3_nic_200_4: "",
        player3_uni_id_200_4: "",

        player4_name_200_4: "",
        player4_nic_200_4: "",
        player4_uni_id_200_4: "",

        sub_name_200_4: "",
        sub_nic_200_4: "",
        sub_uni_id_200_4: "",
      };
      handleSubmit(tempData);
    } else if ("G_tug_of_war" === placeholder && !state) {
      const tempData = {
        ...formData,
        player1_name_tug_of_war: "",
        player1_phone_tug_of_war: "",
        player1_nic_tug_of_war: "",
        player1_email_tug_of_war: "",
        player1_uni_id_tug_of_war: "",
        player2_name_tug_of_war: "",
        player2_nic_tug_of_war: "",
        player2_uni_id_tug_of_war: "",
        player3_name_tug_of_war: "",
        player3_nic_tug_of_war: "",
        player3_uni_id_tug_of_war: "",

        player4_name_tug_of_war: "",
        player4_nic_tug_of_war: "",
        player4_uni_id_tug_of_war: "",

        player5_name_tug_of_war: "",
        player5_nic_tug_of_war: "",
        player5_uni_id_tug_of_war: "",

        player6_name_tug_of_war: "",
        player6_nic_tug_of_war: "",
        player6_uni_id_tug_of_war: "",

        player7_name_tug_of_war: "",
        player7_nic_tug_of_war: "",
        player7_uni_id_tug_of_war: "",

        player8_name_tug_of_war: "",
        player8_nic_tug_of_war: "",
        player8_uni_id_tug_of_war: "",

        sub_1_name_tug_of_war: "",
        sub_1_nic_tug_of_war: "",
        sub_1_uni_id_tug_of_war: "",

        sub_2_name_tug_of_war: "",
        sub_2_nic_tug_of_war: "",
        sub_2_uni_id_tug_of_war: "",
      };
      handleSubmit(tempData);
    }
    setGroupEventSubmit(tempState);
  };

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
            handleSubmit={handleSubmit}
            handleSelectedStep={handleSelectedStep}
            groupEventSubmit={groupEventSubmit}
            changeGroupEvents={changeGroupEvents}
            eventsView={eventsView}
            setEventsViewHandler={setEventsViewHandler}
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
            changeGroupEvents={changeGroupEvents}
          />
        </motion.div>
      )}

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
            changeGroupEvents={changeGroupEvents}
          />
        </motion.div>
      )}

      {selectedStep === 3 && (
        <motion.div
          key={"form_three"}
          variants={formVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <FormFour
            formData={formData}
            handleSubmit={handleSubmit}
            handleSelectedStep={handleSelectedStep}
            changeGroupEvents={changeGroupEvents}
          />
        </motion.div>
      )}

      {selectedStep === 4 && (
        <motion.div
          key={"form_three"}
          variants={formVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <FormFive
            formData={formData}
            handleSubmit={handleSubmit}
            handleSelectedStep={handleSelectedStep}
            changeGroupEvents={changeGroupEvents}
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
