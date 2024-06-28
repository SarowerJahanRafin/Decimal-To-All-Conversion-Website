"use client";
import { useState } from "react";

export default function Home() {
  const [decimal, setDecimal] = useState(0);

  const increaseValue = () => {
    setDecimal(decimal + 1);
  };

  const decreaseValue = () => {
    setDecimal(decimal - 1);
  };

  const toBinary = (num: number) => num.toString(2);
  const toOctal = (num: number) => num.toString(8);
  const toHexadecimal = (num: number) => num.toString(16).toUpperCase();

  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{
        background: "linear-gradient(to right, rgb(144 136 197), rgb(83 74 7 / 53%))",
      }}
    >
      <h1 className="text-4xl p-10">Explore any conversion </h1>
      <div className="grid grid-cols-2 gap-4 text-center w-3/4 h-3/4 text-4xl">
        <div className="items-center border p-4 h-full">
          <div className="h-1/4">Binary</div>
          <div className="flex justify-center items-center h-1/2">{toBinary(decimal)}</div>
        </div>
        <div className="items-center border p-4 h-full">
          <div className="h-1/4">Decimal</div>
          <div className="flex justify-center items-center h-1/2">{decimal}</div>
        </div>
        <div className="items-center border p-4 h-full">
          <div className="h-1/4">Octal</div>
          <div className="flex justify-center items-center h-1/2">{toOctal(decimal)}</div>
        </div>
        <div className="items-center border p-4 h-full">
          <div className="h-1/4">Hexadecimal</div>
          <div className="flex justify-center items-center h-1/2">{toHexadecimal(decimal)}</div>
        </div>
      </div>

      <div className="flex m-5 w-full justify-evenly">
        <button className="btn btn-info px-10" onClick={increaseValue}>
          Increase
        </button>
        <button className="btn btn-success px-10" onClick={decreaseValue}>
          Decrease
        </button>
      </div>
    </div>
  );
}
