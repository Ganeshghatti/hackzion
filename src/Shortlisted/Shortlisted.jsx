import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import "./Shortlisted.css";

const rows = [
  {
    UID: "HZ23AMC-CS003",
    "Team Lead Name": "Srihari Prasath A",
    "Team Name": "Nexus",
    College: "Nadar Saraswathi College of Engineering and Technology",
    City: "Theni",
  },
  {
    UID: "HZ23AMC-CS010",
    "Team Lead Name": "Jeevan Rao",
    "Team Name": "Cookie Army",
    College: "Vidyavardhaka college of engineering",
    City: "Mysuru",
  },
  {
    UID: "HZ23AMC-CS006",
    "Team Lead Name": "Abhiram Yadatore Shantaram",
    "Team Name": "Synapse",
    College: "K.S. Institute of Technology",
    City: "Bengaluru",
  },
  {
    UID: "HZ23AMC-CS008",
    "Team Lead Name": "Muskan Kwatra",
    "Team Name": "CyberSentinels",
    College: "Dayananda Sagar Academy of Technology and Management",
    City: "Bengaluru",
  },
  {
    UID: "HZ23AMC-CS014",
    "Team Lead Name": "MANFOOSAH HEEBA",
    "Team Name": "CYBER-MINDERS",
    College: "SRI KRISHNA INSTITUTE OF TECHNOLOGY,BANGALORE",
    City: "BANGALORE",
  },
  {
    UID: "HZ23AMC-CS016",
    "Team Lead Name": "Zaheer Ahmed Jendi",
    "Team Name": "ZeroSumGame",
    College: "Government Engineering College Karwar",
    City: "Karwar",
  },
  {
    UID: "HZ23AMC-CS018",
    "Team Lead Name": "Nisarga N",
    "Team Name": "Tech trojans",
    College: "Channabasaveshwara institute of technology ,gubbi ,Tumkur",
    City: "Tumkur",
  },
  {
    UID: "HZ23AMC-SB010",
    "Team Lead Name": "Hari Varsha.P.M",
    "Team Name": "KITES",
    College: "KGISL institute of technology",
    City: "coimbatore",
  },
  {
    UID: "HZ23AMC-SB001",
    "Team Lead Name": "Meghana S",
    "Team Name": "HACK-ATTACK",
    College: "REVA UNIVERSITY",
    City: "Bengaluru",
  },
  {
    UID: "HZ23AMC-SB005",
    "Team Lead Name": "Shantanu Swami",
    "Team Name": "NoPlayButton",
    College: "Dayananda Sagar Academy of Technology and Management",
    City: "Bengaluru",
  },
  {
    UID: "HZ23AMC-SB008",
    "Team Lead Name": "Abhinav M P",
    "Team Name": "Sirius",
    College: "SJB Institute of Technology",
    City: "Bengaluru",
  },
  {
    UID: "HZ23AMC-SB002",
    "Team Lead Name": "Aadi Satwik Pandey",
    "Team Name": "Byte Brigade",
    College: "AMC Engineering College",
    City: "Bengaluru",
  },
  {
    UID: "HZ23AMC-AG001",
    "Team Lead Name": "Prathamesh Magadum",
    "Team Name": "Straw Hats",
    College: "K.L.S Gogte Institute of Technology",
    City: "Belagavi",
  },
  {
    UID: "HZ23AMC-AG006",
    "Team Lead Name": "Sahana G",
    "Team Name": "DinFinite-K",
    College: "Channabasaveshwara Institute of Technology",
    City: "Tumkur",
  },
  {
    UID: "HZ23AMC-AG007",
    "Team Lead Name": "Khalandar Thameem",
    "Team Name": "Agrovision",
    College: "Vivekananda College of Engineering & Technology",
    City: "Puttur",
  },
  {
    UID: "HZ23AMC-AG003",
    "Team Lead Name": "Akshay B",
    "Team Name": "AgriTechies",
    College: "RV University",
    City: "Bengaluru",
  },
  {
    UID: "HZ23AMC-AG013",
    "Team Lead Name": "SUPRABHA B N",
    "Team Name": "Trial & Error",
    College: "JYOTHY INSTITUTE OF TECHNOLOGY",
    City: "Bengaluru",
  },
  {
    UID: "HZ23AMC-AG014",
    "Team Lead Name": "Shreeganesh Nayak",
    "Team Name": "Swastik",
    College: "K S Institute of Technology",
    City: "Bengaluru",
  },
  {
    UID: "HZ23AMC-AG008",
    "Team Lead Name": "Nisarga V B",
    "Team Name": "NAND",
    College: "Amc Engineering College",
    City: "Bengaluru",
  },
  {
    UID: "HZ23AMC-AG020",
    "Team Lead Name": "Tarun C Reddy",
    "Team Name": "Axle Machines",
    College: "Presidency University, Bengaluru",
    City: "Bengaluru",
  },
  {
    UID: "HZ23AMC-HC010",
    "Team Lead Name": "DIVAKAR E",
    "Team Name": "ALT F4",
    College: "SRI MANAKULA VINAYAGR ENGINEERING COLLEGE",
    City: "PUDUCHERRY",
  },
  {
    UID: "HZ23AMC-HC018",
    "Team Lead Name": "Ananya Jain G",
    "Team Name": "InnoVista",
    College: "Channabasaveshwara Institute of Technology",
    City: "Gubbi",
  },
  {
    UID: "HZ23AMC-HC020",
    "Team Lead Name": "Mohammed Shanawaz",
    "Team Name": "YENIGMA",
    College: "Yenepoya Institute of Technology",
    City: "Mangalore",
  },
  {
    UID: "HZ23AMC-HC024",
    "Team Lead Name": "Tejas S",
    "Team Name": "Epsilon Squad",
    College: "Vidyavardhaka College of Engineering",
    City: "Mysuru",
  },
  {
    UID: "HZ23AMC-HC002",
    "Team Lead Name": "Bhargavi G Hegde",
    "Team Name": "Coding Partners",
    College: "ACS College Of Engineering",
    City: "Bengaluru",
  },
  {
    UID: "HZ23AMC-HC003",
    "Team Lead Name": "DEV R S",
    "Team Name": "DAHacks",
    College: "Rajarajeshwari College of Engineering",
    City: "Bengaluru",
  },
  {
    UID: "HZ23AMC-HC016",
    "Team Lead Name": "Pruthvi S",
    "Team Name": "HealthGenieAI",
    College: "Dayananda Sagar University",
    City: "Bengaluru",
  },
  {
    UID: "HZ23AMC-HC019",
    "Team Lead Name": "Somashekar K",
    "Team Name": "Beta",
    College: "RV Institute of Technology and Management",
    City: "Bangalore",
  },
  {
    UID: "HZ23AMC-HC023",
    "Team Lead Name": "Subhojit Chowdhury",
    "Team Name": "VCare",
    College: "Sambhram Institute of Technology",
    City: "Bengaluru",
  },
  {
    UID: "HZ23AMC-HC030",
    "Team Lead Name": "Shruti Kedia",
    "Team Name": "Code-Red",
    College: "BNM Institute of Technology",
    City: "Bengaluru",
  },
  {
    UID: "HZ23AMC-HC037",
    "Team Lead Name": "BODDU BALAJI",
    "Team Name": "Tomorrow's Hope",
    College: "The Apollo University",
    City: "Chittoor",
  },
];


const Shortlisted = () => {
  return (
    <section
      id="Shortlisted"
      className="flex flex-col gap-12 items-center justify-center mb-12"
      style={{ marginTop: "15vh" }}
    >
      <h2>Shortlisted Teams</h2>
      <TableContainer
        style={{ background: "transparent", backgroundColor: "#0b1936d4" }}
        className="w-3/4 md:w-11/12 Shortlisted-table p-12 rounded"
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className="text-white">UID</TableCell>
              <TableCell>Team Lead Name</TableCell>
              <TableCell>Team Name</TableCell>
              <TableCell>College</TableCell>
              <TableCell>City</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.UID}>
                <TableCell>{row.UID}</TableCell>
                <TableCell>{row["Team Lead Name"]}</TableCell>
                <TableCell>{row["Team Name"]}</TableCell>
                <TableCell>{row["College"]}</TableCell>
                <TableCell>{row["City"]}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
};

export default Shortlisted;
