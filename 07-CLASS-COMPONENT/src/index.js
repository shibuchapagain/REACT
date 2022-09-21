import React from "react";
import ReactDOM from "react-dom";
// import External from "./App";

// this one is functional component
// const Internal1 = () => {
//   return (
//     <div>
//       <h2>shiva</h2>
//       <p>shibu chapagain</p>
//     </div>
//   );
// };

// CLASS COMPONENTS
// class Internal2 extends React.Component {
//   render() {
//     return (
//       <div>
//         <h2>shibu chapagain</h2>
//         <p>shibu chapagain</p>
//       </div>
//     );
//   }
// }

// class components with constructor and super
// class Internal3 extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//       <div>
//         <h2>shibu chapagain from class and constructor</h2>
//       </div>
//     );
//   }
// }

// change all the functional components to class based components:
// 1) Functional components:
// const TechList1 = () => {
//   const techLanguage = ["js", "node", "react"];
//   const techFormatted = techLanguage.map((tech) => <li>{tech}</li>);
//   return techFormatted;
// };
// // 2) class Components:
// class TechList2 extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const tech = ["js", "node", "react"];
//     const formatted = tech.map((tech) => <li>{tech}</li>);
//     return formatted;
//   }
// }

// ACCESSING PROPS IN CLASS COMPONENTS:

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const { name, address } = this.props.data;
//     return (
//       <div>
//         <h2>{name}</h2>
//         <h1>{address}</h1>
//       </div>
//     );
//   }
// }

// THREE LAYER OF COMPONENTS PASS THE DATA FROM COMPONENTS TO COMPONENTS:
// class Tech extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const { tech } = this.props;
//     const techList = tech.map((tech) => <li>{tech}</li>);
//     return techList;
//   }
// }

// METHOD in CLASS BASED COMPONENTS:

class Header extends React.Component {
  greetPeople = () => {
    alert("HI... THERE");
  };
  render() {
    return (
      <div>
        <h4>SHIBU CHAPAGAIN</h4>
        <button onClick={this.greetPeople}>CLICK ME!</button>
      </div>
    );
  }
}

// PARENT OR CONTAINER COMPONENT:
const App = () => {
  return (
    <div>
      <Header />
    </div>
  );
};

// FOR EXECUTE / RUN:
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
