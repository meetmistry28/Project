import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../../admin/products/Products";

export default function Adminroutes() {
  return (
    <div>
      <Routes>
        <Route exact path="/products/*" element={<Products />} />
      </Routes>
    </div>
  );
}
