// SAMPLE -1
import React from "react";
import ReactDOM from "react-dom";

// const User = (props) => {
//   return (
//     <div>
//       <h4>
//         Name: {props.fname} {props.lname}
//       </h4>
//       <small> country: {props.country}</small>
//     </div>
//   );
// };

// // FOR EXECUTE:
// const rootElement = document.getElementById("root");
// // calling or instantiating a component.
// ReactDOM.render(
//   <User fname="Shiva" lname="Chapagain" country="Nepal" />,
//   rootElement
// );

// SAMPLE -2 :
// WE INJECT DATA AS FOLLOWS:

// const welcome = "Welcome Guys.";
// const title = "Let gets started";
// const subtitle = "JavaScript React";
// const author = {
//   firstName: "Shiva",
//   lastName: "Chapagain",
// };
// const date = "Aug 10, 1999";

// HEADER COMPONENT:

// DIFFERENT PROPS TYPES:
// ------------------------------>  STRING PROPS TYPE:

// const Header = (props) => {
//   console.log(props);
//   return (
//     <div>
//       <h4>{props.welcome}</h4>
//       <h4>{props.title}</h4>
//       <h4>{props.subtitle}</h4>
//       <p>
//         {props.firstName} {props.lastName}
//       </p>
//       <small>{props.date}</small>
//     </div>
//   );
// };

// // PARENT CONTAINER:
// const App = () => {
//   const welcome = "Welcome Guys.";
//   const title = "Let gets started";
//   const subtitle = "JavaScript React";
//   const author = {
//     firstName: "Shiva",
//     lastName: "Chapagain",
//   };
//   const date = "Aug 10, 1999";
//   return (
//     <Header
//       welcome={welcome}
//       title={title}
//       subtitle={subtitle}
//       firstName={author.firstName}
//       lastName={author.lastName}
//       date={date}
//     />
//   );
// };

// // FOR EXECUTE:
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

////////////////////////////////////////////////////////////////////////////////////////////

// 2) NUMBER PROPS TYPE:

// const Age = (props) => {
//   return <div>The person is {props.age} years old.</div>;
// };

// const Weight = (props) => {
//   return <div>THE TOTAL WEIGHT ON EARTH IS: {props.weight}</div>;
// };

// const App = () => {
//   let currentYear = 2020;
//   let birthYear = 1820;
//   const age = currentYear - birthYear;
//   const gravity = 9.81;
//   const mass = 75;
//   return (
//     <div>
//       <Age age={age} />
//       <Weight weight={gravity * mass} />
//     </div>
//   );
// };

// // FOR EXECUTE:
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

////////////////////////////////////////////////////////////////////////////////////////////

// 3) BOOLEAN PROPS TYPE:

// const Status = (props) => {
//   let status = props.status
//     ? "YOU CAN DRIVE THE VEHICLE"
//     : "YOU CANT DRIVE OKAY!";
//   return <div>{status}</div>;
// };

// const App = () => {
//   const birthYear = 1999;
//   const now = 2022;
//   let difference = now - birthYear;
//   let status = difference >= 18;
//   return <Status status={status} />;
// };

// // FOR EXECUTE:
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

////////////////////////////////////////////////////////////////////////////////////////////

// 4) ARRAY PROPS TYPE:

// const Skills = (props) => {
//   // return <div>THE LIST ARE : {props.skill.join(", ")}</div>;
//   const skillList = props.skill.map((el) => <li>{el}</li>);
//   return (
//     <div>
//       THE LIST ARE : <ul>{skillList}</ul>
//     </div>
//   );
// };

// const App = () => {
//   const skills = ["js", "node", "dsa"];
//   return (
//     <div>
//       <Skills skill={skills} />
//     </div>
//   );
// };

// // // FOR EXECUTE:
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

////////////////////////////////////////////////////////////////////////////////////////////

// 5) OBJECT PROPS TYPE:

// const Header = (props) => {
//   return (
//     <header>
//       <div>
//         <h1>{props.data.fname}</h1>
//         <h1>{props.data.lname}</h1>
//         <h1>{props.data.email}</h1>
//         <h1>{props.data.address}</h1>
//       </div>
//     </header>
//   );
// };

// const App = () => {
//   const data = {
//     fname: "SHIVA",
//     lname: "CHAPAGAIN",
//     email: "shibuchapagain12@gmail.com",
//     address: "KTM",
//   };
//   return (
//     <div>
//       <Header data={data} />
//     </div>
//   );
// };

// // FOR EXECUTE:
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTIONAL COMPONENT:

// const ShowTime = (time) => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   const month = months[time.getMonth()].slice(0, 3);
//   const year = time.getFullYear();
//   const date = time.getDay();
//   return (
//     <div>
//       {year}-{month}-{date}
//     </div>
//   );
// };

// // HEADER:

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.data.authors.fname}</h1>
//       <h1>{props.data.authors.lname}</h1>
//       <h3>{props.data.skill}</h3>
//       <h3>{props.data.address}</h3>
//       <h3>{props.data.email}</h3>
//       <small>{ShowTime(props.data.date)}</small>
//     </div>
//   );
// };

// const App = () => {
//   const data = {
//     authors: {
//       fname: "shiva",
//       lname: "chapagain",
//     },
//     skill: "Backend Developer",
//     address: "ktm",
//     email: "shibuchapagain12@gmail.com",
//     date: new Date(),
//   };
//   return (
//     <div>
//       <Header data={data} />
//     </div>
//   );
// };

