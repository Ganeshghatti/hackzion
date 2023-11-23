import React from "react";
import "./Rules.css"

export default function Rules() {
  const listStyle = {
    listStyleType: "decimal",
  };

  return (
    <section id="rules" className="flex flex-col items-center gap-8 py-14">
      <h2>Rules & Regulations</h2>
      <ol
        className="w-3/4 md:w-11/12 px-20 py-10 md:px-10  rounded"
        style={{ backgroundColor: "#0b1936d4", ...listStyle }}
      >
        <li>
          First registration is free – here, the team must submit a theme and an
          idea related to it. After the conclusion of registrations, 40 teams
          will be shortlisted.
        </li>
        <li>
          A mail will be sent to the assigned team lead, if they have been
          selected, and a second registration will be done, where an amount of
          Rs. 500 per team must be paid.
        </li>
        <li>
          Change of theme or modification of problem statement or proposal will
          not be allowed after submission of the same.
        </li>
        <li>
          Each domain will have 1 winner, with a prize amount of Rs. 20,000,
          i.e. 4 domains, each 1 winner.
        </li>
        <li>The allowed team size is 2-4.</li>
        <li>
          No members can be added/removed from the team. Team should be the same
          as at the time of idea submission, contrary to which shall result in
          disqualification.
        </li>
        <li>
          All code must be written during the event. You are required to build
          your project from scratch after the commencement of the Hackathon. The
          first and the last line must be created during the event.
        </li>
        <li>
          All the required hardware parts must be brought by the team only,
          organizers will not be liable to provide it. Hardware models must be
          assembled from scratch on-site, no pre-assembled modules are allowed.
        </li>
        <li>
          The registrants up to the age of 25 years as of December 2023 are
          eligible for participation and prizes. A valid government
          photo-identification proof is required.
        </li>
        <li>
          Knowledge of GitHub is a pre-requisite for this event. If you’re new
          to GitHub, read this getting started guide.
        </li>
        <li>
          At any given point in time, 2 members must be present at their
          assigned area. Participants can take breaks alternatively.
        </li>
        <li>
          Participants are not to engage in any kind of communication with other
          teams during the event. Post-event, a time slot will be allotted for
          everyone to have a look around at other projects.
        </li>
        <li>
          After the first registration, if any domain fails to acquire at least
          3 entries, that domain will be removed.
        </li>
        <li>
          All participants must be present at the venue at least 30 minutes
          before the commencement of the Hackathon.
        </li>
      </ol>
    </section>
  );
}
