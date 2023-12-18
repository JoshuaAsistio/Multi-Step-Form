import React, { useRef, useEffect } from "react";
import "../styles/step-one.css";

const StepOne = ({ errors, inputs, setInputs }) => {
  const errorMessageReference = useRef(null);

  // set the outline for when the user did not enter anything
  const errorOutline = (error) => {
    return {
      borderColor: error ? "hsl(354, 84%, 57%)" : "rgb(151, 152, 154)",
    };
  };

  // change the values in the inputs state depending on
  // the id of the input text field that the user typed on.
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

  // this makes it so that the error message that is offscreen will be read by screen readers upon render.
  useEffect(() => {
    if (errors.nameError || errors.emailError || errors.phoneNumberError)
      errorMessageReference.current.focus();
  }, [errors]);

  return (
    <section className="form__section">
      {/* error message for screen readers */}
      {(errors.nameError || errors.emailError || errors.phoneNumberError) && (
        <p className="sr-only" ref={errorMessageReference} tabIndex={-1}>
          {`${errors.nameError ? "The name field is required." : ""} ${
            errors.emailError ? "The email field is required." : ""
          } ${errors.phoneNumberError ? "The phone number is required." : ""}`}
        </p>
      )}
      {/* ------------------------------------------------------------------- */}

      {/* title and description */}
      <h2 className="form__section__title" focusable={true}>
        Personal Info
      </h2>

      <p className="form__section__description" focusable={true}>
        Please provide your name, email address and phone number.
      </p>
      {/* ------------------------------------------------------- */}

      <div className="form__section__label-error">
        {/* label, error message, and input for name */}
        <label htmlFor="name" className="form__section__label">
          Name
        </label>

        {/* appears only when there is an error with the user input */}
        {errors.nameError && (
          <p className="form__section__error-msg" role="tooltip">
            This field is required.
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
      {/* ------------------------------------------------------- */}

      {/* label, error message, and input for email */}
      <div className="form__section__label-error">
        <label htmlFor="email" className="form__section__label">
          Email
        </label>

        {/* will show only if there is an error with the email input */}
        {errors.emailError && (
          <p className="form__section__error-msg" role="tooltip">
            This field is required.
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
      {/* ---------------------------------------------------------------- */}

      {/* label, error message, and input for phone number */}
      <div className="form__section__label-error">
        <label htmlFor="phone-number" className="form__section__label">
          Phone Number
        </label>

        {/* will show only if there is an error with the phone number input */}
        {errors.phoneNumberError && (
          <p className="form__section__error-msg" role="tooltip">
            This field is required.
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
      {/* --------------------------------------------------------- */}
    </section>
  );
};

export default StepOne;
