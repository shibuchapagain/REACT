// // const getUserInfo = (fname, lname, address, title, skills) => {
// //   return `${fname} ${lname} from ${address}. He is an ${title} developer. He know the list of knowledge are: ${skills.join(
// //     ","
// //   )}`;
// // };
// // const skills = ["node", "js", "dsa"];
// // console.log(getUserInfo("SHIVA", "CHAPAGAIN", "KTM", "NODEJS", skills));

// /////////////
// class Parent {
//   constructor(fname, lname, title, country) {
//     this.fname = fname;
//     this.lname = lname;
//     this.title = title;
//     this.country = country;
//   }
//   getUserInfo() {
//     return ` MY NAME IS ${this.fname} ${this.lname}. ${this.title} based on ${this.country}`;
//   }
// }

// const student1 = new Parent("shiva", "chapagain", "Backend developer", "Nepal");
// console.log(student1.getUserInfo());

// class Child extends Parent {
//   constructor(fname, lname, title, country, skills) {
//     super(fname, lname, title, country);
//     this.skills = skills;
//   }
//   getSkills() {
//     let len = this.skills.length;
//     return len > 0 ? this.skills.join(", ") : "NO SKILL FOUND";
//   }
// }

// const skills = ["node", "react", "bootstrap"];
// // const skills = [];

// const child1 = new Child(
//   "shiva",
//   "chapagain",
//   "backend web developer",
//   "Nepal",
//   skills
// );
// console.log(child1.getSkills());
// console.log(child1.getUserInfo());

////////////////////////////////////////////////////////// -> CREATING REACT COMPONENTS:

// 1) ONE IDEA SEPERATE THE JSX AND EXECUTABLE FILE

// import React from "react";
// import ReactDOM from "react-dom";

// const header = (
//   <header>
//     <div>
//       <h3>SHIVA CHAPAGAIN</h3>
//       <h3>shibuchapagain12@gmail.com</h3>
//       <h3>BALKUMARI, LALITPUR</h3>
//     </div>
//   </header>
// );

// const Header = () => {
//   return header;
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Header />, rootElement);

// 2) ANOTHER IDEA WHICH IS... JSX IS SAME ON THE COMPONENT.

// import React from "react";
// import ReactDOM from "react-dom";

// const Header = () => {
//   return (
//     <header>
//       <div>
//         <h2>SHIBU CHAPAGAIN </h2>
//         <h2>shibuchapagain12@gmail.</h2>
//         <h2>BALKUMARI, LALITPUR</h2>
//       </div>
//     </header>
//   );
// };

// // FOR RUN:
// const rootElement = document.getElementById("root");
// ReactDOM.render(<Header />, rootElement);

/////////////////////////////////////////////////////////////////////
// CREATE A DIFFERENT COMPONENT AND MERGE IN ONE ...

// import React from "react";
// import ReactDOM from "react-dom";
// // // import imgSrc from "./../img/formal-shiva.jpg";

// // HEADER COMPONENT:
// // const Header = () => {
// //   return (
// //     <header>
// //       <div>
// //         <h5>SHIVA CHAPAGAIN</h5>
// //         <h5>shibuchapagain12@gmail</h5>
// //         <h5>BALKUMARI, LALITPUR</h5>
// //       </div>
// //     </header>
// //   );
// // };

// // USER-CARD COMPONENT:
// // const UserCard = () => {
// //   return (
// //     <div>
// //       {/* <img src={imgSrc} alt="shiva photo" /> */}
// //       <h3>SHIVA CHAPAGAIN img </h3>
// //     </div>
// //   );
// // };

// // TechList COMPONENT:
// // const TechList = () => {
// //   const techs = ["JS", "DSA", "NODEJS"];
// //   const techFormated = techs.map((el) => <li> {el}</li>);
// //   return techFormated;
// // };

// // MAIN COMPONENT:
// // const Main = () => {
// //   <div>
// //     <p>PREREQUITIES TO LEARN REACT ARE:</p>
// //     <ul>
// //       <TechList />
// //     </ul>
// //     <UserCard />
// //   </div>;
// // };

// // FOOTER COMPONENT:
// // const Footer = () => {
// //   <div>
// //     <p>COPYRIGHT BY: shibuchapagain12@gmail.com.</p>
// //   </div>;
// // };

// // HEADER / PARENT / CONTAINER:
// const App = () => {
//   <div>
//     <Header />
//     {/* <Main />
//     <Footer /> */}
//   </div>;
// };

// // FOR RUN / EXECUTE THE CODE:
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

////////////////////////////////////
// FOR TESTING PURPOSE:

// import React from "react";
// import ReactDOM from "react-dom";

// const welcome = <h3>WELCOME TO SHIBU CHAPAGAIN REACT COURSE PRACTICE.</h3>;
// const country = <h3>Nepal</h3>;
// const title = <h3>Backend developer</h3>;
// const authors = {
//   fname: "shiva",
//   lname: "chapagain",
// };

// // HEADER COMPONENT
// const Header = () => {
//   return (
//     <header>
//       <div>
//         <h3>{welcome}</h3>
//         <h3>Country: {country}</h3>
//         <h3>Skill: {title}</h3>
//         <h3>
//           Instructor: {authors.fname} {authors.lname}
//         </h3>
//       </div>
//     </header>
//   );
// };

// // USER-CARD COMPONENT:
// const UserCard = () => {
//   return (
//     <div>
//       {/* <img src={imgSrc} alt="shiva photo" /> */}
//       <h3>SHIVA CHAPAGAIN img </h3>
//     </div>
//   );
// };

// // TechList COMPONENT:
// const TechList = () => {
//   const techs = ["JS", "DSA", "NODEJS"];
//   const techFormated = techs.map((el) => <li> {el}</li>);
//   return techFormated;
// };

// // MAIN COMPONENT:
// const Main = () => {
//   return (
//     <div>
//       <p>PREREQUITIES TO LEARN REACT ARE:</p>
//       <ul>
//         <TechList />
//       </ul>
//       <UserCard />
//     </div>
//   );
// };

// // FOOTER COMPONENT:
// const Footer = () => {
//   return (
//     <div>
//       <p>COPYRIGHT BY: shibuchapagain12@gmail.com.</p>
//     </div>
//   );
// };

// // PARENT COMPONENT:
// const App = () => {
//   return (
//     <div>
//       <Header />
//       <Main />
//       <Footer />
//     </div>
//   );
// };

// // FOR RUN / EXECUTE:
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//////////////////////////////////////////////////////////////////////////////
// FURTHER ON FUNCTIONAL COMPONENTS:

import React from "react";
import ReactDOM from "react-dom";

// const buttonStyles = {
//   padding: "10px 20px",
//   background: "rgb(0, 255, 0",
//   border: "none",
//   borderRadius: 5,
// };

// const Button = () => <button style={buttonStyles}>ACTION</button>;

// Hexadecimal color generator
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return "#" + color;
};

const HexaColor = () => <div>{hexaColor()}</div>;

// FOR EXECUTE:
const rootElement = document.getElementById("root");
// ReactDOM.render(<Button />, rootElement);
ReactDOM.render(<HexaColor />, rootElement);
