import React, { useState } from "react";
import UseState1 from "./components/Programs/PasswordToggleApp";
import UseState2 from "./components/Programs/TextInputApp";
import Todo from "./components/Programs/Todo"
// import more as needed

const App = () => {
  const [active, setActive] = useState("");

  const components = {
    useState1: <UseState1 />,
    useState2: <UseState2 />,
    Todo: <Todo />
  };

  return (
    <div className="app-container">
      {/* Buttons to switch components */}
      <div className="button-group">
      <button className="button" onClick={() => setActive("useState1")}>Password</button>
      <button className="button" onClick={() => setActive("useState2")}>Text Counting</button>
      <button className="button" onClick={() => setActive("Todo")}>Todo</button>
      </div>

     <div className="output">
        {components[active]}
      </div>
    </div>
  );
};

export default App;