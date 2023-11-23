import React from "react";

export default function Patrons() {
  return (
    <section id="patrons" className="flex flex-col gap-8 w-full items-center">
      <h2>Cheif Patrons</h2>
      <div className="w-4/5 md:w-11/12 flex justify-between items-center md:flex-wrap lg:flex-wrap sm:flex-col sm:gap-10">
        <div className="flex flex-col items-center justify-center w-1/5 lg:w-2/5 md:w-2/5 sm-4/5">
          <div
            className="w-56 h-56 "
            style={{
              boxShadow: "0px 10px 20px #0b1936",
              backgroundColor: "#018cff",
              borderRadius: "50%",
            }}
          >
            <img
              src="./Assets/placeholder.jpeg"
              className="w-full h-56 p-2"
              style={{ border: "2px solid #018cff", borderRadius: "50%" }}
              alt=""
            />
          </div>
          <p className="text-xl md:text-lg font-bold text-center">
            Dr. K.R Paramahamsa
          </p>
          <p className="text-base md:text-sm font-medium text-center">
            Chairman
          </p>
          <p className="text-base md:text-sm font-light text-center">
            AMC Group of Institutions, Bengaluru.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-1/5 lg:w-2/5 md:w-2/5 sm-4/5">
          <div
            className="w-56 h-56 "
            style={{
              boxShadow: "0px 10px 20px #0b1936",
              backgroundColor: "#018cff",
              borderRadius: "50%",
            }}
          >
            <img
              src="./Assets/placeholder.jpeg"
              className="w-full h-56 p-2"
              style={{ border: "2px solid #018cff", borderRadius: "50%" }}
              alt=""
            />
          </div>
          <p className="text-xl md:text-lg font-bold text-center">
            Smt. Geetha Paramahamsa
          </p>
          <p className="text-base md:text-sm font-medium text-center">
            Vice Chair Person,
          </p>
          <p className="text-base md:text-sm font-light text-center">
            AMC Group of Institutions, Bengaluru.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-1/5 lg:w-2/5 md:w-2/5 sm-4/5">
          <div
            className="w-56 h-56 "
            style={{
              boxShadow: "0px 10px 20px #0b1936",
              backgroundColor: "#018cff",
              borderRadius: "50%",
            }}
          >
            <img
              src="./Assets/placeholder.jpeg"
              className="w-full h-56 p-2"
              style={{ border: "2px solid #018cff", borderRadius: "50%" }}
              alt=""
            />
          </div>
          <p className="text-xl md:text-lg font-bold text-center">
            Ms. Monica Kalluri
          </p>
          <p className="text-base md:text-sm font-medium text-center">
            Vice President,
          </p>
          <p className="text-base md:text-sm font-light text-center">
            AMC Group of Institutions, Bengaluru.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center w-1/5 lg:w-2/5 md:w-2/5 sm-4/5">
          <div
            className="w-56 h-56 "
            style={{
              boxShadow: "0px 10px 20px #0b1936",
              backgroundColor: "#018cff",
              borderRadius: "50%",
            }}
          >
            <img
              src="./Assets/placeholder.jpeg"
              className="w-full h-56 p-2"
              style={{ border: "2px solid #018cff", borderRadius: "50%" }}
              alt=""
            />
          </div>
          <p className="text-xl md:text-lg font-bold text-center">
            Shri. Rahul Kalluri
          </p>
          <p className="text-base md:text-sm font-medium text-center">
            Executive Vice President,
          </p>
          <p className="text-base md:text-sm font-light text-center">
            AMC Group of Institutions, Bengaluru.
          </p>
        </div>
      </div>
    </section>
  );
}