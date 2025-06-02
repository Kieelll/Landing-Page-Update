import pill1 from "../../assets/images/about-pill1.png";
import pill2 from "../../assets/images/about-pill2.png";
import pill3 from "../../assets/images/about-pill3.png";
import pill4 from "../../assets/images/about-pill4.png";

function Pill() {
  return (
    <div className="w-full bg-[#ECFBEA] px-[5%] md:px-[10%] py-[10%]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0">
        <div className="rounded-l-full border-y-4 md:border-y-8 border-l-4 md:border-l-8 border-[#79A476] border-solid py-4 pl-4">
          <img src={pill1} alt="Food Waste Collection" className="rounded-l-full w-full h-auto" />
        </div>
        <div className="pl-4 md:pl-10 pr-4 md:pr-20 py-4 md:py-10">
          <p className="text-justify text-[#78800A] text-base md:text-xl font-freeman">
            Our dedicated team carefully collects and sorts food waste from households and businesses in Barangay Concepcion Uno. This initial step is crucial as it ensures that only suitable organic materials enter our composting system, maintaining the quality of our final product.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0 -mt-2">
        <div className="pl-4 md:pl-20 pr-4 md:pr-10 py-4 md:py-10 order-2 md:order-1">
          <p className="text-justify text-[#78800A] text-base md:text-xl font-freeman">
            Through proper segregation, we separate food waste from non-organic materials, ensuring that our composting process remains efficient and effective. This careful sorting process helps us maintain high standards in our soil conditioner production.
          </p>
        </div>
        <div className="rounded-r-full border-y-4 md:border-y-8 border-r-4 md:border-r-8 border-[#79A476] border-solid py-4 pr-4 order-1 md:order-2">
          <img src={pill2} alt="Waste Segregation Process" className="rounded-r-full w-full h-auto" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0 -mt-2">
        <div className="rounded-l-full border-y-4 md:border-y-8 border-l-4 md:border-l-8 border-[#79A476] border-solid py-4 pl-4">
          <img src={pill3} alt="Team Sorting Waste" className="rounded-l-full w-full h-auto" />
        </div>
        <div className="pl-4 md:pl-10 pr-4 md:pr-20 py-4 md:py-10">
          <p className="text-justify text-[#78800A] text-base md:text-xl font-freeman">
            Our trained staff works together to ensure proper handling of collected waste. Each team member plays a vital role in maintaining the cleanliness and efficiency of our segregation process, contributing to the success of our waste management initiative.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0 -mt-2">
        <div className="pl-4 md:pl-20 pr-4 md:pr-10 py-4 md:py-10 order-2 md:order-1">
          <p className="text-justify text-[#78800A] text-base md:text-xl font-freeman">
            The segregated food waste is then prepared for the composting process. This systematic approach not only helps us produce high-quality soil conditioner but also promotes proper waste management practices within our community.
          </p>
        </div>
        <div className="rounded-r-full border-y-4 md:border-y-8 border-r-4 md:border-r-8 border-[#79A476] border-solid py-4 pr-4 order-1 md:order-2">
          <img src={pill4} alt="Prepared Waste for Composting" className="rounded-r-full w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Pill;
