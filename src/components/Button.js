import React from "react";

const Button = ({ onClick, className, children }) => {
  return (
    <button
      className={`px-5 py-2 rounded-lg bg-[#ffa94d] font-medium h-max ${className} `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
