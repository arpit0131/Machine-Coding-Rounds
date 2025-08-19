import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

const Meme = () => {
  const [memeData, setMemeData] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch("https://meme-api.com/gimme/50");
      const data = await response.json();
      console.log("Mems:- ", data.memes);
      setMemeData(data.memes);
      console.log(data.memes);
    } catch (error) {
      console.log("Error: ", error);
    }
  };
  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {memeData ? (
        memeData.map((meme, idx) => {
          return <MemeCard key={idx} memeData={meme} />;
        })
      ) : (
        <Shimmer />
      )}
    </div>
  );
};
export default Meme;
