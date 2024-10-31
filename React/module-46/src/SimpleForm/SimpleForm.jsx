const SimpleForm = () => {
  const handleSubmit = (event, str) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    console.log(event.target.password.value);
    console.log(str);
  };
  return (
    <div>
      <form action="" onSubmit={(event) => handleSubmit(event, "hello")}>
        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" />
        <br />
        <input type="password" name="password" id="" /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default SimpleForm;
