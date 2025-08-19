import React, { useState, useEffect } from "react";

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://img.freepik.com/free-photo/girl-sitting-her-father-s-shoulder-picking-tree-leaf-with-mother_23-2147841333.jpg",
    "https://img.freepik.com/free-photo/begging-bridge-with-person-who-handed-bread_1150-22948.jpg",
    "https://buffer.com/content/images/2024/11/free-stock-image-sites.png",
    "https://img.freepik.com/free-photo/family-with-little-son-autumn-park_1303-11746.jpg",
  ];
  const prevHandler = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextHandler();
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const nextHandler = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        gap: 5,
        alignItems: "center",
        marginTop: "15%",
      }}
    >
      <div
        style={{ cursor: "pointer", fontSize: "2rem" }}
        onClick={prevHandler}
      >
        ◀️
      </div>
      <img
        src={images[activeIndex]}
        alt="image Slider"
        style={{
          width: "600px",
          height: "400px",
          objectFit: "cover",
          borderRadius: "10px",
        }}
      />
      <div
        style={{ cursor: "pointer", fontSize: "2rem" }}
        onClick={nextHandler}
      >
        ▶️
      </div>
    </div>
  );
};
export default ImageSlider;
