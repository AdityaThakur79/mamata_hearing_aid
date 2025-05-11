import { GiSoundWaves } from "react-icons/gi";
import { MdHearing, MdRecordVoiceOver } from "react-icons/md";
import { FaUserMd } from "react-icons/fa";

const features = [
  {
    icon: <GiSoundWaves size={40} className="why-choose-us-icon" />,
    title: "Advanced Hearing Tests",
  },
  {
    icon: <MdHearing size={40} className="why-choose-us-icon" />,
    title: "Digital Hearing Aids",
  },
  {
    icon: <MdRecordVoiceOver size={40} className="why-choose-us-icon" />,
    title: "Speech Therapy",
  },
  {
    icon: <FaUserMd size={40} className="why-choose-us-icon" />,
    title: "Experienced Audiologists",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="whyChooseUs px-4 md:px-10 lg:px-20 md:py-20 py-10">
      <div className="container mx-auto px-4 md:px-10 text-center">
        <h2 className="text-xl text-white mb-2">Why Choose Mamata Hearing and speech clinic?</h2>
        <p className="mb-10 text-4xl whyChooseUs-para">
          We <span>Care</span> for Your Hearing & Communication
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative cursor-pointer overflow-hidden  whyChooseUsCard bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition duration-300 group"
            >
              <div
                className=" absolute -top-10 left-0 w-20 h-20 whyChooseUsHover rounded-full transition-all duration-500 
    group-hover:top-1/4 group-hover:left-1/2 group-hover:transform 
    group-hover:-translate-x-1/2 group-hover:-translate-y-1/3"
              ></div>

              <div className="relative z-10 flex items-center justify-center text-3xl mx-auto mb-6">
                {feature.icon}
              </div>

              <h5 className="text-black font-bold relative z-10">
                {feature.title}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
