import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const headers = [
  {
    title: "Better Hearing, Better Life",
    subtitle:
      "We're dedicated to improving your quality of life through better hearing.",
    image: assets.header_img,
  },
  {
    title: "Expert Audiology Care",
    subtitle:
      "Trust Mamata Clinic for accurate hearing tests and personalized hearing aid fittings.",
    image: assets.header_img,
  },
//   {
//     title: "Ear Wax Removal Services",
//     subtitle:
//       "Safe, professional ear wax removal to help you hear more clearly every day.",
//     image: assets.header_img,
//   },
];

const Header = () => {
  return (
    <section className="pt-0">
      <Splide
        options={{
          type: "loop",
          perPage: 1,
          autoplay: true,
          interval: 5000,
          arrows: false,
          pagination: true,
          pauseOnHover: false,
          resetProgress: false,
        }}
      >
        {headers.map((item, index) => (
          <SplideSlide key={index}>
            <div className="flex flex-col md:flex-row bg-[#043152] rounded-lg md:px-10 px-4 overflow-hidden">
              {/* --------- Header Left --------- */}
              <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] px-4">
                <p className="text-4xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
                  {item.title}
                </p>
                <p className="text-white">{item.subtitle}</p>
                <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
                  <img className="w-28" src={assets.group_profiles} alt="" />
                  <p>
                    Mamata Hearing Aids provides professional hearing health
                    care services in Boisar.
                  </p>
                </div>
                <Link to="/doctors"
                  href="#speciality"
                  className="flex items-center gap-2 bg-white px-8 py-3 rounded-full text-[#595959] text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
                >
                  Book appointment
                  <img className="w-3" src={assets.arrow_icon} alt="" />
                </Link>
              </div>

              {/* --------- Header Right --------- */}
              <div className="md:w-1/2">
                <img
                  className="w-full h-auto object-cover"
                  src={item.image}
                  alt={item.title}
                />
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default Header;
