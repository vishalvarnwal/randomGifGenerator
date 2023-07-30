import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

export default function Tag() {
  const [searchInput, setSearchInput] = useState("");
  const { gif, loader, getRandomGif } = useGif();

  const clickHandler = () => {
    getRandomGif(searchInput);
  };

  const onChangeHandler = (e) => {
    const searchedValue = e.target.value;
    setSearchInput(searchedValue);
  };

  return (
    <div className="w-1/2 bg-blue-500 border border-black rounded-lg mt-[30px] flex flex-col items-center gap-y-5">
      <h1 className="font-bold text-2xl underline mt-3">
        RANDOM {searchInput.toUpperCase()} GIF
      </h1>
      {loader ? <Spinner /> : <img src={gif} width={"450"} />}
      <input
        className="w-3/4 py-2 rounded-md text-center"
        placeholder="Enter GIF Name"
        type="text"
        value={searchInput}
        onChange={onChangeHandler}
      />
      <button
        className="bg-green-300 w-3/4 py-2 rounded-md mb-4 font-semibold"
        onClick={clickHandler}
      >
        GENERATE
      </button>
    </div>
  );
}
