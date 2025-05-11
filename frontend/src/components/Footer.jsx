import React from "react";
import { assets } from "../assets/assets";
import {NavLink} from "react-router-dom"

const Footer = () => {
  const getWhatsAppLink = () => {
    const phoneNumber = "8421451171";
    const message = encodeURIComponent(
      "Hi Mamata Hearing aid and speech clinic!"
    );

    const isMobile =
      /iPhone|Android|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
        navigator.userAgent
      );

    const baseURL = isMobile
      ? `https://wa.me/${phoneNumber}?text=${message}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${message}`;

    return baseURL;
  };
  return (
    <>
      <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-20 text-sm">
          <div>
            <img
              className="mb-5 w-40"
              src={assets.logo}
              alt="Mamata Clinic Logo"
            />
            <p className="w-full md:w-2/3 text-gray-600 leading-6">
              Mamata Clinic is committed to delivering expert hearing care
              solutions with compassion and advanced technology. We help you
              rediscover the joy of clear hearing.
            </p>
          </div>

          <div>
            <p className="text-xl font-medium mb-5">QUICK LINKS</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
              <li>
                <NavLink to="/services">Our Services</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>
                <a href="tel:8421451171" className="hover:underline">
                  08421451171
                </a>{" "}
                /{" "}
                <a href="tel:7058401171" className="hover:underline">
                  07058401171
                </a>
              </li>
              <li>
                <a
                  href="mailto:mamatahearingclinic@gmail.com"
                  className="hover:underline"
                >
                  mamatahearingclinic@gmail.com
                </a>
              </li>
              <li>
                Shop no.146,Build No.P02,
                <br />
                1st Floor,Harmony Plaza,
                <br />
                Opposite SBI Bank,
                <br />
                Boisar-Tarapur Road,
                <br />
                Boisar - 401501
              </li>
            </ul>
          </div>
        </div>

        <hr />
        <div className="flex md:justify-between md:flex-row flex-col">
          <p className="md:py-5 py-2 text-sm text-center">
            © 2025 Mamata Hearing Aid and Speech Clinic. All Rights Reserved.
          </p>
          <p className="md:py-5 py-2 font-normal text-sm text-center">
            Designed and developed by{" "}
            <a href="https://servora.in" target="_blank">
              Servora
            </a>
          </p>
        </div>
      </div>

      <div className="floating-buttons-wrapper">
        <a
          href="tel:+918421451171"
          id="navLink"
          className="floating-btn phone-wave"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 52 52"
              xmlSpace="preserve"
            >
              <path d="M48.5 37.9 42.4 33c-1.4-1.1-3.4-1.2-4.8-.1l-5.2 3.8c-.6.5-1.5.4-2.1-.2l-7.8-7-7-7.8c-.6-.6-.6-1.4-.2-2.1l3.8-5.2c1.1-1.4 1-3.4-.1-4.8l-4.9-6.1c-1.5-1.8-4.2-2-5.9-.3L3 8.4c-.8.8-1.2 1.9-1.2 3 .5 10.2 5.1 19.9 11.9 26.7S30.2 49.5 40.4 50c1.1.1 2.2-.4 3-1.2l5.2-5.2c1.9-1.5 1.8-4.3-.1-5.7" />
            </svg>
          </span>
        </a>
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          id="navLink"
          className="floating-btn _whatsapp green-wave"
        >
          <span>
            <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
              <path
                fill="#fff"
                d="M26.576 5.363a14.82 14.82 0 0 0-10.511-4.354C7.856 1.009 1.2 7.664 1.2 15.874c0 2.732.737 5.291 2.022 7.491l-.038-.07-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h.006c8.209-.003 14.862-6.659 14.862-14.868a14.82 14.82 0 0 0-4.349-10.507zM16.062 28.228h-.006c-2.319 0-4.489-.64-6.342-1.753l.056.031-.451-.267-4.675 1.227 1.247-4.559-.294-.467a12.23 12.23 0 0 1-1.889-6.565c0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353-5.53 12.353-12.353 12.353zm6.776-9.251c-.371-.186-2.197-1.083-2.537-1.208-.341-.124-.589-.185-.837.187-.246.371-.958 1.207-1.175 1.455-.216.249-.434.279-.805.094a10.2 10.2 0 0 1-2.997-1.852l.01.009a11.2 11.2 0 0 1-2.037-2.521l-.028-.052c-.216-.371-.023-.572.162-.757.167-.166.372-.434.557-.65.146-.179.271-.384.366-.604l.006-.017a.68.68 0 0 0-.033-.653l.002.003c-.094-.186-.836-2.014-1.145-2.758-.302-.724-.609-.625-.836-.637-.216-.01-.464-.012-.712-.012-.395.01-.746.188-.988.463l-.001.002a4.15 4.15 0 0 0-1.299 3.102v-.004a7.23 7.23 0 0 0 1.527 3.857l-.012-.015a16.7 16.7 0 0 0 6.251 5.564l.094.043c.548.248 1.25.513 1.968.74l.149.041a5.1 5.1 0 0 0 2.368.143l-.031.004a3.84 3.84 0 0 0 2.497-1.749l.009-.017a3.1 3.1 0 0 0 .214-1.784l.003.019c-.092-.155-.34-.247-.712-.434z"
              />
            </svg>
          </span>
        </a>
      </div>
    </>
  );
};

export default Footer;
