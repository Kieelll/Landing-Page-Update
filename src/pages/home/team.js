import c1 from "../../assets/images/home-carousel-1.png";
import c2 from "../../assets/images/home-carousel-2.png";
import c3 from "../../assets/images/home-carousel-3.png";

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
                alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
                src={c1}
                className="w-full h-auto"
              />
            </SlCarouselItem>
            <SlCarouselItem>
              <img
                alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
                src={c2}
                className="w-full h-auto"
              />
            </SlCarouselItem>
            <SlCarouselItem>
              <img
                alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
                src={c3}
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
