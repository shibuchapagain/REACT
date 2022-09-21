// import React from "react";
// import ReactDOM from "react-dom/client";

// // PARENT OR CONTAINER COMPONENT:
// const App = () => {
//   const greeting = () => {
//     alert("NOO");
//   };
//   const link = () => {
//     alert("HANDLING LINK CLICK");
//   };
//   return (
//     <div>
//       <button onClick={greeting}>HI THERE</button>
//       <a href="https://www.facebook.com/" onClick={link}>
//         CLICK ME!
//       </a>
//     </div>
//   );
// };

// // FOR EXECUTE / RUN:
// const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement);
// root.render(<App />);

////////////////////////////////////////////////////////////
import React, { useState } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  // const [key, setKey] = useState("");

  const handleMessage = (e) => {
    setName(e.target.value);
  };

  const handleMouseMove = (e) => {
    setMessage("YOU MOVE THE MOUSE");
  };

  const keyPress = (e) => {
    setMessage("YOU ARE PREE THE KEY");
  };

  return (
    <div>
      <h2>{name}</h2>
      <h1>{message}</h1>
      <form>
        <lable>FIRST NAME:</lable>
        <input type="text" value={name} onChange={handleMessage} />
        <button onMouseMove={handleMouseMove}>MOVE MOUSE</button>
        <lable>KEY PRESS</lable>
        <input type="text" onKeyDown={keyPress} />
      </form>
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
