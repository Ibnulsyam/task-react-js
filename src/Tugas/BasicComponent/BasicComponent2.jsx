import React from "react";
import { useState } from "react";

const BasicComponent2 = () => {
  const [value, setValue] = useState(0);

  const handleMinus = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const handlePlus = () => {
    setValue(value + 1);
  };
  return (
    <div>
      <h3>Counter Pembelajaan</h3>
      <button onClick={handleMinus}>-</button>
      <span> {value} </span>
      <button onClick={handlePlus}>+</button>
    </div>
  );
};

export default BasicComponent2;
