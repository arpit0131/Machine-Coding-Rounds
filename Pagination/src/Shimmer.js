import React from "react";

const Shimmer = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {Array(10)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            style={{
              border: "1px solid black",
              borderRadius: "10px",
              width: "150px",
              height: "240px",
            }}
          >
            <div
              style={{
                backgroundColor: "#e8e8e8",
                width: "150px",
                height: "200px",
                borderRadius: "10px",
              }}
            ></div>
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
