import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import TopDoctors from "../components/TopDoctors";
import Banner from "../components/Banner";
import Features from "../components/Features";
import About1 from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/Services";
import Testimonial from "../components/Testimonial";

const Home = () => {
  return (
    <div>
      <Header />
      <About1 />
      <WhyChooseUs />
      <Services />
      {/* <Features /> */}
      {/* <SpecialityMenu /> */}
      <TopDoctors />
      <Testimonial />
      <Banner />
    </div>
  );
};

export default Home;
