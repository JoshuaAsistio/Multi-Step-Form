import React, { useState } from "react";
import "./styles/main.css";
import "./styles/step-one.css";

import Navigation from "./components/Navigation";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [errors, setErrors] = useState({
    nameError: false,
    emailError: false,
    phoneNumberError: false,
  });

  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.innerText === "Next") {
      if (
        inputs.name.length !== 0 &&
        inputs.email.length !== 0 &&
        inputs.phoneNumber.length !== 0
      ) {
        setErrors({
          nameError: false,
          emailError: false,
          phoneNumberError: false,
        });
        setCurrentStep((prevStep) => (prevStep += 1));
      } else {
        if (inputs.name.length === 0)
          setErrors((prevErrors) => ({ ...prevErrors, nameError: true }));
        else setErrors((prevErrors) => ({ ...prevErrors, nameError: false }));

        if (inputs.email.length === 0)
          setErrors((prevErrors) => ({ ...prevErrors, emailError: true }));
        else setErrors((prevErrors) => ({ ...prevErrors, emailError: false }));

        if (inputs.phoneNumber.length === 0)
          setErrors((prevErrors) => ({
            ...prevErrors,
            phoneNumberError: true,
          }));
        else
          setErrors((prevErrors) => ({
            ...prevErrors,
            phoneNumberError: false,
          }));
      }
    } else {
      setCurrentStep((prevStep) => (prevStep -= 1));
    }
  };

  const handleChange = (e) => {
    if (e.target.id === "name") {
      setInputs((prevInputs) => ({ ...prevInputs, name: e.target.value }));
    } else if (e.target.id === "email") {
      setInputs((prevInputs) => ({ ...prevInputs, email: e.target.value }));
    } else {
      setInputs((prevInputs) => ({
        ...prevInputs,
        phoneNumber: e.target.value,
      }));
    }
  };

  const errorOutline = (error) => {
    return {
      borderColor: error ? "hsl(354, 84%, 57%)" : "rgb(151, 152, 154)",
    };
  };

  return (
    <main className="main">
      <Navigation currentStep={currentStep} setCurrentStep={setCurrentStep} />

      <form className="form">
        {currentStep === 1 && (
          <section className="form__section">
            <h2 className="form__section__title">Personal Info</h2>

            <p className="form__section__description">
              Please provide your name, email address and phone number.
            </p>

            <div className="form__section__label-error">
              <label htmlFor="name" className="form__section__label">
                Name
              </label>
              {errors.nameError && (
                <p className="form__section__error-msg">
                  The name field is required
                </p>
              )}
            </div>
            <input
              type="text"
              id="name"
              placeholder="e.g. Stephen King"
              className="form__section__input"
              value={inputs.name || ""}
              onChange={(e) => handleChange(e)}
              aria-label="Full name text input"
              style={errorOutline(errors.nameError)}
              required
            />

            <div className="form__section__label-error">
              <label htmlFor="email" className="form__section__label">
                Email
              </label>
              {errors.emailError && (
                <p className="form__section__error-msg">
                  The email field is required
                </p>
              )}
            </div>
            <input
              type="text"
              id="email"
              placeholder="e.g. stephenking@lorem.com"
              className="form__section__input"
              value={inputs.email || ""}
              onChange={(e) => handleChange(e)}
              aria-label="email text input"
              style={errorOutline(errors.emailError)}
              required
            />

            <div className="form__section__label-error">
              <label htmlFor="phone-number" className="form__section__label">
                Phone Number
              </label>
              {errors.phoneNumberError && (
                <p className="form__section__error-msg">
                  This field is required
                </p>
              )}
            </div>
            <input
              type="text"
              id="phone-number"
              placeholder="e.g. +1 234 567 890"
              className="form__section__input"
              value={inputs.phoneNumber || ""}
              onChange={(e) => handleChange(e)}
              aria-label="phone number text input"
              style={errorOutline(errors.phoneNumberError)}
              required
            />
          </section>
        )}

        {currentStep === 2 && <section>Step Two</section>}

        {currentStep === 3 && <section>Step Three</section>}

        {currentStep === 4 && <section>Step Four</section>}

        <footer
          className="footer"
          style={{
            justifyContent: currentStep !== 1 ? "space-between" : "right",
          }}
        >
          {currentStep !== 1 && (
            <button className="footer__back" onClick={(e) => handleClick(e)}>
              Back
            </button>
          )}
          <button className="footer__next" onClick={(e) => handleClick(e)}>
            {currentStep !== 4 ? "Next" : "Confirm"}
          </button>
        </footer>
      </form>
    </main>
  );
};

export default App;
