import React, { useContext } from "react";
import "./Hero.css";
import { ShopContext } from "../../Context/ShopContext";
import { NavLink } from "react-router-dom";
const Hero = () => {
  const { products } = useContext(ShopContext);

  // Function to get an image by product ID
  const getImageById = (id) => {
    const product = products.find((item) => item.id === id);
    return product ? product.image : "";
  };

  return (
    <div>
      {/* SECTION */}
      <div className="section">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            {/* Audio Collection */}
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src={getImageById(1)} alt="Audio Collection" />
                </div>
                <div className="shop-body">
                  <h3>
                    Audio
                    <br />
                    Collection
                  </h3>
                  <div className="cta-btn" id="cta-btn">
                    <NavLink
                      className="btn-link"
                      style={{ textDecoration: "none" }}
                      to="/products"
                    >
                      Shop now <i className="fa fa-arrow-circle-right"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* Gaming Collection */}
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src={getImageById(2)} alt="Gaming Collection" />
                </div>
                <div className="shop-body">
                  <h3>
                    Gaming
                    <br />
                    Collection
                  </h3>
                  <div className="cta-btn">
                    <NavLink
                      className="btn-link"
                      style={{ textDecoration: "none" }}
                      to="/products"
                    >
                      Shop now <i className="fa fa-arrow-circle-right"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            {/* Mobile Collection */}
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src={getImageById(14)} alt="Mobile Collection" />
                </div>
                <div className="shop-body">
                  <h3>
                    Mobile
                    <br />
                    Collection
                  </h3>
                  <div className="cta-btn" id="cta-btn">
                    <NavLink
                      className="btn-link"
                      style={{ textDecoration: "none" }}
                      to="/products"
                    >
                      Shop now <i className="fa fa-arrow-circle-right"></i>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* /SECTION */}
    </div>
  );
};

export default Hero;
