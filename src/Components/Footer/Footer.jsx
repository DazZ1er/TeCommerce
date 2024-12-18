import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const [menu, setMenu] = useState("home");
  return (
    <div>
      {/* FOOTER */}
      <footer id="footer">
        {/* top footer */}
        <div className="section">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">About Us</h3>
                  <p>
                    TeCommerce offers quality electronic devices, exceptional
                    service, and a seamless shopping experience for all
                    customers.
                  </p>
                  <ul className="footer-links">
                    <li>
                      <a
                        href="https://maps.app.goo.gl/4cAVYTjxSPKwnnkm9"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-map-marker"></i>Phnom Penh, Cambodia
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+85577672119"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-phone"></i>+855 77 672 119
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:Vannsheesun18@gmail.com?subject=Support%20Request&body=Hello%20Vannsheesun,"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-envelope-o"></i>
                        Vannsheesun18@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Categories</h3>
                  <ul className="footer-links">
                    <li>
                      <NavLink
                        style={{ textDecoration: "none" }}
                        to="/products"
                        onClick={() => setMenu("products")}
                      >
                        Products
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        style={{ textDecoration: "none" }}
                        to="/products"
                        onClick={() => setMenu("products")}
                      >
                        Mobile
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        style={{ textDecoration: "none" }}
                        to="/products"
                        onClick={() => setMenu("products")}
                      >
                        TV
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        style={{ textDecoration: "none" }}
                        to="/products"
                        onClick={() => setMenu("products")}
                      >
                        Audio
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        style={{ textDecoration: "none" }}
                        to="/products"
                        onClick={() => setMenu("products")}
                      >
                        Gaming
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="clearfix visible-xs"></div>

              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Information</h3>
                  <ul className="footer-links">
                    <li>
                      <NavLink style={{ textDecoration: "none" }} to="/aboutus">
                        About Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink style={{ textDecoration: "none" }} to="/contact">
                        Contact Us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        style={{ textDecoration: "none" }}
                        to="/privacypolicy"
                      >
                        Privacy Policy
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        style={{ textDecoration: "none" }}
                        to="/orderreturn"
                      >
                        Orders & Returns
                      </NavLink>
                    </li>
                    <li>
                      <NavLink style={{ textDecoration: "none" }} to="/terms">
                        Terms & Conditions
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-md-3 col-xs-6">
                <div className="footer">
                  <h3 className="footer-title">Service</h3>
                  <ul className="footer-links">
                    <li>
                      <NavLink style={{ textDecoration: "none" }} to="/login">
                        My Account
                      </NavLink>
                    </li>
                    <li>
                      <NavLink style={{ textDecoration: "none" }} to="/cart">
                        View Cart
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        style={{ textDecoration: "none" }}
                        to="/wishlist"
                      >
                        Wishlist
                      </NavLink>
                    </li>
                    <li>
                      <NavLink style={{ textDecoration: "none" }} to="/help">
                        Help
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /top footer */}

        {/* bottom footer */}
        <div id="bottom-footer" className="section">
          <div className="container">
            {/* row */}
            <div className="row">
              <div className="col-md-12 text-center">
                <ul className="footer-payments">
                  <li>
                    <NavLink style={{ textDecoration: "none" }} to="/cart">
                      <i className="fa fa-cc-visa"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={{ textDecoration: "none" }} to="/cart">
                      <i className="fa fa-credit-card"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={{ textDecoration: "none" }} to="/cart">
                      <i className="fa fa-cc-paypal"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={{ textDecoration: "none" }} to="/cart">
                      <i className="fa fa-cc-mastercard"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={{ textDecoration: "none" }} to="/cart">
                      <i className="fa fa-cc-discover"></i>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink style={{ textDecoration: "none" }} to="/cart">
                      <i className="fa fa-cc-amex"></i>
                    </NavLink>
                  </li>
                </ul>
                <span className="copyright">
                  Copyright &copy; {new Date().getFullYear()} All rights
                  reserved | This project made
                  <i className="fa fa-heart-o" aria-hidden="true"></i> by
                  <a
                    href="https://colorlib.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Vannshee Sun
                  </a>
                </span>
              </div>
            </div>
            {/* /row */}
          </div>
          {/* /container */}
        </div>
        {/* /bottom footer */}
      </footer>
      {/* /FOOTER */}
    </div>
  );
};

export default Footer;
