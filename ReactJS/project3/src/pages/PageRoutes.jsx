import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import InsertProduct from "./InsertProduct";
import Home from "./Home";
import ViewProduct from "./ViewProduct";

function PageRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insert" element={<InsertProduct />} />
        <Route path="/viewproduct/:id" element={<ViewProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default PageRoutes;