// // FOR EXECUTE:
// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

////////////////////////////////////////////////////////////////////////////////////////////

// FUNCTION PROPS TYPE:
// A BUTTON COMPONENT -->

// const Button = (props) => {
//   return <button onClick={props.onClick}> {props.text} </button>;
// };

// // THE APP OR PARENT OR THE CONTAINER COMPONENT
// // FUNCTIONAL COMPONENT

// // 1) TRICK-1

// // const App = () => {
// //   const SayHi = () => {
// //     alert("HI, THERE");
// //   };
// //   return <Button text="Say Hi" onClick={SayHi} />;
// // };

// // 2) TRICK-2 (DEFINE FUNCTION WITHIN A CURLY-BRACKET)
// const App = () => {
//   return <Button text="Say Hi" onClick={() => alert("HI")} />;
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

////////////////////////////////////////////////////////////////////////////////////////////
// LETS IMPLEMENT DIFFERENT FUNCTIONS AS PROPS

// const Button = (props) => {
//   return <button onClick={props.onClick}>{props.text}</button>;
// };

// const App = () => {
//   const greeting = () => {
//     alert("HI ALL... IAM SHIBU");
//   };
//   return (
//     <div>
//       <Button text="click!" onClick={greeting} />
//       <Button text="Show Time" onClick={() => alert(new Date())} />
//     </div>
//   );
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

////////////////////////////////////////////////////////////////////////////////////////////

// const ShowDate = (time) => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   const month = months[time.getMonth()].slice(0, 3);
//   const year = time.getFullYear();
//   const date = time.getDate();
//   return `${month} ${date}, ${year}`;
// };

// const App = () => {
//   const handleTime = () => {
//     alert(ShowDate(new Date()));
//   };
//   return <button onClick={handleTime}>CLICK ME!</button>;
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

////////////////////////////////////////////////////////////////////////////////////////////

// DESTRUCTURING PROPS

// const ShowDate = (time) => {
//   const months = [
//     "January",
//     "February",
//     "March",
//     "April",
//     "May",
//     "June",
//     "July",
//     "August",
//     "September",
//     "October",
//     "November",
//     "December",
//   ];
//   const month = months[time.getMonth()].slice(0, 3);
//   const year = time.getFullYear();
//   const date = time.getDate();
//   return `${month} ${date}, ${year}`;
// };

// // DESTRUCTURING THE PROPS INSIDE THE PARENTHESIS

// const Head = ({
//   data: {
//     welcome,
//     title,
//     subtitle,
//     author: { firstName, lastName },
//     date,
//   },
// }) => {
//   return <h2>{welcome}</h2>;
// };

// const Header = (props) => {
//   const data = props.data;
//   //   const { welcome, title, subtitle, date } = data;
//   //   const { firstName, lastName } = data.author;

//   // DESTRUCTURING IN ONE LINE:
//   const {
//     welcome,
//     title,
//     subtitle,
//     date,
//     author: { firstName, lastName },
//   } = data;
//   return (
//     <div>
//       <h3>{welcome}</h3>
//       <h3>{firstName}</h3>
//       <h3>{lastName}</h3>
//       <h3>{title}</h3>
//       <h3>{subtitle}</h3>
//       <h3>{ShowDate(date)}</h3>
//     </div>
//   );
// };

// const App = () => {
//   const data = {
//     welcome: "Welcome to 30 Days Of React",
//     title: "Getting Started React",
//     subtitle: "JavaScript Library",
//     author: {
//       firstName: "SHIVA",
//       lastName: "CHAPAGAIN",
//     },
//     date: new Date(),
//   };
//   //   return <Header data={data} />;
//   return <Head data={data} />;
// };

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

////////////////////////////////////////////////////////////////////////////////////////////

// import asabenehImage from "../images/formal-shiva.jpg";
import asabenehImage from "./images/shiva.jpg";

const showDate = (time) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[time.getMonth()].slice(0, 3);
  const year = time.getFullYear();
  const date = time.getDate();
  return ` ${month} ${date}, ${year}`;
};

// Header Component
const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  );
};

// TechList Component
const TechList = ({ techs }) => {
  const techList = techs.map((tech) => <li key={tech}>{tech}</li>);
  return techList;
};

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className="user-card">
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
);

// A button component

const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
);

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

// Main Component
const Main = ({ user, techs, greetPeople, handleTime }) => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList techs={techs} />
      </ul>
      <UserCard user={user} />
      <Button text="Greet People" onClick={greetPeople} style={buttonStyles} />
      <Button text="Show Time" onClick={handleTime} style={buttonStyles} />
    </div>
  </main>
);

// Footer Component
const Footer = ({ copyRight }) => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
);

// The App, or the parent or the container component
// Functional Component
const App = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: new Date(), // date needs to be formatted to a human readable format
  };
  const date = new Date();
  const techs = ["HTML", "CSS", "JavaScript"];
  // copying the author from data object to user variable using spread operator
  const user = { ...data.author, image: asabenehImage };

  const handleTime = () => {
    alert(showDate(new Date()));
  };
  const greetPeople = () => {
    alert("Welcome to 30 Days Of React Challenge, 2020");
  };

  return (
    <div className="app">
      <Header data={data} />
      <Main
        user={user}
        techs={techs}
        handleTime={handleTime}
        greetPeople={greetPeople}
      />
      <Footer copyRight={date} />
    </div>
  );
};
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
