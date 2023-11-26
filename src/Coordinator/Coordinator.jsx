import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
  FaFacebook,
} from "react-icons/fa6";
import logo from "./HackZionLogo.png";

export default function Coordinator() {
  return (
    <section
      id="contact"
      className="flex justify-between w-full md:flex-col py-12 opacity-100 z-10 md:gap-12"
      style={{ backgroundColor: "#09162F" }}
    >
      <div className="flex md:items-center md:text-center flex-col w-2/5 pl-20 gap-6 md:w-11/12 md:pl-0">
        <img src={logo} alt="" className="w-20" />
        <p className="text-xl font-bold">Powered by AMC</p>
        <div className="flex gap-3">
          <a href="https://www.facebook.com/profile.php?id=61554189680265">
            <FaFacebook className="social-icon text-white text-3xl" />
          </a>
          <a href="https://www.instagram.com/hackzion_amcec/?next=%2F">
            <FaInstagram className="social-icon text-white text-3xl" />
          </a>
        </div>
      </div>
      <div className="flex flex-col md:items-center w-1/4 md:w-11/12 gap-6">
        <p className="text-2xl font-bold md:text-xl">Faculty Coordinator</p>
        <p>
          <a href="tel:9901160630">Mrs. Veena Bhat : 9901160630</a>
        </p>
        <p>
          <a href="tel:8088956959">Mr. Sanjeevan K : 8088956959</a>
        </p>
        <p>
          <a href="tel:9980055330">Dr.Sridhar CS : 9980055330</a>
        </p>
      </div>
      <div className="flex flex-col md:items-center w-1/4 md:w-11/12 gap-6">
        <p className="text-2xl font-bold md:text-xl">Student Coordinator</p>
        <p>
          <a href="tel:7899356719">Vishnu M R : 7899356719</a>
        </p>
        <p>
          <a href="tel:8431723586">Sri Sandhya : 8431723586</a>
        </p>
        <p>
          <a href="tel:9902110945">Arushi Arunkumar : 9902110945 </a>
        </p>
        <p>
          <a href="tel:7870810384">Ekta Kumari : 7870810384</a>
        </p>
      </div>
    </section>
  );
}
