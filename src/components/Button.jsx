import React from "react";

const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md font-medium shadow-sm transition-all duration-200 focus:outline-none cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
