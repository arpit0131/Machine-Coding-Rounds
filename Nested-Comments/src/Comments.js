import React from "react";

const Comments = ({ data }) => {
  return data.map((item, index) => (
    <div style={{ margin: "auto", width: "90%" }} key={index}>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <img
          src="https://www.redditstatic.com/avatars/defaults/v2/avatar_default_7.png"
          alt="user-image"
          style={{ width: "35px", borderRadius: "50%" }}
        />
        <span style={{ fontWeight: 600 }}>{item.user}</span>
      </div>
      <div
        style={{
          marginLeft: 35,
          borderLeft: "1px solid black",
          paddingLeft: 15,
          textAlign: "justify",
        }}
      >
        {item.comment}
      </div>
      <div>{item?.replies && <Comments data={item.replies} />}</div>
    </div>
  ));
};
export default Comments;
