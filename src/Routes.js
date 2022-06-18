import { PageNotFound } from "pages/PageNotFound";
import React from "react";
import { Switch, Route } from "react-router";
import { NumberToWord, ContactUs, Policy } from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/privacy-policy" component={Policy} exact />
      <Route path="/contact-us" component={ContactUs} exact />
      <Route path="/" component={NumberToWord} exact />
      <Route component={PageNotFound} />
    </Switch>
  );
};

export default Routes;
