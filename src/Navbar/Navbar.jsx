import React, { useEffect, useState } from "react";
import logo from "./HackZionLogo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import "./Navbar.css";
import Button from "@mui/material/Button";

export default function Navbar() {
  const [menu, setmenu] = useState(false);
  const menuf = () => {
    setmenu(!menu);
  };
  return (
    <nav
      className="w-4/5 fixed top-6 flex justify-between px-10 items-center py-2 md:w-full md:top-0 z-50"
      style={{ gap: "10vw" }}
    >
      {menu && (
        <>
          <div
            className="fixed w-screen h-screen top-0 left-0 z-30"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.353)" }}
            onClick={menuf}
          />
          <ul className="w-3/4 gap-8 fixed right-0 top-0 h-screen z-50 flex flex-col justify-center items-center bg-black nav-mobile-menu">
            <li>
              <a href="/#home" onClick={menuf}>
                HOME
              </a>
            </li>
            <li>
              <a href="/#themes" onClick={menuf}>
                THEMES
              </a>
            </li>
            <li>
              <a href="/#rules" onClick={menuf}>
                RULES
              </a>
            </li>
            <li>
              <a href="/#patrons" onClick={menuf}>
                PATRONS
              </a>
            </li>
            <li>
              <a href="/#contact" onClick={menuf}>
                CONTACT
              </a>
            </li>
            <li>
              <a href="/#contact">
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#018cff" }}
                  className="p-16 mx-4"
                >
                  Register Now!
                </Button>
              </a>
            </li>
          </ul>
        </>
      )}
      <img src={logo} alt="" className="w-16" />
      <ul
        className="flex z-50 justify-around items-center md:hidden"
        style={{ gap: "3vw" }}
      >
        <li>
          <a href="/#hero">HOME</a>
        </li>
        <li>
          <a href="/#themes">THEMES</a>
        </li>
        <li>
          <a href="/#rules">RULES</a>
        </li>
        <li>
          <a href="/#patrons">PATRONS</a>
        </li>
        <li>
          <a href="/#contact">CONTACT</a>
        </li>
        <li className="p-4 mx-4">
          <a href="/#contact">
            <Button
              variant="contained"
              style={{ backgroundColor: "#018cff" }}
              className="p-4 mx-4"
            >
              Register Now!
            </Button>
          </a>
        </li>
      </ul>
      <FaBarsStaggered
        className={`hidden cursor-pointer md:block ${
          !menu ? "block" : "hidden"
        }`}
        onClick={menuf}
      />
      <FaXmark
        className={`z-50  cursor-pointer fixed top-10 right-10 ${
          menu ? "block" : "hidden"
        }`}
        onClick={menuf}
      />
    </nav>
  );
}
