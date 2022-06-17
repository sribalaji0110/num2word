import NumberToWordComp from "component/NumberToWordComp";
import React, { useEffect } from "react";

export const NumberToWord = () => {
  useEffect(() => {
    document.addEventListener("contextmenu", (event) => event.preventDefault());
    document.onkeydown = function (e) {
      var key = e.key;
      if (key === "F12") {
        e.preventDefault();
      }
    };
  }, []);

  return <NumberToWordComp />;
};
