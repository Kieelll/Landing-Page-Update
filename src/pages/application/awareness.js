import phone3 from "../../assets/images/app-phone3.png";

function Awareness() {
  return (
    <div className="w-full bg-[#ECFBEA] px-4 md:px-[15%] py-8 md:py-[5%]">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
        <div className="flex justify-center md:justify-start w-full md:w-[40%]">
          <img
            className="h-[250px] md:h-[525px] w-auto object-contain"
            src={phone3}
            alt="GreenConnect Logo"
          />
        </div>
        <div className="flex flex-col w-full md:w-[60%]">
          <p className="pb-5 md:pb-10 text-2xl md:text-5xl font-fugazOne text-[#0E680A] text-center md:text-right">
            AWARENESS
          </p>
          <p className="text-[#78800A] text-base md:text-2xl text-justify font-freeman max-w-2xl">
            The Awareness page offers valuable insights into the many ways you
            can responsibly manage and repurpose food waste. It highlights
            practical and sustainable methods you can adopt at home or in your
            community. One of the key solutions featured is converting food
            waste into nutrient-rich soil conditioner, which can be used to
            enrich soil and support the healthy growth of plants and crops. By
            following these simple steps, you can help reduce waste while
            contributing to a greener and more sustainable environment.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Awareness;
