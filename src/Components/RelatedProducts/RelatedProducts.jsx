import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const RelatedProducts = ({ productId }) => {
  const { products } = useContext(ShopContext);

  // Find the current product by ID
  const currentProduct = products.find((product) => product.id === productId);

  if (!currentProduct) {
    return <p>Product not found.</p>;
  }

  // Filter related products by the same category, excluding the current product
  const relatedProducts = products.filter(
    (product) =>
      product.category === currentProduct.category && product.id !== productId
  );

  // Limit to 4 related products for display
  const limitedRelatedProducts = relatedProducts.slice(0, 4);

  return (
    <div className="section">
      {/* container */}
      <div className="container">
        {/* row */}
        <div className="row">
          <div className="col-md-12">
            <div className="section-title text-center">
              <h3 className="title">Related Products</h3>
            </div>
          </div>

          {/* Dynamically render related products */}
          {limitedRelatedProducts.map((product) => (
            <div className="col-md-3 col-xs-6" key={product.id}>
              <div className="product">
                <Link to={`/product/${product.id}`}>
                  <div className="product-img">
                    <img src={product.image} alt={product.model} />
                    {product.discount && (
                      <div className="product-label">
                        <span className="sale">-{product.discount}%</span>
                      </div>
                    )}
                  </div>
                  <div className="product-body">
                    <p className="product-category">{product.category}</p>
                    <h3 className="product-name">{product.model}</h3>
                    <h4 className="product-price">
                      ${product.price.toFixed(2)}
                      {product.oldPrice && (
                        <del className="product-old-price">
                          ${product.oldPrice.toFixed(2)}
                        </del>
                      )}
                    </h4>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
        {/* /row */}
      </div>
      {/* /container */}
    </div>
  );
};

export default RelatedProducts;
