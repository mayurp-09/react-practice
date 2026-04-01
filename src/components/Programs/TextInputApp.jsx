import React, { useState } from "react";

function TextInputApp() {
  const [name, setName] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Your Name: {name}</h3>
      <h2>Characters: {name.length}</h2>
    </div>
  );
}

export default TextInputApp;