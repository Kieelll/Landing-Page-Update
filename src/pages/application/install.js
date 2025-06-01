import applogo from "../../assets/images/app-logo.png";
import phone1 from "../../assets/images/app-phone1.png";

function Install() {
  return (
    <div className="w-full bg-[#ECFBEA] px-4 md:px-[10%] py-8 md:py-[8%]">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
        <div className="flex items-end justify-center md:justify-start w-full md:w-auto">
          <img
            className="h-auto w-[150px] md:w-[400px]"
            src={applogo}
            alt="GreenConnect Logo"
          />
          <img
            className="ml-[-20px] md:ml-[-70px] mt-[-10px] md:mt-[-30px] h-auto w-[150px] md:w-[400px]"
            src={phone1}
            alt="Mobile Login Screen"
          />
        </div>
        <div className="flex flex-col items-center md:items-start w-full md:w-auto">
          <p className="mb-5 md:mb-10 text-2xl md:text-3xl font-fugazOne text-[#62680A] text-center md:text-left">
            WELCOME TO
            <span className="text-3xl md:text-5xl text-[#0E680A]"> GREENCONNECT</span>
          </p>
          <p className="mb-5 text-[#78800A] text-base md:text-3xl text-justify font-freeman max-w-2xl">
            ConnectGreen is a mobile and web-based application designed to
            reduce food waste and support sustainable agriculture by connecting
            food waste providers—such as households and restaurants—with
            consumers like gardeners and farmers.
          </p>
          <button className="shadow-2xl rounded-2xl px-6 md:px-12 py-3 md:py-6 text-xl md:text-4xl font-fugazOne text-[#0E680A] bg-[#7AA476] hover:bg-[#8AB185] transition-colors">
            INSTALL NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Install;
