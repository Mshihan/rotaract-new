import BrandImage from "../../assets/logo/brand_logo.svg";

function Footer() {
  return (
    <div className="bg-[#353945] px-10 py-5">
      <div className="flex flex-row justify-between items-center">
        <img src={BrandImage} alt="brand image footer " className="w-[100px]" />
        <p className="text-[10px] text-[#999999] font-light ">
          Copyright 2023. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
export default Footer;
