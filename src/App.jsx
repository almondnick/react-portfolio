import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}