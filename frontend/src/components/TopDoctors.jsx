import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <section className="relative overflow-hidden bg-[#F9FBFF] px-4 py-16 text-[#262626]">
      {/* Decorative Background Circle */}
      <div className="absolute top-[-50px] left-[-50px] w-[300px] h-[300px] bg-[#C9D8FF]/30 rounded-full z-0"></div>
      <div className="absolute bottom-[-50px] right-[-50px] w-[300px] h-[300px] bg-[#C9D8FF]/30 rounded-full z-0"></div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <h5 className="text-lg text-[#5AA89B] font-semibold">
          Book an appointment
        </h5>
        <h2 className="text-2xl md:text-3xl font-bold text-[#043152] mt-2 max-w-xl">
          Get the care you need at Mamata Hearing Aid and Speech Clinic — book
          your appointment with ease.
        </h2>

        {/* Doctor Card */}
        <div className="w-full flex justify-center mt-10">
          {doctors.length === 1 ? (
            <div
              onClick={() => {
                navigate(`/appointment/${doctors[0]._id}`);
                scrollTo(0, 0);
              }}
              className="w-full max-w-sm border border-[#C9D8FF] rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 shadow-md bg-white"
            >
              <img
                className="bg-[#EAEFFF] w-full  object-cover"
                src={doctors[0].image}
                alt={doctors[0].name}
              />
              <div className="p-4 text-left">
                <div
                  className={`flex items-center gap-2 text-sm mb-1 ${
                    doctors[0].available ? "text-green-500" : "text-gray-500"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      doctors[0].available ? "bg-green-500" : "bg-gray-500"
                    }`}
                  ></span>
                  <p>{doctors[0].available ? "Available" : "Not Available"}</p>
                </div>
                <p className="text-[#262626] text-lg font-semibold">
                  {doctors[0].name}
                </p>
                <p className="text-[#5C5C5C] text-sm">
                  {doctors[0].speciality}
                </p>
              </div>
            </div>
          ) : (
            <p>No doctors available right now.</p>
          )}
        </div>

        {/* Button */}
        <button
          onClick={() => {
            navigate("/doctors");
            scrollTo(0, 0);
          }}
          className="bg-[#EAEFFF] text-gray-600 px-12 py-3 rounded-full mt-10 hover:bg-[#d8e4ff]"
        >
         Book an Appointment
        </button>
      </div>
    </section>
  );
};

export default TopDoctors;
