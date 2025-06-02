import tl from "../../assets/images/home-roulette-tl.png";
import tm from "../../assets/images/home-roulette-tm.png";
import tr from "../../assets/images/home-roulette-tr.png";
import bl from "../../assets/images/home-roulette-bl.png";
import bm from "../../assets/images/home-roulette-bm.png";
import br from "../../assets/images/home-roulette-br.png";
import mid from "../../assets/images/home-roulette-mid.png";

function Roulette() {
  return (
    <div className="w-full h-auto md:h-screen overflow-visible overflow-x-clip grid justify-center content-center mb-0 md:mb-0">
      <div className="bg-gradient-to-b from-[#7AA476] to-[#2E3E2D] aspect-[3/2] h-auto w-[130vw] max-w-none rounded-e-[50%] rounded-s-[50%] z-10 relative">
        <img
          src={mid}
          alt=""
          className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-80 md:h-80"
        />
        <button className="group peer absolute border-solid border-2 md:border-8 rounded-full border-[#B1CECD] top-[20%] left-[11%] w-16 h-16 md:w-80 md:h-80 z-[1] hover:h-[15rem] md:hover:h-[40rem] hover:w-[15rem] md:hover:w-[40rem] hover:z-10 hover:border-[8px] md:hover:border-[32px] focus:w-[20rem] md:focus:w-[60rem] focus:h-[20rem] md:focus:h-[60rem] focus:border-[8px] md:focus:border-[32px] focus:-translate-x-1/2 focus:-translate-y-1/2 focus:top-[50%] focus:left-[50%] focus:z-20">
          <img src={tl} alt="" className="w-full h-full rounded-full"></img>
          <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 invisible group-focus:visible font-freeman text-white text-[11px] md:text-3xl text-justify self-center justify-self-center px-2 md:px-4 min-w-[260px]">
            By converting food scraps into an eco-friendly soil conditioner,
            they are not only reducing waste but also supporting farmers,
            gardeners, and communities across the country. This website was
            created to share their story, showcase their impact, and educate
            others about how food waste can become a powerful tool for
            environmental restoration and agricultural health. Join us in
            supporting local solutions to global problems—because sustainability
            starts at home.
          </p>
        </button>
        <button className="group peer absolute border-solid border-2 md:border-8 rounded-full border-[#B1CECD] top-[5%] left-[50%] -translate-x-1/2 w-16 h-16 md:w-80 md:h-80 z-[1] hover:h-[15rem] md:hover:h-[40rem] hover:w-[15rem] md:hover:w-[40rem] hover:z-10 hover:border-[8px] md:hover:border-[32px] focus:w-[20rem] md:focus:w-[60rem] focus:h-[20rem] md:focus:h-[60rem] focus:border-[8px] md:focus:border-[32px] focus:-translate-x-1/2 focus:-translate-y-1/2 focus:top-[50%] focus:left-[50%] focus:z-20">
          <img src={tm} alt="" className="w-full h-full rounded-full"></img>
          <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 invisible group-focus:visible font-freeman text-white text-[11px] md:text-3xl text-justify self-center justify-self-center px-2 md:px-4 min-w-[260px]">
            By converting food scraps into an eco-friendly soil conditioner,
            they are not only reducing waste but also supporting farmers,
            gardeners, and communities across the country. This website was
            created to share their story, showcase their impact, and educate
            others about how food waste can become a powerful tool for
            environmental restoration and agricultural health. Join us in
            supporting local solutions to global problems—because sustainability
            starts at home.
          </p>
        </button>
        <button className="group peer absolute border-solid border-2 md:border-8 rounded-full border-[#B1CECD] top-[20%] right-[11%] w-16 h-16 md:w-80 md:h-80 z-[1] hover:h-[15rem] md:hover:h-[40rem] hover:w-[15rem] md:hover:w-[40rem] hover:z-10 hover:border-[8px] md:hover:border-[32px] focus:w-[20rem] md:focus:w-[60rem] focus:h-[20rem] md:focus:h-[60rem] focus:border-[8px] md:focus:border-[32px] focus:-translate-x-1/2 focus:-translate-y-1/2 focus:top-[50%] focus:left-[50%] focus:z-20">
          <img src={tr} alt="" className="w-full h-full rounded-full"></img>
          <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 invisible group-focus:visible font-freeman text-white text-[11px] md:text-3xl text-justify self-center justify-self-center px-2 md:px-4 min-w-[260px]">
            By converting food scraps into an eco-friendly soil conditioner,
            they are not only reducing waste but also supporting farmers,
            gardeners, and communities across the country. This website was
            created to share their story, showcase their impact, and educate
            others about how food waste can become a powerful tool for
            environmental restoration and agricultural health. Join us in
            supporting local solutions to global problems—because sustainability
            starts at home.
          </p>
        </button>
        <button className="group peer absolute border-solid border-2 md:border-8 rounded-full border-[#B1CECD] bottom-[20%] left-[11%] w-16 h-16 md:w-80 md:h-80 z-[1] hover:h-[15rem] md:hover:h-[40rem] hover:w-[15rem] md:hover:w-[40rem] hover:z-10 hover:border-[8px] md:hover:border-[32px] focus:w-[20rem] md:focus:w-[60rem] focus:h-[20rem] md:focus:h-[60rem] focus:border-[8px] md:focus:border-[32px] focus:-translate-x-1/2 focus:-translate-y-1/2 focus:top-[50%] focus:left-[50%] focus:z-20">
          <img src={bl} alt="" className="w-full h-full rounded-full"></img>
          <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 invisible group-focus:visible font-freeman text-white text-[11px] md:text-3xl text-justify self-center justify-self-center px-2 md:px-4 min-w-[260px]">
            By converting food scraps into an eco-friendly soil conditioner,
            they are not only reducing waste but also supporting farmers,
            gardeners, and communities across the country. This website was
            created to share their story, showcase their impact, and educate
            others about how food waste can become a powerful tool for
            environmental restoration and agricultural health. Join us in
            supporting local solutions to global problems—because sustainability
            starts at home.
          </p>
        </button>
        <button className="group peer absolute border-solid border-2 md:border-8 rounded-full border-[#B1CECD] bottom-[5%] left-[50%] -translate-x-1/2 w-16 h-16 md:w-80 md:h-80 z-[1] hover:h-[15rem] md:hover:h-[40rem] hover:w-[15rem] md:hover:w-[40rem] hover:z-10 hover:border-[8px] md:hover:border-[32px] focus:w-[20rem] md:focus:w-[60rem] focus:h-[20rem] md:focus:h-[60rem] focus:border-[8px] md:focus:border-[32px] focus:-translate-x-1/2 focus:-translate-y-1/2 focus:top-[50%] focus:left-[50%] focus:z-20">
          <img src={bm} alt="" className="w-full h-full rounded-full"></img>
          <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 invisible group-focus:visible font-freeman text-white text-[11px] md:text-3xl text-justify self-center justify-self-center px-2 md:px-4 min-w-[260px]">
            By converting food scraps into an eco-friendly soil conditioner,
            they are not only reducing waste but also supporting farmers,
            gardeners, and communities across the country. This website was
            created to share their story, showcase their impact, and educate
            others about how food waste can become a powerful tool for
            environmental restoration and agricultural health. Join us in
            supporting local solutions to global problems—because sustainability
            starts at home.
          </p>
        </button>
        <button className="group peer absolute border-solid border-2 md:border-8 rounded-full border-[#B1CECD] bottom-[20%] right-[11%] w-16 h-16 md:w-80 md:h-80 z-[1] hover:h-[15rem] md:hover:h-[40rem] hover:w-[15rem] md:hover:w-[40rem] hover:z-10 hover:border-[8px] md:hover:border-[32px] focus:w-[20rem] md:focus:w-[60rem] focus:h-[20rem] md:focus:h-[60rem] focus:border-[8px] md:focus:border-[32px] focus:-translate-x-1/2 focus:-translate-y-1/2 focus:top-[50%] focus:left-[50%] focus:z-20">
          <img src={br} alt="" className="w-full h-full rounded-full"></img>
          <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 invisible group-focus:visible font-freeman text-white text-[11px] md:text-3xl text-justify self-center justify-self-center px-2 md:px-4 min-w-[260px]">
            By converting food scraps into an eco-friendly soil conditioner,
            they are not only reducing waste but also supporting farmers,
            gardeners, and communities across the country. This website was
            created to share their story, showcase their impact, and educate
            others about how food waste can become a powerful tool for
            environmental restoration and agricultural health. Join us in
            supporting local solutions to global problems—because sustainability
            starts at home.
          </p>
        </button>

        <div className="invisible bg-[#000000] peer-focus:visible fixed top-0 left-0 w-screen h-screen opacity-50 z-[2]"></div>
      </div>
    </div>
  );
}

export default Roulette;
