import React from "react";
import "./Contact.css";

const Contact = () => {
  const address = "Tuek Thla, Sen Sok, Phnom Penh, Cambodia";
  const phone = "+855 77 672 119";
  const googleMapLink = "https://maps.app.goo.gl/Dx825eb9eSfByBDU7";

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <div className="contact-info">
        <div className="contact-address">
          <h2>Our Address</h2>
          <p>{address}</p>
          <p>You can visit our store:</p>
          <a href={googleMapLink} target="_blank" rel="noopener noreferrer">
            View on Google Maps
          </a>
        </div>

        <div className="contact-phone">
          <h2>Phone</h2>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
