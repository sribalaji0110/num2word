import React from "react";

export default function CardBody({ colorKey }) {
  return (
    <div className={`${colorKey} body-content`}>
      <div className="brief">
        <div>
          <h3>What is a number to word converter?</h3>
          <p>
            A number to word converter is a tool that converts numbers to word
            format. Normally, we write numbers in digits, but sometimes we need
            to put the numbers in English as well to cross-check the figure and
            improve readability.This will help you in write a cheque.
          </p>
          <h3>How to read numbers in words ?</h3>
          <p className="pb-2">
            <strong>Number in English Words (Indian Format)</strong> - You can
            read numbers in English words in Indian number format, which uses
            lakhs and crores rather than million and billion in international
            number format. You can modify the case of words in a variety of
            formats, including sentence case, title case, capital case, lower
            case, and upper case.
          </p>
          <p>
            <strong> Number to Words in International Format</strong> - You can
            convert any number to words in International format, such as million
            or billion. The reading of numbers differs between the International
            and Indian formats. The international format employs the usage of
            separates (commas) after every three digits and uses Million,
            Billion, Trillion, and so on. In Indian format, we use Lakh, Crore,
            and so on, with separators after every two digits.
          </p>
        </div>
        <div>
          <h3>Number converter in Indian language</h3>
          <p>
            Convert a number or an amount to words. The amount you provide will
            be converted into words in English, Hindi, Gujarati, and
            Marathi.It's a free and powerful number-to-word converter that also
            outputs in Indian rupees and different language, making it
            beneficial for completing tasks and saving time.
          </p>
          <h3>Number converter in another language</h3>
          <p className="pb-0">
            If you want to convert a different language, Simply choose a
            currency from the list, such as Euro ,Ghana Cedi, Indian Rupee,
            Iranian Rial, Kyat, Mauritius Rupee, Naira, Pound Sterling, Taka,
            Turkish Lira, or US Dollar.Once you've chosen a currency type, it
            will automatically select a countyName name based on the currency
            type, and you can just enter a amount or number, which will be
            converted to words. It's a handy tool for assisting you with
            day-to-day tasks.
          </p>
        </div>
      </div>
    </div>
  );
}
