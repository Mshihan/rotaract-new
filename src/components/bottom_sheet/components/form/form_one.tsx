/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FiArrowRight, FiEdit, FiSave, FiX } from "react-icons/fi";
import {
  IndividualEventsInterface,
  StepOneFields,
} from "../../../../data/data";
import * as Yup from "yup";
import { MdCreditCard } from "react-icons/md";
import { useState } from "react";
import { BackendUrl } from "../../../../config/config";
import axios from "axios";

function FormOne({
  formData,
  handleSubmit,
  handleSelectedStep,
  individualEventSubmit,
  changeIndividualEvents,
  eventsView,
  setEventsViewHandler,
}: Readonly<{
  formData: StepOneFields;
  handleSubmit: (values: StepOneFields) => void;
  handleSelectedStep: (value: number) => void;
  individualEventSubmit: IndividualEventsInterface;
  changeIndividualEvents: (key: any, value: boolean) => void;
  eventsView: boolean;
  setEventsViewHandler: (value: boolean) => void;
}>) {
  const formValidationSchema = Yup.object({
    organization: Yup.string().required().label("Organization"),
    clubName: Yup.string().required().label("Club Name"),
    playingCategory: Yup.string().required().label("Playing category"),
  });

  const [Error, setError] = useState(false);

  const handleEventSelection = (key: string, value: boolean) => {
    if (
      Object.values(individualEventSubmit).filter((value) => value === true)
        .length < 3 ||
      value === false
    ) {
      setEventMessage(false);
      changeIndividualEvents(key, value);
      setError(false);

      return;
    }

    setError(true);
  };

  const [eventMessage, setEventMessage] = useState(false);
  const [userDetailsMessage, setUserDetailsMessage] = useState(false);

  const [greetingMessage, setGreetingMessage] = useState({
    status: false,
    message: "",
  });

  const handleIndividualEventsPayment = async () => {
    const eventLength = Object.values(individualEventSubmit).filter(
      (value) => value === true
    ).length;

    // Check if at least one event is selected
    if (eventLength === 0) {
      setEventMessage(true);
      return;
    }

    if (!formData?.S_name) {
      setUserDetailsMessage(true);
      return;
    }

    const tempFormData = { ...formData, ...individualEventSubmit };
    const response = await axios.post(
      BackendUrl + "/api/create-individuals",
      tempFormData
    );

    if (response.data.status === "success") {
      setGreetingMessage({
        status: true,
        message: "Group event successfully created",
      });
    }
  };
  return (
    <>
      <section className="flex flex-row lg:mb-8 lg:hidden">
        <div className="w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4">
          <div className="w-6 h-6 bg-white rounded-full" />
        </div>
        <div className="">
          <h4 className="text-[13px] font-normal leading-relaxed">
            Organization and Event Details
          </h4>
          <p className="text-[#AFAFAF] text-[11px] ">
            Fill the player details and events
          </p>
        </div>
      </section>

      <div className="hidden grid-cols-4 lg:grid gap-5">
        <section className="flex flex-row lg:mb-8 ">
          <div className="w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4">
            <div className="w-6 h-6 bg-white rounded-full" />
          </div>
          <div className="">
            <h4 className="text-[13px] font-normal leading-relaxed">
              Organization and Event Details
            </h4>
            <p className="text-[#AFAFAF] text-[11px] ">
              {" "}
              Fill the player details and events
            </p>
          </div>
        </section>

        {/* <section className="flex flex-row lg:mb-8">
          <div className="w-10 h-10 bg-[#5E636A] rounded-full flex justify-center items-center mr-4">
            <div className="w-6 h-6 bg-white rounded-full" />
          </div>
          <div className="">
            <h4 className="text-[13px] font-no  rmal leading-relaxed">
              Preview and Payment
            </h4>
            <p className="text-[#AFAFAF] text-[11px] ">Step 1/4</p>
          </div>
        </section> */}
      </div>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          handleSubmit(values);
          setEventsViewHandler(true);
          // setTimeout(() => handleSelectedStep(1), 300);
        }}
        validationSchema={formValidationSchema}
      >
        {() => (
          <Form className="mt-5">
            <div className="md:min-h-[70vh] lg:min-h-[400px]">
              {/* Organizational Data */}
              <section className="mb-5 lg:grid lg:grid-cols-3  lg:gap-3 md:grid-cols-1 md:gap-0">
                <div className="mb-2">
                  <Field
                    as="select"
                    id="organization"
                    name="organization"
                    disabled={eventsView}
                    className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                  >
                    <option selected value="">
                      Select Organization
                    </option>
                    <option value="Rotaract-Club">Rotaract Club</option>
                    <option value="University">Univeristy</option>
                  </Field>
                  <ErrorMessage
                    className="text-[10px] text-red-400 capitalize"
                    name="organization"
                    component="span"
                  />
                </div>

                <div className="mb-2">
                  <Field
                    type="text"
                    id="clubName"
                    disabled={eventsView}
                    name="clubName"
                    placeholder="Club Name / University Name"
                    className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-400 capitalize"
                    name="clubName"
                    component="span"
                  />
                </div>

                <div className="mb-2">
                  <Field
                    as="select"
                    disabled={eventsView}
                    id="playingCategory"
                    name="playingCategory"
                    className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                  >
                    <option selected value="">
                      Select Playing Category
                    </option>
                    <option value="Univeristy-Men">University Men</option>
                    <option value="Univeristy-Women">University Women</option>
                    <option value="Rotaract-Men">Rotaract Men</option>
                    <option value="Rotaract-Women">Rotaract Women</option>
                  </Field>
                  <ErrorMessage
                    className="text-[10px] text-red-400 capitalize"
                    name="playingCategory"
                    component="span"
                  />
                </div>

                {eventsView && (
                  <div
                    className="flex flex-row items-center gap-3 cursor-pointer text-[12px]"
                    onClick={() => setEventsViewHandler(false)}
                  >
                    <FiEdit /> Edit Details
                  </div>
                )}
              </section>
              {!eventsView && (
                <button
                  type="submit"
                  className=" bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg lg:mt-5"
                >
                  Save Organizational Details &nbsp;
                  <FiSave color="white" />
                </button>
              )}

              {eventsView && (
                <>
                  <section className="mb-3">
                    <h4 className="text-[18px] font-normal leading-relaxed mb-2 flex flex-row items-center gap-5">
                      Player Details{" "}
                      <FiEdit
                        style={{ cursor: "pointer" }}
                        onClick={() => handleSelectedStep(1)}
                        onKeyDown={() => handleSelectedStep(1)}
                      />
                    </h4>

                    {formData.S_name && (
                      <p className="italic font-medium text-[12px] text-[#999999]">
                        Name: {formData.S_name}
                      </p>
                    )}

                    {formData.S_phone && (
                      <p className="italic font-medium text-[12px] text-[#999999] ">
                        Mobile Number: {formData.S_phone}
                      </p>
                    )}

                    {formData.S_nic && (
                      <p className="italic font-medium text-[12px] text-[#999999] ">
                        NIC Number: {formData.S_nic}
                      </p>
                    )}

                    {formData.S_email && (
                      <p className="italic font-medium text-[12px] text-[#999999] ">
                        Email: {formData.S_email}
                      </p>
                    )}

                    {formData.organization === "University" &&
                      formData.S_uni_id && (
                        <p className="italic font-medium text-[12px] text-[#999999] ">
                          University ID: {formData.S_uni_id}
                        </p>
                      )}

                    {userDetailsMessage && (
                      <p className="text-[12px]  mt-3 animate-pulse text-rose-100 mb-2 bg-red-500 inline-block px-2 py-1 rounded-lg">
                        Enter player details first to proceed
                      </p>
                    )}

                    {!formData.S_name && (
                      <button
                        className=" bg-[#414c5e] text-white px-3 py-2 rounded-lg flex flex-row items-center gap-3"
                        type="button"
                        onClick={() => handleSelectedStep(1)}
                        onKeyDown={() => handleSelectedStep(1)}
                      >
                        Enter Player Details <FiArrowRight color="white" />
                      </button>
                    )}
                  </section>

                  {/* Captain Data */}
                  <section className="mb-3">
                    <h4 className="text-[18px] font-normal leading-relaxed">
                      Event Details
                    </h4>
                  </section>
                  <div className="flex flex-row gap-2 flex-wrap mb-2">
                    <div
                      className={`flex flex-row items-center gap-3 bg-gradient-to-r ${
                        individualEventSubmit.S_100
                          ? " from-cyan-500 to-green-500"
                          : "from-blue-500 to-purple-500"
                      } rounded-lg  px-3 py-1`}
                    >
                      <div
                        className={` cursor-pointer  `}
                        onClick={() => handleEventSelection("S_100", true)}
                      >
                        100m Sprint{" "}
                      </div>

                      {individualEventSubmit.S_100 && (
                        <FiX
                          onClick={() => handleEventSelection("S_100", false)}
                        />
                      )}
                    </div>

                    <div
                      className={`flex flex-row items-center gap-3 bg-gradient-to-r ${
                        individualEventSubmit.S_200
                          ? " from-cyan-500 to-green-500"
                          : "from-blue-500 to-purple-500"
                      } rounded-lg  px-3 py-1`}
                    >
                      <div
                        className={` cursor-pointer  `}
                        onClick={() => handleEventSelection("S_200", true)}
                      >
                        200m Sprint{" "}
                      </div>

                      {individualEventSubmit.S_200 && (
                        <FiX
                          onClick={() => handleEventSelection("S_200", false)}
                        />
                      )}
                    </div>

                    <div
                      className={`flex flex-row items-center gap-3 bg-gradient-to-r ${
                        individualEventSubmit.S_400
                          ? " from-cyan-500 to-green-500"
                          : "from-blue-500 to-purple-500"
                      } rounded-lg  px-3 py-1`}
                    >
                      <div
                        className={` cursor-pointer  `}
                        onClick={() => handleEventSelection("S_400", true)}
                      >
                        400m Sprint{" "}
                      </div>

                      {individualEventSubmit.S_400 && (
                        <FiX
                          onClick={() => handleEventSelection("S_400", false)}
                        />
                      )}
                    </div>

                    <div
                      className={`flex flex-row items-center gap-3 bg-gradient-to-r ${
                        individualEventSubmit.S_800
                          ? " from-cyan-500 to-green-500"
                          : "from-blue-500 to-purple-500"
                      } rounded-lg  px-3 py-1`}
                    >
                      <div
                        className={` cursor-pointer  `}
                        onClick={() => handleEventSelection("S_800", true)}
                      >
                        800m Sprint{" "}
                      </div>

                      {individualEventSubmit.S_800 && (
                        <FiX
                          onClick={() => handleEventSelection("S_800", false)}
                        />
                      )}
                    </div>

                    <div
                      className={`flex flex-row items-center gap-3 bg-gradient-to-r ${
                        individualEventSubmit.Long_jump
                          ? " from-cyan-500 to-green-500"
                          : "from-blue-500 to-purple-500"
                      } rounded-lg  px-3 py-1`}
                    >
                      <div
                        className={` cursor-pointer  `}
                        onClick={() => handleEventSelection("Long_jump", true)}
                      >
                        Long Jump{" "}
                      </div>

                      {individualEventSubmit.Long_jump && (
                        <FiX
                          onClick={() =>
                            handleEventSelection("Long_jump", false)
                          }
                        />
                      )}
                    </div>

                    <div
                      className={`flex flex-row items-center gap-3 bg-gradient-to-r ${
                        individualEventSubmit.High_jump
                          ? " from-cyan-500 to-green-500"
                          : "from-blue-500 to-purple-500"
                      } rounded-lg  px-3 py-1`}
                    >
                      <div
                        className={` cursor-pointer  `}
                        onClick={() => handleEventSelection("High_jump", true)}
                      >
                        High Jump{" "}
                      </div>

                      {individualEventSubmit.High_jump && (
                        <FiX
                          onClick={() =>
                            handleEventSelection("High_jump", false)
                          }
                        />
                      )}
                    </div>

                    <div
                      className={`flex flex-row items-center gap-3 bg-gradient-to-r ${
                        individualEventSubmit.Putt_shot
                          ? " from-cyan-500 to-green-500"
                          : "from-blue-500 to-purple-500"
                      } rounded-lg  px-3 py-1`}
                    >
                      <div
                        className={` cursor-pointer  `}
                        onClick={() => handleEventSelection("Putt_shot", true)}
                      >
                        Putt Shot{" "}
                      </div>

                      {individualEventSubmit.Putt_shot && (
                        <FiX
                          onClick={() =>
                            handleEventSelection("Putt_shot", false)
                          }
                        />
                      )}
                    </div>
                  </div>
                  {Error && (
                    <p className="text-[12px]  mt-3 animate-pulse text-rose-100 mb-2 bg-red-500 inline-block px-2 py-1 rounded-lg">
                      One person can only enroll for three individual events.
                    </p>
                  )}

                  {eventMessage && (
                    <p className="text-[12px]  mt-3 animate-pulse text-rose-100 mb-2 bg-[#191c23] inline-block px-2 py-1 rounded-lg">
                      Please select an event to participate
                    </p>
                  )}
                </>
              )}
            </div>

            {/* <button
              type="submit"
              className=" bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg lg:mt-5"
            >
              Next &nbsp;
              <FiArrowRight color="white" />
            </button> */}

            {greetingMessage?.status && (
              <p className="text-[12px]  mt-3 animate-pulse text-green-100 mb-2 bg-gradient-to-r from-cyan-800 to-green-600 inline-block px-2 py-2 rounded-lg">
                Please wait, You will redirect to the payment gateway shortly.
              </p>
            )}

            {eventsView && (
              <button
                // type="submit"
                type="button"
                className=" bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg"
                onClick={() => handleIndividualEventsPayment()}
              >
                Register &nbsp;
                <MdCreditCard color="white" />
              </button>
            )}
          </Form>
        )}
      </Formik>
    </>
  );
}
export default FormOne;
