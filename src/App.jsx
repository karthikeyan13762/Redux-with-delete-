import React from "react";
import CustomerAdd from "./CustomerAdd";
import "./App.css";
import CustomerView from "./CustomerView";
import { Provider } from "react-redux";
import { store } from "./store";
function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>React Redux</h1>
        <CustomerAdd />
        <CustomerView />
      </div>
    </Provider>
  );
}

export default App;
