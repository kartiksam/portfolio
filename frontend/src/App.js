import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About />
    </div>
  );
};

export default App;
