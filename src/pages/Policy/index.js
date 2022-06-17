import React from "react";
import "./style.scss";
import HeaderNavbar from "component/Common/navbar";

export const Policy = () => {
  return (
    <div>
      <HeaderNavbar isNightMode={true} />
      <div className="dark-privacy">
        <div className="layout-privacy">
          <h1>Privacy Policy for Numberstowords</h1>
          <p>
            We do not save or collect the data that you are converting on{" "}
            <strong>numberstowords.online</strong>, since the tools activity
            occurs on the client side, this means that the processing is done by
            your computer.
          </p>
          <h2>Analytics and Logs</h2>
          <p>
            As many websites <strong>numberstowords.online</strong> use Google
            Analytics for support of site administration like demographic
            information and or analyze trends. The only information we do
            collect is used to improve the content of our Web pages.
          </p>

          <h2>Google Adsense and the DoubleClick DART Cookie</h2>

          <p>
            Google, as a third party vendor, uses cookies to serve ads on{" "}
            <strong>numberstowords.online</strong>. This DART cookies enables
            Google to serve ads to visitors that visits sites over the internet
            as well <strong>numberstowords.online</strong>
          </p>
          <p>
            All visitors may opt to not use the DART cookie by visiting the
            Google ad and content network privacy policy at{" "}
            <strong>http://www.google.com/privacy_ads.html</strong> DART cookie
            mechanisms are subject to Google’s own privacy policies.
          </p>
          <p>
            Third Party ad servers or ad networks may also use cookies to track
            users activities on this website{" "}
            <strong>numberstowords.online</strong> has no access to or control
            over these cookies that are used by third-party advertisers.
          </p>

          <h2>Changes to this Privacy Statement</h2>

          <p>
            The contents of this statement may be altered at any time, at our
            discretion.
          </p>

          <h2>More information</h2>

          <p>
            If you have any questions regarding the privacy policy of{" "}
            <strong>numberstowords.online</strong> then please feel free to
            contact us at <strong>numberstowords2022@gmail.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
};
