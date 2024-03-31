import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "./slice/customerSlices";

function CustomerView() {
  // const [customer, setCustommer] = useState(["karthi", "Karthikeyan"]);
  const customerList = useSelector((data) => data.customer);
  const dispatch = useDispatch();
  const deleteHandler = (index) => {
    dispatch(deleteCustomer(index));
  };
  return (
    <div>
      <h3>Customer List</h3>
      <ul>
        {customerList.map((data, index) => {
          return (
            <li style={{ listStyleType: "none" }} key={index}>
              {data}{" "}
              <button onClick={() => deleteHandler(index)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default CustomerView;
