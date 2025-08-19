import React from "react";
const MemeCard = ({ memeData }) => {
  const { author, url } = memeData;
  return (
    <div
      style={{
        height: "128px",
        width: "128px",
        border: "1px solid black",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={url} alt="meme-pic" style={{ width: "70%", height: "70%" }} />
      <p style={{ fontSize: "12px", textAlign: "center" }}>{author}</p>
    </div>
  );
};
export default MemeCard;
