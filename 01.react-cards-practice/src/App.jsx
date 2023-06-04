import "./App.css";
import Users from "./companent/Users";

function App() {
  const data = [
    {
      id: 1,
      username: "Fatime",
      email: "fatime123@gmail.com",
      city: "London",
    },
    {
      id: 2,
      username: "Nermin",
      email: "nermin@gmail.com",
      city: "Paris",
    },
    {
      id: 3,
      username: "Minaye",
      email: "minaye@gmail.com",
      city: "Berlin",
    },
    {
      id: 4,
      username: "Fatime",
      email: "fatime123@gmail.com",
      city: "Baku",
    },
    {
      id: 5,
      username: "Fatime",
      email: "fatime123@gmail.com",
      city: "Baku",
    },
  ];

  return (
    <div className="App">
      <h1>USERS</h1>
      <Users data={data}/>
    </div>
  );
}

export default App;
