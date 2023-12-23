import React, { useState } from "react";
import "./styles/main.css";
import "./styles/step-two.css";

import Navigation from "./components/Navigation";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import StepThree from "./components/StepThree";
import StepFour from "./components/StepFour";
import ThankYou from "./components/ThankYou";
import Footer from "./components/Footer";

const App = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    phoneNumber: "",
    planType: "Monthly",
    plan: "Arcade",
    planPrice: 9,
    addOns: [],
  });
  const [errors, setErrors] = useState({
    nameError: false,
    emailError: false,
    phoneNumberError: false,
  });

  const handleClick = (e) => {
    e.preventDefault();

    if (e.target.innerText === "Next" || e.target.innerText === "Confirm") {
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

        setCurrentStep(1);
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

        {currentStep === 2 && (
          <StepTwo
            planType={inputs.planType}
            plan={inputs.plan}
            setInputs={setInputs}
          />
        )}

        {currentStep === 3 && (
          <StepThree
            planType={inputs.planType}
            setInputs={setInputs}
            inputs={inputs}
          />
        )}

        {currentStep === 4 && (
          <StepFour
            planType={inputs.planType}
            addOns={inputs.addOns}
            planPrice={inputs.planPrice}
            plan={inputs.plan}
            setCurrentStep={setCurrentStep}
          />
        )}

        {currentStep > 4 && <ThankYou />}

        {!(currentStep > 4) && (
          <Footer currentStep={currentStep} handleClick={handleClick} />
        )}
      </form>
    </main>
  );
};

export default App;
