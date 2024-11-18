import React, { useState } from 'react';

export default function Computer() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);

  const handleNum1Change = (e) => setNum1(parseFloat(e.target.value));
  const handleNum2Change = (e) => setNum2(parseFloat(e.target.value));

  const addNumbers = () => num1 + num2;

  return (
    <div>
      <h2>Adder</h2>
      <input
        type="number"
        value={num1}
        onChange={handleNum1Change}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={num2}
        onChange={handleNum2Change}
        placeholder="Enter second number"
      />
      <p>The sum is: {addNumbers()}</p>
    </div>
  );
}
