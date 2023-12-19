import React from "react";
import "../styles/step-three.css";

// refactor the updateAddOnPrice function
const StepThree = ({ planType, setInputs, inputs }) => {
  const addOns = [
    {
      name: "Online Service",
      description: "Access to multiplayer games",
      monthlyPrice: 1,
      yearlyPrice: 10,
    },
    {
      name: "Larger Storage",
      description: "Extra 1TB of cloud save",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
    {
      name: "Customizable Profile",
      description: "Custom theme on your profile",
      monthlyPrice: 2,
      yearlyPrice: 20,
    },
  ];

  const updateAddOnsPrice = (e) => {
    const addOn = e.target.id;

    addOns.forEach((item) => {
      if (addOn === item.name) {
        if (e.target.checked) {
          setInputs((prevInputs) => ({
            ...prevInputs,
            addOns: [...prevInputs.addOns, item],
          }));
        } else {
          setInputs((prevInputs) => ({
            ...prevInputs,
            addOns: prevInputs.addOns.filter((item) => item.name !== addOn),
          }));
        }
      }
    });
  };

  return (
    <section className="form__section">
      {inputs.addOns.toString() !== "" && (
        <p>{inputs.addOns.map((item) => item.name)}</p>
      )}
      <h2 className="form__section__title">Pick add-ons</h2>

      <p className="form__section__description">
        Add-ons help enhance your gaming experience
      </p>

      {addOns.map((item) => {
        return (
          <label
            htmlFor={item.name}
            className="form__section__add-ons"
            key={item.name}
          >
            <input
              type="checkbox"
              name="add-ons"
              value={
                planType === "Monthly" ? item.monthlyPrice : item.yearlyPrice
              }
              id={item.name}
              className="form__section__add-ons__checkbox"
              onChange={(e) => updateAddOnsPrice(e)}
              autoFocus={item.name === "Online Service" ? true : false}
              aria-label={`Click here to add ${item.name} which gives you access to ${item.description} for ${item.monthlyPrice} dollars per month or ${item.yearlyPrice} dollars per year`}
            />
            <div>
              <p className="form__section__add-ons__add-on-name">{item.name}</p>

              <p className="form__section__add-ons__add-on-description">
                {item.description}
              </p>
            </div>

            <p className="form__section__add-ons__add-on-price">
              +$
              {planType === "Monthly" ? item.monthlyPrice : item.yearlyPrice}/
              {planType === "Monthly" ? "mo" : "yr"}
            </p>
          </label>
        );
      })}
    </section>
  );
};

export default StepThree;
