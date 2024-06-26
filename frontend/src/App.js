import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Service from "./components/Services/Service";
import MyWork from "./components/Mywork/MyWork";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About />
      <Service />
      <MyWork></MyWork>
      <Contact></Contact>
    </div>
  );
};

export default App;
