import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import StartIcon from "@mui/icons-material/Start";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import NotStartedIcon from "@mui/icons-material/NotStarted";
import HotelIcon from "@mui/icons-material/Hotel";
import CloseIcon from "@mui/icons-material/Close";
import RepeatIcon from "@mui/icons-material/Repeat";
import Typography from "@mui/material/Typography";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function TimelineComponent() {
  return (
    <section id="timeline timelines" className="py-14">
      <h2>Event Timelines</h2>
      <Timeline position="alternate">
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{fontSize:"20px"}}
          >
            27 Nov
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <PlayArrowIcon color="blue" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px", px: 2 }}>
            <Typography variant="h6" component="span">
              Registration starts
            </Typography>
            <Typography>
              You can register by clicking on "Register Now" button given above
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineConnector />

            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px", px: 2 }}>
            <Typography variant="h6" component="span">
              Registration starts at 9:00 AM
            </Typography>
            <Typography>
              Follow our social media handles for latest updates.
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{fontSize:"20px"}}
          >
            10 Dec
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary" variant="outlined">
              <CloseIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px", px: 2 }}>
            <Typography variant="h6" component="span">
              Registration end
            </Typography>
            <Typography>Last date to register for the event</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            14 Dec
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <FilterAltIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px", px: 2 }}>
            <Typography variant="h6" component="span">
              Uploading shortlisted teams
            </Typography>
            <Typography>
              The screening committee will shortlist the teams, and the 40 best
              ideas will be selected{" "}
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{fontSize:"20px"}}
          >
            16 Dec
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <CurrencyRupeeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px", px: 2 }}>
            <Typography variant="h6" component="span">
              Last day for Payements
            </Typography>
            <Typography>
              Shortlisted Teams must pay 500Rs for registration
            </Typography>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{fontSize:"20px"}}
          >
            19 Dec
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="primary">
              <NotStartedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px", px: 2 }}>
            <Typography variant="h6" component="span">
              Start of Hackathon
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}
