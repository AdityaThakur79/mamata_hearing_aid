import React, { useState } from "react";
import { assets } from "../assets/assets";
import Banner from "../components/Banner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Implement your form submission logic here
    alert("Form submitted successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      newsletter: false,
    });
  };
  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row">
              {/* Map Area */}
              <div className="w-full lg:w-1/2 h-96 lg:h-auto">
                {/* Placeholder for Google Map */}
                <div className="h-full w-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.366143789509!2d72.76305927468024!3d19.69702983218407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be71de903839fdb%3A0x7ff938b1d1103965!2sMamata%20Hearing%20%26%20Speech%20Clinic!5e0!3m2!1sen!2sin!4v1746873959986!5m2!1sen!2sin"
                        width="600"
                        height="450"
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="w-full lg:w-1/2 p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-[#043152]  mb-2">
                    Contact With Us
                  </h2>
                  <p className="text-gray-600">
                    If you have any questions please feel free to contact with
                    us.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-group">
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                    ></textarea>
                  </div>

                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <button
                      onClick={handleSubmit}
                      className="inline-block bg-[#5AA89B] text-white font-medium py-3 px-8 rounded-md shadow hover:bg-[#5AA89B] transition duration-300 ease-in-out"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-14 w-14 rounded-full bg-[#043152] flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    <a href="tel:8421451171" className="hover:underline">
                      08421451171
                    </a>{" "}
                    /{" "}
                    <a href="tel:7058401171" className="hover:underline">
                      07058401171
                    </a>
                  </h3>
                  <p className="text-gray-600">
                    <a
                      href="mailto:mamatahearingclinic@gmail.com"
                      className="hover:underline"
                    >
                      mamatahearingclinic@gmail.com
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-14 w-14 rounded-full bg-[#043152]  flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8  text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    shop no.146,Build No.P02,1st Floor,Harmony Plaza,Opposite
                    SBI Bank,Boisar-Tarapur Road,Boisar - 401501
                  </h3>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white p-6 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:scale-105">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-4">
                  <div className="h-14 w-14 rounded-full bg-[#043152]  flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8  text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Mon - Sat : 10:00 am to 1:30 pm and 5:30 to 8:00
                    <br />
                    Wed : 10:00 am to 1:30 pm
                  </h3>
                  <p className="text-gray-600">Sunday Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Banner />
    </>
  );
};

export default Contact;
