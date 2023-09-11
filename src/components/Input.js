import React from "react";

const Input = ({ value, setValue, className, isDisabled, isNumber }) => {

  return (
    <input 
    type="text"
    value={value}
    onChange={(e) => setValue(isNumber? Number(e.target.value) :e.target.value)}
    className={`border border-gray-400 border-none outline-none w-full py-2 capitalize ${className}`}
    disabled={isDisabled? true : false}
    />
  );
};

export default Input;
