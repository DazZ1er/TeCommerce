import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showLoginMessage, setShowLoginMessage] = useState(false);
  const [isLogin, setIsLogin] = useState(false); // State to toggle between Sign Up and Login

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowLoginMessage(true);

    setFormData({
      name: "",
      email: "",
      password: "",
    });

    setTimeout(() => {
      setShowLoginMessage(false);
    }, 3000);
  };

  const isFormValid = () => {
    if (isLogin) {
      return formData.email && formData.password;
    }
    return formData.name && formData.email && formData.password;
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            {!isLogin && (
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleInputChange}
              />
            )}
            <input
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email Address"
              onChange={handleInputChange}
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" id="btnContinue" disabled={!isFormValid()}>
            {isLogin ? "Login" : "Continue"}
          </button>
        </form>
        <p className="loginsignup-login" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Sign up here"
            : "Already have an account? Login here"}
        </p>
        {!isLogin && (
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id="" />
            <p>By continuing, I agree to the terms of use & privacy policy.</p>
          </div>
        )}

        {showLoginMessage && (
          <div className="login-message">
            <h3>You are logged in!</h3>
            <p>Welcome back!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
