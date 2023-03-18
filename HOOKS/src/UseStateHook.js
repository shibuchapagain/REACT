import React, { useState } from "react";
// const UseStateHook1 = () => {
//   const [count, setCount] = useState(0);
//   // const minus = () => {
//   //   if (count === 0) {
//   //     setCount(0);
//   //   } else {
//   //     setCount(count - 1);
//   //   }
//   // };
//   // const plus = () => {
//   //   setCount(count + 1);
//   // };
//   return (
//     <div>
//       <h3> COUNT DOWN TIMER:</h3>
//       <button onClick={() => (count === 0 ? setCount(0) : setCount(count - 1))}>
//         MINUS
//       </button>
//       <input type="number" value={count} />
//       <button onClick={() => setCount(count + 1)}>PLUS</button>
//     </div>
//   );

const UseStateHook2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((pre) => {
      return { ...pre, [name]: value };
    });
  };

  return (
    <div>
      <h2>REGISTRATION FORM:</h2>
      <hr />
      NAME:{" "}
      <input
        type="text"
        id="name"
        name="name"
        placeholder="name"
        value={formData.name}
        onChange={handleInput}
      />
      <br />
      <br />
      EMAIL:{" "}
      <input
        type="text"
        id="email"
        name="email"
        placeholder="email"
        value={formData.email}
        onChange={handleInput}
      />
      <br />
      <br />
      PASSWORD:
      <input
        type="text"
        id="password"
        name="password"
        placeholder="password"
        value={formData.password}
        onChange={handleInput}
      />
      <br />
      <br />
      <input type="submit" value="CREATE SUBMIT" />
      <br />
      <br />
      <h4>
        {" "}
        MY NAME IS: {formData.name} AND EMAIL IS: {formData.email}{" "}
      </h4>
    </div>
  );
};

// };

// export default UseStateHook1;
export default UseStateHook2;
