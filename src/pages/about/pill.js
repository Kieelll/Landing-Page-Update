import pill1 from "../../assets/images/about-pill1.png";
import pill2 from "../../assets/images/about-pill2.png";
import pill3 from "../../assets/images/about-pill3.png";
import pill4 from "../../assets/images/about-pill4.png";

function Pill() {
  return (
    <div className="w-full bg-[#ECFBEA] px-[5%] md:px-[10%] py-[10%]">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0">
        <div className="rounded-l-full border-y-4 md:border-y-8 border-l-4 md:border-l-8 border-[#79A476] border-solid py-4 pl-4">
          <img src={pill1} alt="" className="rounded-l-full w-full h-auto" />
        </div>
        <div className="pl-4 md:pl-10 pr-4 md:pr-20 py-4 md:py-10">
          <p className="text-justify text-[#78800A] text-base md:text-xl font-freeman">
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0 -mt-2">
        <div className="pl-4 md:pl-20 pr-4 md:pr-10 py-4 md:py-10 order-2 md:order-1">
          <p className="text-justify text-[#78800A] text-base md:text-xl font-freeman">
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
        <div className="rounded-r-full border-y-4 md:border-y-8 border-r-4 md:border-r-8 border-[#79A476] border-solid py-4 pr-4 order-1 md:order-2">
          <img src={pill2} alt="" className="rounded-r-full w-full h-auto" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0 -mt-2">
        <div className="rounded-l-full border-y-4 md:border-y-8 border-l-4 md:border-l-8 border-[#79A476] border-solid py-4 pl-4">
          <img src={pill3} alt="" className="rounded-l-full w-full h-auto" />
        </div>
        <div className="pl-4 md:pl-10 pr-4 md:pr-20 py-4 md:py-10">
          <p className="text-justify text-[#78800A] text-base md:text-xl font-freeman">
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
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-0 -mt-2">
        <div className="pl-4 md:pl-20 pr-4 md:pr-10 py-4 md:py-10 order-2 md:order-1">
          <p className="text-justify text-[#78800A] text-base md:text-xl font-freeman">
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
        <div className="rounded-r-full border-y-4 md:border-y-8 border-r-4 md:border-r-8 border-[#79A476] border-solid py-4 pr-4 order-1 md:order-2">
          <img src={pill4} alt="" className="rounded-r-full w-full h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Pill;
