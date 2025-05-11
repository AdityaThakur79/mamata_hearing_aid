import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { DoctorContext } from "../context/DoctorContext";
import { AdminContext } from "../context/AdminContext";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const Navbar = () => {
  const { dToken, setDToken } = useContext(DoctorContext);
  const { aToken, setAToken } = useContext(AdminContext);

  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    dToken && setDToken("");
    dToken && localStorage.removeItem("dToken");
    aToken && setAToken("");
    aToken && localStorage.removeItem("aToken");
  };

  return (
    <div className="flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white">
      <div className="flex items-center gap-2 text-xs">
        {/* <button
          onClick={() => navigate("/doctors")}
          className="bg-[#043152]  hover:bg-[#5AA89B] text-white text-sm px-4 py-2 rounded-full"
        >
          <FaArrowLeft />
        </button> */}
        <img
          onClick={() => navigate("/")}
          className="w-36 sm:w-40 cursor-pointer"
          src={assets.logo}
          alt=""
        />
        <p className="border md:flex hidden  px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600">
          {aToken ? "Admin" : "Doctor"}
        </p>
      </div>
      <div className="flex md:gap-4">
        <button
          onClick={() => logout()}
          className="bg-[#043152] hover:bg-[#5AA89B] text-white text-sm px-10 py-2 rounded-full"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Navbar;
