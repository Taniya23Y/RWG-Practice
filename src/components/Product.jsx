/* eslint-disable react/prop-types */
import Button from "./Button";
import { useState } from "react";

function Product({ value, mover, count }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full  h-[18rem] text-white">
      <div
        style={{ backgroundColor: isHovered ? value.bgColor : "initial" }}
        onMouseEnter={() => {
          mover(count);
          setIsHovered(true);
        }}
        onMouseLeave={() => setIsHovered(false)}
        className="max-w-screen-xl mx-auto py-5 p-[5rem] flex items-center justify-between"
      >
        <h1 className="font-normal text-4xl text-center">{value.title}</h1>
        <div className="dets w-[20rem] pt-10">
          <p className="mb-10 ">{value.description}</p>
          <div className="flex items-center gap-10">
            {value.live && <Button title="Live Website" />}
            {value.case && <Button title="Case Study" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
