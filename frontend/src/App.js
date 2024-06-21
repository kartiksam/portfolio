import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Service from "./components/Services/Service";
import MyWork from "./components/Mywork/MyWork";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About />
      <Service />
      <MyWork></MyWork>
    </div>
  );
};

export default App;
