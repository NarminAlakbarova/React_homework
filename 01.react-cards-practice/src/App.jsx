// import { useState } from "react";
// import "./App.css";
// import Users from "./companent/Users";
// import axios from "axios";
// function App() {
//   // const data = [
//   //   {
//   //     id: 1,
//   //     username: "Fatime",
//   //     email: "fatime123@gmail.com",
//   //     city: "London",
//   //   },
//   //   {
//   //     id: 2,
//   //     username: "Nermin",
//   //     email: "nermin@gmail.com",
//   //     city: "Paris",
//   //   },
//   //   {
//   //     id: 3,
//   //     username: "Minaye",
//   //     email: "minaye@gmail.com",
//   //     city: "Berlin",
//   //   },
//   //   {
//   //     id: 4,
//   //     username: "Fatime",
//   //     email: "fatime123@gmail.com",
//   //     city: "Baku",
//   //   },
//   //   {
//   //     id: 5,
//   //     username: "Fatime",
//   //     email: "fatime123@gmail.com",
//   //     city: "Baku",
//   //   },
//   // ];
//  let resp=axios("https://jsonplaceholder.typicode.com/users")
//  let data=resp.data
//  const[newData,setNewData]=useState([])
//  setNewData(data)
//   return (
//     <div className="App">
//       <h1>USERS</h1>
//       <Users newData={newData}/>
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import "./App.css";
import Users from "./companent/Users";
import axios from "axios";

function App() {
  const [newData, setNewData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      const data = response.data;
      setNewData(data);
    });
  }, []);

  return (
    <div className="App">
      <h1>USERS</h1>
      <Users newData={newData} />
    </div>
  );
}

export default App;
