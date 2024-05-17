import React from "react";
import { User, Counter } from "./components";
import { userList } from "./data/data";

function App() {
  return (
    <div className="App">
      <div className="container">
        {userList.map((user, idx) => (
          <User {...user} key={idx} />
        ))}
        <Counter />
      </div>
    </div>
  );
}

export default App;
