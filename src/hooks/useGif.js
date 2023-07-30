import axios from "axios";
import React, { useEffect, useState } from "react";
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const useGif = () => {
  const [gif, setGif] = useState("");
  const [loader, setLoader] = useState(false);

  async function getRandomGif(searchInput) {
    setLoader(true);
    const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const searchUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${searchInput}`;
    let { data } = await axios.get(searchInput ? searchUrl : randomUrl);
    let imageSource = data?.data?.images?.downsized_large?.url || "";
    setGif(imageSource);
    setLoader(false);
  }

  useEffect(() => {
    getRandomGif();
  }, []);

  return { gif, loader, getRandomGif };
};

export default useGif;
