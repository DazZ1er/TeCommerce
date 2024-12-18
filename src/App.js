import { useEffect } from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Product from "./Pages/Product";
import LoginSignup from "./Pages/LoginSignup";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact";
import AboutUs from "./Components/Aboutus/Aboutus";
import Products from "./Components/Products/Products";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import OrdersAndReturns from "./Components/Orders&Returns/Orders&Returns";
import Terms from "./Components/Terms/Terms";
import ProductDisplay from "./Components/ProductDisplay/ProductDisplay";
import Help from "./Components/Help/Help";
import Wishlist from "./Components/Wishlist/Wishlist";
import CartItems from "./Components/CartItems/CartItems";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/product/:id" element={<ProductDisplay />} />
          <Route path="/cart" element={<CartItems />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacypolicy" element={<PrivacyPolicy />} />
          <Route path="/orderreturn" element={<OrdersAndReturns />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/help" element={<Help />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
