import React from "react";

const Button = (props) => {
  return (
    <button className="shadow-2xl bg-stone-600 text-white font-[Poppins] px-6 rounded md:ml-8 w-full hover:bg-slate-500 duration-500">
      {props.children}
    </button>
  );
};

export default Button;
