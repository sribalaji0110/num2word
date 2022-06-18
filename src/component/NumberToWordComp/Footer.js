import React from "react";
import { FacebookFilled } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export default function Footer() {
  let history = useHistory();

  return (
    <div className="footer">
      <p>Copyright © 2022</p>
      <p>Made with ❤ by numberstowords.online </p>
      <div>
        <div>
          <span
            onClick={() => {
              history.push("/contact-us");
            }}
          >
            Contact Us{" "}
          </span>
          <span className="px-2">|</span>
          <span
            onClick={() => {
              history.push("/privacy-policy");
            }}
          >
            {" "}
            Privacy Policy
          </span>
        </div>
        <div>
          <a
            href="https://www.facebook.com/numberstowords"
            target={"_blank"}
            rel="noopener noreferrer"
            className="facebook"
          >
            <FacebookFilled />
          </a>
        </div>
      </div>
    </div>
  );
}
