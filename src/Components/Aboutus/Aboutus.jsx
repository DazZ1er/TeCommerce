import React from "react";
import "./Aboutus.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>
      <div className="about-us-content">
        <p className="store-description">
          Welcome to <strong>Tech-Commerce</strong>, your number one source for
          all things tech. We're dedicated to providing you the very best of
          electronic gadgets, accessories, and more, with an emphasis on
          quality, customer service, and uniqueness.
        </p>

        <p className="store-description">
          Founded in 2024, <strong>Tech-Commerce</strong> has come a long way
          from its beginnings. We strive to bring you the latest and most
          innovative tech products, sourced from trusted manufacturers, and
          delivered with care to your door.
        </p>

        <p className="store-description">
          Whether you're a gadget enthusiast, a tech professional, or simply
          someone looking for the best deals on electronics, we have something
          for everyone. Our team works hard every day to ensure you get
          top-quality products, fast delivery, and excellent customer support.
        </p>

        <h3>Thank You!</h3>
        <p>
          We truly appreciate your support. Without customers like you, we
          wouldn't be able to continue bringing the latest tech innovations to
          you. Thank you in advance for choosing us for your tech needs — we
          look forward to serving you!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
