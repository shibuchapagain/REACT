// import React, { Component } from "react";
// import ReactDOM from "react-dom/client";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log("IAM THE CONTRUCTOR I WILL BE FIRST AT RUNN");
//     this.state = {
//       firstName: "SHIVA CHAPAGAIN",
//     };
//   }
//   componentDidMount() {
//     console.log("IAM THE COMPONENTDIDMOUNT AND I WILL BE LAST AT RUNN");
//     // after 3 second it reset the state and change to setState...
//     setTimeout(() => {
//       this.setState({
//         firstName: "SHIBU ",
//       });
//     }, 3000);
//   }

//   render() {
//     return (
//       <div>
//         <h3>COMPONENT LIFE CYCLE</h3>
//         <h4>THIS IS THE COMPONENTDIDMOUNT</h4>
//         {this.state.firstName}
//       </div>
//     );
//   }
// }

// // FOR EXECUTE / RUN:
// const rootElement = document.getElementById("root");
// const root = ReactDOM.createRoot(rootElement);
// root.render(<App />);

////////////////////////////////////////////////////////
// API CALLING ::

// import React, { Component } from "react";
// import ReactDOM from "react-dom";

// class App extends Component {
//   constructor(props) {
//     super(props);
//     console.log("I am  the constructor and  I will be the first to run.");
//     this.state = {
//       firstName: "John",
//       data: [],
//     };
//   }

//   componentDidMount() {
//     console.log("I am componentDidMount and I will be last to run.");
//     const API_URL = "https://restcountries.com/v3.1/all";
//     fetch(API_URL)
//       .then((response) => {
//         return response.json();
//       })
//       .then((data) => {
//         console.log(data);
//         this.setState({
//           data,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>React Component Life Cycle</h1>
//         <h1>Calling API</h1>
//       </div>
//     );
//   }
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);

//////////////// OWN PRACTICE TO FETCH API...

import React, { useState } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [data, setData] = useState([]);
  const API_URL = "https://restcountries.com/v3.1/all";
  fetch(API_URL)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      console.log(data);
      setData(data);
    })
    .catch((error) => {
      console.log(error);
    });

  const length = data.length;

  const Country = (props) => {
    const {
      capital,
      continents,
      name: { common },
      population,
    } = props.props;
    return (
      <h2>
        {" "}
        CAPITAL : {capital}, CONTINENTS : {continents}, COUNTRY NAME: {common}{" "}
        POPULATION :{population}
      </h2>
    );
  };

  const Countries = (props) => {
    const countries = props.props;
    const countryList = countries.map((country) => <Country props={country} />);
    return countryList.slice(0, 5);
  };

  return (
    <div>
      <h2>WELCOME TO API CALLING..</h2>
      <h2>there are {length} countries.</h2>
      <Countries props={data} />
    </div>
  );
};

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
