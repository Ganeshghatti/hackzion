import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Themes from "./Themes/Themes";
import Rules from "./Rules/Rules";
import Timeline from "./Timeline/Timeline";
import Coordinator from "./Coordinator/Coordinator";
import Footer from "./Footer/Footer";
import tag from "./Assets/tag.png";
import circle from "./Assets/circle.png";
import Patrons from "./Patrons/Patrons";

export default function App() {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  const particleOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "repulse",
        },
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 1000,
        },
        value: 40,
      },
      opacity: {
        value: 0.3,
      },
      shape: {
        type: "images",
        image: [
          { src: circle, height: 30, width: 30 },
          { src: tag, height: 30, width: 30 },
        ],
      },
      size: {
        value: 20,
        random: true,
        anim: {
          enable: true,
          speed: 4,
          size_min: 0.2,
          sync: false,
        },
      },
    },
    detectRetina: true,
  };

  return (
    <div
      style={{
        zIndex: 0,
      }}
    >
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={particleOptions}
      />
      <div className="flex flex-col items-center">
        <Navbar />
        <Hero />
        <Themes />
        <Rules/>
        <Timeline />
        <Patrons/>
        <Coordinator />
        <Footer />
      </div>
    </div>
  );
}
