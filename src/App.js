import React from "react";
import "./App.css";
import { RomanNumerals, validator } from "./utils";
const TRANSLATION_TYPE = { TO_INT: "1", TO_ROMAN: "2" };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translationOption: TRANSLATION_TYPE.TO_INT,
      initialNumber: "",
    };
    this.handleChangeTranslation = this.handleChangeTranslation.bind(this);
    this.submitNumber = this.submitNumber.bind(this);
    this.handleInitialNumber = this.handleInitialNumber.bind(this);
  }

  handleChangeTranslation(event) {
    const newValue = event.target.value;
    this.setState(() => ({ translationOption: newValue }));
  }

  handleInitialNumber(event) {
    const newValue = event.target.value;
    this.setState(() => ({ initialNumber: newValue }));
  }

  submitNumber() {
    this.setState(() => ({
      error: "",
    }));
    if (this.state.translationOption === TRANSLATION_TYPE.TO_INT) {
      if (validator.isRomanNumberValid(this.state.initialNumber)) {
        this.setState(() => ({
          translatedNumber: RomanNumerals.fromRoman(this.state.initialNumber),
        }));
      } else {
        this.setState(() => ({
          error: "Invalid roman number. Please type it again.",
        }));
      }
    } else {
      if (validator.isArabicNumberValid(this.state.initialNumber)) {
        this.setState(() => ({
          translatedNumber: RomanNumerals.toRoman(this.state.initialNumber),
        }));
      } else {
        this.setState(() => ({
          error: "Invalid number.  Please type it again.",
        }));
      }
    }
  }
  render() {
    return (
      <div className="App">
        <div className="row">
          <select
            value={this.state.translationOption}
            onChange={this.handleChangeTranslation}
          >
            <option value={TRANSLATION_TYPE.TO_INT}>
              Convert a Roman number to an integer
            </option>
            <option value={TRANSLATION_TYPE.TO_ROMAN}>
              Convert an integer to a Roman number
            </option>
          </select>
        </div>
        {this.state.error && (
          <div className="row error">{this.state.error}</div>
        )}
        <div className="row">
          <input
            value={this.state.initialNumber}
            onChange={this.handleInitialNumber}
          />
        </div>
        <button onClick={this.submitNumber}>Translate your number</button>

        {this.state.translatedNumber && !this.state.error && (
          <div className="row">
            Your translated {TRANSLATION_TYPE.TO_ROMAN && "roman"} number is :{" "}
            {this.state.translatedNumber}
          </div>
        )}
      </div>
    );
  }
}

export default App;
