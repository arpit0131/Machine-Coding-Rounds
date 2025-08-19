import "./styles.css";
import Tab from "./Tab";

export default function App() {
  const tabContent = [
    {
      tab: "Tab 1",
      content: "Tab 1 content",
    },
    {
      tab: "Tab 2",
      content: "Tab 2 content",
    },
    {
      tab: "Tab 3",
      content: "Tab 3 content",
    },
  ];
  return (
    <div className="App">
      <Tab tabContent={tabContent} />
    </div>
  );
}
