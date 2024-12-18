import React from "react";
import "./Orders&Returns.css";

const OrdersAndReturns = () => {
  return (
    <div className="orders-returns">
      <h1>Orders & Returns</h1>

      <section>
        <h2>Order Process</h2>
        <p>
          At TeCommerce, we aim to provide a smooth and efficient shopping
          experience. Here is how our order process works:
        </p>
        <ul>
          <li>
            <strong>Browse Products:</strong> Explore our wide range of
            electronic devices including mobile phones, TVs, audio equipment,
            and more.
          </li>
          <li>
            <strong>Add to Cart:</strong> Once you find the product you wish to
            buy, simply add it to your shopping cart.
          </li>
          <li>
            <strong>Checkout:</strong> Review your order, provide shipping
            details, and proceed to payment using our secure checkout system.
          </li>
          <li>
            <strong>Order Confirmation:</strong> After completing your purchase,
            you will receive an order confirmation via email, along with
            tracking details if applicable.
          </li>
        </ul>
      </section>

      <section>
        <h2>Order Tracking</h2>
        <p>
          Once your order has been shipped, you can track its progress through
          the tracking link provided in the order confirmation email.
        </p>
        <p>
          If you face any issues with tracking, feel free to contact our support
          team at <strong>Vannsheesun18@gmail.com</strong> for assistance.
        </p>
      </section>

      <section>
        <h2>Returns and Exchanges</h2>
        <p>
          We want you to be completely satisfied with your purchase. If for any
          reason you are not happy with your product, we offer a straightforward
          return process.
        </p>
        <ul>
          <li>
            <strong>Eligibility:</strong> Products must be returned within 30
            days of receiving the order. The product must be in its original
            condition and packaging.
          </li>
          <li>
            <strong>Return Process:</strong> To initiate a return, please
            contact our support team at <strong>Vannsheesun18@gmail.com</strong>{" "}
            with your order number and the reason for the return.
          </li>
          <li>
            <strong>Refunds:</strong> Once the returned product is received and
            inspected, we will issue a refund to the original payment method.
            Refunds typically take 5-7 business days to process.
          </li>
          <li>
            <strong>Exchanges:</strong> If you wish to exchange a product for a
            different model, please specify this in your return request. We will
            assist you in processing the exchange based on product availability.
          </li>
        </ul>
      </section>

      <section>
        <h2>Damaged or Defective Products</h2>
        <p>
          If your product arrives damaged or defective, please contact our
          support team immediately. We will guide you through the return or
          exchange process and ensure that you receive a replacement or refund
          as soon as possible.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions regarding your order or need assistance with
          returns, please don't hesitate to reach out to us:
        </p>
        <p>
          Email: <strong>Vannsheesun18@gmail.com</strong>
        </p>
        <p>
          Phone: <strong>+855 77 672 119</strong>
        </p>
      </section>
    </div>
  );
};

export default OrdersAndReturns;
