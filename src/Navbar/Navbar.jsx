import React, { useEffect, useState } from "react";
import logo from "./HackZionLogo.png";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import "./Navbar.css";
import Button from "@mui/material/Button";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [menu, setmenu] = useState(false);
  const menuf = () => {
    setmenu(!menu);
  };
  const styles = useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
  });
  const location = useLocation();

  const isShortlisted = location.pathname === "/shortlisted";

  return (
    <nav
      className="w-4/5 fixed top-9 flex justify-between px-10 items-center py-2 md:w-full md:top-0 z-50 m-auto"
      style={{ gap: "10vw" }}
    >
      {/* {!isShortlisted && (
        <div className="sales-ribbon">
          <Link to="/shortlisted">
            <p className="moving-text text-xl text-white">
              Shortlisted Teams have been released
              <span className="font-bold" style={{ color: "#018cff" }}>
                Click here&nbsp;
              </span>
              to check 
            </p>
          </Link>
        </div>
      )} */}

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
              <a href="/#winners" onClick={menuf}>
                WINNERS
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
            <a href="/#winners">
              <Button
                variant="contained"
                style={{ backgroundColor: "#018cff" }}
                className="hero-btn text-lg"
              >
                Winners{" "}
              </Button>
            </a>
          </ul>
        </>
      )}
      <img src={logo} alt="" className="w-16" />
      <ul
        className="flex z-50 justify-around items-center md:hidden"
        style={{ gap: "2vw" }}
      >
        <li>
          <a href="/#hero">HOME</a>
        </li>
        <li>
          <a href="/#winners">WINNERS</a>
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
        <a href="/#winners">
          <Button
            variant="contained"
            style={{ backgroundColor: "#018cff" }}
            className="hero-btn"
          >
            Winners{" "}
          </Button>
        </a>
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
