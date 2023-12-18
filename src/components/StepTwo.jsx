import React from "react";

import arcadeIcon from "../assets/images/icon-arcade.svg";
import advancedIcon from "../assets/images/icon-advanced.svg";
import proIcon from "../assets/images/icon-pro.svg";

const StepTwo = ({ planType, plan, setInputs }) => {
  const plans = [
    {
      name: "Arcade",
      monthlyPrice: 9,
      yearlyPrice: 90,
      icon: arcadeIcon,
    },
    {
      name: "Advanced",
      monthlyPrice: 12,
      yearlyPrice: 120,
      icon: advancedIcon,
    },
    {
      name: "Pro",
      monthlyPrice: 15,
      yearlyPrice: 150,
      icon: proIcon,
    },
  ];

  const changePlan = (e) => {
    e.preventDefault();

    const plan = e.target.id;

    plans.forEach((item) => {
      if (plan === item.name) {
        setInputs((prevInputs) => ({ ...prevInputs, plan: item.name }));

        if (planType === "Monthly") {
          setInputs((prevInputs) => ({
            ...prevInputs,
            price: item.monthlyPrice,
          }));
        } else {
          setInputs((prevInputs) => ({
            ...prevInputs,
            price: item.yearlyPrice,
          }));
        }
      }
    });
  };

  const changePlanType = (e) => {
    e.preventDefault();

    if (planType === "Monthly") {
      setInputs((prevInputs) => ({ ...prevInputs, planType: "Yearly" }));

      plans.forEach((item) => {
        if (plan === item.name) {
          setInputs((prevInputs) => ({
            ...prevInputs,
            price: item.yearlyPrice,
          }));
        }
      });
    } else {
      setInputs((prevInputs) => ({ ...prevInputs, planType: "Monthly" }));

      plans.forEach((item) => {
        if (plan === item.name) {
          setInputs((prevInputs) => ({
            ...prevInputs,
            price: item.monthlyPrice,
          }));
        }
      });
    }
  };

  return (
    <section className="form__section" style={{ paddingBottom: "20px" }}>
      <h2 className="form__section__title">Select your plan</h2>

      <p className="form__section__description">
        You have the option of monthly or yearly billing
      </p>

      <div className="form__section__plans">
        {plans.map((item) => {
          return (
            <button
              className="form__section__plans__plan"
              key={item.name}
              aria-label={`Click here to subscribe to the ${item.name} plan for ${item.monthlyPrice} dollars per month or ${item.yearlyPrice} dollars per year with 2 months free`}
              style={{
                borderColor:
                  plan === item.name
                    ? "hsl(243, 100%, 62%)"
                    : "rgb(219, 219, 221)",
              }}
              id={item.name}
              onClick={(e) => changePlan(e)}
              autoFocus={item.name === "Arcade" ? true : false}
            >
              <img
                src={item.icon}
                alt=""
                className="form__section__plans__plan__icon"
              />

              <div>
                <p
                  className="form__section__plans__plan-name"
                  aria-hidden={true}
                >
                  {item.name}
                </p>

                <p
                  className="form__section__plans__plan-price"
                  aria-hidden={true}
                >
                  $
                  {planType === "Monthly"
                    ? item.monthlyPrice
                    : item.yearlyPrice}
                  /{planType === "Monthly" ? "mo" : "yr"}
                </p>
              </div>

              {planType === "Yearly" && (
                <p className="form__section__plans__freebie" aria-hidden={true}>
                  2 months free
                </p>
              )}
            </button>
          );
        })}
      </div>

      <div className="form__section__plans__plan-type">
        <p
          className="form__section__plans__toggler__plan-type__name"
          style={{
            color:
              planType === "Monthly"
                ? "hsl(213, 96%, 18%)"
                : "hsl(231, 11%, 63%)",
          }}
        >
          Monthly
        </p>

        <button
          className="form__section__plans__plan-type__button"
          onClick={(e) => changePlanType(e)}
          aria-label={`Click here to change your plan type to ${
            planType === "Monthly" ? "Yearly" : "Monthly"
          }`}
        >
          <div
            className="form__section__plans__plan-type__button__circle"
            style={{
              animationName: planType === "Monthly" ? "goLeft" : "goRight",
            }}
          ></div>
        </button>

        <p
          className="form__section__plans__toggler__plan-type__name"
          style={{
            color:
              planType === "Yearly"
                ? "hsl(213, 96%, 18%)"
                : "hsl(231, 11%, 63%)",
          }}
        >
          Yearly
        </p>
      </div>
    </section>
  );
};

export default StepTwo;
