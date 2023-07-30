import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Random() {
  const { gif, loader, getRandomGif } = useGif();

  const clickHandler = () => {
    getRandomGif();
  };

  return (
    <div className="w-1/2 bg-green-500 border border-black rounded-lg mt-[30px] flex flex-col items-center gap-y-5">
      <h1 className="font-bold text-2xl underline mt-3">A RANDOM GIF</h1>
      {loader ? <Spinner /> : <img src={gif} width={"450"} />}
      <button
        className="bg-green-300 w-3/4 py-2 rounded-md mb-4 font-semibold"
        onClick={clickHandler}
      >
        GENERATE
      </button>
      {/* <Spinner /> */}
    </div>
  );
}
