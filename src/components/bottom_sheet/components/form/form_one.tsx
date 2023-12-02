import { ErrorMessage, Field, Form, Formik } from "formik";
import { FiArrowRight, FiEdit, FiX } from "react-icons/fi";
import {
  IndividualEventsInterface,
  StepOneFields,
} from "../../../../data/data";
import * as Yup from "yup";
import { MdCreditCard } from "react-icons/md";

function FormOne({
  formData,
  handleSubmit,
  handleSelectedStep,
  individualEventSubmit,
  changeIndividualEvents,
}: Readonly<{
  formData: StepOneFields;
  handleSubmit: (values: StepOneFields) => void;
  handleSelectedStep: (value: number) => void;
  individualEventSubmit: IndividualEventsInterface;
  changeIndividualEvents: (key: any, value: boolean) => void;
}>) {
  const formValidationSchema = Yup.object({
    organization: Yup.string().required().label("Organization"),
    clubName: Yup.string().required().label("Club Name"),
    playingCategory: Yup.string().required().label("Playing category"),
    // captainName: Yup.string().required().label("Captain name"),
    // captainPhone: Yup.number().required().label("Captain Phone"),
    // captainNic: Yup.string().required().label("Captain NIC"),
    // captainEmail: Yup.string().required().email().label("Captain Email"),
  });
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
            <p className="text-[#AFAFAF] text-[11px] ">Step 1/4</p>
          </div>
        </section>

        <section className="flex flex-row lg:mb-8">
          <div className="w-10 h-10 bg-[#5E636A] rounded-full flex justify-center items-center mr-4">
            <div className="w-6 h-6 bg-white rounded-full" />
          </div>
          <div className="">
            <h4 className="text-[13px] font-normal leading-relaxed">
              Preview and Payment
            </h4>
            <p className="text-[#AFAFAF] text-[11px] ">Step 1/4</p>
          </div>
        </section>
      </div>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          handleSubmit(values);
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
                    className=" border text-sm rounded-lg block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                  >
                    <option selected value="">
                      Select Organization
                    </option>
                    <option value="Rotaract-Club">Rotaract Club</option>
                    <option value="Univeristy">Univeristy</option>
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
              </section>
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

                {formData.S_uni_id && (
                  <p className="italic font-medium text-[12px] text-[#999999] ">
                    University ID: {formData.S_uni_id}
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
                    onClick={() => changeIndividualEvents("S_100", true)}
                  >
                    100m Sprint{" "}
                  </div>

                  {individualEventSubmit.S_100 && (
                    <FiX
                      onClick={() => changeIndividualEvents("S_100", false)}
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
                    onClick={() => changeIndividualEvents("S_200", true)}
                  >
                    200m Sprint{" "}
                  </div>

                  {individualEventSubmit.S_200 && (
                    <FiX
                      onClick={() => changeIndividualEvents("S_200", false)}
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
                    onClick={() => changeIndividualEvents("S_400", true)}
                  >
                    400m Sprint{" "}
                  </div>

                  {individualEventSubmit.S_400 && (
                    <FiX
                      onClick={() => changeIndividualEvents("S_400", false)}
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
                    onClick={() => changeIndividualEvents("S_800", true)}
                  >
                    800m Sprint{" "}
                  </div>

                  {individualEventSubmit.S_800 && (
                    <FiX
                      onClick={() => changeIndividualEvents("S_800", false)}
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
                    onClick={() => changeIndividualEvents("Long_jump", true)}
                  >
                    Long Jump{" "}
                  </div>

                  {individualEventSubmit.Long_jump && (
                    <FiX
                      onClick={() => changeIndividualEvents("Long_jump", false)}
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
                    onClick={() => changeIndividualEvents("High_jump", true)}
                  >
                    High Jump{" "}
                  </div>

                  {individualEventSubmit.High_jump && (
                    <FiX
                      onClick={() => changeIndividualEvents("High_jump", false)}
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
                    onClick={() => changeIndividualEvents("Putt_shot", true)}
                  >
                    Putt Shot{" "}
                  </div>

                  {individualEventSubmit.Putt_shot && (
                    <FiX
                      onClick={() => changeIndividualEvents("Putt_shot", false)}
                    />
                  )}
                </div>
              </div>
              <p className="text-[12px]  mt-2 animate-pulse text-rose-100 mb-2">
                One person can only enroll for three individual events.
              </p>
            </div>

            {/* <button
              type="submit"
              className=" bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg lg:mt-5"
            >
              Next &nbsp;
              <FiArrowRight color="white" />
            </button> */}

            <button
              type="submit"
              className=" bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg"
              onClick={() => console.log("Payment Initializing ... ")}
            >
              Register &nbsp;
              <MdCreditCard color="white" />
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default FormOne;
