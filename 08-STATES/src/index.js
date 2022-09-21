import React from "react";
import ReactDOM from "react-dom";
// import External from "./App";

// STATES
// class Internal extends React.Component {
//   // declaring state:
//   state = {
//     count: 0,
//   };
//   render() {
//     const count = this.state.count;
//     return (
//       <div>
//         <h2>{count}</h2>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           ADD ONE
//         </button>
//         <button onClick={() => this.setState({ count: this.state.count - 1 })}>
//           MINUS ONE
//         </button>
//       </div>
//     );
//   }
// }

// STATES--> CREATES AN METHODS--->
class Internal extends React.Component {
  state = {
    count: 0,
  };
  // method for add one(increment)
  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };
  // method for minus one(decrement)
  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const count = this.state.count;
    return (
      <div>
        <h4>SHIBU CHAPAGAIN</h4>
        <h2>{count}</h2>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
      </div>
    );
  }
}

/////////////////////////////////////////////////////////////////////////////////

class ChangeState extends React.Component {
  state = {
    image: "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg",
  };
  changeAnimal = () => {
    let dogURL =
      "https://static.onecms.io/wp-content/uploads/sites/12/2015/04/dogs-pembroke-welsh-corgi-400x400.jpg";
    let catURL =
      "https://www.smithsstationah.com/imagebank/eVetSites/Feline/01.jpg";
    let image = this.state.image === catURL ? dogURL : catURL;
    this.setState({ image });
  };
  render() {
    // ACCESSING THE STATE VALUE:
    const image = this.state.image;
    return (
      <div>
        <h4>Change State in React: </h4>
        <img src={image} alt="animal" />
        <button onClick={this.changeAnimal}>Change</button>
      </div>
    );
  }
}

// PARENT OR CONTAINER COMPONENT:
const App = () => {
  return (
    <div>
      <ChangeState />
    </div>
  );
};

// FOR EXECUTE / RUN:
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
