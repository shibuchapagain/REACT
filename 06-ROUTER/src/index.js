// import React, { Component } from "react";
// import ReactDOM from "react-dom";
// // import External from "./App";
// // import { BrowserRouter as Router, Route } from "react-router-dom";
// import { BrowserRouter as Router, Route } from "react-router-dom";

// ///////////////////////////////////////////////////////////////////////////////

// // // LEVEL-1 COMPONENTS:
// // class Internal extends Component {
// //   render() {
// //     return (
// //       <Router>
// //         <div>
// //           <h2>HI, SHIBU CHAPAGAIN...</h2>
// //         </div>
// //       </Router>
// //     );
// //   }
// // }

// // // LEVEL -2 COMPONENTS:
// // class Internal extends Component {
// //   render() {
// //     return;
// //     <Router>
// //       <div>
// //         <Route path="/home" Component={Home} />
// //       </div>
// //     </Router>;
// //   }
// // }

// // // PARENT OR CONTAINER COMPONENT:
// // const App = () => {
// //   return (
// //     <div>
// //       <Internal />
// //     </div>
// //   );
// // };

// ///////////////////////////////////////////////////////////////////////////////

// // // LEVEL -2:
// // // HOME COMPONENT:
// // const Home = () => <h2> SHIVA </h2>;

// // class App extends Component {
// //   render() {
// //     return (
// //       <Router>
// //         <div>
// //           <Route path="/home" component={Home} />
// //         </div>
// //       </Router>
// //     );
// //   }
// // }

// // LEVEL -3:

// const Home = () => {
//   return (
//     <div>
//       <h3>HOME ROUTE</h3>
//     </div>
//   );
// };

// const About = () => {
//   return (
//     <div>
//       <h3>About ROUTE</h3>
//     </div>
//   );
// };

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <Route path="/" component={Home} />
//           <Route path="/about" component={About} />
//           <Home />
//           <About />
//         </div>
//       </Router>
//     );
//   }
// }

/////////////////////////////////////////////////////////////////////////////////

