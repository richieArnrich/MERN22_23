import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InsertProduct from "./InsertProduct";
import Home from "./Home";

function PageRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insert" element={<InsertProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes;
