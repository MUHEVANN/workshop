import React from "react";

const Button = ({ color, text }) => {
  return (
    <button
      className={`bg-transparant  hover:bg-blue-100 hover:border-none border-blue-300 border-2 rounded-full px-6 py-2 hover:px-8`}
    >
      {text}
    </button>
  );
};

export default Button;
