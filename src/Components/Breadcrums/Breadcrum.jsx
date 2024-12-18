import React from "react";
import { useNavigate } from "react-router-dom";
import "./Breadcrum.css";

const Breadcrum = ({ product }) => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div id="breadcrumb" className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <ul className="breadcrumb-tree">
              <li>
                <a onClick={() => handleNavigation("/")}>HOME</a>
              </li>
              <li>
                <a onClick={() => handleNavigation("/products")}>SHOP</a>
              </li>
              <li>
                <a onClick={() => handleNavigation(`/products`)}>
                  {product.category}
                </a>
              </li>
              <li>
                <span>{product.model}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrum;
