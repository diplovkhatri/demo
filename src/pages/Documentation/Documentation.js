import React from "react";
import About from "./About";
import Build from "./Build";
import Community from "./Community";
import Footer from "./footer/Footer";
import Funded from "./Funded";
import Navbar from "./navbar/Navbar";
import Top from "./Top";

const Documentation = () => {
  return (
    <>
      <Navbar />
      <Top />
      <About />
      <Build />
      <Funded />
      <Community />
      <Footer />
    </>
  );
};

export default Documentation;
