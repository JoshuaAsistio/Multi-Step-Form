import React from "react";

const Footer = ({ currentStep, handleClick }) => {
  return (
    <footer
      className="footer"
      style={{
        justifyContent: currentStep !== 1 ? "space-between" : "right",
      }}
    >
      {currentStep !== 1 && (
        <button className="footer__back" onClick={(e) => handleClick(e)}>
          Go Back
        </button>
      )}
      <button className="footer__next" onClick={(e) => handleClick(e)}>
        {currentStep !== 4 ? "Next" : "Confirm"}
      </button>
    </footer>
  );
};

export default Footer;
