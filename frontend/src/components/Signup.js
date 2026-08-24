import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Signup.css";
import loginBg from "../assets/image.png";
import googleLogo from "../assets/google-logo.png";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    birthMonth: "",
    birthDay: "",
    birthYear: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Fake check for existing user
    if (formData.email === "test@example.com") {
      navigate("/login");
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-left">
        <img src={loginBg} alt="Background" className="signup-bg" />
        <div className="signup-promo">
        </div>
      </div>

      <div className="signup-right">
        <div className="form-header">
          <h2 className="active">Sign up</h2>
          <h2 className="link" onClick={() => navigate("/login")}>Log in</h2>
        </div>

        <button className="google-btn">
          <img src={googleLogo} alt="Google" />
          Continue with Google
        </button>

        <div className="divider"><span>or email</span></div>

        <form onSubmit={handleSubmit}>
          <label>Birthday</label>
          <div className="birthday-select">
            <select name="birthMonth" required onChange={handleChange}>
              <option value="">Month</option>
              <option value="Jan">Jan</option>
              <option value="Feb">Feb</option>
              <option value="Mar">Mar</option>
              <option value="Apr">Apr</option>
              <option value="May">May</option>
              <option value="June">June</option>
              <option value="July">July</option>
              <option value="August">August</option>
              <option value="September">September</option>
              <option value="October">October</option>
              <option value="November">November</option>
              <option value="December">December</option>
            </select>
            <select name="birthDay" required onChange={handleChange}>
              <option value="">Day</option>
              {[...Array(31)].map((_, i) => (
                <option key={i}>{i + 1}</option>
              ))}
            </select>
            <select name="birthYear" required onChange={handleChange}>
              <option value="">Year</option>
              {[...Array(100)].map((_, i) => (
                <option key={i}>{2024 - i}</option>
              ))}
            </select>
          </div>

          <label>Email</label>
          <input type="email" name="email" required onChange={handleChange} />

          <label>Username</label>
          <input type="text" name="username" required onChange={handleChange} />

          <label>Password</label>
          <input type="password" name="password" required onChange={handleChange} />

          <button type="submit" className="signup-submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
