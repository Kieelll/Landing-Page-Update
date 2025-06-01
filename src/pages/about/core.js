import mission from "../../assets/images/about-core-mission.png";
import vision from "../../assets/images/about-core-vision.png";
import goals from "../../assets/images/about-core-goals.png";
import values from "../../assets/images/about-core-values.png";

function Core() {
  return (
    <div className="bg-[url('././assets/images/about-core-bg.png')] bg-no-repeat bg-cover min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Cards Section */}
          <div className="grid gap-6 p-4 sm:p-8">
            <div className="bg-white bg-opacity-25 flex flex-col sm:flex-row py-4 px-4 sm:px-6 gap-4 items-end rounded-2xl relative">
              <div className="bg-[#285D28] w-full sm:w-2/5 py-4 sm:py-5 px-4 sm:px-7 rounded-tr-[100px] sm:rounded-tr-[200px] rounded-bl-[50px] sm:rounded-bl-[100px]">
                <p className="text-2xl sm:text-4xl text-white text-center font-freeman">
                  MISSION
                </p>
              </div>
              <div className="bg-[#0F661C] w-full sm:w-3/5 py-3 sm:py-6 px-4 sm:px-10 rounded-tl-[50px] sm:rounded-tl-[200px] rounded-br-[100px] sm:rounded-br-[100px]">
                <p className="text-white font-freeman text-center text-sm sm:text-base">
                  Our Mission is to help our environment by turning food waste into
                  a useable soil conditioner that can be use for making plants
                  healthier
                </p>
              </div>
              <img
                src={mission}
                alt="Mission Icon"
                className="absolute left-2 sm:left-3 top-4 sm:top-5 w-8 sm:w-12 h-auto"
              />
            </div>

            <div className="bg-white bg-opacity-25 flex flex-col sm:flex-row py-4 px-4 sm:px-6 gap-4 items-end rounded-2xl relative">
              <div className="bg-[#285D28] w-full sm:w-2/5 py-4 sm:py-5 px-4 sm:px-7 rounded-tl-[50px] sm:rounded-tl-[100px] rounded-br-[100px] sm:rounded-br-[200px]">
                <p className="text-2xl sm:text-4xl text-white text-center font-freeman">
                  VISION
                </p>
              </div>
              <div className="bg-[#0F661C] w-full sm:w-3/5 py-3 sm:py-6 px-4 sm:px-10 rounded-bl-[50px] sm:rounded-bl-[200px] rounded-tr-[100px] sm:rounded-tr-[100px]">
                <p className="text-white font-freeman text-center text-sm sm:text-base">
                  Our Mission is to help our environment by turning food waste into
                  a useable soil conditioner that can be use for making plants
                  healthier
                </p>
              </div>
              <img
                src={vision}
                alt="Vision Icon"
                className="absolute left-2 sm:left-3 top-4 sm:top-5 w-8 sm:w-12 h-auto"
              />
            </div>

            <div className="bg-white bg-opacity-25 flex flex-col sm:flex-row py-4 px-4 sm:px-6 gap-4 items-end rounded-2xl relative">
              <div className="bg-[#285D28] w-full sm:w-2/5 py-4 sm:py-5 px-4 sm:px-7 rounded-tr-[100px] sm:rounded-tr-[200px] rounded-bl-[50px] sm:rounded-bl-[100px]">
                <p className="text-2xl sm:text-4xl text-white text-center font-freeman">
                  GOALS
                </p>
              </div>
              <div className="bg-[#0F661C] w-full sm:w-3/5 py-3 sm:py-6 px-4 sm:px-10 rounded-tl-[50px] sm:rounded-tl-[200px] rounded-br-[100px] sm:rounded-br-[100px]">
                <p className="text-white font-freeman text-center text-sm sm:text-base">
                  Our Mission is to help our environment by turning food waste into
                  a useable soil conditioner that can be use for making plants
                  healthier
                </p>
              </div>
              <img
                src={goals}
                alt="Goals Icon"
                className="absolute left-2 sm:left-3 top-4 sm:top-5 w-8 sm:w-12 h-auto"
              />
            </div>

            <div className="bg-white bg-opacity-25 flex flex-col sm:flex-row py-4 px-4 sm:px-6 gap-4 items-end rounded-2xl relative">
              <div className="bg-[#285D28] w-full sm:w-2/5 py-4 sm:py-5 px-4 sm:px-7 rounded-tl-[50px] sm:rounded-tl-[100px] rounded-br-[100px] sm:rounded-br-[200px]">
                <p className="text-2xl sm:text-4xl text-white text-center font-freeman">
                  VALUES
                </p>
              </div>
              <div className="bg-[#0F661C] w-full sm:w-3/5 py-3 sm:py-6 px-4 sm:px-10 rounded-bl-[50px] sm:rounded-bl-[200px] rounded-tr-[100px] sm:rounded-tr-[100px]">
                <p className="text-white font-freeman text-center text-sm sm:text-base">
                  Our Mission is to help our environment by turning food waste into
                  a useable soil conditioner that can be use for making plants
                  healthier
                </p>
              </div>
              <img
                src={values}
                alt="Values Icon"
                className="absolute left-2 sm:left-3 top-4 sm:top-5 w-8 sm:w-12 h-auto"
              />
            </div>
          </div>

          {/* Title Section */}
          <div className="flex items-center justify-center">
            <p className="text-white text-4xl sm:text-6xl md:text-8xl lg:text-[140px] font-freeman text-center leading-tight">
              CORE VALUES
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Core;
