import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#09162F" }}
      className="w-full z-10 flex flex-col items-center"
    >
      <a
        href="https://www.linkedin.com/in/ganesh-ghatti/"
        style={{ borderTop: "1px solid #2f4f67" }}
        rel="noreferrer"
        className="flex justify-center items-center gap-6 w-3/4 py-6 text-xl font-bold md:text-lg"
      >
        Made by Ganesh Ghatti
        <FaLinkedinIn className="social-icon text-white" />
      </a>
    </footer>
  );
}
