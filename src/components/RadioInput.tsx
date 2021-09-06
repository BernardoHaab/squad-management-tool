import React, { ChangeEvent, InputHTMLAttributes } from "react";

type RadioInputProps = InputHTMLAttributes<HTMLInputElement> & {
  textLabel: string;
  inputValue: string;
  changeEvent: (e: ChangeEvent<HTMLInputElement>) => void;
};

const RadioInput: React.FC<RadioInputProps> = ({
  textLabel,
  inputValue,
  changeEvent,
  ...props
}) => {
  return (
    <label className="radio-label" htmlFor={inputValue}>
      <input
        className="radio-input"
        type="radio"
        id={inputValue}
        name="teamType"
        value={inputValue}
        onChange={changeEvent}
        {...props}
      />
      <span className="radiobox"></span>
      <p id="label-text">{textLabel}</p>
    </label>
  );
};

export default RadioInput;
