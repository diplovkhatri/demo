import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Proposal from "./Proposal";
import Treasury from "./Treasury";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="font-rock flex flex-col w-full h-auto">
        <Treasury />
        <Proposal />
      </div>
    </div>
  );
};

export default Home;
