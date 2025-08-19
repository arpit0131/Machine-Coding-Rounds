import { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [result, setResult] = useState([]);
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);
  const [cache, setCache] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      console.log("CACHE RETURNED:- ", input);
      setResult(cache[input]);
      return;
    }
    console.log("API Call ", input);
    const data = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const jsonData = await data.json();
    setResult(jsonData?.recipes ?? []);
    setCache((prev) => ({ ...prev, [input]: jsonData?.recipes }));
  };

  useEffect(() => {
    if (input.trim() === "") {
      return;
    }
    const timer = setTimeout(fetchData, 400);
    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="App">
      <h1>Auto Complete Search Bar</h1>
      <div>
        <input
          type="text"
          className="search-bar"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShow(true)}
          onBlur={() => setShow(false)}
        />
        {show && (
          <div className="result-container">
            {result.map((item) => (
              <span className="result" key={item.id}>
                {item.name}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
