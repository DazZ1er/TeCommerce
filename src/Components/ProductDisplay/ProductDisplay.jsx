import React, { useContext, useState } from "react";
import "./ProductDisplay.css";
import { useParams } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = () => {
  const { products, addToCart, addToWishlist, removeFromWishlist, wishlist } =
    useContext(ShopContext);
  const { productId } = useParams();
  const selectedProduct = products.find((p) => p.id === Number(productId));
  const [qty, setQty] = useState(1);
  const handleQtyChange = (type) => {
    setQty((prev) =>
      type === "increase" ? prev + 1 : prev > 1 ? prev - 1 : prev
    );
  };
  const isInWishlist = wishlist.includes(selectedProduct?.id);
  if (!selectedProduct) {
    return <div>Loading...</div>;
  }

  return (
    <div className="section">
      {/* Container */}
      <div className="container">
        {/* Row */}
        <div className="row">
          {/* Small Images on Left */}
          <div className="col-md-2">
            <div id="product-thumbnails">
              <div className="product-thumbnail">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title || "Thumbnail 1"}
                />
              </div>
              <div className="product-thumbnail">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title || "Thumbnail 2"}
                />
              </div>
              <div className="product-thumbnail">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title || "Thumbnail 3"}
                />
              </div>
            </div>
          </div>

          {/* Large Main Image */}
          <div className="col-md-5">
            <div id="product-main-image">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.title || "Main Product Image"}
                className="large-image"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="col-md-5">
            <div className="product-details">
              <h2 className="product-name">{selectedProduct.title}</h2>
              <div>
                <div className="product-rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-o"></i>
                </div>
                <a className="review-link" href="#">
                  120 Review(s) | Add your review
                </a>
              </div>
              <div>
                <h3 className="product-price">
                  ${selectedProduct.price.toFixed(2)}
                </h3>
                <span className="product-available">In Stock</span>
              </div>
              <p>{selectedProduct.description}</p>

              {/* Quantity Control */}
              <div className="add-to-cart">
                <div className="qty-label">
                  Qty
                  <div className="input-number">
                    <input type="number" min="1" value={qty} readOnly />
                    <span
                      className="qty-up"
                      onClick={() => handleQtyChange("increase")}
                    >
                      +
                    </span>
                    <span
                      className="qty-down"
                      onClick={() => handleQtyChange("decrease")}
                    >
                      -
                    </span>
                  </div>
                </div>
                <button
                  className="add-to-cart-btn"
                  onClick={() => addToCart(selectedProduct.id, qty)}
                >
                  <i className="fa fa-shopping-cart"></i> Add to Cart
                </button>
              </div>

              <ul className="product-btns">
                <li>
                  {isInWishlist ? (
                    <a onClick={() => removeFromWishlist(selectedProduct.id)}>
                      <i className="fa fa-heart"></i> Remove from Wishlist
                    </a>
                  ) : (
                    <a onClick={() => addToWishlist(selectedProduct.id)}>
                      <i className="fa fa-heart-o"></i> Add to Wishlist
                    </a>
                  )}
                </li>
              </ul>

              <ul className="product-links">
                <li>Category:</li>
                <li>
                  <a href="/products">{selectedProduct.category}</a>
                </li>
              </ul>

              <ul className="product-links">
                <li>Share:</li>
                <li>
                  <a href="https://www.facebook.com/vannsy.sun">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://x.com/Jammy59261513">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:Vannsheesun18@gmail.com?subject=Support%20Request&body=Hello%20Vannsheesun,">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:Vannsheesun18@gmail.com?subject=Support%20Request&body=Hello%20Vannsheesun,">
                    <i className="fa fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* /Product Details */}
        </div>
        {/* /Row */}
      </div>
      {/* /Container */}
    </div>
  );
};
export default ProductDisplay;
