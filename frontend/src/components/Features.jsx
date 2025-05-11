import { GiSoundWaves } from "react-icons/gi";
import { RiHeadphoneLine } from "react-icons/ri";
import { MdRecordVoiceOver } from "react-icons/md";

const featuresData = [
  {
    icon: <GiSoundWaves className="text-5xl text-[#043152]" />,
    title: "Advanced Hearing Tests",
    desc: "We offer precise audiological evaluations using state-of-the-art equipment to assess all types of hearing loss.",
  },
  {
    icon: <RiHeadphoneLine className="text-5xl text-[#043152]" />,
    title: "Digital Hearing Aids",
    desc: "Wide range of modern, discreet, and effective hearing aids tailored to your specific hearing needs and lifestyle.",
  },
  {
    icon: <MdRecordVoiceOver className="text-5xl text-[#043152]" />,
    title: "Speech Therapy",
    desc: "Personalized speech and language therapy sessions for children and adults to improve communication skills.",
    last: true,
  },
];

const Features = () => {
  return (
    <div className="Feautes px-6 md:px-10 lg:px-20 md:py-20 py-4 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
            Caring for Your Hearing & Communication Needs
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto pt-4">
            Mamata Hearing Aid and Speech Clinic offers comprehensive audiology
            and speech therapy services to support individuals of all ages.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
          {featuresData.map((feature, idx) => (
            <div
              key={idx}
              className={`single-features relative text-center px-4 flex-1 ${
                feature.last ? "last" : ""
              }`}
            >
              <div className="single-icon flex justify-center items-center mx-auto">
                {feature.icon}
              </div>
              <h3 className="pt-10 text-[#2C2D3F] text-lg font-semibold">
                {feature.title}
              </h3>
              <p className="mt-5 text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
