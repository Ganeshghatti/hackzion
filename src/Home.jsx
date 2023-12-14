import React from "react";
import Hero from "./Hero/Hero";
import Themes from "./Themes/Themes";
import Rules from "./Rules/Rules";
import Timeline from "./Timeline/TimelineComponent";
import Patrons from "./Patrons/Patrons";
import Coordinator from "./Coordinator/Coordinator";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <Themes />
      <Rules />
      <Timeline />
      <Patrons />
    </div>
  );
}
