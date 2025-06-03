import img1 from "../../assets/images/about-img1.png";
import img2 from "../../assets/images/home-img3.png";
import img3 from "../../assets/images/about-img4.png";

import SlCarousel from "@shoelace-style/shoelace/dist/react/carousel";
import SlCarouselItem from "@shoelace-style/shoelace/dist/react/carousel-item";

import "@shoelace-style/shoelace/dist/themes/light.css";
import { setBasePath } from "@shoelace-style/shoelace/dist/utilities/base-path.js";

setBasePath(
  "https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.20.1/cdn/"
);

function Team() {
  return (
    <div className="w-full h-auto md:h-screen overflow-visible overflow-x-clip grid">
      <div className="bg-[#6D9E68] w-full h-[80vh] md:h-[150vh] max-h-none rounded-b-[50px] md:rounded-b-[300px] z-[9] relative pt-10 md:pt-[25%]">
        <p className="text-center font-fugazOne text-[#62680A] text-lg md:text-2xl px-4">
          TEAM BEHIND THE{" "}
          <span className="text-xl md:text-4xl text-[#0E680A]">
            {" "}
            CONNECTGREEN APPLICATION
          </span>
        </p>
        <div className="w-[90%] md:w-[70%] mt-6 md:mt-10 justify-self-center">
          <SlCarousel loop autoplay interval={1500}>
            <SlCarouselItem>
              <img
                alt="MRF Facility and Team"
                src={img1}
                className="w-full h-auto"
              />
            </SlCarouselItem>
            <SlCarouselItem>
              <img
                alt="Composting Process"
                src={img2}
                className="w-full h-auto"
              />
            </SlCarouselItem>
            <SlCarouselItem>
              <img
                alt="MRF Staff Team"
                src={img3}
                className="w-full h-auto"
              />
            </SlCarouselItem>
          </SlCarousel>
        </div>
      </div>
    </div>
  );
}

export default Team;
