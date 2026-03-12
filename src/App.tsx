import React, { useState } from "react";
import logo from "./logo.svg";
import { Projects } from "./Projects";
import "./App.css";
import { About } from "./About";
import { Skills } from "./Skills";
import { Experience } from "./Experience";
import { Blog } from "./Blog";
import { Contact } from "./Contact";

export const App = () => {
  const [display, changeDisplay] = useState("Home");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <a
            className="App-link"
            href="https://www.linkedin.com/in/mitch-mcdermott/"
            target="_blank"
          >
            LinkedIn
          </a>{" "}
          <a
            className="App-link"
            href="https://github.com/mmickeyd"
            target="_blank"
          >
            GitHub
          </a>{" "}
          <a
            className="App-link"
            href="https://instagram.com/mmickeyd"
            target="_blank"
          >
            Instagram
          </a>
          <br />
          <hr />
        </div>
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Blog />
        <Contact />
      </header>
    </div>
  );
};
