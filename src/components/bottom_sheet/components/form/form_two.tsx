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
    playerFiveName: Yup.string().required().label("Player 5 Name"),
    playerFiveNic: Yup.string().required().label("Player 5 NIC"),
    playerTwoName: Yup.string().required().label("Player 2 Name"),
    playerTwoNic: Yup.string().required().label("Player 2 NIC"),
    playerThreeName: Yup.string().required().label("Player 3 Name"),
    playerThreeNic: Yup.string().required().label("Player 3 NIC"),
    playerFourName: Yup.string().required().label("Player 4 Name"),
    playerFourNic: Yup.string().required().label("Player 4 NIC"),
  });
  return (
    <>
      <section className="">
        <h4 className="text-[13px] font-normal leading-relaxed">
          Player Details
        </h4>
        <p className="text-[#AFAFAF] text-[11px] ">Step 2/4</p>
      </section>
      <Formik
        initialValues={formData}
        onSubmit={(value) => {
          handleSubmit(value);
          setTimeout(() => handleSelectedStep(2), 300);
        }}
        validationSchema={formValidationSchema}
      >
        {() => (
          <Form className="mt-5">
            {/* Player Data */}
            <div className="min-h-[70vh]">
              <section className="mb-3">
                <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                  Player 2 Details
                </h4>

                <div className="mb-2">
                  <Field
                    type="text"
                    id="playerTwoName"
                    name="playerTwoName"
                    placeholder="Player Name"
                    className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-400 capitalize"
                    name="playerTwoName"
                    component="span"
                  />
                </div>

                <div className="mb-2">
                  <Field
                    type="text"
                    id="playerTwoNic"
                    name="playerTwoNic"
                    placeholder="Player NIC"
                    className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-400 capitalize"
                    name="playerTwoNic"
                    component="span"
                  />
                </div>
              </section>

              <section className="mb-3">
                <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                  Player 3 Details
                </h4>

                <div className="mb-2">
                  <Field
                    type="text"
                    id="playerThreeName"
                    name="playerThreeName"
                    placeholder="Player Name"
                    className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-400 capitalize"
                    name="playerThreeName"
                    component="span"
                  />
                </div>

                <div className="mb-2">
                  <Field
                    type="text"
                    id="playerThreeNic"
                    name="playerThreeNic"
                    placeholder="Player NIC"
                    className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-400 capitalize"
                    name="playerThreeNic"
                    component="span"
                  />
                </div>
              </section>

              <section className="mb-3">
                <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                  Player 4 Details
                </h4>
                <div className="mb-2">
                  <Field
                    type="text"
                    id="playerFourName"
                    name="playerFourName"
                    placeholder="Player Name"
                    className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-400 capitalize"
                    name="playerFourName"
                    component="span"
                  />
                </div>

                <div className="mb-2">
                  <Field
                    type="text"
                    id="playerFourNic"
                    name="playerFourNic"
                    placeholder="Player NIC"
                    className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-400 capitalize"
                    name="playerFourNic"
                    component="span"
                  />
                </div>
              </section>

              <section className="mb-3">
                <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                  Player 5 Details
                </h4>

                <div className="mb-2">
                  <Field
                    type="text"
                    id="playerFiveName"
                    name="playerFiveName"
                    placeholder="Player Name"
                    className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-400 capitalize"
                    name="playerFiveName"
                    component="span"
                  />
                </div>

                <div className="mb-2">
                  <Field
                    type="text"
                    id="playerFiveNic"
                    name="playerFiveNic"
                    placeholder="Player NIC"
                    className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                  />
                  <ErrorMessage
                    className="text-[10px] text-red-400 capitalize"
                    name="playerFiveNic"
                    component="span"
                  />
                </div>
              </section>
            </div>
            <div className="flex flex-row items-center justify-end">
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
                Next &nbsp;
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
