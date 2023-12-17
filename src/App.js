import React, { useState } from "react";
import "./styles/main.css";

import Navigation from "./components/Navigation";
import StepOne from "./components/StepOne";

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

  return (
    <main className="main">
      <Navigation currentStep={currentStep} setCurrentStep={setCurrentStep} />

      <form className="form">
        {currentStep === 1 && (
          <StepOne errors={errors} inputs={inputs} setInputs={setInputs} />
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
