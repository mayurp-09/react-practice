import React, { useState } from 'react';

// 1. The Child Component
// It receives 'onButtonClick' as a Prop
function ChildButton({ onButtonClick }) {
  return (
    <button onClick={onButtonClick}>
      Click me to add 1!
    </button>
  );
}

// 2. The Parent Component
function ChildToParent() {
  const [count, setCount] = useState(0);

  // This is the function you started!
  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div style={{ border: '2px solid blue', padding: '20px' }}>
      <h1>Parent Count: {count}</h1>
      
      {/* 3. Passing the function to the Child */}
      <ChildButton onButtonClick={increaseCount} />
    </div>
  );
}

export default ChildToParent;