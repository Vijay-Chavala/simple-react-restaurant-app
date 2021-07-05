import React from "react";
import regStyles from "./RegistrationForm.module.css";

const RegistrationForm = ({ subText, mainText, bgImg, btnText }) => {
  return (
    <section
      className={regStyles.formSec}
      style={{
        background: `linear-gradient(to right,rgba(225, 225 , 225, 0.5) 0%,rgba(225,225,225, 0.3) 100%),url(${bgImg})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className={regStyles.topContent}>
        <h2>{mainText}</h2>
        <div className={regStyles.underline}></div>

        <p>{subText}</p>
      </div>

      <div className={regStyles.formDiv}>
        <h2 className={regStyles.mainText}>Reservation Form</h2>
        <div className={regStyles.underline}></div>
        <form className={regStyles.form}>
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="Enter E-Mail" />
          <input type="phone" placeholder="Enter Mobile Number" />
          <input type="date" />
          <input type="time" />
          <button type="button" className={regStyles.book_btn}>
            {btnText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegistrationForm;
