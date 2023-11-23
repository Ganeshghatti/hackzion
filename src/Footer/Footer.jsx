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
    <footer style={{ backgroundColor: "#09162F" }} className="w-full z-10 flex justify-center items-center gap-6">
      Made by Ganesh Ghatti
      <a
        href="https://www.linkedin.com/in/ganesh-ghatti/"
        rel="noreferrer"
      >
        <FaLinkedinIn className="social-icon text-white" />
      </a>
    </footer>
  );
}
