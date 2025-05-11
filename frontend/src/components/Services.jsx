import React, { useState } from "react";
import { assets } from "../assets/assets";

const servicesData = [
  {
    id: 1,
    title: "Hearing Tests (Audiometry - PTA)",
    description:
      "Comprehensive hearing assessments using audiometry (PTA) to accurately diagnose hearing conditions in all age groups.",
    image: assets.service_1,
  },
  {
    id: 2,
    title: "Hearing Aid Fitting & Programming",
    description:
      "Expert fitting, tuning, and programming of hearing aids based on your specific hearing profile and lifestyle.",
    image: assets.service_2,
  },
  {
    id: 3,
    title: "Affordable Hearing Aids",
    description:
      "High-quality hearing aids available at affordable prices, including options from leading brands like Siemens.",
    image: assets.service_7,
  },
  {
    id: 4,
    title: "Rechargeable Hearing Aids",
    description:
      "Modern rechargeable hearing aids that offer convenience and long battery life for everyday use.",
    image: assets.service_3,
  },
  {
    id: 5,
    title: "Hearing Aid Batteries",
    description:
      "Reliable and long-lasting hearing aid batteries suitable for all major hearing aid models.",
    image: assets.service_9,
  },
  {
    id: 6,
    title: "Hearing Aid Repair & Maintenance",
    description:
      "Professional repair, cleaning, and maintenance for all types and brands of hearing instruments.",
    image: assets.service_15,
  },
  {
    id: 7,
    title: "Speech Therapy for All Ages",
    description:
      "Personalized speech therapy services for children, adults, and senior citizens facing speech or language difficulties.",
    image: assets.service_4,
  },
  {
    id: 8,
    title: "Pediatric Hearing Care",
    description:
      "Kid-friendly hearing tests and treatment tailored for infants and children in a comfortable environment.",
    image: assets.service_6,
  },
  {
    id: 9,
    title: "Tinnitus Management",
    description:
      "Evaluation and therapeutic solutions for managing ringing in the ears (tinnitus).",
    image: assets.service_1,
  },
  {
    id: 10,
    title: "Senior Citizen Hearing Test Center",
    description:
      "Specialized hearing tests and solutions for elderly patients in a senior-friendly environment.",
    image: assets.service_12,
  },
  {
    id: 11,
    title: "Listening to TV with Hearing Instruments",
    description:
      "Solutions and accessories to improve TV listening experiences using your hearing aids.",
    image: assets.service_15,
  },
  {
    id: 12,
    title: "Hearing Aids & Accessories in Boisar",
    description:
      "Full range of hearing aids, batteries, and accessories available at our Boisar clinic.",
    image: assets.service_11,
  },
  {
    id: 13,
    title: "Siemens Hearing Aids",
    description:
      "Authorized services and fitting of Siemens hearing aids with expert consultation.",
    image: assets.service_9,
  },
  {
    id: 14,
    title: "Expert Hearing Consultation",
    description:
      "One-on-one sessions with hearing specialists to discuss concerns and find optimal hearing solutions.",
    image: assets.service_5,
  },
  {
  id: 15,
  title: "Custom Ear Molds & Ear Plugs",
  description:
    "High-quality custom ear molds and plugs for hearing aids, swimmers, musicians, and noise protection tailored to your ear shape.",
  image: assets.service_10,
}
];

const Services = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedServices = showAll ? servicesData : servicesData.slice(0, 6);

  return (
    <section className="services px-2 md:px-10 lg:px-20 md:py-20 py-10">
      <div className="container mx-auto px-4 lg:px-10">
        <div className="text-center">
          <h2 className="text-xl text-[#5AA89B]">
            Where compassionate care meets expert hearing solutions
          </h2>
          <h2 className="text-2xl  text-[#043152]  font-bold mt-2">
            We provide a range of hearing services to
            address your <span>unique</span> needs.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10 service-cards">
          {displayedServices.map((service) => (
            <div key={service.id} className="service-card hover:shine">
              <figure>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-100 h-100 object-cover rounded-t-lg"
                />
              </figure>
              <div className="service-description mt-4">
                <h2 className="text-xl font-semibold">{service.title}</h2>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {!showAll && servicesData.length > 6 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(true)}
              className="px-6 py-2 rounded-full bg-[#5AA89B] text-white hover:bg-[#043152] transition-colors"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;
