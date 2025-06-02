import bg from "../../assets/images/home-img3.png";
import icon from "../../assets/images/home-cards-icon.png";

function Cards() {
  return (
    <div className="bg-[url('././assets/images/home-cards-bg.png')] bg-no-repeat bg-cover pb-[5%] md:pb-[10%] pt-[20%] md:pt-[35%]">
      <div className="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-6 md:gap-y-20 px-4 md:px-0">
        <div className="bg-[#A4C8A1] p-[5%] relative rounded-[50px] w-full md:w-[80%]">
          <img
            src={bg}
            alt=""
            className="brightness-50 rounded-bl-[50px] rounded-tr-[150px] w-full"
          />
          <img
            src={icon}
            alt=""
            className="absolute top-0 right-0 -translate-y-[20%] translate-x-[40%] w-12 h-12 md:w-20 md:h-20"
          />
          <p className="text-white text-[11px] md:text-lg font-freeman text-justify absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[260px] md:w-[80%] min-w-[260px]">
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
        <div className="bg-[#A4C8A1] p-[5%] relative rounded-[50px] w-full md:w-[80%]">
          <img
            src={bg}
            alt=""
            className="brightness-50 rounded-bl-[50px] rounded-tr-[150px] w-full"
          />
          <img
            src={icon}
            alt=""
            className="absolute top-0 right-0 -translate-y-[20%] translate-x-[40%] w-12 h-12 md:w-20 md:h-20"
          />
          <p className="text-white text-[11px] md:text-lg font-freeman text-justify absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[260px] md:w-[80%] min-w-[260px]">
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
        <div className="bg-[#A4C8A1] p-[5%] relative rounded-[50px] w-full md:w-[80%]">
          <img
            src={bg}
            alt=""
            className="brightness-50 rounded-bl-[50px] rounded-tr-[150px] w-full"
          />
          <img
            src={icon}
            alt=""
            className="absolute top-0 right-0 -translate-y-[20%] translate-x-[40%] w-12 h-12 md:w-20 md:h-20"
          />
          <p className="text-white text-[11px] md:text-lg font-freeman text-justify absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[260px] md:w-[80%] min-w-[260px]">
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
        <div className="bg-[#A4C8A1] p-[5%] relative rounded-[50px] w-full md:w-[80%]">
          <img
            src={bg}
            alt=""
            className="brightness-50 rounded-bl-[50px] rounded-tr-[150px] w-full"
          />
          <img
            src={icon}
            alt=""
            className="absolute top-0 right-0 -translate-y-[20%] translate-x-[40%] w-12 h-12 md:w-20 md:h-20"
          />
          <p className="text-white text-[11px] md:text-lg font-freeman text-justify absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[260px] md:w-[80%] min-w-[260px]">
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
    </div>
  );
}

export default Cards;
