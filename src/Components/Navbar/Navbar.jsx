import React, { useContext, useState } from "react";
import "./Navbar.css";

import { NavLink } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems, getTotalWishlistItems, setSearchQuery } =
    useContext(ShopContext);
  const [inputValue, setInputValue] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    const trimmedQuery = inputValue.trim();
    setSearchQuery(trimmedQuery);
  };

  return (
    <div>
      {/* HEADER */}
      <header>
        {/* TOP HEADER */}
        <div id="top-header">
          <div className="container">
            <ul className="header-links pull-left">
              <li>
                <a href="tel:+85577672119" target="_blank">
                  <i className="fa fa-phone"></i> +855 77 672 119
                </a>
              </li>
              <li>
                <a
                  href="mailto:Vannsheesun18@gmail.com?subject=Support%20Request&body=Hello%20Vannsheesun,"
                  target="_blank"
                >
                  <i className="fa fa-envelope-o"></i> Vannsheesun18@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://maps.app.goo.gl/4cAVYTjxSPKwnnkm9"
                  target="_blank"
                >
                  <i className="fa fa-map-marker"></i> Phnom Penh, Cambodia
                </a>
              </li>
            </ul>
            <ul className="header-links pull-right">
              <li>
                <NavLink style={{ textDecoration: "none" }} to="/">
                  <i className="fa fa-dollar"></i> USD
                </NavLink>
              </li>
              <li>
                <NavLink style={{ textDecoration: "none" }} to="/login">
                  <i className="fa fa-user-o"></i> My Account
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {/* /TOP HEADER */}

        {/* MAIN HEADER */}
        <div id="header">
          {/* container */}
          <div className="container">
            {/* row */}
            <div className="row">
              {/* LOGO */}
              <div className="col-md-3">
                <div className="header-logo">
                  <div className="logo">
                    <NavLink
                      style={{ textDecoration: "none" }}
                      to="/"
                    ></NavLink>
                  </div>
                </div>
              </div>
              {/* /LOGO */}

              {/* SEARCH BAR */}
              <div className="col-md-6">
                <div className="header-search">
                  <form onSubmit={handleSearch}>
                    <select className="input-select">
                      <option value="0">Products</option>
                    </select>
                    <input
                      className="input"
                      placeholder="Search products by title"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className="search-btn" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
              {/* /SEARCH BAR */}

              {/* ACCOUNT */}
              <div className="col-md-3 clearfix">
                <div className="header-ctn">
                  {/* Wishlist */}
                  <div>
                    <NavLink to="/wishlist">
                      <i className="fa fa-heart-o"></i>
                      <span>Your Wishlist</span>
                      <div className="qty">{getTotalWishlistItems()}</div>
                    </NavLink>
                  </div>
                  {/* /Wishlist */}

                  {/* Cart */}
                  <div className="dropdown">
                    <NavLink to="/cart">
                      <i className="fa fa-shopping-cart"></i>
                      <span>Your Cart</span>
                      <div className="qty">{getTotalCartItems()}</div>
                    </NavLink>
                  </div>
                  {/* /Cart */}

                  {/* Menu Toogle */}
                  <div className="menu-toggle">
                    <NavLink to="/products">
                      <i className="fa fa-bars"></i>
                      <span>Menu</span>
                    </NavLink>
                  </div>
                  {/* /Menu Toogle */}
                </div>
              </div>
              {/* /ACCOUNT */}
            </div>
            {/* row */}
          </div>
          {/* container */}
        </div>
        {/* /MAIN HEADER */}
      </header>
      {/* /HEADER */}

      {/* NAVIGATION */}
      <nav id="navigation">
        {/* container */}
        <div className="container">
          {/* responsive-nav */}
          <div id="responsive-nav">
            {/* NAV */}
            <ul className="main-nav nav navbar-nav">
              <li
                onClick={() => {
                  setMenu("home");
                }}
              >
                <NavLink style={{ textDecoration: "none" }} to="/">
                  Home
                </NavLink>
                {menu === "home" ? <hr /> : <></>}
              </li>
              <li
                onClick={() => {
                  setMenu("products");
                }}
              >
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="/products"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Products
                </NavLink>
                {menu === "products" ? <hr /> : <></>}
              </li>
              <li
                onClick={() => {
                  setMenu("aboutus");
                }}
              >
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="/aboutus"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  About Us
                </NavLink>
                {menu === "aboutus" ? <hr /> : <></>}
              </li>
              <li
                onClick={() => {
                  setMenu("contact");
                }}
              >
                <NavLink
                  style={{ textDecoration: "none" }}
                  to="/contact"
                  className={({ isActive }) => (isActive ? "active" : "")}
                >
                  Contact Us
                </NavLink>
                {menu === "contact" ? <hr /> : <></>}
              </li>
            </ul>
            {/* /NAV */}
          </div>
          {/* /responsive-nav */}
        </div>
        {/* /container */}
      </nav>
      {/* /NAVIGATION */}
    </div>
  );
};

export default Navbar;
