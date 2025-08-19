import React, { useState } from "react";
import { useNavigate } from "react-router";
const Home = () => {
  const [inputVal, setInputVal] = useState("");
  const navigate = useNavigate();

  const submitHandler = () => {
    navigate(`/user/${inputVal}`);
  };

  return (
    <>
      <div
        style={{ textAlign: "center", fontWeight: "bold", marginTop: "50%" }}
      >
        This is Home Page
      </div>
      <div style={{ marginTop: 8 }}>
        <input
          placeholder="Enter user Id"
          type="number"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={submitHandler} style={{ cursor: "pointer" }}>
          Go
        </button>
      </div>
    </>
  );
};
export default Home;
