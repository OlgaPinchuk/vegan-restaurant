//Npm files
import { useState } from "react";

//Project files
import InputField from "../components/InputField";
import { inputName, inputEmail, inputDate, inputTime } from "../data/form";

export default function BookingForm() {
  //State
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  return (
    <>
      <form className="booking-form">
        <h2>Book a table</h2>
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

        <button type="submit" className="submit-btn">
          Book
        </button>
        <small>* - required fields</small>
      </form>
    </>
  );
}
