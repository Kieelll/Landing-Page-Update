import phone2 from "../../assets/images/app-phone2.png";

function Market() {
  return (
    <div className="w-full bg-[#7AA476] px-4 md:px-[15%] py-8 md:py-[5%] shadow-2xl">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
        <div className="flex flex-col w-full md:w-[60%]">
          <p className="pb-5 md:pb-10 text-2xl md:text-5xl font-fugazOne text-[#0E680A] text-center md:text-left">
            MARKET
          </p>
          <p className="text-white text-base md:text-2xl text-justify font-freeman max-w-2xl">
            Our team offers high-quality soil conditioner produced through the
            sustainable conversion of food waste. This eco-friendly product is
            available at an affordable price, making it an excellent choice for
            environmentally conscious gardeners, farmers, and plant enthusiasts.
            You can easily purchase the soil conditioner directly through the
            mobile application, providing a convenient and efficient way to
            support waste reduction and promote healthier soil.
          </p>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-[40%]">
          <img
            className="h-[250px] md:h-[525px] w-auto object-contain"
            src={phone2}
            alt="GreenConnect Logo"
          />
        </div>
      </div>
    </div>
  );
}

export default Market;
