/* eslint-disable @typescript-eslint/no-explicit-any */
import { ErrorMessage, Field, Form, Formik } from "formik";
import { FiArrowRight, FiEdit, FiX } from "react-icons/fi";
import {
  GroupEventInterface,
  GroupEventsInterface,
} from "../../../../data/data";
import * as Yup from "yup";
import { MdCreditCard } from "react-icons/md";

function FormOne({
  formData,
  handleSubmit,
  handleSelectedStep,
  groupEventSubmit,
  changeGroupEvents,
}: Readonly<{
  formData: GroupEventInterface;
  handleSubmit: (values: GroupEventInterface) => void;
  handleSelectedStep: (value: number) => void;
  groupEventSubmit: GroupEventsInterface;
  changeGroupEvents: (key: any, value: boolean) => void;
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

              {/* Event Data */}
              <section className="mb-3">
                <h4 className="text-[18px] font-normal leading-relaxed">
                  Event Details
                </h4>
              </section>
              <div className="flex flex-row gap-2 flex-wrap mb-2">
                <div
                  className={`flex flex-row items-center gap-3 bg-gradient-to-r ${
                    groupEventSubmit.G_100_4
                      ? " from-cyan-500 to-green-500"
                      : "from-blue-500 to-purple-500"
                  } rounded-lg  px-3 py-1`}
                >
                  <div
                    className={` cursor-pointer flex flex-row gap-3 items-center `}
                    onClick={() => handleSelectedStep(1)}
                  >
                    {groupEventSubmit.G_100_4 && <FiEdit />}
                    100m x 4 Sprint{" "}
                  </div>

                  {groupEventSubmit.G_100_4 && (
                    <FiX onClick={() => changeGroupEvents("G_100_4", false)} />
                  )}

                  {!groupEventSubmit.G_100_4 && <FiArrowRight />}
                </div>

                <div
                  className={`flex flex-row items-center gap-3 bg-gradient-to-r ${
                    groupEventSubmit.G_200_4
                      ? " from-cyan-500 to-green-500"
                      : "from-blue-500 to-purple-500"
                  } rounded-lg  px-3 py-1`}
                >
                  <div
                    className={` cursor-pointer flex flex-row gap-3 items-center `}
                    onClick={() => handleSelectedStep(2)}
                  >
                    {groupEventSubmit.G_200_4 && <FiEdit />}
                    200m x 4 Sprint{" "}
                  </div>

                  {groupEventSubmit.G_200_4 && (
                    <FiX onClick={() => changeGroupEvents("G_200_4", false)} />
                  )}

                  {!groupEventSubmit.G_200_4 && <FiArrowRight />}
                </div>

                <div
                  className={`flex flex-row items-center gap-3 bg-gradient-to-r ${
                    groupEventSubmit.G_100_4_mix
                      ? " from-cyan-500 to-green-500"
                      : "from-blue-500 to-purple-500"
                  } rounded-lg  px-3 py-1`}
                >
                  <div
                    className={` cursor-pointer flex flex-row gap-3 items-center `}
                    onClick={() => handleSelectedStep(3)}
                  >
                    {groupEventSubmit.G_100_4_mix && <FiEdit />}
                    100m x 4 Mix Sprint{" "}
                  </div>

                  {groupEventSubmit.G_100_4_mix && (
                    <FiX
                      onClick={() => changeGroupEvents("G_100_4_mix", false)}
                    />
                  )}

                  {!groupEventSubmit.G_100_4_mix && <FiArrowRight />}
                </div>

                <div
                  className={`flex flex-row items-center gap-3 bg-gradient-to-r ${
                    groupEventSubmit.G_tug_of_war
                      ? " from-cyan-500 to-green-500"
                      : "from-blue-500 to-purple-500"
                  } rounded-lg  px-3 py-1`}
                >
                  <div
                    className={` cursor-pointer flex flex-row gap-3 items-center `}
                    onClick={() => handleSelectedStep(4)}
                  >
                    {groupEventSubmit.G_tug_of_war && <FiEdit />}
                    Tug of War{" "}
                  </div>

                  {groupEventSubmit.G_tug_of_war && (
                    <FiX
                      onClick={() => changeGroupEvents("G_tug_of_war", false)}
                    />
                  )}

                  {!groupEventSubmit.G_tug_of_war && <FiArrowRight />}
                </div>

                {/* <div
                  className={`flex flex-row items-center gap-3 bg-gradient-to-r ${
                    groupEventSubmit.S_200
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

                  {groupEventSubmit.S_200 && (
                    <FiX
                      onClick={() => changeIndividualEvents("S_200", false)}
                    />
                  )}
                </div>

                <div
                  className={`flex flex-row items-center gap-3 bg-gradient-to-r ${
                    groupEventSubmit.S_400
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

                  {groupEventSubmit.S_400 && (
                    <FiX
                      onClick={() => changeIndividualEvents("S_400", false)}
                    />
                  )}
                </div>

                <div
                  className={`flex flex-row items-center gap-3 bg-gradient-to-r ${
                    groupEventSubmit.S_800
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

                  {groupEventSubmit.S_800 && (
                    <FiX
                      onClick={() => changeIndividualEvents("S_800", false)}
                    />
                  )}
                </div>

                <div
                  className={`flex flex-row items-center gap-3 bg-gradient-to-r ${
                    groupEventSubmit.Long_jump
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

                  {groupEventSubmit.Long_jump && (
                    <FiX
                      onClick={() => changeIndividualEvents("Long_jump", false)}
                    />
                  )}
                </div>

                <div
                  className={`flex flex-row items-center gap-3 bg-gradient-to-r ${
                    groupEventSubmit.High_jump
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

                  {groupEventSubmit.High_jump && (
                    <FiX
                      onClick={() => changeIndividualEvents("High_jump", false)}
                    />
                  )}
                </div>

                <div
                  className={`flex flex-row items-center gap-3 bg-gradient-to-r ${
                    groupEventSubmit.Putt_shot
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

                  {groupEventSubmit.Putt_shot && (
                    <FiX
                      onClick={() => changeIndividualEvents("Putt_shot", false)}
                    />
                  )}
                </div> */}
              </div>
              {/* <p className="text-[12px]  mt-2 animate-pulse text-rose-100 mb-2">
                One person can only enroll for three individual events.
              </p> */}
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
