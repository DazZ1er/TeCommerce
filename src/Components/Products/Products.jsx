import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";

const Products = () => {
  const { products, addToCart, loading, error, searchQuery } =
    useContext(ShopContext);
  const [filteredCategory, setFilteredCategory] = useState("all");
  const [filteredBrand, setFilteredBrand] = useState("all");
  const [sortOption, setSortOption] = useState("id");
  const [viewType, setViewType] = useState("grid");
  const [showCount, setShowCount] = useState(20);

  const topSellingIds = [1, 16, 37];
  const topSellingProducts = products.filter((product) =>
    topSellingIds.includes(product.id)
  );

  const normalize = (str) => str?.toLowerCase() || "";

  const filteredProducts = products
    .filter((product) => {
      const categoryMatch =
        filteredCategory === "all" || product.category === filteredCategory;
      const brandMatch =
        filteredBrand === "all" || normalize(product.brand) === filteredBrand;
      return categoryMatch && brandMatch;
    })
    .filter((product) => {
      return (
        !searchQuery ||
        normalize(product.title).includes(normalize(searchQuery)) ||
        normalize(product.description).includes(normalize(searchQuery))
      );
    });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "lowToHigh") return a.price - b.price;
    if (sortOption === "highToLow") return b.price - a.price;
    return a.id - b.id;
  });

  const displayedProducts = sortedProducts.slice(0, showCount);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  const uniqueBrands = [
    ...new Set(products.map((product) => normalize(product.brand))),
  ];

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          {/* ASIDE */}
          <div id="aside" className="col-md-3">
            <div className="aside">
              <h3 className="aside-title">Categories</h3>
              <div className="checkbox-filter">
                <div className="input-checkbox">
                  <input
                    type="checkbox"
                    id="category-all"
                    checked={filteredCategory === "all"}
                    onChange={() => setFilteredCategory("all")}
                  />
                  <label htmlFor="category-all">
                    <span></span>
                    All
                  </label>
                </div>
                {["mobile", "tv", "audio", "gaming"].map((category, index) => (
                  <div className="input-checkbox" key={index}>
                    <input
                      type="checkbox"
                      id={`category-${index}`}
                      onChange={() =>
                        setFilteredCategory(
                          filteredCategory === category ? "all" : category
                        )
                      }
                      checked={filteredCategory === category}
                    />
                    <label htmlFor={`category-${index}`}>
                      <span></span>
                      {category.toUpperCase()}
                      <small>
                        (
                        {
                          products.filter(
                            (product) => product.category === category
                          ).length
                        }
                        )
                      </small>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="aside">
              <h3 className="aside-title">Brand</h3>
              <div className="checkbox-filter">
                <div className="input-checkbox">
                  <input
                    type="checkbox"
                    id="brand-all"
                    checked={filteredBrand === "all"}
                    onChange={() => setFilteredBrand("all")}
                  />
                  <label htmlFor="brand-all">
                    <span></span>
                    All
                  </label>
                </div>
                {uniqueBrands.map((brand, index) => (
                  <div className="input-checkbox" key={index}>
                    <input
                      type="checkbox"
                      id={`brand-${index}`}
                      onChange={() =>
                        setFilteredBrand(
                          filteredBrand === brand ? "all" : brand
                        )
                      }
                      checked={filteredBrand === brand}
                    />
                    <label htmlFor={`brand-${index}`}>
                      <span></span>
                      {brand.toUpperCase()}
                      <small>
                        (
                        {
                          products.filter(
                            (product) => normalize(product.brand) === brand
                          ).length
                        }
                        )
                      </small>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="aside">
              <h3 className="aside-title">Top selling</h3>
              {topSellingProducts.map((product) => (
                <div className="product-widget" key={product.id}>
                  <div className="product-img">
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className="product-body">
                    <p className="product-category">{product.category}</p>
                    <h3 className="product-name">
                      <Link to={`/product/${product.id}`}>{product.model}</Link>
                    </h3>
                    <h4 className="product-price">
                      ${product.price.toFixed(2)}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* /ASIDE */}

          {/* STORE */}
          <div id="store" className="col-md-9">
            {/* Store filter */}
            <div className="store-filter clearfix">
              <div className="store-sort">
                <label>
                  Sort By:
                  <select
                    className="input-select"
                    onChange={(e) => setSortOption(e.target.value)}
                  >
                    <option value="id">By ID</option>
                    <option value="lowToHigh">Price: Low to High</option>
                    <option value="highToLow">Price: High to Low</option>
                  </select>
                </label>

                <label>
                  Show:
                  <select
                    className="input-select"
                    onChange={(e) => setShowCount(Number(e.target.value))}
                  >
                    <option value="20">20</option>
                    <option value="50">50</option>
                  </select>
                </label>
              </div>
              <ul className="store-grid">
                <li
                  className={viewType === "grid" ? "active" : ""}
                  onClick={() => setViewType("grid")}
                >
                  <i className="fa fa-th"></i>
                </li>
              </ul>
            </div>
            {/* /Store filter */}

            {/* Store products */}
            {filteredProducts.length > 0 ? (
              <div className="row">
                {displayedProducts.map((product) => (
                  <div className="col-md-4 col-xs-6" key={product.id}>
                    <div className="product">
                      <Link to={`/product/${product.id}`}>
                        <div className="product-img">
                          <img src={product.image} alt={product.title} />
                        </div>
                        <div className="product-body">
                          <p className="product-category">{product.category}</p>
                          <h4 className="product-price">
                            ${product.price.toFixed(2)}
                          </h4>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No products found for the search term "{searchQuery}".</p>
            )}
            {/* /Store products */}

            {/* Show more */}
            {showCount < sortedProducts.length && (
              <button
                className="show-more-btn"
                onClick={() => setShowCount(showCount + 20)}
              >
                Show More
              </button>
            )}

            <div className="store-filter clearfix">
              <span className="store-qty">
                Showing {displayedProducts.length} of {sortedProducts.length}{" "}
                products
              </span>
            </div>
          </div>
          {/* /STORE */}
        </div>
      </div>
    </div>
  );
};

export default Products;
