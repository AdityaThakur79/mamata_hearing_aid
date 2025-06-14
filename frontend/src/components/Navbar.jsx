import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { AdminContext } from "../context/AdminContext";
import { DoctorContext } from "../context/DoctorContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { aToken } = useContext(AdminContext);
  const { dToken } = useContext(DoctorContext);
  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken, userData } = useContext(AppContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken(false);
    navigate("/login");
  };

  const { doctors } = useContext(AppContext);

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-[#ADADAD]">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={assets.logo}
        alt=""
      />
      <ul className="md:flex items-start gap-5 font-medium hidden">
        <NavLink to="/">
          <li className="py-1">HOME</li>
          <hr className="border-none outline-none h-0.5 bg-[#043152] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">ABOUT US</li>
          <hr className="border-none outline-none h-0.5 bg-[#043152] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/services">
          <li className="py-1">SERVICES</li>
          <hr className="border-none outline-none h-0.5 bg-[#043152] w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">BOOK AN APPOINTMENT</li>
          <hr className="border-none outline-none h-0.5 bg-[#043152] w-3/5 m-auto hidden" />
        </NavLink>

        <NavLink to="/contact">
          <li className="py-1">CONTACT</li>
          <hr className="border-none outline-none h-0.5 bg-[#043152] w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-4 ">
        <button
          onClick={() => {
            navigate(`/appointment/${doctors[0]._id}`);
            scrollTo(0, 0);
          }}
          className="bg-[#5AA89B] text-white px-8 py-3 rounded-full font-light hidden md:block hover:bg-[#043152] hover:text-whi border border-[#5AA89B] transition-colors"
        >
          Book Appointment
        </button>

        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
          alt=""
        />

        {/* ---- Mobile Menu ---- */}
        <div
          className={`md:hidden ${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img src={assets.logo} className="w-36" alt="" />
            <img
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              className="w-7"
              alt=""
            />
          </div>

          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded full inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded full inline-block">ABOUT US</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/services">
              <p className="px-4 py-2 rounded full inline-block">SERVICES</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/doctors">
              <p className="px-4 py-2 rounded full inline-block">
                BOOK AN APPOINTMENT
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded full inline-block">CONTACT</p>
            </NavLink>
          </ul>

          <div className="flex flex-col items-center gap-4 mt-6 px-5">
            {token && userData ? (
              <div className="flex items-center gap-2 cursor-pointer group relative">
                <img className="w-8 rounded-full" src={userData.image} alt="" />
                <img className="w-2.5" src={assets.dropdown_icon} alt="" />
                <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
                  <div className="min-w-48 bg-gray-50 rounded flex flex-col gap-4 p-4">
                    {(aToken || dToken) && (
                      <p
                        onClick={() => navigate("/dashboard")}
                        className="hover:text-black cursor-pointer"
                      >
                        Dashboard
                      </p>
                    )}
                    <p
                      onClick={() => navigate("/my-profile")}
                      className="hover:text-black cursor-pointer"
                    >
                      My Profile
                    </p>
                    <p
                      onClick={() => navigate("/my-appointments")}
                      className="hover:text-black cursor-pointer"
                    >
                      My Appointments
                    </p>
                    <p
                      onClick={logout}
                      className="hover:text-black cursor-pointer"
                    >
                      Logout
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <button
                onClick={() => {
                  setShowMenu(false);
                  navigate("/login");
                }}
                className="bg-[#5AA89B] text-white px-8 py-3 rounded-full font-light hover:bg-[#043152] hover:text-white border border-[#5AA89B] transition-colors"
              >
                Create account
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
