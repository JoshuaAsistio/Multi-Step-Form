import React from "react";
import "../styles/thank-you.css";
import thankYouIcon from "../assets/images/icon-thank-you.svg";

const ThankYou = () => {
  return (
    <section className="thank-you">
      <img src={thankYouIcon} alt="" />

      <h2 className="thank-you__title">Thank You!</h2>

      <p className="thank-you__message">
        Thank you for confirming your subscription! We hope you have fun using
        our platform. If you ever need support, please feel free to email us at
        loremgaming.com
      </p>
    </section>
  );
};

export default ThankYou;
