import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Winners.css";

export default function Winners() {
  return (
    <section id="winners">
      <h2>Winner of Hackathon</h2>
      <div className="flex justify-center gap-2 flex-wrap w-full">
        <Card sx={{ maxWidth: 325 }} className="card winners-card">
          <CardMedia
            component="img"
            alt=""
            className="h-3/5 w-full"
            image="./Assets/winners/cybersecurity.jpeg"
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography>
              <p className="font-bold text-2xl md:text-2xl text-white text-center my-2">
                Cyber Security
              </p>
            </Typography>
            <Typography>
              <p className="text-white font-normal text-xl text-center md:text-xl">
                Cookie Army
              </p>
              <p
                className="font-bold text-base text-center"
                style={{ color: "#018cff" }}
              >
                HZ23AMC-CS010
              </p>
              <p className="text-gray font-normal text-center text-base md:text-base">
                Vidyavardhaka College of Engineering, Mysore
              </p>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 325 }} className="card winners-card">
          <CardMedia
            component="img"
            alt=""
            className="h-3/5 w-full"
            image="./Assets/winners/Agriculture.jpeg"
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography>
              <p className="font-bold text-2xl md:text-2xl text-white text-center my-2">
                Agriculture
              </p>
            </Typography>
            <Typography>
              <p className="text-white font-normal text-xl text-center md:text-xl">
                Axle Machines
              </p>
              <p
                className="font-bold text-base text-center"
                style={{ color: "#018cff" }}
              >
                HZ23AMC-AG020
              </p>
              <p className="text-gray font-normal text-center text-base md:text-base">
                Presidency University, Bangalore
              </p>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 325 }} className="card winners-card">
          <CardMedia
            component="img"
            alt=""
            className="h-3/5 w-full"
            image="./Assets/winners/blockchain.jpeg"
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography>
              <p className="font-bold text-2xl md:text-2xl text-white text-center my-2">
                BlockChain
              </p>
            </Typography>
            <Typography>
              <p className="text-white font-normal text-xl text-center md:text-xl">
                Hack Attack
              </p>
              <p
                className="font-bold text-base text-center"
                style={{ color: "#018cff" }}
              >
                HZ23AMC-SB001
              </p>
              <p className="text-gray font-normal text-center text-base">
                REVA University, Bangalore{" "}
              </p>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 325 }} className="card winners-card">
          <CardMedia
            component="img"
            alt=""
            className="h-3/5 w-full"
            image="./Assets/winners/healthcare.jpeg"
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography>
              <p className="font-bold text-2xl md:text-2xl text-white text-center my-2">
                Health Care
              </p>
            </Typography>
            <Typography>
              <p className="text-white font-normal text-xl text-center md:text-xl">
                CultMangoes
              </p>
              <p
                className="font-bold text-base text-center"
                style={{ color: "#018cff" }}
              >
                HZ23AMC-HC038
              </p>
              <p className="text-gray font-normal text-center text-base">
                MSRIT, Bangalore
              </p>
            </Typography>{" "}
            <Typography>
              <p className="text-white font-normal text-xl text-center md:text-xl">
                Code-Red
              </p>
              <p
                className="font-bold text-base text-center"
                style={{ color: "#018cff" }}
              >
                HZ23AMC-HC030
              </p>
              <p className="text-gray font-normal text-center text-base">
                BNMIT, Bangalore{" "}
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
      <h2 className="mt-10">Open Source Special Awards</h2>
      <div className="prize-boxes">
        <div className="prz-box">
          <img src="./Assets\winners\opensource1.svg" alt="" />{" "}
          <p className="text-white font-normal text-xl text-center md:text-xl">
            Da-Hacks,
          </p>
          <p
            className="font-bold text-base text-center"
            style={{ color: "#018cff" }}
          >
            HZ23AMC-HC003{" "}
          </p>
          <p className="text-gray font-normal text-center text-base">
            RajaRajeshwari College of Engineering, Bangalore{" "}
          </p>
        </div>
        <div className="prz-box">
          <img src="./Assets\winners\opensource2.svg" alt="" />{" "}
          <p className="text-white font-normal text-xl text-center md:text-xl">
            ZeroSumGame{" "}
          </p>
          <p
            className="font-bold text-base text-center"
            style={{ color: "#018cff" }}
          >
            HZ23AMC-CS016{" "}
          </p>
          <p className="text-gray font-normal text-center text-base">
            Govt College of Engineering, Karwar{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
