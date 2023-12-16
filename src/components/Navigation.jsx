import React from "react";
import "../styles/nav.css";

const Navigation = ({ setCurrentStep, currentStep }) => {
  const formSections = [
    { step: 1, stepName: "YOUR INFO" },
    { step: 2, stepName: "SELECT PLAN" },
    { step: 3, stepName: "ADD ONS" },
    { step: 4, stepName: "SUMMARY" },
  ];

  const setStepCountStyles = (step) => {
    return {
      backgroundColor:
        currentStep === step ? "hsl(228, 100%, 84%)" : "transparent",
      color: currentStep === step ? "hsl(213, 96%, 18%)" : "hsl(0, 0%, 100%)",
      borderColor: currentStep === step ? "transparent" : "hsl(0, 0%, 100%)",
    };
  };

  const handleClick = (step) => {
    setCurrentStep(step);
  };

  return (
    <nav className="main__navigation">
      {formSections.map((item) => {
        return (
          <button
            className="main__navigation__button"
            key={item.step}
            onClick={() => handleClick(item.step)}
            aria-label={`Step ${item.step}. Show ${item.stepName} section of the form`}
          >
            <span
              className="main__navigation__button__stepCount"
              style={setStepCountStyles(item.step)}
              aria-label={item.step}
            >
              {item.step}
            </span>

            <span>
              <p className="main__navigation__button__stepIndicator">
                {`STEP ${item.step}`}
              </p>

              <p
                className="main__navigation__button__stepName"
                alt={item.stepName}
              >
                {item.stepName}
              </p>
            </span>
          </button>
        );
      })}
    </nav>
  );
};

export default Navigation;
