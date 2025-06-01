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
        By converting food scraps into an eco-friendly soil conditioner, they
        are not only reducing waste but also supporting farmers, gardeners, and
        communities across the country. This website was created to share their
        story, showcase their impact, and educate others about how food waste
        can become a powerful tool for environmental restoration and
        agricultural health. Join us in supporting local solutions to global
        problems—because sustainability starts at home.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-11 gap-10 items-center mb-10">
        <div className="grid grid-flow-row col-span-1 md:col-span-5">
          <p className="text-white text-lg md:text-2xl text-justify font-freeman">
            By converting food scraps into an eco-friendly soil conditioner,
            they are not only reducing waste but also supporting farmers,
            gardeners, and communities across the country. This website was
            created to share their story, showcase their impact, and educate
            others about how food waste can become a powerful tool for
            environmental restoration and agricultural health. Join us in
            supporting local solutions to global problems—because sustainability
            starts at home.
          </p>
        </div>
        <div className="grid grid-flow-col col-span-1 md:col-span-6">
          <img
            className="h-auto w-full justify-self-end"
            src={img1}
            alt="GreenConnect Logo"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-11 gap-10 items-center">
        <div className="grid grid-flow-col col-span-1 md:col-span-6 order-2 md:order-1">
          <img
            className="h-auto w-full justify-self-start"
            src={img2}
            alt="GreenConnect Logo"
          />
        </div>
        <div className="grid grid-flow-row col-span-1 md:col-span-5 order-1 md:order-2">
          <p className="text-white text-lg md:text-2xl text-justify font-freeman">
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

export default Meet;
