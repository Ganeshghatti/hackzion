import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./Themes.css";

export default function Themes() {
  return (
    <section id="themes" className="flex flex-col gap-12">
      <h2>Themes to Hack</h2>
      <div className="flex justify-center gap-2 flex-wrap w-full">
        <Card sx={{ maxWidth: 325}} className="card theme-card">
          <CardMedia
            component="img"
            alt=""
            className="h-3/5 w-full"
            image="./Assets/cybersecurity.jpg"
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography>
              <p className="font-bold text-3xl md:text-2xl text-white">
                Cyber Security
              </p>
            </Typography>
            <Typography>
              <p className="text-gray font-normal">
                Guarding digital frontiers: Cybersecurity shields against
                threats, securing data, and preserving online integrity
              </p>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 325 }} className="card theme-card">
          <CardMedia
            component="img"
            alt=""
            className="h-3/5 w-full"
            image="./Assets/Agriculture .jpg"
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography>
              <p className="font-bold text-3xl md:text-2xl text-white">
                Agriculture
              </p>
            </Typography>
            <Typography>
              <p className="text-gray font-normal">
                Revolutionizing agriculture with IoT: Smart sensors and
                data-driven insights optimize farming processes for
                sustainability
              </p>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 325 }} className="card theme-card">
          <CardMedia
            component="img"
            alt=""
            className="h-3/5 w-full"
            image="./Assets/blockchain.jpg"
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography>
              <p className="font-bold text-3xl md:text-2xl text-white">
                Blockchain
              </p>
            </Typography>
            <Typography>
              <p className="text-gray font-normal">
                Explore the transformative synergy of supply chains and
                blockchain technology, enhancing transparency, efficiency, and
                trust
              </p>
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ maxWidth: 325 }} className="card theme-card">
          <CardMedia
            component="img"
            alt=""
            className="h-3/5 w-full"
            image="./Assets/healthcare.jpg"
            style={{ objectFit: "cover" }}
          />
          <CardContent>
            <Typography>
              <p className="font-bold text-3xl md:text-2xl text-white">
                Health Care
              </p>
            </Typography>
            <Typography>
              <p className="text-gray font-normal">
                Empowering healthcare through cutting-edge technology for
                improved diagnostics, treatment, and patient care.
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
