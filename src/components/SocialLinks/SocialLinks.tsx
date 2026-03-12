import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./SocialLinks.css";

const LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mitch-mcdermott/",
    icon: <LinkedInIcon />,
  },
  {
    label: "GitHub",
    href: "https://github.com/mmickeyd",
    icon: <GitHubIcon />,
  },
  {
    label: "Instagram",
    href: "https://instagram.com/mmickeyd",
    icon: <InstagramIcon />,
  },
];

export const SocialLinks = () => {
  return (
    <div className="socialLinks">
      {LINKS.map(({ label, href, icon }) => (
        <a
          key={label}
          className="socialLink"
          href={href}
          target="_blank"
          rel="noreferrer"
        >
          {icon}
          <span>{label}</span>
        </a>
      ))}
    </div>
  );
};
