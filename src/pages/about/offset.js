import hero from "../../assets/images/about-hero.png";

function Offset() {
  return (
    <div className="w-full bg-[#7AA476] px-[5%] md:px-[15%]">
      <p className="translate-y-full text-4xl md:text-8xl text-white font-freeman text-center">
        ABOUT US
      </p>
      <div className="translate-y-1/2 justify-self-center">
        <img src={hero} alt="Bio-Reactor" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Offset;
