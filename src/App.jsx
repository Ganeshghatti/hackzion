import React, { useCallback, useEffect } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Themes from "./Themes/Themes";
import Rules from "./Rules/Rules";
import Timeline from "./Timeline/TimelineComponent";
import Coordinator from "./Coordinator/Coordinator";
import Footer from "./Footer/Footer";
import tag from "./Assets/tag.png";
import circle from "./Assets/circle.png";
import Patrons from "./Patrons/Patrons";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Shortlisted from "./Shortlisted/Shortlisted";

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
  useEffect(() => {
    // Function to handle scrolling to the target section
    const scrollToSection = () => {
      const hash = window.location.hash;
      if (hash) {
        const targetElement = document.querySelector(hash);
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    // Scroll to the section on mount
    scrollToSection();

    // Add event listener to handle scrolling when the URL changes
    const handleHashChange = () => {
      scrollToSection();
    };

    window.addEventListener("hashchange", handleHashChange);

    // Remove the event listener when the component is unmounted
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);
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
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/shortlisted" element={<Shortlisted />} /> */}
        </Routes>
        <Coordinator />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
