/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, Form, Formik, ErrorMessage } from "formik";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { GroupEventInterface } from "../../../../data/data";
import * as Yup from "yup";

function FormFour({
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
    player1_name_100_4_mix: Yup.string().required().label("player 1 Name"),
    player1_phone_100_4_mix: Yup.string().required().label("player 1 Phone"),
    player1_nic_100_4_mix: Yup.string().required().label("player 1 NIC"),
    player1_email_100_4_mix: Yup.string().required().label("player 1 Email"),

    player2_name_100_4_mix: Yup.string().required().label("player 2 Name"),
    player2_nic_100_4_mix: Yup.string().required().label("player 1 NIC"),

    player3_name_100_4_mix: Yup.string().required().label("player 3 Name"),
    player3_nic_100_4_mix: Yup.string().required().label("player 3 NIC"),

    player4_name_100_4_mix: Yup.string().required().label("player 4 Name"),
    player4_nic_100_4_mix: Yup.string().required().label("player 4 NIC"),

    sub_name_100_4_mix: Yup.string().required().label("Sub Player Name"),
    sub_nic_100_4_mix: Yup.string().required().label("Sub Player NIC"),
  });
  return (
    <>
      <section className="flex flex-row lg:mb-8 lg:hidden">
        <div className="w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4">
          <div className="w-6 h-6 bg-white rounded-full" />
        </div>
        <div className="">
          <h4 className="text-[13px] font-normal leading-relaxed">
            100m x 4 Mix Sprint
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
              100m x 4 Mix Sprint
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
          changeGroupEvents("G_100_4_mix", true);
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
                          id="player1_name_100_4_mix"
                          name="player1_name_100_4_mix"
                          placeholder="Player 1 Name"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player1_name_100_4_mix"
                          component="span"
                        />
                      </div>

                      <div className="mb-2">
                        <Field
                          type="text"
                          id="player1_phone_100_4_mix"
                          name="player1_phone_100_4_mix"
                          placeholder="Player 1 Mobile Number"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player1_phone_100_4_mix"
                          component="span"
                        />
                      </div>

                      <div className="mb-2">
                        <Field
                          type="text"
                          id="player1_nic_100_4_mix"
                          name="player1_nic_100_4_mix"
                          placeholder="Player 1 NIC"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player1_nic_100_4_mix"
                          component="span"
                        />
                      </div>

                      <div className="mb-2">
                        <Field
                          type="text"
                          id="player1_email_100_4_mix"
                          name="player1_email_100_4_mix"
                          placeholder="Player 1 Email"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player1_email_100_4_mix"
                          component="span"
                        />
                      </div>

                      {formData.organization === "University" && (
                        <div className="mb-2">
                          <Field
                            type="text"
                            id="player1_uni_id_100_4_mix"
                            name="player1_uni_id_100_4_mix"
                            placeholder="Player 1 University ID"
                            className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                          />
                          <ErrorMessage
                            className="text-[10px] text-red-400 capitalize"
                            name="player1_uni_id_100_4_mix"
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
                          id="player2_name_100_4_mix"
                          name="player2_name_100_4_mix"
                          placeholder="Player 2 Name"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player2_name_100_4_mix"
                          component="span"
                        />
                      </div>

                      <div className="mb-2">
                        <Field
                          type="text"
                          id="player2_nic_100_4_mix"
                          name="player2_nic_100_4_mix"
                          placeholder="Player 2 NIC"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player2_nic_100_4_mix"
                          component="span"
                        />
                      </div>

                      {/* <div className="mb-2">
                      <Field
                        type="text"
                        id="player1_email_100_4_mix"
                        name="player1_email_100_4_mix"
                        placeholder="Player 1 Email"
                        className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                      />
                      <ErrorMessage
                        className="text-[10px] text-red-400 capitalize"
                        name="player1_email_100_4_mix"
                        component="span"
                      />
                    </div> */}

                      {formData.organization === "University" && (
                        <div className="mb-2">
                          <Field
                            type="text"
                            id="player2_uni_id_100_4_mix"
                            name="player2_uni_id_100_4_mix"
                            placeholder="Player 2 University ID"
                            className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                          />
                          <ErrorMessage
                            className="text-[10px] text-red-400 capitalize"
                            name="player2_uni_id_100_4_mix"
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
                          id="player3_name_100_4_mix"
                          name="player3_name_100_4_mix"
                          placeholder="Player 3 Name"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player3_name_100_4_mix"
                          component="span"
                        />
                      </div>

                      <div className="mb-2">
                        <Field
                          type="text"
                          id="player3_nic_100_4_mix"
                          name="player3_nic_100_4_mix"
                          placeholder="Player 3 NIC"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player3_nic_100_4_mix"
                          component="span"
                        />
                      </div>

                      {formData.organization === "University" && (
                        <div className="mb-2">
                          <Field
                            type="text"
                            id="player3_uni_id_100_4_mix"
                            name="player3_uni_id_100_4_mix"
                            placeholder="Player 3 University ID"
                            className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                          />
                          <ErrorMessage
                            className="text-[10px] text-red-400 capitalize"
                            name="player3_uni_id_100_4_mix"
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
                          id="player4_name_100_4_mix"
                          name="player4_name_100_4_mix"
                          placeholder="Player 4 Name"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player4_name_100_4_mix"
                          component="span"
                        />
                      </div>

                      <div className="mb-2">
                        <Field
                          type="text"
                          id="player4_nic_100_4_mix"
                          name="player4_nic_100_4_mix"
                          placeholder="Player 4 NIC"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="player4_nic_100_4_mix"
                          component="span"
                        />
                      </div>

                      {formData.organization === "University" && (
                        <div className="mb-2">
                          <Field
                            type="text"
                            id="player4_uni_id_100_4_mix"
                            name="player4_uni_id_100_4_mix"
                            placeholder="Player 4 University ID"
                            className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                          />
                          <ErrorMessage
                            className="text-[10px] text-red-400 capitalize"
                            name="player4_uni_id_100_4_mix"
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
                          id="sub_name_100_4_mix"
                          name="sub_name_100_4_mix"
                          placeholder="Sub Player Name"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white"
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="sub_name_100_4_mix"
                          component="span"
                        />
                      </div>

                      <div className="mb-2">
                        <Field
                          type="text"
                          id="sub_nic_100_4_mix"
                          name="sub_nic_100_4_mix"
                          placeholder="Sub Player NIC"
                          className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                        />
                        <ErrorMessage
                          className="text-[10px] text-red-400 capitalize"
                          name="sub_nic_100_4_mix"
                          component="span"
                        />
                      </div>

                      {formData.organization === "University" && (
                        <div className="mb-2">
                          <Field
                            type="text"
                            id="sub_uni_id_100_4_mix"
                            name="sub_uni_id_100_4_mix"
                            placeholder="Sub Player University ID"
                            className="outline-none w-[100%] border text-sm rounded-lg block  p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
                          />
                          <ErrorMessage
                            className="text-[10px] text-red-400 capitalize"
                            name="sub_uni_id_100_4_mix"
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
export default FormFour;

// import { FiArrowLeft } from "react-icons/fi";
// // import { MdCreditCard } from "react-icons/md";
// import { StepOneFields } from "../../../../data/data";

// function FormFour({
//   formData,
//   handleSelectedStep,
// }: Readonly<{
//   formData: StepOneFields;
//   handleSelectedStep: (step: number) => void;
// }>) {
//   console.log(formData);
//   return (
//     <>
//       <section className="flex flex-row lg:mb-8 lg:hidden">
//         <div className="w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4">
//           <div className="w-6 h-6 bg-white rounded-full" />
//         </div>
//         <div className="">
//           <h4 className="text-[13px] font-normal leading-relaxed">
//             Preview and Payment
//           </h4>
//           <p className="text-[#AFAFAF] text-[11px] ">Step 4/4</p>
//         </div>
//       </section>

//       <div className="hidden grid-cols-4 lg:grid gap-5">
//         <section className="flex flex-row lg:mb-8 ">
//           <div className="w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4">
//             <div className="w-6 h-6 bg-white rounded-full" />
//           </div>
//           <div className="">
//             <h4 className="text-[13px] font-normal leading-relaxed">
//               Organization and captain details
//             </h4>
//             <p className="text-[#AFAFAF] text-[11px] ">Step 1/4</p>
//           </div>
//         </section>

//         <section className="flex flex-row lg:mb-8 ">
//           <div className="w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4">
//             <div className="w-6 h-6 bg-white rounded-full" />
//           </div>
//           <div className="">
//             <h4 className="text-[13px] font-normal leading-relaxed">
//               Player Details
//             </h4>
//             <p className="text-[#AFAFAF] text-[11px] ">Step 2/4</p>
//           </div>
//         </section>
//         <section className="flex flex-row lg:mb-8">
//           <div className="w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4">
//             <div className="w-6 h-6 bg-white rounded-full" />
//           </div>
//           <div className="">
//             <h4 className="text-[13px] font-normal leading-relaxed">
//               Substitute Players
//             </h4>
//             <p className="text-[#AFAFAF] text-[11px] ">Step 3/4</p>
//           </div>
//         </section>
//         <section className="flex flex-row lg:mb-8">
//           <div className="w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4">
//             <div className="w-6 h-6 bg-white rounded-full" />
//           </div>
//           <div className="">
//             <h4 className="text-[13px] font-normal leading-relaxed">
//               Preview and Payment
//             </h4>
//             <p className="text-[#AFAFAF] text-[11px] ">Step 4/4</p>
//           </div>
//         </section>
//       </div>

//       <div className="mt-5">
//         {/* Player Data */}

//         <div className="md:min-h-[70vh] lg:min-h-[400px] flex flex-row justify-between md:flex-col md:justify-start md:gap-3">
//           <div className="flex flex-col w-[49%] md:grid md:grid-cols-5 md:w-[100%] lg:grid lg:grid-cols-5 lg:w-[100%]">
//             <section className="mb-4 ">
//               <h4 className="text-[13px] font-normal leading-relaxed mb-2">
//                 Organization Details
//               </h4>
//               <p className="italic font-medium text-[12px] text-[#999999]">
//                 {formData.organization.replace("-", " ")}
//               </p>
//               <p className="italic font-medium text-[12px] text-[#999999] ">
//                 {formData.clubName}
//               </p>
//               <p className="italic font-medium text-[12px] text-[#999999] ">
//                 {formData.playingCategory.replace("-", " ")}
//               </p>
//             </section>
//             {/*
//             <section className="mb-4 ">
//               <h4 className="text-[13px] font-normal leading-relaxed mb-2">
//                 Player 2 Details
//               </h4>
//               <p className="italic font-medium text-[12px] text-[#999999]">
//                 {formData.playerTwoName}
//               </p>
//               <p className="italic font-medium text-[12px] text-[#999999] ">
//                 {formData.playerTwoNic}
//               </p>
//             </section>

//             <section className="mb-4 ">
//               <h4 className="text-[13px] font-normal leading-relaxed mb-2">
//                 Player 3 Details
//               </h4>
//               <p className="italic font-medium text-[12px] text-[#999999]">
//                 {formData.playerThreeName}
//               </p>
//               <p className="italic font-medium text-[12px] text-[#999999] ">
//                 {formData.playerThreeNic}
//               </p>
//             </section>

//             <section className="mb-4 ">
//               <h4 className="text-[13px] font-normal leading-relaxed mb-2">
//                 Player 4 Details
//               </h4>
//               <p className="italic font-medium text-[12px] text-[#999999]">
//                 {formData.playerFourName}
//               </p>
//               <p className="italic font-medium text-[12px] text-[#999999] ">
//                 {formData.playerFourNic}
//               </p>
//             </section>

//             <section className="mb-4 ">
//               <h4 className="text-[13px] font-normal leading-relaxed mb-2">
//                 Player 5 Details
//               </h4>
//               <p className="italic font-medium text-[12px] text-[#999999]">
//                 {formData.playerFiveName}
//               </p>
//               <p className="italic font-medium text-[12px] text-[#999999] ">
//                 {formData.playerFiveNic}
//               </p>
//             </section> */}
//           </div>
//           {/* <div className="flex flex-col w-[49%]  md:grid md:grid-cols-5 md:w-[100%]">
//             <section className="mb-4 ">
//               <h4 className="text-[13px] font-normal leading-relaxed mb-2">
//                 Captain Details
//               </h4>
//               <p className="italic font-medium text-[12px] text-[#999999]">
//                 {formData.captainName}
//               </p>
//               <p className="italic font-medium text-[12px] text-[#999999] ">
//                 {formData.captainPhone}
//               </p>
//               <p className="italic font-medium text-[12px] text-[#999999] ">
//                 {formData.captainNic}
//               </p>
//               <p className="italic font-medium text-[12px] underline text-[#999999] ">
//                 {formData.captainEmail}
//               </p>
//             </section>

//             <section className="mb-4 ">
//               <h4 className="text-[13px] font-normal leading-relaxed mb-2">
//                 Substitute Player 1
//               </h4>
//               <p className="italic font-medium text-[12px] text-[#999999]">
//                 {formData.substituteOneName}
//               </p>
//               <p className="italic font-medium text-[12px] text-[#999999] ">
//                 {formData.substituteOneNic}
//               </p>
//             </section>

//             <section className="mb-4 ">
//               <h4 className="text-[13px] font-normal leading-relaxed mb-2">
//                 Substitute Player 2
//               </h4>
//               <p className="italic font-medium text-[12px] text-[#999999]">
//                 {formData.substituteTwoName}
//               </p>
//               <p className="italic font-medium text-[12px] text-[#999999] ">
//                 {formData.substituteTwoNic}
//               </p>
//             </section>

//             <section className="mb-4 ">
//               <h4 className="text-[13px] font-normal leading-relaxed mb-2">
//                 Substitute Player 3
//               </h4>
//               <p className="italic font-medium text-[12px] text-[#999999]">
//                 {formData.substituteThreeName}
//               </p>
//               <p className="italic font-medium text-[12px] text-[#999999] ">
//                 {formData.substituteThreeNic}
//               </p>
//             </section>
//             <section className="mb-4"></section>
//           </div> */}
//         </div>
//         <div className="flex flex-row items-center justify-end lg:mt-5">
//           <button
//             type="button"
//             className=" bg-[#374151] shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg mr-3"
//             onClick={() => handleSelectedStep(2)}
//           >
//             <FiArrowLeft color="white" />
//             &nbsp; Back
//           </button>
//           {/* <button
//             type="submit"
//             className=" bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg"
//             onClick={() => console.log("Payment Initializing ... ")}
//           >
//             Register &nbsp;
//             <MdCreditCard color="white" />
//           </button> */}
//         </div>
//       </div>
//     </>
//   );
// }
// export default FormFour;
