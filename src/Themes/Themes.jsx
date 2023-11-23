import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function Themes() {
  return (
    <section id="themes" className="flex flex-col gap-12">
      <h2>Themes to Hack</h2>
      <div className="flex justify-center gap-12 flex-wrap">
        <Card sx={{ maxWidth: 345 }} className="card">
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image="./Assets/Placeholder.png"
            style={{ objectFit: "contain" }}
          />
          <CardContent>
            <Typography gutterBottom component="div">
              <p className="">Cyber Security</p>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
