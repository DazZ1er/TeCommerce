import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
const DescriptionBox = () => {
  const { products } = useContext(ShopContext);
  const [activeTab, setActiveTab] = useState("description");

  const { productId } = useParams();
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const selectedProduct = products.find((p) => p.id === Number(productId));

  if (!selectedProduct) {
    return <div>Product not found</div>;
  }

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div id="product-tab">
              {/* Product tab nav */}
              <ul className="tab-nav">
                <li className={activeTab === "description" ? "active" : ""}>
                  <a onClick={() => handleTabChange("description")}>
                    Description
                  </a>
                </li>
                <li className={activeTab === "details" ? "active" : ""}>
                  <a onClick={() => handleTabChange("details")}>Details</a>
                </li>
                <li className={activeTab === "reviews" ? "active" : ""}>
                  <a onClick={() => handleTabChange("reviews")}>Reviews (3)</a>
                </li>
              </ul>

              {/* Product tab content */}
              <div className="tab-content">
                {/* Description tab */}
                {activeTab === "description" && (
                  <div id="tab1" className="tab-pane fade in active">
                    <div className="row">
                      <div className="col-md-12">
                        <p>{selectedProduct.description}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Details tab */}
                {activeTab === "details" && (
                  <div id="tab2" className="tab-pane fade in active">
                    <div className="row">
                      <div className="col-md-12">
                        <p>{selectedProduct.title}</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Reviews tab */}
                {activeTab === "reviews" && (
                  <div id="tab3" className="tab-pane fade in active">
                    <div className="row">
                      {/* Rating */}
                      <div className="col-md-3">
                        <div id="rating">
                          <div className="rating-avg">
                            <span>4.5</span>
                            <div className="rating-stars">
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star"></i>
                              <i className="fa fa-star-o"></i>
                            </div>
                          </div>
                          <ul className="rating">
                            <li>
                              <div className="rating-stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o empty"></i>
                              </div>
                              <div className="rating-progress">
                                <div style={{ width: "80%" }}></div>
                              </div>
                              <span className="sum">3</span>
                            </li>
                            <li>
                              <div className="rating-stars">
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star"></i>
                                <i className="fa fa-star-o"></i>
                              </div>
                              <div className="rating-progress">
                                <div style={{ width: "60%" }}></div>
                              </div>
                              <span className="sum">2</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Reviews */}
                      <div className="col-md-6">
                        <div id="reviews">
                          <ul className="reviews">
                            <li>
                              <div className="review-heading">
                                <h5 className="name">Alice</h5>
                                <p className="date">20 NOV 2024, 3:00 PM</p>
                                <div className="review-rating">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star-o empty"></i>
                                </div>
                              </div>
                              <div className="review-body">
                                <p>
                                  Great product! It exceeded my expectations and
                                  performs really well. Highly recommend it to
                                  anyone looking for something similar.
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="review-heading">
                                <h5 className="name">Bob</h5>
                                <p className="date">18 NOV 2024, 10:30 AM</p>
                                <div className="review-rating">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star-o"></i>
                                  <i className="fa fa-star-o empty"></i>
                                </div>
                              </div>
                              <div className="review-body">
                                <p>
                                  The product is good but could use some
                                  improvements in terms of durability. Still a
                                  good value for the price.
                                </p>
                              </div>
                            </li>
                            <li>
                              <div className="review-heading">
                                <h5 className="name">Charlie</h5>
                                <p className="date">15 NOV 2024, 5:00 PM</p>
                                <div className="review-rating">
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star"></i>
                                  <i className="fa fa-star-o empty"></i>
                                </div>
                              </div>
                              <div className="review-body">
                                <p>
                                  I am very pleased with the product, it works
                                  exactly as described. Would buy again.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Review Form */}
                      <div className="col-md-3">
                        <div id="review-form">
                          <form className="review-form">
                            <input
                              className="input"
                              type="text"
                              placeholder="Your Name"
                            />
                            <input
                              className="input"
                              type="email"
                              placeholder="Your Email"
                            />
                            <textarea
                              className="input"
                              placeholder="Your Review"
                            ></textarea>
                            <div className="input-rating">
                              <span>Your Rating: </span>
                              <div className="stars">
                                <input
                                  id="star5"
                                  name="rating"
                                  value="5"
                                  type="radio"
                                />
                                <label htmlFor="star5"></label>
                                <input
                                  id="star4"
                                  name="rating"
                                  value="4"
                                  type="radio"
                                />
                                <label htmlFor="star4"></label>
                                <input
                                  id="star3"
                                  name="rating"
                                  value="3"
                                  type="radio"
                                />
                                <label htmlFor="star3"></label>
                                <input
                                  id="star2"
                                  name="rating"
                                  value="2"
                                  type="radio"
                                />
                                <label htmlFor="star2"></label>
                                <input
                                  id="star1"
                                  name="rating"
                                  value="1"
                                  type="radio"
                                />
                                <label htmlFor="star1"></label>
                              </div>
                            </div>
                            <button className="primary-btn">Submit</button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionBox;
