import React, { useEffect, useRef } from "react";

const RefForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(nameRef.current.value, emailRef.current.value);
  };
  const nameRef = useRef("Nafis");
  const emailRef = useRef("hello@gmail.com");

  useEffect(() => {
    nameRef.current.focus();
  }, []);
  return (
    <div>
      <form action="" onSubmit={(event) => handleSubmit(event, "hello")}>
        <input type="text" name="name" id="" ref={nameRef} /> <br />
        <input type="email" name="email" id="" ref={emailRef} />
        <br />
        <input type="password" name="password" id="" /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default RefForm;
