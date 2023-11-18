import BrandImage from "../../assets/logo/brand_logo.svg";

function Footer() {
  return (
    <div className="bg-[#353945] px-10 py-5">
      <div className="flex flex-row justify-between items-center">
        <img
          src={BrandImage}
          alt="brand image footer "
          className="w-[120px] md:w-[150px] xl:w-[180px]"
        />
        <p className="text-[10px] text-[#999999] font-light md:text-[13px] ">
          Copyright 2023. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
export default Footer;
