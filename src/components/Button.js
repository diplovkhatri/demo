import React from "react";

const Button = (props) => {
  return (
    <button
      className="shadow-2xl bg-slate-900
     text-white font-[Poppins] px-6 rounded-xl 
      md:ml-8 p-2 w-full hover:bg-green-800 duration-500"
    >
      {props.children}
    </button>
  );
};

export default Button;
