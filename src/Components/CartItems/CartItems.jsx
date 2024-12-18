import React, { useContext, useState } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { NavLink } from "react-router-dom";
import "./CartItems.css";

const CartItems = () => {
  const {
    getTotalCartAmount,
    products,
    cart = [],
    removeFromCart,
    clearCart,
    updateCartQty,
  } = useContext(ShopContext);

  const [showThankYou, setShowThankYou] = useState(false);
  const [showCartEmptyMessage, setShowCartEmptyMessage] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    country: "",
    zipCode: "",
    phone: "",
    createAccount: false,
    password: "",
    shippingFirstName: "",
    shippingLastName: "",
    shippingEmail: "",
    shippingAddress: "",
    shippingCity: "",
    shippingCountry: "",
    shippingZipCode: "",
    shippingTel: "",
    orderNotes: "",
  });
  const [errors, setErrors] = useState({});
  const getCartLength = () => {
    return Object.entries(cart).filter(([id, qty]) => qty > 0).length;
  };
  const totalAmount =
    typeof getTotalCartAmount === "function" ? getTotalCartAmount() : 0;

  const validateForm = () => {
    const newErrors = {};
    const requiredFields = [
      "firstName",
      "lastName",
      "email",
      "address",
      "city",
      "country",
      "zipCode",
      "phone",
    ];
    requiredFields.forEach((field) => {
      if (!formData[field]) {
        newErrors[field] = "This field is required.";
      }
    });

    if (formData.shippingFirstName) {
      const shippingFields = [
        "shippingFirstName",
        "shippingLastName",
        "shippingEmail",
        "shippingAddress",
        "shippingCity",
        "shippingCountry",
        "shippingZipCode",
        "shippingTel",
      ];
      shippingFields.forEach((field) => {
        if (!formData[field]) {
          newErrors[field] = "This field is required.";
        }
      });
    }

    if (!paymentMethod) {
      newErrors.paymentMethod = "Please select a payment method.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleCheckout = () => {
    const cartLength = getCartLength();
    if (cartLength === 0) {
      setShowCartEmptyMessage(true);
      setTimeout(() => setShowCartEmptyMessage(false), 5000);
      return;
    }

    if (validateForm()) {
      clearCart();
      setShowThankYou(true);
      setTimeout(() => setShowThankYou(false), 5000);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        city: "",
        country: "",
        zipCode: "",
        phone: "",
        createAccount: false,
        password: "",
        shippingFirstName: "",
        shippingLastName: "",
        shippingEmail: "",
        shippingAddress: "",
        shippingCity: "",
        shippingCountry: "",
        shippingZipCode: "",
        shippingTel: "",
        orderNotes: "",
      });
      setPaymentMethod("");
      setErrors({});
    }
    if (paymentMethod === "Paypal") {
      const orderTotal = totalAmount.toFixed(2);
      const paypalUrl = `https://www.paypal.com/cgi-bin/webscr?cmd=_xclick&business=your-paypal-email&item_name=Order%20Description&amount=${orderTotal}&currency_code=USD&return=http://localhost:3000/cart&cancel_return=http://localhost:3000/cart`;

      window.open(paypalUrl, "_blank");
    }
    if (paymentMethod === "Direct Transfer To Bank") {
      const orderTotal = totalAmount.toFixed(2);
      const abaBankUrl = `https://www.ababank.com/payment-gateway?amount=${orderTotal}&currency=USD&order_id=123456&return_url=your-return-url&cancel_url=your-cancel-url`;

      window.open(abaBankUrl, "_blank");
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const cartProducts = Object.entries(cart)
    .filter(([id, qty]) => qty > 0)
    .map(([id, qty]) => {
      const product = products.find((p) => p.id === parseInt(id, 10));
      return { ...product, qty };
    });

  const handleQtyChange = (id, type) => {
    const qty = cart[id];
    if (type === "increase") {
      updateCartQty(id, qty + 1);
    } else if (type === "decrease" && qty > 1) {
      updateCartQty(id, qty - 1);
    } else if (type === "remove") {
      removeFromCart(id);
    }
  };

  return (
    <div className="section">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            {/* Billing Details */}
            <div className="billing-details">
              <div className="section-title">
                <h3 className="title">Billing address</h3>
              </div>
              {[
                "firstName",
                "lastName",
                "email",
                "address",
                "city",
                "country",
                "zipCode",
                "phone",
              ].map((field) => (
                <div className="form-group" key={field}>
                  <input
                    className={`input ${errors[field] ? "error" : ""}`}
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    placeholder={
                      field.charAt(0).toUpperCase() +
                      field.slice(1).replace(/([A-Z])/g, " $1")
                    }
                    onChange={handleInputChange}
                  />
                  {errors[field] && (
                    <p className="error-message">{errors[field]}</p>
                  )}
                </div>
              ))}
              <div className="form-group">
                <div className="input-checkbox">
                  <input
                    type="checkbox"
                    id="create-account"
                    name="createAccount"
                    checked={formData.createAccount}
                    onChange={() => {
                      setFormData((prevData) => ({
                        ...prevData,
                        createAccount: !prevData.createAccount,
                      }));
                    }}
                  />
                  <label htmlFor="create-account">
                    <NavLink style={{ textDecoration: "none" }} to="/login">
                      <i className="fa fa-user-o"></i> Create Account?
                    </NavLink>
                  </label>
                  {formData.createAccount && (
                    <div className="caption">
                      <p>Please input your password here.</p>
                      <input
                        className="input"
                        type="password"
                        name="password"
                        placeholder="Enter Your Password"
                        onChange={handleInputChange}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* /Billing Details */}

            {/* Shipping Details */}
            <div className="shiping-details">
              <div className="section-title">
                <h3 className="title">Shipping address</h3>
              </div>
              <div className="input-checkbox">
                <input
                  type="checkbox"
                  id="shiping-address"
                  onChange={() => {
                    setFormData((prevData) => ({
                      ...prevData,
                      shippingFirstName: prevData.firstName,
                      shippingLastName: prevData.lastName,
                      shippingEmail: prevData.email,
                      shippingAddress: prevData.address,
                      shippingCity: prevData.city,
                      shippingCountry: prevData.country,
                      shippingZipCode: prevData.zipCode,
                      shippingTel: prevData.tel,
                    }));
                  }}
                />
                <label htmlFor="shiping-address">
                  <span></span>
                  Ship to a different address?
                </label>
                <div className="caption">
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="shippingFirstName"
                      value={formData.shippingFirstName}
                      placeholder="First Name"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="shippingLastName"
                      value={formData.shippingLastName}
                      placeholder="Last Name"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="email"
                      name="shippingEmail"
                      value={formData.shippingEmail}
                      placeholder="Email"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="shippingAddress"
                      value={formData.shippingAddress}
                      placeholder="Address"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="shippingCity"
                      value={formData.shippingCity}
                      placeholder="City"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="shippingCountry"
                      value={formData.shippingCountry}
                      placeholder="Country"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="text"
                      name="shippingZipCode"
                      value={formData.shippingZipCode}
                      placeholder="ZIP Code"
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      className="input"
                      type="tel"
                      name="shippingTel"
                      value={formData.shippingTel}
                      placeholder="Telephone"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* /Shipping Details */}

            {/* Order Notes */}
            <div className="order-notes">
              <textarea
                className="input"
                name="orderNotes"
                value={formData.orderNotes}
                placeholder="Order Notes"
                onChange={handleInputChange}
              />
            </div>
            {/* /Order Notes */}
          </div>

          {/* Order Details */}
          <div className="col-md-5 order-details">
            <div className="section-title text-center">
              <h3 className="title">Your Order</h3>
            </div>
            <div className="order-summary">
              <div className="order-col">
                <div>
                  <strong>PRODUCT</strong>
                </div>
                <div>
                  <strong></strong>
                </div>
              </div>
              <div className="order-products">
                {cartProducts.length === 0 ? (
                  <div className="col-12">
                    <p>
                      Your cart is empty. Start adding products to your cart.
                    </p>
                  </div>
                ) : (
                  cartProducts.map((product) => (
                    <div key={product.id} className="order-product">
                      <img src={product.image} alt={product.title} />
                      <h4>{product.title}</h4>
                      <h3>${product.price}</h3>
                      <p>Quantity: {product.qty}</p>
                      <h3>Subtotal: ${product.qty * product.price}</h3>
                      <div className="qty-controls">
                        <button
                          onClick={() =>
                            handleQtyChange(product.id, "increase")
                          }
                        >
                          +
                        </button>
                        <button
                          onClick={() =>
                            handleQtyChange(product.id, "decrease")
                          }
                        >
                          -
                        </button>
                        <button
                          onClick={() => handleQtyChange(product.id, "remove")}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
              <div className="order-col">
                <div>Shipping</div>
                <div>
                  <strong>FREE</strong>
                </div>
              </div>
              <div className="order-col">
                <div>
                  <strong>TOTAL</strong>
                </div>
                <div>
                  <strong className="order-total">
                    ${totalAmount.toFixed(2)}
                  </strong>
                </div>
              </div>
            </div>
            <div className="payment-method">
              <h3>Payment Method</h3>
              {["Direct Transfer To Bank", "Pay on Delivery", "Paypal"].map(
                (method) => (
                  <div className="input-radio" key={method}>
                    <input
                      type="radio"
                      name="payment"
                      id={`payment-${method}`}
                      checked={paymentMethod === method}
                      onChange={() => setPaymentMethod(method)}
                    />
                    <label htmlFor={`payment-${method}`}>
                      <span></span>
                      {method.charAt(0).toUpperCase() + method.slice(1)}
                    </label>
                  </div>
                )
              )}
              {errors.paymentMethod && (
                <p className="error-message">{errors.paymentMethod}</p>
              )}
            </div>
            <div className="input-checkbox">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">
                <span></span>
                I've read and accept the{" "}
                <NavLink style={{ textDecoration: "none" }} to="/terms">
                  terms & conditions
                </NavLink>
              </label>
            </div>
            <button
              className="primary-btn order-submit"
              onClick={handleCheckout}
            >
              Place order
            </button>
          </div>
          {/* /Order Details */}
        </div>
      </div>
      {showThankYou && (
        <div className="thank-you-message">
          <h3>Thank you for your purchase!</h3>
          <p>Your order has been successfully placed.</p>
        </div>
      )}
      {showCartEmptyMessage && (
        <div className="cart-empty-message">
          <h3>There is no product in your cart!</h3>
          <NavLink to="/products" className="primary-btn">
            Go Shopping
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default CartItems;
