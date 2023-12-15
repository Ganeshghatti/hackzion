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
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import LocalCafeRoundedIcon from "@mui/icons-material/LocalCafeRounded";
import BreakfastDiningRoundedIcon from "@mui/icons-material/BreakfastDiningRounded";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import FlagCircleIcon from "@mui/icons-material/FlagCircle";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import LyricsIcon from "@mui/icons-material/Lyrics";
import { green } from "@mui/material/colors";

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
            style={{ fontSize: "20px" }}
          >
            19th Dec , 7:30AM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <PlayArrowIcon color="blue" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Reporting Start
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            19 Dec , 8:30AM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <BreakfastDiningRoundedIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Breakfast
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            19 Dec , 10:00AM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <TipsAndUpdatesIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Inauguration and End of Reporting
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            19 Dec , 10:45AM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            <TimelineDot color="primary">
              <LocalCafeRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Tea Break
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            19 Dec, 11:15AM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            <TimelineDot color="primary">
              <FlagCircleIcon color="green" />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Hackathon Begins
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            19 Dec,
            <br /> 1:00PM-2:00PM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            <TimelineDot color="primary">
              <LunchDiningIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Lunch Break
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            19 Dec ,<br /> 4:30PM-5:00PM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            <TimelineDot color="primary">
              <LocalCafeRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Tea Break
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            19 Dec , 5:00PM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <VisibilityIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Review 1
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            19 Dec ,<br /> 8:30PM-9:30PM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            <TimelineDot color="primary">
              <DinnerDiningIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Dinner
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            19 Dec , 11:00PM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <VisibilityIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Review 2
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            20 Dec , 1:00AM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            <TimelineDot color="primary">
              <FitnessCenterIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Zumba and Tea break
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            20 Dec , 4:00AM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            <TimelineDot color="primary">
              <LocalCafeRoundedIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Tea Break
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            20 Dec , 5:00AM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <VisibilityIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Review 3
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            20 Dec , 6:00AM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            <TimelineDot color="primary">
              <SelfImprovementIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Yoga session
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            20 Dec , 8:30AM-9:30AM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot color="primary">
              <BreakfastDiningRoundedIcon />
            </TimelineDot>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Breakfast
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            20 Dec , 11:15AM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <RemoveRedEyeIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              End of Hackathon and <br />
              Final Review
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            20 Dec , 11:15AM-12:00PM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            <TimelineDot color="primary">
              <LyricsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Cultural Events{" "}
            </p>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            20 Dec , 12:00PM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "secondary.main" }} />
            <TimelineDot color="secondary">
              <EmojiEventsIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Results
            </p>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            className="text-white"
            style={{ fontSize: "20px" }}
          >
            20 Dec,
            <br /> 1:00PM
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector sx={{ bgcolor: "primary.main" }} />
            <TimelineDot color="primary">
              <LunchDiningIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: "32px" }}>
            <p variant="h6" className="text-xl md:text-lg" component="span">
              Lunch
            </p>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </section>
  );
}
