// import React from "react";
/* eslint-disable react/prop-types */

import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Start a Project" }) => {
  return (
    <div className="w-40 px-4 py-2 text-black  bg-zinc-100 rounded-full flex items-center justify-between">
      <span className="text-sm font-medium">{title}</span>
      <IoIosReturnRight />
    </div>
  );
};

export default Button;
