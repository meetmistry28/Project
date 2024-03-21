import React from "react";
import Header from "../../user/component/header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "../../user/container/home/Home";
import Shop from "../../user/container/shop/Shop";
import Shopdetails from "../../user/container/shop_details/Shopdetails";
import Cart from "../../user/container/pages/Cart";
import Checkout from "../../user/container/pages/Checkout";
import Testimonial from "../../user/container/pages/Testimonial";
import Errorpage from "../../user/container/pages/Errorpage";
import Contact from "../../user/container/contact/Contact";
import Footer from "../../user/component/footer/Footer";

export default function UserRoutes() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />

        <Route>
          <Route exact path="/shop" element={<Shop />} />
          <Route exact path="/shop/:id" element={<Shopdetails />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/chackout" element={<Checkout />} />
        </Route>

        <Route exact path="/testimonial" element={<Testimonial />} />
        <Route exact path="/errorpage" element={<Errorpage />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}
