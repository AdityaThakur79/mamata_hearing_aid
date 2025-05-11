import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <section className="flex bg-[#043152] rounded-sm px-4 sm:px-10 md:px-14 lg:px-12 md:mx-10">
     
      <div className="flex-1 py-6 sm:py-10 md:py-16 lg:py-20 lg:pl-5">
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
          <p className="mt-4">Take the First Step Towards Better Hearing</p>
        </div>
        <p className="text-white">
          Don't let hearing loss impact your quality of life. Schedule a
          consultation with our specialist today and discover the right hearing
          solution for you.
        </p>

        <button
          onClick={() => {
            navigate("/login");
            scrollTo(0, 0);
          }}
          className="bg-white text-sm sm:text-base text-[#595959] px-8 py-3 rounded-full mt-6 hover:scale-105 transition-all "
        >
          Book Appointment
        </button>
      </div>

      {/* ------- Right Side ------- */}
      <div className="hidden md:block md:w-1/2 lg:w-[370px] relative">
        <img
          className="w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </section>
  );
};

export default Banner;
