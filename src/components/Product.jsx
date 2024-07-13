/* eslint-disable react/prop-types */
import Button from "./Button";

function Product({ value }) {
  return (
    <div className="w-full py-5 p-[5rem] text-white bg-blue-600 mt-20">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between">
        <h1 className="font-normal text-4xl">{value.title}</h1>
        <div className="dets w-1/3  pt-10">
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
