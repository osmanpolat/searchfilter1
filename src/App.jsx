import { useState } from "react";
import "./App.css";
import { Users } from "./users";
import Table from "./Table";

function App() {
  const [query, setQuery] = useState("");

  //second road
  const keys=["first_name", "last_name", "email"]

 // console.log(Users[0]["email"])

  // console.log(Users.filter(user=>user.first_name.toLowerCase().includes("da")))

  const search = (data) => {
    return data.filter(
      (item) =>
        keys.some((key)=>item[key].toLowerCase().includes(query))

        /*  first road
        item.first_name.toLowerCase().includes(query) ||
        item.last_name.toLowerCase().includes(query)||
        item.email.toLowerCase().includes(query)
        */
    );
  };
  return (
    <div className="app">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      {/*  <Table  data={Users}/>*/}
      <Table data={search(Users)} />
    </div>
  );
}

export default App;
