import img1 from "../../assets/images/about-img4.png";

function About2() {
  return (
    <div className="flex flex-col md:flex-row bg-[#79A476] justify-items-center items-center">
      <div className="self-stretch w-full md:w-[55%]">
        <img
          className="h-full w-auto p-0 object-cover object-left"
          src={img1}
          alt="MRF ZERO WASTE STAFFS"
        />
      </div>
      <div className="w-full md:w-[45%] p-4 md:p-[15%]">
        <p className="text-white text-lg md:text-2xl text-justify font-freeman">
          Meet our dedicated team of environmental champions at Barangay Concepcion Uno's MRF facility. Our staff, composed of local residents and waste management experts, works tirelessly to ensure efficient waste processing and quality soil conditioner production. Through their commitment and expertise, they've transformed our community's approach to waste management while creating sustainable livelihoods for themselves and their families.
        </p>
      </div>
    </div>
  );
}

export default About2;
