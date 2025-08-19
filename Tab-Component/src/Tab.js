import React, { useState } from "react";
import "./Tab.css";

const Tab = ({ tabContent }) => {
  const [activeTab, setActiveTab] = useState(tabContent[0].tab);
  return (
    <>
      <div className="tab-bar">
        {tabContent.map((item, index) => (
          <div
            key={index}
            className="tab"
            style={{
              borderBottom: activeTab === item.tab ? "3px solid blue" : "",
              fontWeight: activeTab === item.tab ? "bold" : "",
            }}
            onClick={() => setActiveTab(item.tab)}
          >
            {item.tab}
          </div>
        ))}
      </div>
      <div style={{ marginTop: "5%" }}>
        {tabContent.map((item, index) => {
          return activeTab === item.tab ? (
            <div key={index}>{item.content}</div>
          ) : null;
        })}
      </div>
    </>
  );
};
export default Tab;
