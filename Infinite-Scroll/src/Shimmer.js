import React from "react";

const Shimmer = () => {
  return Array(20)
    .fill(0)
    .map((n, i) => (
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
        <div
          style={{ width: "70%", height: "70%", backgroundColor: "grey" }}
        ></div>
        <div
          style={{
            fontSize: "12px",
            textAlign: "center",
            backgroundColor: "grey",
          }}
        ></div>
      </div>
    ));
};
export default Shimmer;
