import React from "react";
import { useParams } from "react-router";
const User = () => {
  const { userId } = useParams();
  return (
    <div style={{ textAlign: "center", fontWeight: "bold", marginTop: "50%" }}>
      {` The data for User with id:${userId}`}
    </div>
  );
};
export default User;
