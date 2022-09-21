import React from "react";
import ReactDOM from "react-dom";
import Form from "./App";

const Internal = () => {
  return <h2>HI.. THERE</h2>;
};

// PARENT OR CONTAINER COMPONENT:
const App = () => {
  return (
    <div>
      <Internal />
      <Form />
    </div>
  );
};

// FOR EXECUTE / RUN:
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
