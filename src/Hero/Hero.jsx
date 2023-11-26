import React from "react";
import "./Hero.css";
import Button from "@mui/material/Button";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col items-center justify-center h-screen w-screen"
      style={{ padding: "0 10vw" }}
    >
      <p className="text-5xl font-semibold md:text-3xl">
        AMC ENGINEERING COLLEGE
      </p>
      <p className="text-sm font-thin md:text-xs">
        Affiliated to VTU, Belagavi | Approved by AICTE | NAAC A+ and NBA
        ACCREDITED, Bannerghatta Main Road, Bangalore-560083
      </p>
      <p className="text-sm font-normal">
        DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING
      </p>
      <p className="text-sm font-bold pb-8 pt-2">Presents</p>
      <h1 className="hero-title">HACKZION</h1>
      <p className="hero-quote text-xl md:text:lg mb-4">
        Think, Code, Innovate
      </p>
      <p className="hero-subheading">A 24 HOURS NATIONAL LEVEL HACKATHON</p>
      <p className="text-lg md:text-base font-bold hero-date">19 & 20 December 2023</p>
      <p className="text-lg md:text-base font-light">
        Registration Deadline : <b style={{ color: "#018cff" }}>10/12/2023</b>
      </p>
      <a href="https://forms.gle/yqieNHNwmJGrnBcE9" target="_blank" className="mt-8">
        <Button
          variant="contained"
          style={{ backgroundColor: "#018cff" }}
          className="hero-btn"
        >
          Register Now!
        </Button>
      </a>
    </section>
  );
}
