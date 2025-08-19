import React, { useState } from "react";

// const Accordian = ({ data }) => {
// //Single Accordian open at a time
//   const [activeIndex, setActiveIndex] = useState(null);
//   const toggleIndex = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };
//   return (
//     <div
//       style={{
//         width: "80%",
//         margin: "auto",
//         display: "flex",
//         flexDirection: "column",
//         gap: 10,
//       }}
//     >
//       {data.map((item, index) => (
//         <div key={index} style={{ border: "1px solid black", borderRadius: 8 }}>
//           <div
//             style={{
//               fontWeight: "800",
//               display: "flex",
//               justifyContent: "space-between",
//               backgroundColor: "#c7c7c7",
//               padding: 8,
//               cursor: "pointer",
//             }}
//             onClick={() => toggleIndex(index)}
//           >
//             {item.title}
//             <span>{activeIndex === index ? "🔽" : "▶️"} </span>
//           </div>
//           {/* {activeIndex === index && (       //animation does not work with conditional rendering because content will mount and unmount immedatly so for animation we will go with 2nd appraoch
//             <div style={{ padding: 6, textAlign: "justify" }}>
//               {item.content}
//             </div>
//           )} */}
//           <div
//             style={{
//               maxHeight: activeIndex === index ? "200px" : "0px",
//               overflow: "hidden",
//               transition: "max-height 0.3s ease",
//               padding: activeIndex === index ? "6px" : "0px",
//               textAlign: "justify",
//             }}
//           >
//             {item.content}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

const Accordian = ({ data }) => {
  //Multiple Accordian open at a time
  const [openIndexes, setOpenIndexes] = useState([]);
  const toggleIndex = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };
  return (
    <div
      style={{
        width: "80%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 10,
      }}
    >
      {data.map((item, index) => {
        const isOpen = openIndexes.includes(index);
        return (
          <div
            key={index}
            style={{ border: "1px solid black", borderRadius: 8 }}
          >
            <div
              style={{
                fontWeight: "800",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#c7c7c7",
                padding: 8,
                cursor: "pointer",
              }}
              onClick={() => toggleIndex(index)}
            >
              {item.title}
              <span>{isOpen ? "🔽" : "▶️"} </span>
            </div>
            <div
              style={{
                maxHeight: isOpen ? "200px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
                padding: isOpen ? "6px" : "0px",
                textAlign: "justify",
              }}
            >
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Accordian;
