import React from "react";

const User = ({ obj }) => {
  return (
    <div className="card">
      <h3>Name: {obj.username}</h3>
      <p>Email: {obj.email}</p>
      <h4>City: {obj.address.city}</h4>
    </div>
  );
};

export default User;
