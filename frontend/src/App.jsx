import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { DoctorContext } from "./context/DoctorContext";
import { AdminContext } from "./context/AdminContext";

import Navbar from "./components/Navbar";
import AdminNavbar from "./components/AdminNavbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

// Pages
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import AdminLogin from "./pages/AdminLogin";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Appointment from "./pages/Appointment";
import MyAppointments from "./pages/MyAppointments";
import MyProfile from "./pages/MyProfile";
import Verify from "./pages/Verify";
import Services from "./pages/Services";

// Admin / Doctor Pages
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointments from "./pages/Admin/AllAppointments";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorsList from "./pages/Admin/DoctorsList";
import DoctorAppointments from "./pages/Doctor/DoctorAppointments";
import DoctorDashboard from "./pages/Doctor/DoctorDashboard";
import DoctorProfile from "./pages/Doctor/DoctorProfile";

const App = () => {
  const { dToken } = useContext(DoctorContext);
  const { aToken } = useContext(AdminContext);

  const isAdmin = aToken;
  const isDoctor = dToken;

  return (
    <>
      <ToastContainer />

      {isAdmin || isDoctor ? (
        <div className="bg-[#F8F9FD]">
          <AdminNavbar />
          <div className="flex items-start">
            <Sidebar />
            <Routes>
              <Route
                path="/"
                element={isAdmin ? <Dashboard /> : <DoctorDashboard />}
              />
              <Route path="/all-appointments" element={<AllAppointments />} />
              <Route path="/add-doctor" element={<AddDoctor />} />
              <Route path="/doctor-list" element={<DoctorsList />} />
              <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
              <Route
                path="/doctor-appointments"
                element={<DoctorAppointments />}
              />
              <Route path="/doctor-profile" element={<DoctorProfile />} />
            </Routes>
          </div>
        </div>
      ) : (
        <>
          <div className="mx-4 sm:mx-[4%]">
            <Navbar />
          </div>
          <div className="mx-0 sm:mx-[4%]">
            <Routes>
              <Route path="/admin-login" element={<AdminLogin />} />
              <Route path="/" element={<Home />} />

              <Route path="/doctors" element={<Doctors />} />
              <Route path="/doctors/:speciality" element={<Doctors />} />
              <Route path="/login" element={<Login />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/appointment/:docId" element={<Appointment />} />
              <Route path="/my-appointments" element={<MyAppointments />} />
              <Route path="/my-profile" element={<MyProfile />} />
              <Route path="/verify" element={<Verify />} />
            </Routes>
          </div>
          <div className="mx-4 sm:mx-[4%]">
            <Footer />
          </div>
        </>
      )}
    </>
  );
};

export default App;
