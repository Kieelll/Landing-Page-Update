import img1 from "../../assets/images/about-img1.png";
import img2 from "../../assets/images/home-img3.png";

function Meet() {
  return (
    <div className="bg-[url('././assets/images/about-img2.png')] bg-no-repeat bg-cover justify-items-center pb-[10%] pt-[17%] px-[5%] md:px-[17%] w-full">
      <p className="text-2xl md:text-3xl font-fugazOne text-[#efff0b] mb-5">Meet</p>
      <p className="text-3xl md:text-[53px] font-fugazOne text-[#36f310] mb-5">
        MRF AND ZERO WASTE MANAGEMENT
      </p>
      <p className="mb-5 text-justify text-lg md:text-2xl text-white font-freeman">
        Welcome to Barangay Concepcion Uno's Materials Recovery Facility (MRF), where we transform food waste into valuable soil conditioner. Our state-of-the-art facility serves as a model for sustainable waste management in Marikina City, demonstrating how communities can turn environmental challenges into opportunities for growth and innovation.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-11 gap-10 items-center mb-10">
        <div className="grid grid-flow-row col-span-1 md:col-span-5">
          <p className="text-white text-lg md:text-2xl text-justify font-freeman">
            Our MRF facility features specialized composting areas, quality control laboratories, and storage facilities designed to handle food waste efficiently. Through our community-based approach, we've created a sustainable system that not only manages waste but also generates income for local residents while promoting environmental awareness.
          </p>
        </div>
        <div className="grid grid-flow-col col-span-1 md:col-span-6">
          <img
            className="h-auto w-full justify-self-end"
            src={img1}
            alt="MRF Facility"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-11 gap-10 items-center">
        <div className="grid grid-flow-col col-span-1 md:col-span-6 order-2 md:order-1">
          <img
            className="h-auto w-full justify-self-start"
            src={img2}
            alt="Composting Process"
          />
        </div>
        <div className="grid grid-flow-row col-span-1 md:col-span-5 order-1 md:order-2">
          <p className="text-white text-lg md:text-2xl text-justify font-freeman">
            The facility operates as a hub for waste collection, processing, and distribution. Our trained staff ensures proper sorting and processing of food waste, while our quality control measures guarantee that the final product meets the highest standards for soil conditioning. This integrated approach has made our barangay a leader in sustainable waste management practices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Meet;
