import React, {Fragment, useState} from "react";
import { useTranslation } from "react-i18next";
import MetaData from "../metaData/metaData";
import "./signUp.css";
import logo from "../../images/logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";
import Loader from "../loader/loader";

const SignUp = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const signUpSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match before proceeding
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      setLoading(true); // Set loading to true while processing
      
      // SignUp dispatch logic here
      console.log("Successfully Signed Up");
      localStorage.setItem("user", JSON.stringify({email, password}));
      navigate("/dashboard"); 
    } catch (error) {
      console.error("Error Sign Up:", error);
      setError(error); // Handle any errors during signup
    } finally {
      setLoading(false); // Set loading to false after signup completes
    }
  };

  return (
    <Fragment>
      <MetaData title={t("signUp.title")} />
      {loading ? (<Loader/>) : (
        <Fragment>
          <div className="signUp">
            <div className="logo-container">
              <img src={logo} alt="App Logo" className="logo" />
            </div>
            <div className="signUp-container">
              <h3 className="signUpTitle">{t("signUp.title")}</h3>
              <form className="signUpForm" onSubmit={signUpSubmit}>
                <div className="email_passBox">
                  <input
                    type="text"
                    placeholder={t("signUp.userName")}
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder={t("signUp.email_placeholder")}
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <div className="passwordWrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder={t("signUp.pass_placeholder")}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="eyeIcon"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                  <div className="passwordWrapper">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="confirmPassword"
                      placeholder={t("signUp.confirmPass_placeholder")}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="eyeIcon"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>
                </div>
                <button type="submit" className="signUp-button">
                  {t("signUp.button")}
                </button>
              </form>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default SignUp;
