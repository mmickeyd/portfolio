import React from "react";
import { WORKHISTORY } from "./WorkHistory";
import "./Experience.css";
import { Chip } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const Experience = () => {
  return (
    <div className={"experiencePage"}>
      <h1 className={"pageHeader"}>EXPERIENCE</h1>
      <div className={"pageSubtitle"}>
        An overview of what I have contributed to and accomplished over the
        years
      </div>
      <div className={"timeline"}>
        {WORKHISTORY.map((job, idx) => (
          <div key={idx} className={"experienceCard"}>
            <div className={"experienceHeader"}>
              <div className={"date"}>
                <Chip
                  variant="outlined"
                  label={job.date}
                  sx={{
                    padding: "2px",
                    color: "#45b0ad",
                    fontWeight: "600",
                    borderRadius: 1,
                    position: "absolute",
                    backgroundColor: "#282c34",
                    fontSize: "20px",
                  }}
                />
                <span className={"company"}>{job.company}</span>
              </div>
              <div className={"jobRole"}>
                <h3 className={"role"}>{job.title}</h3>
              </div>
            </div>
            <div>
              <div className={"description"}>{job.description}</div>
              <div className={"technologies"}>
                {job.tech.map((tech, idx) => (
                  <span key={idx} className={"techChip"}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
