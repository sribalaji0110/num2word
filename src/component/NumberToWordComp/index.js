import React, { useState } from "react";
import { Input, Select } from "antd";
import { ToWords } from "to-words";
import "./style.scss";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DeleteIcon from "@mui/icons-material/DeleteOutlineOutlined";
import { NormalInput } from "component/Common/NormalInput";
import {
  CountryList,
  currencyListNumber,
  CountryListInterNational,
} from "service/constant";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Tooltip } from "antd";
import HeaderNavbar from "component/Common/navbar";
import CardBody from "./CardBody";
import Footer from "./Footer";

const writtenNumber = require("written-number");

const { Option } = Select;
const { TextArea } = Input;
const DEFAULT_KEY = 1;

const initialCurrencyWord = CountryList.filter(
  (ele) => ele.extraKey === DEFAULT_KEY && ele
);

/// NUMBER SELECT OPTION
const currencyOptions = currencyListNumber.map(({ CurrencyName, keyCode }) => ({
  label: `${CurrencyName}`,
  value: `${keyCode}`,
}));

const NumberToWordComp = () => {
  const [FormFields, setFormFields] = useState({
    isAmount: "",
    convertedWord: "",
    currencySelect: "",
    isPrefix: "₹",
    amountNAN: false,
    copiedEnglish: false,
    copied: false,
    isLocale: "en-IN",
    isCurrencyWord: "en-IN",
    isInterNationalLocale: "en",
    convertedWordInternational: "",
    isTheme: false,
  });

  const [currencySelectWord, setCurrencySelectWord] =
    useState(initialCurrencyWord);

  const toWords = new ToWords({
    localeCode: FormFields.isLocale,
    converterOptions: {
      currency: true,
      ignoreDecimal: false,
      ignoreZeroCurrency: false,
      doNotAddOnly: false,
    },
  });

  //NUMBER INPUT FUNCTION
  const handleInput = (e) => {
    const { value } = e.target || e || {};

    let splitValue;
    splitValue = value.split(" ")[1].replace(/[,]/g, "");

    if (splitValue) {
      handleConvertToWord(splitValue);
    } else {
      setFormFields({
        ...FormFields,
        convertedWord: "",
        convertedWordInternational: "",
        isAmount: "",
      });
    }
  };

  ///COMMON TEXTAREA CONVERTER FUNCTION
  const handleConvertToWord = (value) => {
    if (value) {
      toWords.options.localeCode = FormFields.isLocale;
      let convertedWord = toWords.convert(value, { currency: true });
      let convertedWordInternational = writtenNumber(value, {
        lang: FormFields.isInterNationalLocale,
      })
        .split(" ")
        .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(" ");
      setFormFields({
        ...FormFields,
        isAmount: value,
        convertedWord,
        convertedWordInternational,
      });
    }
  };

  const handleSelect = (valueKeyCode) => {
    let filterCurrencySelectWord = CountryList.filter((ele) => {
      return ele.keyCode === valueKeyCode;
    });
    setCurrencySelectWord(filterCurrencySelectWord);
    let getCountryCode = currencyListNumber.filter((ele, index) => {
      return ele.keyCode === valueKeyCode;
    })[0];

    if (valueKeyCode === 1) {
      let getIndiaList = CountryList.filter((ele) => {
        return ele.extraKey === valueKeyCode;
      });
      setCurrencySelectWord(getIndiaList);
    }

    // //common fn need to handle
    if (FormFields.isAmount) {
      toWords.options.localeCode = filterCurrencySelectWord[0].countyCode;
      let convertedWord = toWords.convert(FormFields.isAmount, {
        currency: true,
      });
      setFormFields({
        ...FormFields,
        convertedWord,
        isLocale: filterCurrencySelectWord[0].countyCode,
        isCurrencyWord: filterCurrencySelectWord[0].countyCode,
        isPrefix: getCountryCode.prefix,
      });
    } else {
      setFormFields({
        ...FormFields,
        currencySelect: valueKeyCode,
        isPrefix: getCountryCode.prefix,
        isLocale: filterCurrencySelectWord[0].countyCode,
        isCurrencyWord: filterCurrencySelectWord[0].countyCode,
      });
    }
  };

  const handleSelectWord = (locale) => {
    // //common fn need to handle
    if (FormFields.isAmount) {
      toWords.options.localeCode = locale;
      let convertedWord = toWords.convert(FormFields.isAmount, {
        currency: true,
      });
      setFormFields({
        ...FormFields,
        convertedWord,
        isLocale: locale,
        isCurrencyWord: locale,
      });
    } else {
      setFormFields({
        ...FormFields,
        isLocale: locale,
        isCurrencyWord: locale,
      });
    }
  };

  const handleSelectInternational = (locale) => {
    // //common fn need to handle
    if (FormFields.isAmount) {
      let convertedWordInternational = writtenNumber(FormFields.isAmount, {
        lang: locale,
      })
        .split(" ")
        .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
        .join(" ");
      setFormFields({
        ...FormFields,
        convertedWordInternational,
        isInterNationalLocale: locale,
      });
    } else {
      setFormFields({
        ...FormFields,
        isInterNationalLocale: locale,
      });
    }
  };

  const handleCase = (key, id) => {
    let convertedCase;
    if (key && id === 1) {
      convertedCase = FormFields.convertedWord;
      if (convertedCase) {
        setFormFields({
          ...FormFields,
          convertedWord:
            key === "upper"
              ? convertedCase.toUpperCase()
              : key === "lower"
              ? convertedCase.toLowerCase()
              : convertedCase
                  .split(" ")
                  .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
                  .join(" "),
        });
      }
    } else if (key && id === 2) {
      convertedCase = FormFields.convertedWordInternational;
      if (convertedCase) {
        setFormFields({
          ...FormFields,
          convertedWordInternational:
            key === "upper"
              ? convertedCase.toUpperCase()
              : key === "lower"
              ? convertedCase.toLowerCase()
              : convertedCase
                  .split(" ")
                  .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
                  .join(" "),
        });
      }
    }
  };
  const handleDelete = () => {
    setFormFields({
      ...FormFields,
      convertedWord: "",
      convertedWordInternational: "",
      isAmount: "",
    });
  };
  const handleSample = () => {
    let sample = 100000;
    let convertedWord = toWords.convert(sample, {
      currency: true,
    });
    let convertedWordInternational = writtenNumber(sample)
      .split(" ")
      .map((w) => w[0].toUpperCase() + w.substring(1).toLowerCase())
      .join(" ");
    setFormFields({
      ...FormFields,
      convertedWord,
      convertedWordInternational,
      isAmount: sample,
    });
  };
  const handleSwitch = (e) => {
    setFormFields({
      ...FormFields,
      isTheme: e.target.checked,
    });
  };
  return (
    <>
      <HeaderNavbar
        handleSwitch={handleSwitch}
        colorKey={`${FormFields.isTheme ? "black" : "light"}`}
      />
      <div className={`dark-mode ${FormFields.isTheme ? "black" : "light"}`}>
        <div className="layout">
          <div className="card-title">
            <h1>
              Numbers to Words <strong>Converter</strong>
            </h1>
            <p>
              Enter the values you want to convert from{" "}
              <strong>numbers to words</strong>.
            </p>
          </div>
          <div className="sample-delete">
            <Tooltip
              title="Sample Data"
              placement="leftBottom"
              color={"#102243"}
            >
              <span onClick={handleSample}>Sample</span>
            </Tooltip>
            <span onClick={handleDelete} className="delete-clip">
              <Tooltip
                placement="rightBottom"
                title={"Clear"}
                color={"#102243"}
              >
                <DeleteIcon />
              </Tooltip>
            </span>
          </div>
          <div className="card-body-view">
            <div className="card-details">
              <div className="row">
                <div className="col-12">
                  <div className="row">
                    <div className="col-6 d-flex">
                      <h6>Enter Number or Amount</h6>
                    </div>
                    <div className="col-6 ">
                      <div className="d-flex justify-content-end pr-3 mb-2 mobile-adjust">
                        <Select
                          defaultValue={"1"}
                          showSearch
                          dropdownStyle={{
                            backgroundColor: "#fffffff7",
                          }}
                          placeholder="Search to Select Currency"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                          filterSort={(optionA, optionB) =>
                            optionA.children
                              .toLowerCase()
                              .localeCompare(optionB.children.toLowerCase())
                          }
                          name="currencySelect"
                          onChange={(e) => {
                            handleSelect(parseInt(e));
                          }}
                        >
                          {currencyOptions.map((opt) => (
                            <Option value={opt.value} key={opt.value}>
                              {opt.label}
                            </Option>
                          ))}
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <NormalInput
                    placeholder={`${"Enter Number between 1 to 999999999"}`}
                    thousandSeparator={true}
                    prefix={`${FormFields.isPrefix} `}
                    name="isAmount"
                    value={FormFields.isAmount}
                    onChange={handleInput}
                    className="normal-input-number"
                  />
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-12">
                  <div className="row">
                    <div className="col-6 d-flex">
                      <h6>In Words English</h6>
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-center mobile-adjust">
                      <div className="d-flex justify-content-end pr-3 mb-2">
                        <CopyToClipboard
                          text={FormFields.convertedWord}
                          onCopy={() =>
                            setFormFields({
                              ...FormFields,
                              copiedEnglish: true,
                              copied: false,
                            })
                          }
                        >
                          <Tooltip
                            placement="left"
                            title={`${
                              FormFields.copiedEnglish
                                ? "copied"
                                : "Copy To Clipboard"
                            }`}
                            color={"#102243"}
                          >
                            <span className="copy-clip">
                              <ContentCopyIcon />
                            </span>
                          </Tooltip>
                        </CopyToClipboard>

                        <Select
                          dropdownStyle={{
                            backgroundColor: "#fffffff7",
                          }}
                          defaultValue={currencySelectWord[0].countyCode}
                          showSearch
                          placeholder="Search to Select Currency"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                          filterSort={(optionA, optionB) =>
                            optionA.children
                              .toLowerCase()
                              .localeCompare(optionB.children.toLowerCase())
                          }
                          value={FormFields.isCurrencyWord}
                          onChange={handleSelectWord}
                        >
                          {currencySelectWord.map((opt) => (
                            <Option value={opt.countyCode} key={opt.countyCode}>
                              {opt.countyName}
                            </Option>
                          ))}
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <TextArea
                    showCount
                    maxLength={100}
                    name="convertedWord"
                    value={FormFields.convertedWord}
                    className="text-area"
                  />
                  <span
                    className="text-change"
                    onClick={() => {
                      handleCase("upper", 1);
                    }}
                  >
                    Upper Case
                  </span>
                  <span
                    className="text-change"
                    onClick={() => {
                      handleCase("lower", 1);
                    }}
                  >
                    Lower Case
                  </span>
                  <span
                    className="text-change"
                    onClick={() => {
                      handleCase("title", 1);
                    }}
                  >
                    Title Case
                  </span>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col-12">
                  <div className="row">
                    <div className="col-7 d-flex">
                      <h6>In Words International Format</h6>
                    </div>
                    <div className="col-5 d-flex justify-content-end align-items-center ">
                      <div className="d-flex justify-content-end pr-3 mb-2 mobile-adjust">
                        <CopyToClipboard
                          text={FormFields.convertedWordInternational}
                          onCopy={() =>
                            setFormFields({
                              ...FormFields,
                              copiedEnglish: false,
                              copied: true,
                            })
                          }
                        >
                          <Tooltip
                            placement="left"
                            title={`${
                              FormFields.copied ? "copied" : "Copy To Clipboard"
                            }`}
                            color={"#102243"}
                          >
                            <span className="copy-clip">
                              <ContentCopyIcon />{" "}
                            </span>
                          </Tooltip>
                        </CopyToClipboard>

                        <Select
                          dropdownStyle={{
                            backgroundColor: "#fffffff7",
                          }}
                          defaultValue={CountryListInterNational[0].countyName}
                          showSearch
                          placeholder="Search to Select Currency"
                          optionFilterProp="children"
                          filterOption={(input, option) =>
                            option.children
                              .toLowerCase()
                              .indexOf(input.toLowerCase()) >= 0
                          }
                          filterSort={(optionA, optionB) =>
                            optionA.children
                              .toLowerCase()
                              .localeCompare(optionB.children.toLowerCase())
                          }
                          onChange={handleSelectInternational}
                          value={FormFields.isInterNationalLocale}
                        >
                          {CountryListInterNational.map((opt) => (
                            <Option value={opt.countyCode} key={opt.countyCode}>
                              {opt.countyName}
                            </Option>
                          ))}
                        </Select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <TextArea
                    showCount
                    maxLength={100}
                    name="convertedWordInternational"
                    value={FormFields.convertedWordInternational}
                    className="text-area"
                  />
                  <span
                    className="text-change"
                    onClick={() => {
                      handleCase("upper", 2);
                    }}
                  >
                    Upper Case
                  </span>
                  <span
                    className="text-change"
                    onClick={() => {
                      handleCase("lower", 2);
                    }}
                  >
                    Lower Case
                  </span>
                  <span
                    className="text-change"
                    onClick={() => {
                      handleCase("title", 2);
                    }}
                  >
                    Title Case
                  </span>
                </div>
              </div>
              <p className="keyword">
                <strong>Note :</strong> Number converter for words online,
                automatic converter, generate numeric text. We set the indian
                rupees by default, but if you want to convert to another
                language, use the dropdown menu.
              </p>
            </div>
          </div>
        </div>
        <CardBody colorKey={`${FormFields.isTheme ? "black" : "light"}`} />
        <Footer />
      </div>
    </>
  );
};
export default NumberToWordComp;
