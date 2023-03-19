import React from "react";
import "./App.css";

import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Documentation from "./pages/Documentation/Documentation";
import Home from "./pages/Vote/Home";
import History from "./components/History";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Myroures() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/documents" element={<Documentation />} />
        <Route path="/vote" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default Myroures;
