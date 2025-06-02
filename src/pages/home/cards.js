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
            Barangay Concepcion Uno's soil conditioner initiative transforms organic waste into nutrient-rich compost, enhancing soil fertility and promoting sustainable agriculture. This eco-friendly solution helps local farmers improve crop yields while reducing environmental impact through proper waste management.
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
            Our community's soil conditioner program serves multiple purposes: it reduces landfill waste, creates employment opportunities for residents, and provides affordable organic fertilizer for local gardens. This initiative strengthens community bonds while promoting environmental stewardship.
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
            The soil conditioner produced in Barangay Concepcion Uno contains essential nutrients like nitrogen, phosphorus, and potassium, making it ideal for both home gardens and commercial farming. Our facility processes food waste and yard trimmings into high-quality compost that improves soil structure and water retention.
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
            Through educational workshops and community outreach, Barangay Concepcion Uno teaches residents about composting and sustainable gardening practices. Our soil conditioner program has become a model for other communities, demonstrating how local initiatives can create positive environmental and social impact.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
