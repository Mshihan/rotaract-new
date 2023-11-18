import { FiArrowLeft } from "react-icons/fi";
import { MdCreditCard } from "react-icons/md";
import { StepOneFields } from "../../../../data/data";

function FormFour({
  formData,
  handleSelectedStep,
}: Readonly<{
  formData: StepOneFields;
  handleSelectedStep: (step: number) => void;
}>) {
  console.log(formData);
  return (
    <>
      <section className="flex flex-row lg:mb-8 lg:hidden">
        <div className="w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4">
          <div className="w-6 h-6 bg-white rounded-full" />
        </div>
        <div className="">
          <h4 className="text-[13px] font-normal leading-relaxed">
            Preview and Payment
          </h4>
          <p className="text-[#AFAFAF] text-[11px] ">Step 4/4</p>
        </div>
      </section>

      <div className="hidden grid-cols-4 lg:grid gap-5">
        <section className="flex flex-row lg:mb-8 ">
          <div className="w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4">
            <div className="w-6 h-6 bg-white rounded-full" />
          </div>
          <div className="">
            <h4 className="text-[13px] font-normal leading-relaxed">
              Organization and captain details
            </h4>
            <p className="text-[#AFAFAF] text-[11px] ">Step 1/4</p>
          </div>
        </section>

        <section className="flex flex-row lg:mb-8 ">
          <div className="w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4">
            <div className="w-6 h-6 bg-white rounded-full" />
          </div>
          <div className="">
            <h4 className="text-[13px] font-normal leading-relaxed">
              Player Details
            </h4>
            <p className="text-[#AFAFAF] text-[11px] ">Step 2/4</p>
          </div>
        </section>
        <section className="flex flex-row lg:mb-8">
          <div className="w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4">
            <div className="w-6 h-6 bg-white rounded-full" />
          </div>
          <div className="">
            <h4 className="text-[13px] font-normal leading-relaxed">
              Substitute Players
            </h4>
            <p className="text-[#AFAFAF] text-[11px] ">Step 3/4</p>
          </div>
        </section>
        <section className="flex flex-row lg:mb-8">
          <div className="w-10 h-10 bg-[#4BB4BB] rounded-full flex justify-center items-center mr-4">
            <div className="w-6 h-6 bg-white rounded-full" />
          </div>
          <div className="">
            <h4 className="text-[13px] font-normal leading-relaxed">
              Preview and Payment
            </h4>
            <p className="text-[#AFAFAF] text-[11px] ">Step 4/4</p>
          </div>
        </section>
      </div>

      <div className="mt-5">
        {/* Player Data */}

        <div className="md:min-h-[70vh] lg:min-h-[400px] flex flex-row justify-between md:flex-col md:justify-start md:gap-3">
          <div className="flex flex-col w-[49%] md:grid md:grid-cols-5 md:w-[100%] lg:grid lg:grid-cols-5 lg:w-[100%]">
            <section className="mb-4 ">
              <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                Organization Details
              </h4>
              <p className="italic font-medium text-[12px] text-[#999999]">
                {formData.organization.replace("-", " ")}
              </p>
              <p className="italic font-medium text-[12px] text-[#999999] ">
                {formData.clubName}
              </p>
              <p className="italic font-medium text-[12px] text-[#999999] ">
                {formData.playingCategory.replace("-", " ")}
              </p>
            </section>

            <section className="mb-4 ">
              <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                Player 2 Details
              </h4>
              <p className="italic font-medium text-[12px] text-[#999999]">
                {formData.playerTwoName}
              </p>
              <p className="italic font-medium text-[12px] text-[#999999] ">
                {formData.playerTwoNic}
              </p>
            </section>

            <section className="mb-4 ">
              <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                Player 3 Details
              </h4>
              <p className="italic font-medium text-[12px] text-[#999999]">
                {formData.playerThreeName}
              </p>
              <p className="italic font-medium text-[12px] text-[#999999] ">
                {formData.playerThreeNic}
              </p>
            </section>

            <section className="mb-4 ">
              <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                Player 4 Details
              </h4>
              <p className="italic font-medium text-[12px] text-[#999999]">
                {formData.playerFourName}
              </p>
              <p className="italic font-medium text-[12px] text-[#999999] ">
                {formData.playerFourNic}
              </p>
            </section>

            <section className="mb-4 ">
              <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                Player 5 Details
              </h4>
              <p className="italic font-medium text-[12px] text-[#999999]">
                {formData.playerFiveName}
              </p>
              <p className="italic font-medium text-[12px] text-[#999999] ">
                {formData.playerFiveNic}
              </p>
            </section>
          </div>
          <div className="flex flex-col w-[49%]  md:grid md:grid-cols-5 md:w-[100%]">
            <section className="mb-4 ">
              <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                Captain Details
              </h4>
              <p className="italic font-medium text-[12px] text-[#999999]">
                {formData.captainName}
              </p>
              <p className="italic font-medium text-[12px] text-[#999999] ">
                {formData.captainPhone}
              </p>
              <p className="italic font-medium text-[12px] text-[#999999] ">
                {formData.captainNic}
              </p>
              <p className="italic font-medium text-[12px] underline text-[#999999] ">
                {formData.captainEmail}
              </p>
            </section>

            <section className="mb-4 ">
              <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                Substitute Player 1
              </h4>
              <p className="italic font-medium text-[12px] text-[#999999]">
                {formData.substituteOneName}
              </p>
              <p className="italic font-medium text-[12px] text-[#999999] ">
                {formData.substituteOneNic}
              </p>
            </section>

            <section className="mb-4 ">
              <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                Substitute Player 2
              </h4>
              <p className="italic font-medium text-[12px] text-[#999999]">
                {formData.substituteTwoName}
              </p>
              <p className="italic font-medium text-[12px] text-[#999999] ">
                {formData.substituteTwoNic}
              </p>
            </section>

            <section className="mb-4 ">
              <h4 className="text-[13px] font-normal leading-relaxed mb-2">
                Substitute Player 3
              </h4>
              <p className="italic font-medium text-[12px] text-[#999999]">
                {formData.substituteThreeName}
              </p>
              <p className="italic font-medium text-[12px] text-[#999999] ">
                {formData.substituteThreeNic}
              </p>
            </section>
            <section className="mb-4"></section>
          </div>
        </div>
        <div className="flex flex-row items-center justify-end lg:mt-5">
          <button
            type="button"
            className=" bg-[#374151] shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg mr-3"
            onClick={() => handleSelectedStep(2)}
          >
            <FiArrowLeft color="white" />
            &nbsp; Back
          </button>
          <button
            type="submit"
            className=" bg-gradient-to-r from-teal-500 to-indigo-800 shadow-lg py-2 px-4 cursor-pointer text-white float-right flex flex-row items-center rounded-lg"
            onClick={() => console.log("Payment Initializing ... ")}
          >
            Register &nbsp;
            <MdCreditCard color="white" />
          </button>
        </div>
      </div>
    </>
  );
}
export default FormFour;
