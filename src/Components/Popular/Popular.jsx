import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";
const Popular = () => {
  const { products } = useContext(ShopContext);

  const selectedProductIds = [4, 15, 37, 40, 17, 30];
  const filteredProducts = products.filter((product) =>
    selectedProductIds.includes(product.id)
  );

  const getImageById = (id) => {
    const product = products.find((item) => item.id === id);
    return product ? product.image : "";
  };

  return (
    <div className="section">
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row">
          {/* section title */}
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">New Products</h3>
            </div>
          </div>
          {/* /section title */}

          {/* Products Row */}
          <div className="col-md-12">
            <div className="row">
              {filteredProducts.map((product) => (
                <div className="col-md-2 col-sm-4 col-xs-6" key={product.id}>
                  <div className="product">
                    <Link to={`/product/${product.id}`}>
                      <div className="product-img">
                        <img
                          src={getImageById(product.id)}
                          alt={product.title}
                        />
                        <div className="product-label">
                          <span className="sale">-30%</span>
                          <span className="new">NEW</span>
                        </div>
                      </div>
                      <div className="product-body">
                        <p className="product-category">{product.category}</p>
                        <h3 className="product-name">
                          <a href="/products">{product.model}</a>
                        </h3>
                        <h4 className="product-price">${product.price}</h4>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* /Products Row */}
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </div>
  );
};

export default Popular;
