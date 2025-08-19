import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Meme = () => {
  const [memeData, setMemeData] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false); //This state we needed because we have to control the rendering of Shimmer UI whenever the data needs to load after scroll

  useEffect(() => {
    fetchData();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchData();
    }
  };

  const fetchData = async () => {
    try {
      setShowShimmer(true);
      const response = await fetch("https://meme-api.com/gimme/20");
      const data = await response.json();
      setMemeData((memes) => [...memes, ...data.memes]);
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setShowShimmer(false);
    }
  };
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {memeData.map((meme, idx) => {
        return <MemeCard key={idx} memeData={meme} />;
      })}
      {showShimmer && <Shimmer />}
    </div>
  );
};
export default Meme;
