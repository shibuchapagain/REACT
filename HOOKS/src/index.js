import React from "react";
import ReactDOM from "react-dom/client";
import UseStateHook2 from "./UseStateHook";

// PARENT OR CONTAINER COMPONENT:
const App = () => {
  return (
    <div>
      <UseStateHook2 />
    </div>
  );
};

// FOR EXECUTE / RUN:
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
