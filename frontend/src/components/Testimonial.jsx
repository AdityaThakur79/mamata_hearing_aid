import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { RiDoubleQuotesL } from "react-icons/ri";

const testimonials = [
  {
    name: "Ashish Tiwari",
    position: "Vasai",
    image: "",
    rating: 5,
    feedback:
      "Mamata hearing and speech clinic is the best hearing care clinic one should visit if you are genuinely looking for a hearing aid support. They provide best patient care from starting to till your hearing aids lasts. 👍🙏",
  },
  {
    name: "Aditya Thakur",
    position: "Thane",
    image: "",
    rating: 5,
    feedback:
      "The staff's expertise here and compassion made me feel at ease throughout my treatment. I'm grateful for their dedication to improving lives. Highly recommend this clinic! 👂💬",
  },
  {
    name: "Shreyash Wadkar",
    position: "Virar",
    image: "",
    rating: 5,
    feedback:
      "The staff were incredibly professional and welcoming from the moment I walked in. The audiologist was thorough in their examination and explained everything clearly. They took the time to understand my concerns and provided tailored recommendations. The clinic itself was clean and well-maintained.",
  },
  {
    name: "Sahil Saykar",
    position: "Virar",
    image: "",
    rating: 5,
    feedback:
      "I have been visiting this place through my friend's advice as my grandmother suffering from slight hearing issues and wow it turned out to great handling of patient and efficiency.. best option for hearing issues...",
  },
  {
    name: "Kunal Singh",
    position: "Mira road",
    image: "",
    rating: 5,
    feedback:
      "I had consulted several doctors in Palghar and Boisar for hearing and speech issues, but none were as effective as Mamta Hearing & Speech Clinic. The care and results I received here were truly excellent. Highly recommended!",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial bg-cover bg-center md:py-20 py-4">
      <div className="container mx-auto px-4 md:px-10">
        <div className="text-center">
          <h5 className="text-sm text-[#5AA89B] font-semibold">TESTIMONIAL</h5>
          <h2 className="text-2xl  text-[#043152]  font-bold mt-2">
            What Our Patients Say
          </h2>
        </div>

        <Splide
          options={{
            type: "loop",
            perPage: 3,
            perMove: 1,
            gap: "30px",
            arrows: false,
            autoplay: true,
            interval: 1500,
            pagination: false,
            breakpoints: {
              992: { perPage: 2 },
              572: { perPage: 1 },
            },
          }}
          className="md:mt-10 mt-4"
        >
          {testimonials.map((testimonial, index) => (
            <SplideSlide key={index} className="splide-track">
              <div className="bg-white testimonial-card p-6 text-center shadow  ">
                <div>
                  <RiDoubleQuotesL className="text-3xl testimonial-quotes  text-[#043152] mb-2" />
                </div>
                <div className="flex justify-start mb-2 text-yellow-500 text-lg">
                  {Array(testimonial.rating)
                    .fill()
                    .map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                </div>
                <p className="text-gray-600 hover:text-white  mb-4 text-left">
                  {testimonial.feedback}
                </p>
                <div className="flex items-start justify-start gap-3 testimonial-name">
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full border object-cover"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full border bg-gray-300 flex items-center justify-center text-sm font-semibold text-gray-700">
                      {testimonial.name?.charAt(0).toUpperCase()}
                    </div>
                  )}

                  <div>
                    <h4 className="text-black hover:text-white font-bold">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 hover:text-white text-sm">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
  );
};

export default Testimonial;
