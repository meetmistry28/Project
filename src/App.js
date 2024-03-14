import Header from "./user/component/header/Header";
import Footer from "./user/component/footer/Footer";
import Home from "./user/container/home/Home";
import { Route, Routes } from "react-router-dom";
import Shop from "./user/container/shop/Shop";
import Shopdetails from "./user/container/shop_details/Shopdetails";
import Cart from "./user/container/pages/Cart";
import Checkout from "./user/container/pages/Checkout";
import Testimonial from "./user/container/pages/Testimonial";
import Errorpage from "./user/container/pages/Errorpage";
import Contact from "./user/container/pages/Contact";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/shop_details" element={<Shopdetails />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/chackout" element={<Checkout />} />
        <Route exact path="/testimonial" element={<Testimonial />} />
        <Route exact path="/errorpage" element={<Errorpage />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
