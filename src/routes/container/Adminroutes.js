import React from "react";
import { Route, Routes } from "react-router-dom";
import Products from "../../admin/products/Products";
import Layout from "../../admin/component/Layout/Layout";
import Category from "../../admin/container/category/Category";
import Vegitable from "../../admin/container/vegitable/Vegitable";

export default function Adminroutes() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path="/category/*" element={<Category />} />
          <Route exact path="/products/*" element={<Products />} />
          <Route exact path="/vegitable/*" element={<Vegitable />} />
        </Routes>
      </Layout>
    </div>
  );
}
