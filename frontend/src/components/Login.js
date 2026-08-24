import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import loginBg from "../assets/image.png";
import googleLogo from "../assets/google-logo.png";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Dummy login redirect
    navigate("/dashboard");
  };

  return (
    <div className="login-wrapper">
      <div className="login-left">
        <img src={loginBg} alt="Background" className="login-bg" />
        <div className="login-tagline">
          <h1>Smash sets in<br />your sweats.</h1>
        </div>
      </div>

      <div className="login-right">
        <div className="form-box">
          <div className="form-tabs">
            <h2 className="inactive" onClick={() => navigate("/")}>Sign up</h2>
            <h2 className="active">Log in</h2>
          </div>

          <button className="google-login">
            <img src={googleLogo} alt="Google" />
            Log in with Google
          </button>

          <div className="login-divider"><span>or email</span></div>

          <form onSubmit={handleLogin}>
            <label>Email</label>
            <input type="text" placeholder="Enter your email address or username" required />

            <label>Password</label>
            <div className="password-field">
              <input type="password" placeholder="Enter your password" required />
              <span className="eye-icon">👁️</span>
            </div>

            <div className="forgot-password">
              <a href="#">Forgot password</a>
            </div>

            <button type="submit" className="login-btn">Log In</button>
          </form>

          <p className="terms">
            By clicking Log in, you accept our <span>Terms of Service</span> and <span>Privacy Policy</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
