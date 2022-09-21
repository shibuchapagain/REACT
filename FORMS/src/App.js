import React, { useState } from "react";

const Form = () => {
  const [txtID, setID] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(txtID);
    console.log(name);
    console.log(number);
    console.log(email);
    console.log(password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>{txtID}</h4>
        <h4>{name}</h4>
        <h4>{number}</h4>

        <p>
          ID:
          <input
            type="text"
            name="txtID"
            value={txtID}
            onChange={(e) => setID(e.target.value)}
            id="txtID"
          />
        </p>

        <p>
          {" "}
          Full Name:{" "}
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
          />{" "}
        </p>

        <p>
          Contact:{" "}
          <input
            type="number"
            placeholder="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            id="number"
          />
        </p>

        <p>
          <input onClick={handleSubmit} type="submit" value="SEND" />
        </p>
      </form>
    </div>
  );
};

export default Form;
