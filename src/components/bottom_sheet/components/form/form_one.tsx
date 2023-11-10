import { ErrorMessage, Field, Form, Formik } from "formik";
import { FiArrowRight } from "react-icons/fi";
import { StepOneFields } from "../../../../data/data";
import * as Yup from "yup";

function FormOne({
  formData,
  handleSubmit,
  handleSelectedStep,
}: Readonly<{
  formData: StepOneFields;
  handleSubmit: (values: StepOneFields) => void;
  handleSelectedStep: (value: number) => void;
}>) {
  const formValidationSchema = Yup.object({
    organization: Yup.string().required().label("Organization"),
    clubName: Yup.string().required().label("Club Name"),
    playingCategory: Yup.string().required().label("Playing category"),
    captainName: Yup.string().required().label("Captain name"),
    captainPhone: Yup.number().required().label("Captain Phone"),
    captainNic: Yup.string().required().label("Captain NIC"),
    captainEmail: Yup.string().required().email().label("Captain Email"),
  });
  return (
    <>
      <section className="">
        <h4 className="text-[13px] font-normal leading-relaxed">
          Organization and captain details
        </h4>
        <p className="text-[#AFAFAF] text-[11px] ">Step 1/4</p>
      </section>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          handleSubmit(values);
          setTimeout(() => handleSelectedStep(1), 300);
        }}
        validationSchema={formValidationSchema}
      >
        {() => (
          <Form className="mt-5">
            <div className="min-h-[70vh]">
              {/* Organizational Data */}
              <section className="mb-5">
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

              {/* Captain Data */}
              <section className="mb-3">
                <h4 className="text-[13px] font-normal leading-relaxed">
                  Captain Details
                </h4>
              </section>

              <section className="mb-3">
                <div className="mb-2">
                  <Field
                    type="text"
                    id="captainName"
                    name="captainName"
                    placeholder="Full Name"
                    className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  />

                  <ErrorMessage
                    className="text-[10px] text-red-400 capitalize"
                    name="captainName"
                    component="span"
                  />
                </div>

                <div className="mb-2">
                  <Field
                    type="text"
                    id="captainPhone"
                    name="captainPhone"
                    placeholder="Phone Number"
                    className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-400 capitalize"
                    name="captainPhone"
                    component="span"
                  />
                </div>

                <div className="mb-2">
                  <Field
                    type="text"
                    id="captainNic"
                    name="captainNic"
                    placeholder="NIC Number"
                    className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-400 capitalize"
                    name="captainNic"
                    component="span"
                  />
                </div>

                <div className="mb-2">
                  <Field
                    type="text"
                    id="captainEmail"
                    name="captainEmail"
                    placeholder="Email Address"
                    className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  />

                  <ErrorMessage
                    className="text-[10px] text-red-400 capitalize"
                    name="captainEmail"
                    component="span"
                  />
                </div>

                <p className="text-[12px] text-[#B5B5B5]">
                  Please use an active email. This mail used to send you the
                  booking confirmations
                </p>
              </section>
            </div>

            <button
              type="submit"
              className=" bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg"
            >
              Next &nbsp;
              <FiArrowRight color="white" />
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}
export default FormOne;
