import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import Shimmer from "./Shimmer";

const LIMIT = 10;
const Pagination = () => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [noOfPages, setNoOfPages] = useState(0);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetchProducts();
    console.log(currentPageIndex);
  }, [currentPageIndex]);

  const fetchProducts = async () => {
    try {
      setIsLoading(true);
      let response = await fetch(
        `https://dummyjson.com/products?limit=${LIMIT}&skip=${
          currentPageIndex * LIMIT
        }&select=title,price,discountPercentage,thumbnail`
      ).then((res) => res.json());
      setProducts(response.products);
      setNoOfPages(Math.ceil(response.total / LIMIT));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const prevHandler = () => {
    setCurrentPageIndex((prev) => prev - 1);
  };

  const nextHandler = () => {
    setCurrentPageIndex((prev) => prev + 1);
  };

  return (
    <>
      {isLoading ? (
        <Shimmer />
      ) : (
        <>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          <div style={{ marginTop: "20px" }}>
            {currentPageIndex > 0 && (
              <span
                style={{ cursor: "pointer", fontSize: "1.2rem" }}
                onClick={prevHandler}
              >
                ⏮️
              </span>
            )}

            {[...Array(noOfPages).keys()].map((page) => (
              <span
                key={page}
                style={{
                  padding: "3px 5px",
                  border: "1px solid black",
                  borderRadius: "3px",
                  cursor: "pointer",
                  margin: "0 4px",
                  fontWeight: page === currentPageIndex && "bold",
                  backgroundColor: page === currentPageIndex && "#ADD8E6",
                }}
                onClick={() => {
                  setCurrentPageIndex(page);
                }}
              >
                {page + 1}
              </span>
            ))}
            {currentPageIndex < noOfPages - 1 && (
              <span
                style={{ cursor: "pointer", fontSize: "1.2rem" }}
                onClick={nextHandler}
              >
                ⏭️
              </span>
            )}
          </div>
        </>
      )}
    </>
  );
};
export default Pagination;
