import React from "react";

const ProductCard = ({ title, price, discountPercentage, thumbnail, id }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        width: "150px",
        height: "240px",
      }}
    >
      <img
        src={thumbnail}
        alt="product-thumbnail"
        style={{
          backgroundColor: "#e8e8e8",
          width: "150px",
          borderRadius: "10px",
        }}
      />
      <div style={{ padding: "10px", fontSize: "13px" }}>
        <div style={{ fontWeight: "bold" }}>
          {id}-{title}
        </div>
        <div>Rs. {price}</div>
        <div>Discount- {discountPercentage}%</div>
      </div>
    </div>
  );
};
export default ProductCard;
