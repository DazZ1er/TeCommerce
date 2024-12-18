import React from "react";
import "./Help.css";
const Help = () => {
  return (
    <div className="help-section">
      <div className="container">
        <div className="row">
          {/* Section Title */}
          <div className="col-md-12">
            <div className="section-title">
              <h3 className="title">How Can We Help You?</h3>
            </div>
          </div>
          {/* /Section Title */}

          {/* Help Content */}
          <div className="col-md-12">
            <div className="help-content">
              <h4>Welcome to TeCommerce!</h4>
              <p>
                We’re here to help you find the best electronic devices. Follow
                the steps below to get started:
              </p>

              <ol>
                <li>
                  <strong>Browse Products:</strong> Explore our wide range of
                  electronic devices, including smartphones, laptops, TVs, and
                  more.
                </li>
                <li>
                  <strong>Search and Filter:</strong> Use the search bar or
                  category filters to quickly find what you’re looking for.
                </li>
                <li>
                  <strong>Product Details:</strong> Click on any product to view
                  detailed specifications, reviews, and pricing.
                </li>
                <li>
                  <strong>Add to Cart:</strong> Once you find the perfect
                  device, click "Add to Cart" to save it for checkout.
                </li>
                <li>
                  <strong>Checkout Process:</strong> Proceed to the checkout
                  page, where you can enter your shipping and payment
                  information.
                </li>
                <li>
                  <strong>Track Your Order:</strong> After placing an order, use
                  your account dashboard to track its delivery status.
                </li>
                <li>
                  <strong>Contact Support:</strong> Have questions or need
                  assistance? Reach out to our customer service team via email,
                  phone, or live chat.
                </li>
              </ol>

              <div className="contact-info">
                <h4>Contact Us</h4>
                <p>
                  If you have any issues or need further assistance, don’t
                  hesitate to contact us:
                </p>
                <ul>
                  <li>Email: Vannsheesun18@gmail.com</li>
                  <li>Phone: +855 77 672 119</li>
                  <li>Live Chat: Available 24/7 on our website</li>
                </ul>
              </div>

              <h4>FAQs</h4>
              <p>
                Check out our{" "}
                <a href="mailto:Vannsheesun18@gmail.com?subject=Support%20Request&body=Hello%20Vannsheesun,">
                  FAQ section
                </a>{" "}
                for answers to common questions.
              </p>
            </div>
          </div>
          {/* /Help Content */}
        </div>
      </div>
    </div>
  );
};

export default Help;
