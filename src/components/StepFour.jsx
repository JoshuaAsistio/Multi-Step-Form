import React from "react";
import "../styles/step-four.css";

const StepFour = ({ planType, addOns, planPrice, plan, setCurrentStep }) => {
  const displayPlan = (planType, plan) => {
    if (planType === "Monthly") {
      if (plan === "Arcade") return "Arcade (Monthly)";
      else if (plan === "Advanced") return "Advanced (Monthly)";
      else return "Pro (Monthly)";
    } else {
      if (plan === "Arcade") return "Arcade (Yearly)";
      else if (plan === "Advanced") return "Advanced (Yearly)";
      else return "Pro (Yearly)";
    }
  };

  const displayPrice = (planType, plan) => {
    if (planType === "Monthly") {
      if (plan === "Arcade") return "$9/mo";
      else if (plan === "Advanced") return "$12/mo";
      else return "$15/mo";
    } else {
      if (plan === "Arcade") return "$90/yr";
      else if (plan === "Advanced") return "$120/yr";
      else return "$150/yr";
    }
  };

  const displayAddOnPrice = (name, planType) => {
    if (planType === "Monthly") {
      if (name === "Online Service") return "+$1/mo";
      else if (name === "Larger Storage") return "+$2/mo";
      else return "+$2/mo";
    } else {
      if (name === "Online Service") return "+$10/yr";
      else if (name === "Larger Storage") return "+$20/yr";
      else return "+$20/yr";
    }
  };

  const calculatePrice = (planType, addOns, planPrice) => {
    let totalPrice = 0;
    let addOnsPrice = 0;

    if (addOns.length === 0) {
      if (planType === "Monthly") {
        return `$${planPrice}/mo`;
      } else {
        return `$${planPrice}/yr`;
      }
    } else {
      addOns.forEach((item) => {
        if (planType === "Monthly") {
          addOnsPrice += item.monthlyPrice;
        } else {
          addOnsPrice += item.yearlyPrice;
        }
      });
    }

    totalPrice = planPrice + addOnsPrice;

    if (planType === "Monthly") {
      return `$${totalPrice}/mo`;
    } else {
      return `$${totalPrice}/yr`;
    }
  };

  return (
    <section className="form__section">
      <h2 className="form__section__title">Finishing Up</h2>

      <p className="form__section__description">
        Double-check everything looks OK before confirming
      </p>

      <div className="form__section__summary">
        <div className="form__section__summary-plan">
          <div className="form__section__summary__plan">
            <div>
              <p className="form__section__summary__plan__name">
                {displayPlan(planType, plan)}
              </p>

              <button
                className="form__section__summary__plan__button"
                autoFocus={true}
                aria-label="Click here to go back to step 2 to change your plan."
                onClick={() => setCurrentStep(2)}
              >
                Change
              </button>
            </div>

            <p className="form__section__summary__plan__price">
              {displayPrice(planType, plan)}
            </p>
          </div>

          {/* horizontal line */}
          <p className="form__section__horizontal-line"></p>

          {/* add ons */}
          {addOns.toString !== "" &&
            addOns.map((item) => {
              return (
                <div
                  className="form__section__summary__add-ons"
                  aria-label={`Online service for ${item.monthlyPrice} dollar per month or ${item.yearlyPrice} dollars per year`}
                  key={item.name}
                >
                  <span
                    className="form__section__summary__add-ons__name"
                    aria-hidden={true}
                  >
                    {item.name}
                  </span>

                  <span
                    className="form__section__summary__add-ons__price"
                    aria-hidden={true}
                  >
                    {displayAddOnPrice(item.name, planType)}
                  </span>
                </div>
              );
            })}
        </div>

        <div
          className="form__section__summary__total"
          aria-label="your total is 12 dollars per month"
        >
          <span
            className="form__section__summary__total__total"
            aria-hidden={true}
          >
            Total (per {planType === "Monthly" ? "month" : "year"})
          </span>
          <span
            className="form__section__summary__total__price"
            aria-hidden={true}
          >
            {calculatePrice(planType, addOns, planPrice)}
          </span>
        </div>
      </div>
    </section>
  );
};

export default StepFour;
