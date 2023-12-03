import { Field, Form, Formik, ErrorMessage } from "formik";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { StepOneFields } from "../../../../data/data";
import * as Yup from "yup";

function FormTwo({
  formData,
  handleSubmit,
  handleSelectedStep,
}: Readonly<{
  formData: StepOneFields;
  handleSubmit: (values: StepOneFields) => void;
  handleSelectedStep: (step: number) => void;
}>) {
  const formValidationSchema = Yup.object({
    // playerFiveName: Yup.string().required().label("Player 5 Name"),
    // playerFiveNic: Yup.string().required().label("Player 5 NIC"),
    S_name: Yup.string().required().label("Player Name"),
    S_phone: Yup.string().required().label("Mobile Number"),
    S_nic: Yup.string().required().label("NIC Number"),
    S_email: Yup.string().required().label("Player Email"),
    // S_100_uni_id: Yup.string().required().label("Player 4 Name"),
    // playerFourNic: Yup.string().required().label("Player 4 NIC"),
  });
  return (
    <>
      <section className="flex flex-row lg:mb-8 lg:hidden">
        <div className="w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4">
          <div className="w-6 h-6 bg-white rounded-full" />
        </div>
        <div className="">
          <h4 className="text-[13px] font-normal leading-relaxed">
            100m Sprint
          </h4>
          <p className="text-[#AFAFAF] text-[11px] ">
            Please fill your details
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
              Player Details
            </h4>
            <p className="text-[#AFAFAF] text-[11px] ">
              Please fill your details
            </p>
          </div>
        </section>
      </div>
      <Formik
        initialValues={formData}
        onSubmit={(value) => {
          console.log(value);
          handleSubmit(value);
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
                  <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                    Player Details
                  </h4>
                  <div className="xl:grid xl:grid-cols-3 xl:gap-3">
                    <div className="mb-2">
                      <Field
                        type="text"
                        id="S_name"
                        name="S_name"
                        placeholder="Player Name"
                        className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                      />
                      <ErrorMessage
                        className="text-[10px] text-red-400 capitalize"
                        name="S_name"
                        component="span"
                      />
                    </div>

                    <div className="mb-2">
                      <Field
                        type="text"
                        id="S_phone"
                        name="S_phone"
                        placeholder="Mobile Number"
                        className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                      />
                      <ErrorMessage
                        className="text-[10px] text-red-400 capitalize"
                        name="S_phone"
                        component="span"
                      />
                    </div>

                    <div className="mb-2">
                      <Field
                        type="text"
                        id="S_nic"
                        name="S_nic"
                        placeholder="Player NIC"
                        className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                      />
                      <ErrorMessage
                        className="text-[10px] text-red-400 capitalize"
                        name="S_nic"
                        component="span"
                      />
                    </div>

                    <div className="mb-2">
                      <Field
                        type="text"
                        id="S_email"
                        name="S_email"
                        placeholder="Player Email"
                        className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                      />
                      <ErrorMessage
                        className="text-[10px] text-red-400 capitalize"
                        name="S_email"
                        component="span"
                      />
                    </div>

                    {formData.organization === "University" && (
                      <div className="mb-2">
                        <Field
                          type="text"
                          id="S_uni_id"
                          name="S_uni_id"
                          placeholder="University ID"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="S_uni_id"
                          component="span"
                        />
                      </div>
                    )}
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
