import logo from "../assets/images/logo.png";
import facebook from "../assets/images/facebook.png";
import phone from "../assets/images/phone.png";
import atsign from "../assets/images/arroba.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="w-full bg-[#7AA476]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* About Us Section */}
          <div className="text-center md:text-left">
            <p className="text-[#0E680A] font-fugazOne text-2xl md:text-3xl mb-4">ABOUT US</p>
            <p className="text-[#404500] font-freeman text-sm md:text-base">
              We are a group of advocates, educators, and environmentalists
              dedicated to promoting the work of a Filipino company that is changing
              the way we look at food waste. Their mission? To turn what others
              throw away into a natural, effective soil conditioner that helps our
              land thrive.
            </p>
          </div>

          {/* Logo Section */}
          <div className="flex flex-col items-center">
            <img
              className="h-16 md:h-20 w-auto mb-4"
              src={logo}
              alt="GreenConnect Logo"
            />
            <p className="text-center font-freeman text-[#404500] text-sm md:text-base">
              © 2025 ConnectGreen all rights reserved
            </p>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-left">
            <p className="text-2xl text-[#0E680A] font-fugazOne mb-4">
              CONTACT US
            </p>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <img className="h-5 w-5 md:h-6 md:w-6 mr-3" src={phone} alt="Phone Icon" />
                <p className="font-freeman text-[#404500] text-sm md:text-base">
                  0943858375835
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <img className="h-5 w-5 md:h-6 md:w-6 mr-3" src={facebook} alt="Facebook Icon" />
                <p className="font-freeman text-[#404500] text-sm md:text-base">
                  connectgreen
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <img className="h-5 w-5 md:h-6 md:w-6 mr-3" src={atsign} alt="At Sign" />
                <p className="font-freeman text-[#404500] text-sm md:text-base">
                  connectgreen@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
