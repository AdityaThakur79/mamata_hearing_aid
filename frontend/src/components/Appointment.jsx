import React, { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

const AppointmentModal = ({
  open,
  setOpen,
  slotDate,
  slotTime,
  docId,
  backendUrl,
  getDoctosData,
  navigate
}) => {
  const [userData, setUserData] = useState({
    name: "",
    age:"",
    email: "",
    phone: "",
    message: ""
  })

  const handleBooking = async () => {
    if (!userData.name || !userData.phone) {
      toast.warning("Please fill in all required fields")
      return
    }

    try {
      const { data } = await axios.post(`${backendUrl}/api/user/book-appointment`, {
        docId,
        slotDate,
        slotTime,
        userData
      })

      if (data.success) {
        toast.success("Thankyou for booking an appointment")
        getDoctosData()
        setOpen(false)
        navigate("/")
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong while booking")
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md mx-auto p-6 relative">
        {/* Close button */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl font-semibold"
        >
          ×
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Book Appointment</h2>

        <div className="space-y-3">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={userData.name}
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Enter your age"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={userData.age}
            onChange={(e) => setUserData({ ...userData, age: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={userData.email}
            onChange={(e) => setUserData({ ...userData, email: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={userData.phone}
            onChange={(e) => setUserData({ ...userData, phone: e.target.value })}
          />
          <textarea
            placeholder="Message"
            className="w-full border border-gray-300 rounded px-3 py-2"
            value={userData.message}
            onChange={(e) => setUserData({ ...userData, message: e.target.value })}
          ></textarea>
        </div>

        <button
          onClick={handleBooking}
          className="mt-5 w-full bg-[#043152] hover:bg-[#5AA89B] text-white py-2 rounded font-medium"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  )
}

export default AppointmentModal
