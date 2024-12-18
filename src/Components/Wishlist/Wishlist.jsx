import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import "./Wishlist.css";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const {
    wishlist = [],
    removeFromWishlist,
    products,
  } = useContext(ShopContext);
  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );
  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
  };

  return (
    <div className="wishlist-section">
      <div className="container">
        <div className="wishlist-header">
          <h2>Your Wishlist</h2>
        </div>
        <div className="row">
          {wishlistProducts.length === 0 ? (
            <div className="col-12">
              <p>
                Your wishlist is empty. Start adding products to your wishlist!
              </p>
            </div>
          ) : (
            wishlistProducts.map((product) => (
              <div key={product.id} className="col-md-4">
                <div className="product-card">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={product.image}
                      alt={product.title}
                      className="product-card-image"
                    />
                  </Link>
                  <div className="product-card-info">
                    <h4>{product.title}</h4>
                    <p>${Number(product.price).toFixed(2)}</p>{" "}
                    <button
                      className="btn-remove"
                      onClick={() => handleRemoveFromWishlist(product.id)}
                    >
                      Remove from Wishlist
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
