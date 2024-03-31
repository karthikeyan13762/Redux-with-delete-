import React, { useState } from "react";
import { addCustomer } from "./slice/customerSlices";
import { useDispatch } from "react-redux";
function CustomerAdd() {
  const [input, setInput] = useState("");
  // const [customer, setCustommer] = useState([]);
  const dispatch = useDispatch();
  const addCustommer = () => {
    if (input) {
      // setCustommer((prev) => [...prev, input]);
      dispatch(addCustomer(input));
      setInput("");
    }
  };

  return (
    <div>
      <h2>Add a Customer</h2>
      <input
        value={input}
        type="text"
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button onClick={addCustommer}>Add</button>
    </div>
  );
}

export default CustomerAdd;
