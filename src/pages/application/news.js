import phone6 from "../../assets/images/app-phone6.png";

function News() {
  return (
    <div className="w-full bg-[#ECFBEA] px-4 md:px-[15%] py-8 md:py-[5%]">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
        <div className="flex flex-col w-full md:w-[60%]">
          <p className="pb-5 md:pb-10 text-2xl md:text-[47px] font-fugazOne text-[#0E680A] text-center md:text-left">
            FOOD WASTE NEWS
          </p>
          <p className="text-[#78800A] text-base md:text-2xl text-justify font-freeman max-w-2xl">
            Our team regularly shares updates through the application, keeping
            users informed about the latest news, operational changes, and
            improvements related to food waste management. This ensures that
            users stay engaged and up-to-date with our ongoing efforts toward
            sustainability.
          </p>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-[40%]">
          <img
            className="h-[250px] md:h-[525px] w-auto object-contain"
            src={phone6}
            alt="GreenConnect Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default News;
