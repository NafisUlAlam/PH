import { useState } from "react";
const StateFullForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(name, email);
  };

  const handleEmailChange = (event) => {
    //console.log(event.target.value);
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const [email, setEmail] = useState("alucard@gmail.com");
  const [name, setName] = useState("Nafis Alam");
  return (
    <div>
      <div>
        <h2>{name}</h2>
        <h2>{email}</h2>
      </div>
      <form
        action=""
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <input
          type="text"
          name="name"
          id=""
          value={name}
          onChange={(event) => handleNameChange(event)}
        />{" "}
        <br />
        <input type="password" name="password" id="" /> <br />
        <input
          type="email"
          name="email"
          id=""
          value={email}
          onChange={(event) => handleEmailChange(event)}
        />{" "}
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default StateFullForm;
