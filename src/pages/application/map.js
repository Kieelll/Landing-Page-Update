import phone5 from "../../assets/images/app-phone5.png";

function Map() {
  return (
    <div className="w-full bg-[#7AA476] px-4 md:px-[15%] py-8 md:py-[5%] shadow-2xl">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
        <div className="flex justify-center md:justify-start w-full md:w-[40%]">
          <img
            className="h-[250px] md:h-[450px] w-auto object-contain"
            src={phone5}
            alt="GreenConnect Logo"
          />
        </div>
        <div className="flex flex-col w-full md:w-[60%]">
          <p className="pb-5 md:pb-10 text-2xl md:text-5xl font-fugazOne text-[#0E680A] text-center md:text-right">
            FOOD WASTE MAP
          </p>
          <p className="text-white text-base md:text-2xl text-justify font-freeman max-w-2xl">
            The Food Waste Map feature provides users with real-time visibility
            into the current locations of our food waste collectors. It also
            displays the total amount of food waste collected, as well as nearby
            drop-off points or partner locations that accept food waste from
            users in the same area. This interactive map helps promote
            transparency, encourages participation, and makes it easier for
            users to contribute to sustainable waste management efforts.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Map;
