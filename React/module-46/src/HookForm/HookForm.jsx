import React from "react";
import useInputState from "../Hooks/useInputState";

const HookForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const [name, handleNameChange] = useInputState("rojoni");
  return (
    <div>
      <form action="" onSubmit={(event) => handleSubmit(event)}>
        <input
          type="text"
          name="name"
          id=""
          value={name}
          onChange={handleNameChange}
        />{" "}
        <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="password" name="password" id="" /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default HookForm;
