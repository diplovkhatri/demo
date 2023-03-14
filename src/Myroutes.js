import React from "react";
import "./App.css";

import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Documentation from "./pages/Documentation/Documentation";
import Home from "./pages/Vote/Home";

function Myroures() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/documents" element={<Documentation />} />
        <Route path="/vote" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Myroures;
