import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

const CaptchaPage = () => {
  const [verified, setVerified] = useState(false);
  const navigate = useNavigate();

  const handleVerify = (value) => {
    if (value) {
      setVerified(true);
    }
  };

  const handleSubmit = () => {
    if (verified) {
      navigate("/items");
    } else {
      alert("Please verify the captcha first!");
    }
  };

  return (
    <div className="captcha-container">
      <div className="captcha-box">
        <ReCAPTCHA
          sitekey="6LcxeacqAAAAAGTx9VZTE_hJUsoORlaGqtghOttO"  
          onChange={handleVerify}
        />
        <button
          onClick={handleSubmit}
          disabled={!verified}
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            backgroundColor: verified ? "#007bff" : "#ccc",
            color: "white",
            cursor: verified ? "pointer" : "not-allowed",
          }}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};

export default CaptchaPage;
