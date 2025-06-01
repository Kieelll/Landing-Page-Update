import phone4 from "../../assets/images/app-phone4.png";

function Donate() {
  return (
    <div className="w-full bg-[#ECFBEA] px-4 md:px-[15%] py-8 md:py-[5%]">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
        <div className="flex flex-col w-full md:w-[60%]">
          <p className="pb-5 md:pb-10 text-2xl md:text-[47px] font-fugazOne text-[#0E680A] text-center md:text-left">
            DONATE YOUR FOOD WASTE
          </p>
          <p className="text-[#78800A] text-base md:text-2xl text-justify font-freeman max-w-2xl">
            The Food Waste Donation page allows you to easily record the amount
            of food waste you have and submit the details through the
            application. Once received, our team will coordinate with you to
            collect the waste and responsibly convert it into valuable soil
            conditioner. This process not only helps reduce landfill waste but
            also supports sustainable agriculture and environmental
            preservation.
          </p>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-[40%]">
          <img
            className="h-[250px] md:h-[450px] w-auto object-contain"
            src={phone4}
            alt="GreenConnect Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Donate;
