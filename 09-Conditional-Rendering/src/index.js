// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// const Button = (props) => {
//   const { text } = props.data;
//   <Button>{text}</Button>;
// };

// const Header = (props) => {
//   const {
//     name,
//     email,
//     address: { pernament, temporary },
//   } = props.data;
//   return (
//     <div>
//       <h4> {name} </h4>
//       <h4> {email} </h4>
//       <h4>
//         {pernament} / {temporary}
//       </h4>
//     </div>
//   );
// };

// const App = () => {
//   let [login, setLogin] = useState(true);
//   const data = {
//     name: "shiva",
//     email: "shiva@gmail.com",
//     address: {
//       pernament: "parbat",
//       temporary: "KTM",
//     },
//   };

//   let status;
//   let text;

//   if (login) {
//     status = <h4>WELCOME TO OUR REACT</h4>;
//     text = "Logout";
//   } else {
//     status = <h4>PLEASE LOGIN</h4>;
//     text = "Login";
//   }

//   return (
//     <div>
//       <Header data={data} />
//       {status}
//       <Button text={text} />
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement);
// root.render(<App />);

/////////////////////////////////////////////////////////////////
// 10) REACT PROJECT FOLDER STRUCTURE...
// fragments:

import React, { Fragment } from "react";

import ReactDOM from "react-dom/client";

const Skill = () => {
  return (
    <Fragment>
      <li>HTML</li>
      <li>JS</li>
      <li>NODE</li>
    </Fragment>
  );
};

const RequiredSkills = () => {
  return (
    <ul>
      <Skill />
    </ul>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
// root.render(<App />);
root.render(<RequiredSkills />);
