import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa6";

export default function Coordinator() {
  return (
    <section
      id="contact"
      className="flex justify-between w-full md:flex-col py-12 opacity-100 z-10"
      style={{ backgroundColor: "#09162F" }}
    >
      <div className="flex md:items-center flex-col w-2/5 pl-20 gap-6">
        <p>Chair Organizing Committee</p>
        <div>
          <p> Dr. V. Mareeswari</p>
          <p> HOD, CSE, AMCEC, Bengaluru.</p>
        </div>
        <div>
          <p> Mr. Sanjeevan K</p>
          <p> Asst. Professor, CSE, AMCEC</p>
        </div>
      </div>
      <div className="flwx flex-col md:items-center w-1/4">
        <p>Programme Coordinator</p>
      </div>
      <div className="flwx flex-col md:items-center w-1/4">
        <p>Student Coordinator</p>
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
          <a href="tel:7870810384">Ekata Kumari : 7870810384</a>
        </p>
      </div>
    </section>
  );
}
