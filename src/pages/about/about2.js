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
          By converting food scraps into an eco-friendly soil conditioner, they
          are not only reducing waste but also supporting farmers, gardeners,
          and communities across the country. This website was created to share
          their story, showcase their impact, and educate others about how food
          waste can become a powerful tool for environmental restoration and
          agricultural health. Join us in supporting local solutions to global
          problems—because sustainability starts at home.
        </p>
      </div>
    </div>
  );
}

export default About2;
