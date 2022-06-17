import React from "react";
import { Switch, Route } from "react-router";
import { NumberToWord, ContactUs, Policy } from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/privacy-policy" component={Policy} />
      <Route path="/contact-us" component={ContactUs} />
      <Route path="/" component={NumberToWord} />
    </Switch>
  );
};

export default Routes;
