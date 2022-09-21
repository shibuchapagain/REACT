// import React from "react";
// import ReactDOM from "react-dom";
// import External from "./App";

// MAP-LIST-KEYS:

// const Internal = () => {
//   return (
//     <div>
//       <h2>LIST OF ARRAY</h2>
//       {[1, 2, 3, 4, 5]}
//     </div>
//   );
// };

// // PARENT OR CONTAINER COMPONENT:
// const App = () => {
//   return (
//     <div>
//       <Internal />
//     </div>
//   );
// };

////////////////////////////////////////////////////////////////////////////

// 1) MAPPING ARRAY OF NUMBERS

// // A) --> NORMAL PROCESS:
// // const Numbers = (numbers) => {
// //   const list = numbers.numbers.map((num) => <li>{num}</li>);
// //   return list;
// // };

// // B) DESTRUCTURING ON PARENTHESIS:
// const Numbers = ({ numbers }) => {
//   const list = numbers.map((num) => <li>{num}</li>);
//   return list;
// };

// const App = () => {
//   const array = [1, 2, 3, 4];
//   return (
//     <div>
//       <h2>LIST OF AN ARRAY NUMBERS:</h2>
//       <ul>
//         <li>
//           <Numbers numbers={array} />
//         </li>
//       </ul>
//     </div>
//   );
// };

////////////////////////////////////////////////////////////////////////////

// 2)MAPPING ARRAY OF ARRAY:

// const skills = [
//   ["JS", 3],
//   ["NODE", 4],
//   ["REACT", 6],
//   ["DSA", 2],
// ];

// const Skill = ({ skill: [tech, level] }) => {
//   return (
//     <div>
//       <li>
//         {tech} : {level}
//       </li>
//     </div>
//   );
// };

// // SKILLS COMPONENT:
// const Skills = ({ skills }) => {
//   const skillList = skills.map((skill) => <Skill skill={skill} />);
//   return <ul>{skillList}</ul>;
// };

// const App = () => {
//   return (
//     <div>
//       <h4>SKILL LEVEL:</h4>
//       <Skills skills={skills} />
//     </div>
//   );
// };

////////////////////////////////////////////////////////////////////////////

// 3) MAPPING ARRAY OF OBJECT:

// const countries = [
//   { name: "Nepal", city: "Kathmandu" },
//   { name: "Finland", city: "Helsinki" },
//   { name: "Sweden", city: "Stockholm" },
//   { name: "Denmark", city: "Copenhagen" },
//   { name: "Norway", city: "Oslo" },
//   { name: "Iceland", city: "Reykjavík" },
// ];

// // COUNTRY COMPONENT:
// const Country = ({ country: { name, city } }) => {
//   return (
//     <div>
//       <h3>{name}</h3>
//       <small>{city}</small>
//     </div>
//   );
// };

// // COUNTRIES COMPONENT:
// const Countries = ({ countries }) => {
//   const countryList = countries.map((country) => <Country country={country} />);
//   return countryList;
//   // console.log(countryList);
// };

// // PARENT / CONTAINER COMPONENT:
// const App = () => {
//   return (
//     <div>
//       <Countries countries={countries} />
//     </div>
//   );
// };

////////////////////////////////////////////////////////////////////////////

// 4) KEY IN MAPPING ARRAY:

// // NUMBER COMPONENT:
// const Number = ({ numbers }) => {
//   const numberList = numbers.map((num) => <li key={num}>{num}</li>);
//   return numberList;
// };

// // PARENT / CONTAINER COMPONENT:
// const App = () => {
//   const numbers = [1, 2, 3, 4, 5];
//   return (
//     <div>
//       <Number numbers={numbers} />
//     </div>
//   );
// };

////////////////////////////////////////////////////////////////////////////

// 5) LET'S ALSO ADD IN KEY IN COUNTRIES MAPPING EXAMPLE:

// const countries = [
//   { name: "Nepal", city: "Kathmandu" },
//   { name: "Finland", city: "Helsinki" },
//   { name: "Sweden", city: "Stockholm" },
//   { name: "Denmark", city: "Copenhagen" },
//   { name: "Norway", city: "Oslo" },
//   { name: "Iceland", city: "Reykjavík" },
// ];

// const Country = ({ country: { name, city } }) => {
//   return (
//     <li>
//       {name} : {city}
//     </li>
//   );
// };

// const Countries = ({ countries }) => {
//   const countryList = countries.map((country) => (
//     <Country key={country.name} country={country} />
//   ));
//   return countryList;
// };

// const App = () => {
//   return (
//     <div>
//       <Countries countries={countries} />
//     </div>
//   );
// };

///////////////////////////////////////////////////////////////////
// const countries = [
//   { name: "Nepal", city: "Kathmandu" },
//   { name: "Finland", city: "Helsinki" },
//   { name: "Sweden", city: "Stockholm" },
//   { name: "Denmark", city: "Copenhagen" },
//   { name: "Norway", city: "Oslo" },
//   { name: "Iceland", city: "Reykjavík" },
// ];

// const Country = (props) => {
//   const { name, city } = props.country;
//   return (
//     <div>
//       <h4>
//         {" "}
//         {name} : {city}{" "}
//       </h4>
//     </div>
//   );
// };

// const Countries = (props) => {
//   const countries = props.data;
//   const countryList = countries.map((country) => (
//     <Country key={country.name} country={country} />
//   ));
//   return countryList;
// };

// const App = () => {
//   return (
//     <div>
//       <Countries data={countries} />
//     </div>
//   );
// };

// ////////////////////////////////////////////////////////////////////////////
// // FOR EXECUTE / RUN:
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

////////////////////////////////////////////////////////////////////////////////////
// PRACTICE SECTION --> API...

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const info = [
  {
    name: "shiva",
    address: { pernament: "pkr", temporary: "HDM" },
    faculty: "BE",
  },
  {
    name: "jonas",
    address: { pernament: "avc", temporary: "DDM" },
    faculty: "BEK",
  },
  {
    name: "matilda",
    address: { pernament: "kkr", temporary: "AATM" },
    faculty: "ABE",
  },
  {
    name: "john",
    address: { pernament: "akr", temporary: "KYYM" },
    faculty: "BED",
  },
  {
    name: "paraboy",
    address: { pernament: "ekr", temporary: "KEETM" },
    faculty: "TBE",
  },
];

const App = () => {
  const [data, setData] = useState([]);

  const clickLoad = () => {
    setData(info);
  };

  const User = (props) => {
    const {
      name,
      address: { pernament, temporary },
      faculty,
    } = props.props;
    return (
      <div>
        <h4>
          {" "}
          NAME: {name}, ADDRESS: {pernament} and {temporary}, FACULTY: {faculty}{" "}
        </h4>
      </div>
    );
  };

  const Users = (props) => {
    const users = props.props;
    const userList = users.map((user) => <User props={user} />);
    return userList;
  };

  return (
    <div>
      <h2>SHIVA</h2> <br />
      <button onClick={clickLoad}>LOAD DATA</button>
      <Users props={data} />
    </div>
  );
};

// FOR RENDERING...
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
