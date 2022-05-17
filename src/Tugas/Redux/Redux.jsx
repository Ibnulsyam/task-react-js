import React from "react";
import { Provider } from "react-redux";
import Counter from "./App/Counter/Counter";
import store from "./App/Store";

const Redux = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  );
};

export default Redux;
