import React from "react";
import { Box, Typography } from "@mui/material";
import "./SkillBar.css";

type SkillBarProps = {
  skill: string;
  level: number;
};

export function SkillBar({ skill, level }: SkillBarProps) {
  return (
    <Box sx={{ display: "flex", gap: 0.3, alignItems: "anchor-center" }}>
      <Typography className={"barTitle"} variant="subtitle1" lineHeight={"1em"}>
        {skill}
      </Typography>
      {[...Array(10)].map((_, i) => (
        <Box
          key={i}
          sx={{
            flex: 1,
            height: 10,
            borderRadius: 0.5,
            backgroundColor: i < level ? "#45b0ad" : "#dadada",
            transition: "background-color 0.3s ease",
          }}
        />
      ))}
    </Box>
  );
}
