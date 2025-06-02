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
            Step 6: Distribution and Education
            The final soil conditioner is packaged and distributed to local farmers, gardeners, and community members. We also conduct workshops to teach proper application methods and share knowledge about sustainable gardening practices.
          </p>
        </button>
        <button className="group peer absolute border-solid border-2 md:border-8 rounded-full border-[#B1CECD] top-[5%] left-[50%] -translate-x-1/2 w-16 h-16 md:w-80 md:h-80 z-[1] hover:h-[15rem] md:hover:h-[40rem] hover:w-[15rem] md:hover:w-[40rem] hover:z-10 hover:border-[8px] md:hover:border-[32px] focus:w-[20rem] md:focus:w-[60rem] focus:h-[20rem] md:focus:h-[60rem] focus:border-[8px] md:focus:border-[32px] focus:-translate-x-1/2 focus:-translate-y-1/2 focus:top-[50%] focus:left-[50%] focus:z-20">
          <img src={tm} alt="" className="w-full h-full rounded-full"></img>
          <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 invisible group-focus:visible font-freeman text-white text-[11px] md:text-3xl text-justify self-center justify-self-center px-2 md:px-4 min-w-[260px]">
            Step 1: Collection and Sorting
            Our process begins with the careful collection of food waste from households and local businesses in Barangay Concepcion Uno. Volunteers and staff sort the waste to remove non-organic materials, ensuring only suitable food scraps enter our composting system.
          </p>
        </button>
        <button className="group peer absolute border-solid border-2 md:border-8 rounded-full border-[#B1CECD] top-[20%] right-[11%] w-16 h-16 md:w-80 md:h-80 z-[1] hover:h-[15rem] md:hover:h-[40rem] hover:w-[15rem] md:hover:w-[40rem] hover:z-10 hover:border-[8px] md:hover:border-[32px] focus:w-[20rem] md:focus:w-[60rem] focus:h-[20rem] md:focus:h-[60rem] focus:border-[8px] md:focus:border-[32px] focus:-translate-x-1/2 focus:-translate-y-1/2 focus:top-[50%] focus:left-[50%] focus:z-20">
          <img src={tr} alt="" className="w-full h-full rounded-full"></img>
          <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 invisible group-focus:visible font-freeman text-white text-[11px] md:text-3xl text-justify self-center justify-self-center px-2 md:px-4 min-w-[260px]">
            Step 2: Initial Processing
            The sorted food waste is then shredded and mixed with carbon-rich materials like dried leaves and paper. This mixture is carefully balanced to achieve the optimal carbon-to-nitrogen ratio, which is crucial for effective composting.
          </p>
        </button>
        <button className="group peer absolute border-solid border-2 md:border-8 rounded-full border-[#B1CECD] bottom-[20%] left-[11%] w-16 h-16 md:w-80 md:h-80 z-[1] hover:h-[15rem] md:hover:h-[40rem] hover:w-[15rem] md:hover:w-[40rem] hover:z-10 hover:border-[8px] md:hover:border-[32px] focus:w-[20rem] md:focus:w-[60rem] focus:h-[20rem] md:focus:h-[60rem] focus:border-[8px] md:focus:border-[32px] focus:-translate-x-1/2 focus:-translate-y-1/2 focus:top-[50%] focus:left-[50%] focus:z-20">
          <img src={bl} alt="" className="w-full h-full rounded-full"></img>
          <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 invisible group-focus:visible font-freeman text-white text-[11px] md:text-3xl text-justify self-center justify-self-center px-2 md:px-4 min-w-[260px]">
            Step 5: Quality Control
            The matured compost undergoes thorough testing to ensure it meets our quality standards. We check for nutrient content, pH levels, and the absence of harmful pathogens. Only compost that passes these tests is approved for distribution.
          </p>
        </button>
        <button className="group peer absolute border-solid border-2 md:border-8 rounded-full border-[#B1CECD] bottom-[5%] left-[50%] -translate-x-1/2 w-16 h-16 md:w-80 md:h-80 z-[1] hover:h-[15rem] md:hover:h-[40rem] hover:w-[15rem] md:hover:w-[40rem] hover:z-10 hover:border-[8px] md:hover:border-[32px] focus:w-[20rem] md:focus:w-[60rem] focus:h-[20rem] md:focus:h-[60rem] focus:border-[8px] md:focus:border-[32px] focus:-translate-x-1/2 focus:-translate-y-1/2 focus:top-[50%] focus:left-[50%] focus:z-20">
          <img src={bm} alt="" className="w-full h-full rounded-full"></img>
          <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 invisible group-focus:visible font-freeman text-white text-[11px] md:text-3xl text-justify self-center justify-self-center px-2 md:px-4 min-w-[260px]">
            Step 4: Curing and Maturation
            After the active composting phase, the material is moved to curing bins where it matures for several weeks. During this stage, beneficial microorganisms continue to break down organic matter, creating a stable and nutrient-rich soil conditioner.
          </p>
        </button>
        <button className="group peer absolute border-solid border-2 md:border-8 rounded-full border-[#B1CECD] bottom-[20%] right-[11%] w-16 h-16 md:w-80 md:h-80 z-[1] hover:h-[15rem] md:hover:h-[40rem] hover:w-[15rem] md:hover:w-[40rem] hover:z-10 hover:border-[8px] md:hover:border-[32px] focus:w-[20rem] md:focus:w-[60rem] focus:h-[20rem] md:focus:h-[60rem] focus:border-[8px] md:focus:border-[32px] focus:-translate-x-1/2 focus:-translate-y-1/2 focus:top-[50%] focus:left-[50%] focus:z-20">
          <img src={br} alt="" className="w-full h-full rounded-full"></img>
          <p className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 invisible group-focus:visible font-freeman text-white text-[11px] md:text-3xl text-justify self-center justify-self-center px-2 md:px-4 min-w-[260px]">
            Step 3: Active Composting
            The mixture is placed in our specially designed composting bins where it undergoes active decomposition. Our staff regularly monitors temperature, moisture levels, and oxygen content, turning the material to ensure proper aeration and even decomposition.
          </p>
        </button>
        <div className="invisible bg-[#000000] peer-focus:visible fixed top-0 left-0 w-screen h-screen opacity-50 z-[2]"></div>
      </div>
    </div>
  );
}

export default Roulette;
