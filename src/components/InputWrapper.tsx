import React from "react";

type InputWrapperProps = {
  textLabel: string;
  labelFor?: string;
  children: JSX.Element | JSX.Element[];
  customClass?: string;
};

const InputWrapper: React.FC<InputWrapperProps> = ({
  textLabel,
  labelFor = "",
  children,
  customClass = "",
}) => {
  return (
    <div className={`input-container ${customClass}`}>
      <label htmlFor={labelFor}>{textLabel}</label>
      {children}
    </div>
  );
};

export default InputWrapper;
