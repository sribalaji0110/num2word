import React from "react";
import "./style.scss";
import HeaderNavbar from "component/Common/navbar";

export const ContactUs = () => {
  return (
    <>
      <HeaderNavbar isNightMode={true} />
      <div className="contact-us">
        <div className="layout-contact">
          For any Question, Suggestion, Feedback, New Information Required or
          Any Bug Found on Website Please email us-{" "}
          <strong>numberstowords2022@gmail.com</strong> or message on Whatsapp
          WA - <strong>+91 8072177472</strong> (If you're reporting an issue,
          please include screen images of the bug without them, we won't be able
          to identify it.)
        </div>
      </div>
    </>
  );
};
