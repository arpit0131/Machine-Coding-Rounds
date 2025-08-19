import "./styles.css";
import ProgressBar from "./ProgressBar";

export default function App() {
  const bars = [10, 20, 40, 55, 70, 85, 100];
  return (
    <div className="App">
      <h1>Progress Bar</h1>
      {bars.map((item) => (
        <ProgressBar progress={item} />
      ))}
    </div>
  );
}
