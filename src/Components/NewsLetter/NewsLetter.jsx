import React from "react";
const NewsLetter = () => {
  return (
    <div>
      {/* NEWSLETTER */}
      <div id="newsletter" className="section">
        {/* container */}
        <div className="container">
          {/* row */}
          <div className="row">
            <div className="col-md-12">
              <div className="newsletter">
                <p>
                  Sign Up for the <strong>NEWSLETTER</strong>
                </p>
                <form>
                  <input
                    className="input"
                    type="email"
                    placeholder="Enter Your Email"
                  />
                  <button className="newsletter-btn">
                    <i className="fa fa-envelope"></i> Subscribe
                  </button>
                </form>
                <ul className="newsletter-follow">
                  <li>
                    <a
                      href="https://www.facebook.com/vannsy.sun"
                      target="_blank"
                    >
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/Jammy59261513" target="_blank">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/its_vannshee/"
                      target="_blank"
                    >
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pinterest.com/izegaming18/"
                      target="_blank"
                    >
                      <i className="fa fa-pinterest"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* /row */}
        </div>
        {/* /container */}
      </div>
      {/* /NEWSLETTER */}
    </div>
  );
};

export default NewsLetter;
