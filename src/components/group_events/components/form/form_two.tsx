/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, Form, Formik, ErrorMessage } from "formik";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GroupEventInterface } from "../../../../data/data";
import * as Yup from "yup";

function FormTwo({
  formData,
  handleSubmit,
  handleSelectedStep,
  changeGroupEvents,
}: Readonly<{
  formData: GroupEventInterface;
  handleSubmit: (values: GroupEventInterface) => void;
  handleSelectedStep: (step: number) => void;
  changeGroupEvents: (key: any, value: boolean) => void;
}>) {
  const formValidationSchema = Yup.object({
    player1_name_100_4: Yup.string().required().label("player 1 Name"),
    player1_phone_100_4: Yup.string().required().label("player 1 Phone"),
    player1_nic_100_4: Yup.string().required().label("player 1 NIC"),
    player1_email_100_4: Yup.string().required().label("player 1 Email"),

    player2_name_100_4: Yup.string().required().label("player 2 Name"),
    player2_nic_100_4: Yup.string().required().label("player 1 NIC"),

    player3_name_100_4: Yup.string().required().label("player 3 Name"),
    player3_nic_100_4: Yup.string().required().label("player 3 NIC"),

    player4_name_100_4: Yup.string().required().label("player 4 Name"),
    player4_nic_100_4: Yup.string().required().label("player 4 NIC"),

    sub_name_100_4: Yup.string().required().label("Sub Player Name"),
    sub_nic_100_4: Yup.string().required().label("Sub Player NIC"),
  });
  return (
    <>
      <section className="flex flex-row lg:mb-8 lg:hidden">
        <div className="w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4">
          <div className="w-6 h-6 bg-white rounded-full" />
        </div>
        <div className="">
          <h4 className="text-[13px] font-normal leading-relaxed">
            100m x 4 Sprint
          </h4>
          <p className="text-[#AFAFAF] text-[11px] ">
            Please fill players details
          </p>
        </div>
      </section>

      <div className="hidden grid-cols-4 lg:grid gap-5">
        <section className="flex flex-row lg:mb-3 ">
          <div className="w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4">
            <div className="w-6 h-6 bg-white rounded-full" />
          </div>
          <div className="">
            <h4 className="text-[13px] font-normal leading-relaxed">
              100m x 4 Sprint
            </h4>
            <p className="text-[#AFAFAF] text-[11px] ">
              Please fill players details
            </p>
          </div>
        </section>
      </div>
      <Formik
        initialValues={formData}
        onSubmit={(value) => {
          handleSubmit(value);
          changeGroupEvents("G_100_4", true);
          setTimeout(() => handleSelectedStep(0), 300);
        }}
        validationSchema={formValidationSchema}
      >
        {() => (
          <Form className="mt-5">
            {/* Player Data */}
            <div className="md:min-h-[70vh] lg:min-h-[400px]">
              <div className="lg:grid lg:grid-cols lg:gap-3">
                <section className="mb-3 ">
                  <div className="mb-3">
                    <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                      Player 1 Details
                    </h4>
                    <div className="xl:grid xl:grid-cols-3 xl:gap-3">
                      <div className="mb-2">
                        <Field
                          type="text"
                          id="player1_name_100_4"
                          name="player1_name_100_4"
                          placeholder="Player 1 Name"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player1_name_100_4"
                          component="span"
                        />
                      </div>

                      <div className="mb-2">
                        <Field
                          type="text"
                          id="player1_phone_100_4"
                          name="player1_phone_100_4"
                          placeholder="Player 1 Mobile Number"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player1_phone_100_4"
                          component="span"
                        />
                      </div>

                      <div className="mb-2">
                        <Field
                          type="text"
                          id="player1_nic_100_4"
                          name="player1_nic_100_4"
                          placeholder="Player 1 NIC"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player1_nic_100_4"
                          component="span"
                        />
                      </div>

                      <div className="mb-2">
                        <Field
                          type="text"
                          id="player1_email_100_4"
                          name="player1_email_100_4"
                          placeholder="Player 1 Email"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player1_email_100_4"
                          component="span"
                        />
                      </div>

                      {formData.organization === "University" && (
                        <div className="mb-2">
                          <Field
                            type="text"
                            id="player1_uni_id_100_4"
                            name="player1_uni_id_100_4"
                            placeholder="Player 1 University ID"
                            className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                          />
                          <ErrorMessage
                            className="text-[10px] text-red-400 capitalize"
                            name="player1_uni_id_100_4"
                            component="span"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                      Player 2 Details
                    </h4>
                    <div className="xl:grid xl:grid-cols-3 xl:gap-3">
                      <div className="mb-2">
                        <Field
                          type="text"
                          id="player2_name_100_4"
                          name="player2_name_100_4"
                          placeholder="Player 2 Name"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player2_name_100_4"
                          component="span"
                        />
                      </div>

                      <div className="mb-2">
                        <Field
                          type="text"
                          id="player2_nic_100_4"
                          name="player2_nic_100_4"
                          placeholder="Player 2 NIC"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player2_nic_100_4"
                          component="span"
                        />
                      </div>

                      {/* <div className="mb-2">
                      <Field
                        type="text"
                        id="player1_email_100_4"
                        name="player1_email_100_4"
                        placeholder="Player 1 Email"
                        className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                      />
                      <ErrorMessage
                        className="text-[10px] text-red-400 capitalize"
                        name="player1_email_100_4"
                        component="span"
                      />
                    </div> */}

                      {formData.organization === "University" && (
                        <div className="mb-2">
                          <Field
                            type="text"
                            id="player2_uni_id_100_4"
                            name="player2_uni_id_100_4"
                            placeholder="Player 2 University ID"
                            className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                          />
                          <ErrorMessage
                            className="text-[10px] text-red-400 capitalize"
                            name="player2_uni_id_100_4"
                            component="span"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                      Player 3 Details
                    </h4>
                    <div className="xl:grid xl:grid-cols-3 xl:gap-3">
                      <div className="mb-2">
                        <Field
                          type="text"
                          id="player3_name_100_4"
                          name="player3_name_100_4"
                          placeholder="Player 3 Name"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player3_name_100_4"
                          component="span"
                        />
                      </div>

                      <div className="mb-2">
                        <Field
                          type="text"
                          id="player3_nic_100_4"
                          name="player3_nic_100_4"
                          placeholder="Player 3 NIC"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player3_nic_100_4"
                          component="span"
                        />
                      </div>

                      {formData.organization === "University" && (
                        <div className="mb-2">
                          <Field
                            type="text"
                            id="player3_uni_id_100_4"
                            name="player3_uni_id_100_4"
                            placeholder="Player 3 University ID"
                            className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                          />
                          <ErrorMessage
                            className="text-[10px] text-red-400 capitalize"
                            name="player3_uni_id_100_4"
                            component="span"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-5">
                    <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                      Player 4 Details
                    </h4>
                    <div className="xl:grid xl:grid-cols-3 xl:gap-3">
                      <div className="mb-2">
                        <Field
                          type="text"
                          id="player4_name_100_4"
                          name="player4_name_100_4"
                          placeholder="Player 4 Name"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player4_name_100_4"
                          component="span"
                        />
                      </div>

                      <div className="mb-2">
                        <Field
                          type="text"
                          id="player4_nic_100_4"
                          name="player4_nic_100_4"
                          placeholder="Player 4 NIC"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player4_nic_100_4"
                          component="span"
                        />
                      </div>

                      {formData.organization === "University" && (
                        <div className="mb-2">
                          <Field
                            type="text"
                            id="player4_uni_id_100_4"
                            name="player4_uni_id_100_4"
                            placeholder="Player 4 University ID"
                            className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                          />
                          <ErrorMessage
                            className="text-[10px] text-red-400 capitalize"
                            name="player4_uni_id_100_4"
                            component="span"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="mb-3">
                    <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                      Substitute Details
                    </h4>
                    <div className="xl:grid xl:grid-cols-3 xl:gap-3">
                      <div className="mb-2">
                        <Field
                          type="text"
                          id="sub_name_100_4"
                          name="sub_name_100_4"
                          placeholder="Sub Player Name"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="sub_name_100_4"
                          component="span"
                        />
                      </div>

                      <div className="mb-2">
                        <Field
                          type="text"
                          id="sub_nic_100_4"
                          name="sub_nic_100_4"
                          placeholder="Sub Player NIC"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="sub_nic_100_4"
                          component="span"
                        />
                      </div>

                      {formData.organization === "University" && (
                        <div className="mb-2">
                          <Field
                            type="text"
                            id="sub_uni_id_100_4"
                            name="sub_uni_id_100_4"
                            placeholder="Sub Player University ID"
                            className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                          />
                          <ErrorMessage
                            className="text-[10px] text-red-400 capitalize"
                            name="sub_uni_id_100_4"
                            component="span"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              </div>
            </div>
            <div className="flex flex-row items-center justify-end lg:mt-5">
              <button
                type="button"
                className=" bg-[#374151] shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg mr-3"
                onClick={() => handleSelectedStep(0)}
              >
                <FiArrowLeft color="white" />
                &nbsp; Back
              </button>
              <button
                type="submit"
                className=" bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg"
              >
                Save &nbsp;
                <FiArrowRight color="white" />
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default FormTwo;
