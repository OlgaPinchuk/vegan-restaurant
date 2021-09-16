// Npm files
import { useState } from "react";

// Project files
import InputField from "./common/InputField";
import { inputName, inputEmail, inputDate, inputTime } from "../data/form.json";

export default function BookingForm() {
  // State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  // Derived state
  const isDisabled = !(name && email && date && time);

  function submitForm(event) {
    event.preventDefault();
    resetState();
    alert("The table is reserved. We are waiting for you!");
  }

  function resetState() {
    setName("");
    setEmail("");
    setDate("");
    setTime("");
  }

  return (
    <section className="booking">
      <h2>Book a table</h2>
      <form className="booking-form">
        <InputField hook={[name, setName]} HTMLParameters={inputName}>
          Full Name*
        </InputField>

        <InputField hook={[email, setEmail]} HTMLParameters={inputEmail}>
          Email*
        </InputField>

        <InputField hook={[date, setDate]} HTMLParameters={inputDate}>
          Date*
        </InputField>

        <InputField hook={[time, setTime]} HTMLParameters={inputTime}>
          Time*
        </InputField>

        <button
          type="submit"
          className="button submit-btn"
          disabled={isDisabled}
          onClick={(event) => submitForm(event)}
        >
          Book
        </button>
        <small>* - required fields</small>
      </form>
    </section>
  );
}
