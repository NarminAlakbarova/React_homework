import React from "react";
import User from "./User";

const Users = ({ newData }) => {
  return (
    <div className="cards">
      {newData.map((obj) => {
        return <User key={obj.id} obj={obj} />;
      })}
    </div>
  );
};

export default Users;
